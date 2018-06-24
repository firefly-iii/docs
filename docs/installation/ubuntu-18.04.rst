Firefly III install on Ubuntu 18.04
-----------------------------------

Prepare the the server
~~~~~~~~~~~~~~~~~~~~~~

These instructions will install Firefly III on Ubuntu 18.04. It includes setup for:

- PHP 7.2
- Nginx
- MariaDB
- Securing an Ubuntu server
- Securing Maria DB
- Let's Encrypt
- Logrotate
- Fail2Ban

We will update and setup the default locale's on the server, and enable
the auto security updates. I haven't seen any issues by enabling the
auto security updates so far. In most cases you would want to review the
updates for production servers, so you can see any conflicting packages
or dependency issues. I have been running Firefly III for 6 months
without issues.

::

    apt update && apt upgrade && apt autoremove
    dpkg-reconfigure tzdata && locale-gen de_DE.UTF-8 && dpkg-reconfigure locales && dpkg-reconfigure -plow unattended-upgrades

Edit the hosts file

::

    nano /etc/hosts

Edit the hosts file with your fqdn details

::

    127.0.0.1 firefly-iii.domain.com firefly-iii localhost

    # The following lines are desirable for IPv6 capable hosts
    ::1 ip6-localhost ip6-loopback
    fe00::0 ip6-localnet
    ff00::0 ip6-mcastprefix
    ff02::1 ip6-allnodes
    ff02::2 ip6-allrouters
    ff02::3 ip6-allhosts

Secure the server
~~~~~~~~~~~~~~~~~

We will setup UFW and block incoming ICMP requests so the server can't
be pinged. It just hardens the security a little.

Setup UFW

::

    ufw default deny incoming
    ufw allow 22 && ufw allow 80 && ufw allow 443
    ufw enable
    ufw status #should show what we just configured

Block ICMP requests

::

    nano /etc/ufw/before.rules

Change these lines:

::

    # ok icmp codes for INPUT
    -A ufw-before-input -p icmp --icmp-type destination-unreachable -j DROP  
    -A ufw-before-input -p icmp --icmp-type source-quench -j DROP   
    -A ufw-before-input -p icmp --icmp-type time-exceeded -j DROP  
    -A ufw-before-input -p icmp --icmp-type parameter-problem -j DROP  
    -A ufw-before-input -p icmp --icmp-type echo-request -j DROP  

Stop spoofing attacks

In ``sysctl.conf`` we can use ``net.ipv4`` set as ``0`` to secure the
server.

::

    Resource: https://gist.github.com/lokhman/cc716d2e2d373dd696b2d9264c0287a3

    nano /etc/sysctl.conf

Example config:

::

    # Uncomment the next line to enable packet forwarding for IPv6
    #  Enabling this option disables Stateless Address Autoconfiguration
    #  based on Router Advertisements for this host
    #net.ipv6.conf.all.forwarding=1


    ###################################################################
    # Additional settings - these settings can improve the network
    # security of the host and prevent against some network attacks
    # including spoofing attacks and man in the middle attacks through
    # redirection. Some network environments, however, require that these
    # settings are disabled so review and enable them as needed.
    #
    # Do not accept ICMP redirects (prevent MITM attacks)
    net.ipv4.conf.all.accept_redirects = 0
    net.ipv6.conf.all.accept_redirects = 0
    # _or_
    # Accept ICMP redirects only for gateways listed in our default
    # gateway list (enabled by default)
    net.ipv4.conf.all.secure_redirects = 0
    #
    # Do not send ICMP redirects (we are not a router)
    net.ipv4.conf.all.send_redirects = 0
    #
    # Do not accept IP source route packets (we are not a router)
    net.ipv4.conf.all.accept_source_route = 0
    net.ipv6.conf.all.accept_source_route = 0
    #
    # Log Martian Packets
    net.ipv4.conf.all.log_martians = 1
    #

    ###################################################################
    # Magic system request Key
    # 0=disable, 1=enable all
    # Debian kernels have this set to 0 (disable the key)
    # See https://www.kernel.org/doc/Documentation/sysrq.txt
    # for what other values do
    #kernel.sysrq=1

    ###################################################################
    # Protected links
    #
    # Protects against creating or following links under certain conditions
    # Debian kernels have both set to 1 (restricted) 
    # See https://www.kernel.org/doc/Documentation/sysctl/fs.txt
    #fs.protected_hardlinks=0
    #fs.protected_symlinks=0

