# General installation and running questions

## Key path oauth-private.key does not exist or is not readable?

If this file does not exist, you can run the following command:

```bash
php artisan passport:install
```

Afterwards, you can run the following commands to fix the permissions.

```bash
php artisan config:clear
php artisan key:generate
php artisan config:clear
```

And then:

```bash
sudo chown www-data:www-data storage/oauth-*.key
sudo chmod 600 storage/oauth-*.key
```

## Error "class \[auth\] does not exist"

- Target class \[hash\] does not exist.

Some users run into this issue when upgrading. Several things may work:

- Start a new `.env` file instead of copying over the old one.
- Make sure the `storage` directory, and all subfolders are writable, and NOT owned by `root`.
- Remove all PHP files from the `bootstrap/cache` directory: `rm bootstrap/cache/*.php`.

## Charts are not loading, and `email-decode.min.js` refuses to load?

You are using Cloudflare as a CDN. Please disable "email obfuscation".

## Can I switch from or to SQLite, PostgreSQL or MySQL?

Yes, any combination is possible. BUT, this is not something that Firefly III supports natively. The export function isn't "database complete", not all data from your installation will be exposed when you export data, so importing it is very tricky.

Instead, use a search engine to find the right guidance to migrate from A to B, whichever databases A and B may be.

## Can I connect to PostgreSQL using a socket?

Yes. Set `DB_HOST` to the `unix_socket_directory` of PostgreSQL.

```text
DB_CONNECTION=pgsql
DB_HOST=/run/postgresql
DB_PORT=5432
```

## How do I set TLS in Firefly III or the data importer?

If you wish to enable SSL as well, both apps respects the HTTP header `X-Forwarded-Proto`.

If you are using Nginx add the following to your location block:

```text
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Server $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $host;
# This line is optional and may help in some cases.
# proxy_set_header X-Forwarded-Port $server_port;
client_max_body_size 64M;
proxy_read_timeout 300s;
```

For Apache, use something like:

```text
<VirtualHost *:443>
        ServerName firefly.mydomain.com
        ServerAdmin EMAIL
        ProxyPreserveHost On
        ProxyRequests Off
        SSLEngine On
        SSLCertificateFile      /etc/letsencrypt/live/.../fullchain.pem
        SSLCertificateKeyFile   /etc/letsencrypt/live/.../privkey.pem
        ProxyPass / http://127.0.0.1:8080/
        ProxyPassReverse / http://127.0.0.1:8080/
        ErrorLog ${APACHE_LOG_DIR}/finance_error.log
        CustomLog ${APACHE_LOG_DIR}/finance_access.log combined
        RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
        RequestHeader set X-Forwarded-SSL expr=%{HTTPS}
</VirtualHost>
```

## I can't seem to get https working

