.. _installthird:

=======================
Hosted by third parties
=======================

There are several third parties where you can run a Firefly III instance. Keep in mind do that there's no such thing as a "free lunch", and these options are either paid or severly limited (is very slow or can't handle many transactions).

.. _installsandstorm:

Sandstorm.io
------------

Firefly III supports `Sandstorm.io <https://sandstorm.io/>`_. You can find Firefly III in Sandstorm.io by going to the `Sandstorm.io App Market <https://apps.sandstorm.io/app/uws252ya9mep4t77tevn85333xzsgrpgth8q4y1rhknn1hammw70>`_. Please keep in mind that you need a paid Sandstorm account to be able to run Firefly III, or you must download Sandstorm locally and run it from there.

.. _installheroku:

Heroku
------

Firefly III supports `Heroku <https://heroku.com/>`_. You can `deploy Firefly III in Heroku <https://heroku.com/deploy?template=https://github.com/firefly-iii/firefly-iii/tree/master>`_ after you register for a (free) account.

Considerations when using heroku
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Heroku uses what is called an "ephemeral file system" and it will not be able to store attachments. They will be deleted after some time. Don't use Firefly III on Heroku in combination with sensitive or rare file attachments.

The free-tier database can hold a maximum of 10,000 rows, which is about one year's worth of transactions.

Softaculous
-----------

Firefly III is featured in `Softaculous <https://softaculous.com/>`_. If your (hosting) server provides packages using Softaculous, Firefly III will be available as a package there. They even made a special `demo site <http://www.softaculous.com/softaculous/apps/others/Firefly_III>`_.

AMPPS
-----

Firefly III is featured in `AMPPS <https://www.ampps.com/>`_. You can download AMPPS for Windows, Linux and Mac and Firefly III will be available as a package there.

YunoHost
--------

Anmol Sharma has made a package for Firefly III on YunoHost. `You can install it from the YunoHost website <https://install-app.yunohost.org/?app=firefly-iii>`_.

Amazon Web Services
-------------------
AWS EC2 instances can be provisioned with this startup script to setup Firefly immediately: 

.. code-block:: bash

  #!/bin/bash
  yum update -y
  amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
  yum install -y httpd mariadb-server php-intl.x86_64 php-bcmath.x86_64 php-mbstring.x86_64 php-gd.x86_64 php-ldap.x86_64 php-xml.x86_64 php-pecl-zip-1.15.2-3.amzn2.0.1.x86_64
  systemctl start mariadb
  systemctl enable mariadb
  export DATABASE_PASS=secret
  mysql -u root -e "DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1')"
  mysql -u root -e "DELETE FROM mysql.user WHERE User=''"
  mysql -u root -e "DELETE FROM mysql.db WHERE Db='test' OR Db='test\_%'"
  mysql -u root -e "CREATE USER IF NOT EXISTS 'homestead'@'localhost' IDENTIFIED BY 'secret'"
  mysql -u root -e "CREATE DATABASE IF NOT EXISTS homestead"
  mysql -u root -e "GRANT ALL PRIVILEGES ON homestead.* TO 'homestead'@'localhost' IDENTIFIED BY 'secret'"
  mysql -u root -e "FLUSH PRIVILEGES"
  mysql -u root -e "UPDATE mysql.user SET Password=PASSWORD('$DATABASE_PASS') WHERE User='root'"
  export COMPOSER_HOME=/home/ec2-user/.composer
  curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
  composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist /var/www/html 4.7.9
  systemctl start httpd
  systemctl enable httpd
  usermod -a -G apache ec2-user
  chown -R ec2-user:apache /var/www
  chmod 2775 /var/www && find /var/www -type d -exec chmod 2775 {} \;
  find /var/www -type f -exec chmod 0664 {} \;
  php /var/www/html/artisan migrate:fresh --seed 
  php /var/www/html/artisan firefly:upgrade-database
  php /var/www/html/artisan firefly:verify
  php /var/www/html/artisan passport:install

If you have the AWS CLI installed, then drop that into some file (`firefly`, for example) and run this command to spin up the server: 

.. code-block:: bash

  aws ec2 run-instances --image-id ami-035be7bafff33b6b6 --instance-type t3.small --count 1 --user-data file://firefly --security-group-ids sg-04fc7b50ca1fc9956 --key-name firefly

*Please* change the `$DATABASE_PASS` variable before using this script.