Setup Fail2Ban
~~~~~~~~~~~~~~

Fail2Ban can be used to stop hack attempts. It uses "jail"
configurations to verify and block ip addresses.

::

    apt install fail2ban

The default Fail2Ban config files are fine for most hack activity. You
can see jail activity by using ``fail2ban-client status`` and
``fail2ban-client status sshd`` to see blocked ssh attempts.

Install dependency packages
~~~~~~~~~~~~~~~~~~~~~~~~~~~

This will install dependencies for:

-  PHP 7.2
-  MariaDB
-  PHP Modules needed for Firefly III

::

    apt install mariadb-server nginx php-fpm php7.2-mysql php-curl php-gd php-bcmath php-zip php-intl php-mbstring php-xml

Secure mariadb
~~~~~~~~~~~~~~

We will set the root password and run the mysql secure installation.
This will stop anonymous DB logins and make the server require user
authentication.

::

    service mysql stop
    /usr/sbin/mysqld --skip-grant-tables --skip-networking &
    jobs ##should show the process is running
    mysql -u root
    FLUSH PRIVILEGES;
    USE mysql;
    UPDATE user SET authentication_string=PASSWORD("new password here") WHERE User='root';
    UPDATE user SET plugin="mysql_native_password" WHERE User='root';
    quit;
    sudo pkill mysqld
    jobs #should show the process is done
    service mysql start
    mysql_secure_installation ##run through the steps and do not change the root password. Block external access whe asked

Create the mariadb database
~~~~~~~~~~~~~~~~~~~~~~~~~~~

We will create a DB and user that Firefly III can use.

::

    mysql -uroot -p
    create database fireflyiii character set utf8 collate utf8_bin;
    grant all privileges on fireflyiii.* to fireflyiii@localhost identified by '<password>';
    quit;
    systemctl restart mysql

Add the root password to the msq config
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If we don't do this, logrotate will have errors when trying to rotate
the mysql logs. Since we disable anonymous access, we need to specify a
user it can use. Since the DB is restricted to internal only and it's
not exposed outside. It's safe to give it the root user.

::

    nano /etc/mysql/debian.cnf
    ## add the root password to "password ="

Install composer
~~~~~~~~~~~~~~~~

Firefly III uses composer to pull and install the project.

::

    curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
    composer -v #should say current version

Install Firefly III
~~~~~~~~~~~~~~~~~~~

::

    cd /opt
    composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii 4.7.4

Configure Firefly III
~~~~~~~~~~~~~~~~~~~~~

::

    nano firefly-iii/.env

Here is an example config. Which includes:

-  Log level set to notice
-  Allow Firefly III to send emails
-  Encrypted the database