Set `TRUSTED_PROXIES` to `*`. See also [this issue](https://github.com/firefly-iii/firefly-iii/issues/1632) on GitHub.

## I get "Function not implemented: AH00141: Could not initialize random number generator"

This is an error that happens on Synology boxes with an old kernel. I'm sorry, there is nothing I can do for you.

## How do I configure a reverse proxy in Docker?

To run the data importer behind a reverse proxy, make sure you set the `TRUSTED_PROXIES` environment variable to either `*` or the IP address of your reverse proxy.

## I can't get beyond the opening screen

Some setups have a bad time handling cookies, and without support for cookies the Data Importer doesn't know what you want to do. Make sure that

- You don't run the data importer in a subdirectory
- The cookie settings in the `.env` file are correct.

## 502 Bad Gateway errors

When Firefly III responds with a token, the resulting header may be too long for your reverse proxy.
These lines prevent that the proxy buffer size is too small. Put it in the `server` block of your nginx server.

```
server {
    ...
    proxy_buffer_size       128k;
    proxy_buffers           4 256k;
    proxy_busy_buffers_size 256k;
}
```

If that doesn't help, try:

```
server {
    ...
    fastcgi_buffers  16 16k;
    fastcgi_buffer_size  32k;
    
}
```

## Response header name contains invalid characters, aborting request

Happens to some Apache servers when they are not configured correctly. Set `LOG_LEVEL=emergency`.


## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.


## I get syntax errors or other problems when opening Firefly III?

You're not running the correct version of PHP, or your Apache / nginx server is not correctly configured for the right PHP version. At the moment, you need **PHP %PHPVERSION**.

Errors you can expect to see if you're not running **PHP %PHPVERSION**:

1. `Syntax error, unexpected )`
2. `syntax error, unexpected 'string' (T_STRING), expecting function (T_FUNCTION) or const (T_CONST)`
3. `Unexpected question mark`

You can verify which version of PHP your web server is using by making a file called `phpinfo.php` and browsing to it through your webserver:

```php
<?php
phpinfo();
```

That should tell you what you need to know. You can find update and upgrade instructions online for your web server.



## Firefly III is very slow

Try the following suggestions.

- From discussion [#5051](https://github.com/firefly-iii/firefly-iii/discussions/5051): Add `fastcgi_buffering off;` to the `server {}` section of your nginx configuration.

## I have to visit Firefly III through /public/ and it gives me a warning?

This means that the Document Root of your webserver is badly configured. You should configure your webserver in such a way that `/` corresponds to `/public`. If you do not, you run the risk of exposing your database credentials, sessions and other sensitive financial data to the world.

There are several [tutorials online](https://www.digitalocean.com/community/tutorials/how-to-move-an-apache-web-root-to-a-new-location-on-ubuntu-16-04) that explain how to change your document root.

## I am using nginx and want to expose Firefly III under /budget/

The following snippet might help:

```text
location ^~ /firefly-iii/ {
   deny all;
}

location ^~ /budget {
   alias /var/www/html/firefly-iii/public;
   try_files $uri $uri/ @budget;

   location ~* \.php(?:$|/) {
      include snippets/fastcgi-php.conf;
      fastcgi_param SCRIPT_FILENAME $request_filename;
      fastcgi_param modHeadersAvailable true; #Avoid sending the security headers twice
      fastcgi_pass unix:/run/php/php%PHPVERSION-fpm.sock;
   }
}

location @budget {
   rewrite ^/budget/(.*)$ /budget/index.php/$1 last;
}
```

## I want to use SQLite?

Open your `.env` file and find the lines that begin with `DB_`. These define your database connection. Leave `DB_CONNECTION` and set it to `sqlite`. Delete the rest.

```text
DB_CONNECTION=sqlite
```

In order to install the database, the file `./storage/database/database.sqlite` must exist. When it does not exist, you can use this command on Linux to create it:

```text
touch ./storage/database/database.sqlite
```

Then you are ready to install the database in SQLite:

```text
php artisan migrate --seed
php artisan firefly-iii:upgrade-database
```

## I want to use PostgreSQL?

In your `.env` file, change the `DB_CONNECTION` to `pgsql`. Update the other `DB_*` settings to match your database settings. The default port for PostgreSQL is 5432.

Then you are ready to install the database in PostgreSQL:

```text
php artisan migrate --seed
php artisan firefly-iii:upgrade-database
```

Check out [this GitHub discussion](https://github.com/orgs/firefly-iii/discussions/7698#discussioncomment-6546883) for a guide to migrate.


## I see a white page and nothing else?

Check out the log files in `storage/logs` to see what is going on. Please open a ticker if you are not sure what to do. If the logs are empty Firefly III cannot write to them. The web server must have write permissions in this directory. If the logs still remain empty, do you have a `vendor` directory in your Firefly III root? If not, run the Composer commands.

If the pages remain empty, check the rewrite module in Apache. If you're running nginx, use this as the "location" config:

```text
location / {
     try_files $uri $uri/ /index.php?$query_string;
     autoindex on;
     sendfile off;
}
```

## I get a 404?

If you run Apache, open the `httpd.conf` or `apache2.conf` configuration file (its location differs, but it is probably in `/etc/apache2`).

Find the line that starts with `<Directory /var/www>`. If you see `/`, keep looking!

You will see the text `AllowOverride None` right below it. Change it to `AllowOverride All`.

Also run the following commands:

```text
sudo a2enmod rewrite
sudo service apache2 restart
```

That should fix it!

## I get "Be right back"?

Unfortunately, there is no straight answer without more information. Check out the `/storage/logs` directory of your Firefly III installation or check the logs of your Docker instance. The true error will be reported there. If necessary, enable [debug mode](../../how-to/general/debug.md) to collect more log files.

## Can I use it on PHP, but not version %PHPVERSION?

No. The code has been written specifically for PHP version %PHPVERSION and higher.




## It is very slow on my server?

Raspberry Pi's and other microcomputers are not the most speedy devices. User [ndandanov](https://github.com/ndandanov) has very kindly tested what works best, and found out that [installing PHP OpCache is a very good way to speed up Firefly III](https://github.com/firefly-iii/firefly-iii/issues/1095#issuecomment-356975735).

## Decimal points are missing, numbers are off?

See "[Locales](../../how-to/firefly-iii/advanced/locales.md)".

## I get 'BCMath' errors?

You see stuff like this:

```text
PHP message: PHP Fatal error: Call to undefined function 
FireflyIII\Http\Controllers\bcscale() in
firefly-iii/app/Http/Controllers/HomeController.php on line 76
```

Solution: you haven't enabled or installed the BCMath module. Install it.

## I get 'intl' errors?

Errors such as these:

```text
production.ERROR: exception 
'Symfony\Component\Debug\Exception\FatalErrorException' with message
'Call to undefined function FireflyIII\Http\Controllers\numfmt_create()'
in firefly-iii/app/Http/Controllers/Controller.php:55
```

Solution: You haven't enabled or installed the Internationalization extension. If you are running FreeBSD, install `pecl-intl`.

## I get 'Error: Call to undefined function ctype\_alpha()'?

This may happen when you are on a NAS4free Debian installation or similar platform. This command may help:

```text
pkg install php82-ctype
```

## I get 'Error: could not open input file artisan'?

Run the artisan commands in the `firefly-iii` directory.

## I get 'Error: call to undefined function numfmt\_create()'?

Verify you have installed and enabled the PHP intl extension.

## I run SELinux and I don't want to disable it. Now what?

Reddit-user [bousquetfrederic](https://www.reddit.com/user/bousquetfrederic) shares [their solution](https://www.reddit.com/r/FireflyIII/comments/84bf0p/selinux_vs_fireflyiii/):

```bash
sudo semanage fcontext -a -t httpd_sys_rw_content_t "/path/to/firefly-iii/storage(/.*)?"
sudo restorecon -R /path/to/firefly-iii/storage
```

## I am trying to upgrade, but I get "Foreign key constraint is incorrectly formed"

This could happen when you upgrade a Firefly III installation with MySQL. To fix this, use a program like Sequel Pro or phpMyAdmin and change the engine of all your Firefly III tables to "InnoDB", _before_ you try to upgrade.

## Unable to write to cache directory?

This is a permissions error that may happen when another user than your webserver user has write permissions in the Firefly III installation directory. Try the following command from your `/var/www/` directory:

* `sudo chown -R www-data:www-data firefly-iii`
* `sudo chmod -R 775 firefly-iii`

If you're using Docker, this may also happen when you run "php artisan" commands as root. To fix this, you can use a similar command for Docker. Replace `<container>` with the ID of your container.

* `docker exec -it <container> chown -R www-data:www-data /var/www/html/storage`

If the problem persists run your cron job as the "www-data" user so the cache directory doesn't get mixed up: `sudo -u www-data php artisan [..]`.

## Key path "oauth-public.key" does not exist or is not readable

This happens on some Docker installations and sometimes in Proxmox. I still don't know the exact root cause for this, but the solution could be to run the following command, either on the command line (where you installed Firefly III) or inside the container that is running Firefly III

* `php artisan firefly-iii:laravel-passport-keys`
* `docker exec -it (container) php artisan firefly-iii:laravel-passport-keys`

Without those files in place and readable, Firefly III will not be able to function properly.