::

    # You can leave this on "local". If you change it to production most console commands will ask for extra confirmation.
    # Never set it to "testing".
    APP_ENV=local

    # Set to true if you want to see debug information in error screens.
    APP_DEBUG=false

    # This should be your email address
    SITE_OWNER=admin@email.com

    # The encryption key for your database and sessions. Keep this very secure.
    # If you generate a new one all existing data must be considered LOST.
    # Change it to a string of exactly 32 chars or use command `php artisan key:generate` to generate it
    APP_KEY=<api_key>

    # Change this value to your preferred time zone.
    # Example: Europe/Amsterdam
    TZ=Europe/Berlin

    # APP_URL and TRUSTED_PROXIES are useful when using Docker and/or a reverse proxy.
    APP_URL=http://localhost
    TRUSTED_PROXIES=

    # The log channel defines where your log entries go to.
    LOG_CHANNEL=daily

    # Database credentials. Make sure the database exists. I recommend a dedicated user for Firefly III
    # For other database types, please see the FAQ: http://firefly-iii.readthedocs.io/en/latest/support/faq.html
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=fireflyiii
    DB_USERNAME=fireflyiii
    DB_PASSWORD=<firefly_db_password>

    # 'daily' is the default logging mode giving you 5 daily rotated log files in /storage/logs/.
    # Several other options exist. You can use 'single' for one big fat error log (not recommended).
    # Also available are 'syslog' and 'errorlog' which will log to the system itself.
    APP_LOG=daily

    # Log level. You can set this from least severe to most severe:
    # debug, info, notice, warning, error, critical, alert, emergency
    # If you set it to debug your logs will grow large, and fast. If you set it to emergency probably
    # nothing will get logged, ever.
    APP_LOG_LEVEL=notice

    # If you're looking for performance improvements, you could install memcached.
    CACHE_DRIVER=file
    SESSION_DRIVER=file

    # Cookie settings. Should not be necessary to change these.
    COOKIE_PATH="/"
    COOKIE_DOMAIN=
    COOKIE_SECURE=false

    # If you want Firefly III to mail you, update these settings
    MAIL_DRIVER=smtp
    MAIL_HOST=smtp.server.com
    MAIL_PORT=587
    MAIL_FROM=<from_email>
    MAIL_USERNAME=<email_username>
    MAIL_PASSWORD=<user_password>
    MAIL_ENCRYPTION=tls

    # Firefly III can send you the following messages
    SEND_REGISTRATION_MAIL=true
    SEND_ERROR_MESSAGE=true

    # Set a Mapbox API key here (see mapbox.com) so there might be a map available at various places.
    MAPBOX_API_KEY=

    # Set a Fixer IO API key here (see https://fixer.io) to enable live currency exchange rates.
    # Please note that this will only work for paid fixer.io accounts because they severly limited
    # the free API up to the point where you might as well offer nothing.
    FIXER_API_KEY=

    # If you wish to track your own behavior over Firefly III, set a valid analytics tracker ID here.
    ANALYTICS_ID=

    # Most parts of the database are encrypted by default, but you can turn this off if you want to.
    # This makes it easier to migrate your database. Not that some fields will never be decrypted.
    USE_ENCRYPTION=true

    # Leave the following configuration vars as is.
    # Unless you like to tinker and know what you're doing.
    APP_NAME=FireflyIII
    BROADCAST_DRIVER=log
    QUEUE_DRIVER=sync
    REDIS_HOST=127.0.0.1
    REDIS_PASSWORD=null
    REDIS_PORT=6379
    CACHE_PREFIX=firefly
    SEARCH_RESULT_LIMIT=50
    PUSHER_KEY=
    PUSHER_SECRET=
    PUSHER_ID=
    DEMO_USERNAME=
    DEMO_PASSWORD=
    IS_DOCKER=false
    IS_SANDSTORM=false
    BUNQ_USE_SANDBOX=false
    IS_HEROKU=false

Initialize the database
~~~~~~~~~~~~~~~~~~~~~~~

::

    cd firefly-iii
    php artisan migrate:refresh --seed
    php artisan passport:install

Install certbot for let's encrypt
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Certbot can automatically fetch let's encrypt certificates for us

::

    apt install certbot

Pull down a certificate
~~~~~~~~~~~~~~~~~~~~~~~

We can use DNS challenge for validation

::

    certbot -d firefly-iii.domain.com --manual --preferred-challenges dns certonly

During the setup you will be asked to provide an email address and allow
your email for public use, which you can decline. Then you need to agree
to using your IP address.

You will be presented with a subdomain which you need to add to your DNS
provider, and also a TXT record for the value of that subdomain.

After setting this in your DNS, you can use
``dig txt _acme-challenge.<my fqdn example.com> @8.8.8.8`` to verify the
record is propagated. After it's propagated you can continue to tell
certbot to validate the entry.

Setup postfix
~~~~~~~~~~~~~

We can use postfix to notify us of system errors and certbot activity.
The admin email will receive emails for internal tasks that resulted in
error, such as logrotate or cron jobs.

::

    apt install mailutils
    nano /etc/postfix/main.cf
    ## Change the line that reads inet_interfaces = all to inet_interfaces = loopback-only

Add an alias

::

    nano /etc/aliases
    ##add
    root:          admin@email.com

Register the new alias and restart postfix

::

    newaliases
    systemctl restart postfix

Setup a cronjob to renew the lets encrypt certificate
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

::

    crontab -e

    0 3 1 * * certbot -d firefly-iii.mydomain.com --manual --preferred-challenges dns certonly --keep-until-expiring | mail -s "Let's Encrypt Renewal" -a "From: Firefly-III <email@mydomain>" admin@email.com

This cronjob does a DNS validation of your domain name and renews the
lets encrypt certificate. Then it sens you an email of it's progress.
You might want to add the server email as a safe sender, otherwise it
will go into junk.

Give the Firefly III directory the correct access
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

www-data is the default user nginx will use to access the files. We need
to give it owner access.

::

    chown -R www-data:www-data /opt/firefly-iii/

Setup nginx
~~~~~~~~~~~

During this step we will:

-  Remove the default nginx site
-  Create a new site for Firefly III
-  Redirect http to https
-  Setup Diffie-Hellman parameter for DHE ciphersuites, which hardens
   nginx's security. Diffie-Hellman forces a dependency on TLS to agree
   on a shared key and negotiate a secure session.
-  Use SSL Ciphers

::

    rm /etc/nginx/sites-enabled/default
    touch /etc/nginx/sites-available/firefly-iii.conf
    ln -s /etc/nginx/sites-available/firefly-iii.conf /etc/nginx/sites-enabled/firefly-iii.conf
    openssl dhparam 2048 > /etc/nginx/dhparam.pem
    nano /etc/nginx/sites-enabled/firefly-iii.conf

Here is an example config

::

    server {
            listen       80;
            server_name  firefly-iii.mydomain.com;
            rewrite ^ https://$http_host$request_uri? permanent;    # force redirect http to https
            server_tokens off;
        }
    server {
        listen 443 http2;
        listen [::]:443 http2;
            ssl on;
            ssl_certificate /etc/letsencrypt/live/firefly-iii.mydomain.com/fullchain.pem;        # path to your fullchain.pem
            ssl_certificate_key /etc/letsencrypt/live/firefly-iii.mydomain.com/privkey.pem;    # path to your privkey.pem
            server_name firefly-iii.mydomain.com;
            ssl_session_timeout 5m;
            ssl_session_cache shared:SSL:5m;

            # Diffie-Hellman parameter for DHE ciphersuites, recommended 2048 bits
            ssl_dhparam /etc/nginx/dhparam.pem;

            # secure settings (A+ at SSL Labs ssltest at time of writing)
            # see https://wiki.mozilla.org/Security/Server_Side_TLS#Nginx
            ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
            ssl_ciphers 'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:ECDHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:DHE-RSA-CAMELLIA256-SHA:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-SEED-SHA:DHE-RSA-CAMELLIA128-SHA:HIGH:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS';
            ssl_prefer_server_ciphers on;

            proxy_set_header X-Forwarded-For $remote_addr;

            add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;        
            server_tokens off;

            root /opt/firefly-iii/public;

        # Add index.php to the list if you are using PHP
            client_max_body_size 300M;
            index index.html index.htm index.php;

            # Load configuration files for the default server block.
            include /etc/nginx/default.d/*.conf;
            location ~ \.php$ {
                  try_files $uri =404;
                  fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
                  fastcgi_index index.php;
                  fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
                  include fastcgi_params;

            }

            index index.php index.htm index.html;

            location / {
              try_files $uri $uri/ /index.php?$query_string;
              autoindex on;
              sendfile off;
            }
        }

Restart nginx to apply the new config

::

    systemctl restart nginx

Setup logrotate
~~~~~~~~~~~~~~~

I added logrote for Firefly III because I wasn't sure how
``APP_LOG=daily`` was being used. There shouldn't be any harm using
logrotate for Firefly III logs.

::

    nano /etc/logrotate.d/firefly-iii

Example config:

::

    /opt/firefly-iii/storage/logs/*.log
    {
        weekly
        missingok
        rotate 2
        compress
        notifempty
        sharedscripts
        maxage 60
    }

Finish
~~~~~~~~~~~~~~~
Now reboot the server and the services should start as normal. Go to
your Firefly III page and run through the first steps. That should be
it!
