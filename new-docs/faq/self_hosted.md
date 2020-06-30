# Self-hosting

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I get syntax errors or other problems when opening Firefly III?

You're probably not running the correct version of PHP, or your Apache / nginx server is not correctly configured for the right PHP version. At the moment, you need **PHP 7.3**.

Errors you can expect to see if you're not running **PHP 7.3**:

1. `Syntax error, unexpected )`

You can verify which version of PHP your web server is using by making a file called `phpinfo.php` and accessing it through your webserver:

```php
<?php
phpinfo();
```

That should tell you what you need to know. You can find update and upgrade instructions online for your web server.

## I have to access Firefly III through /public/ and it gives me a warning?

This means that the Document Root of your webserver is configured wrong. You should configure your webserver in such a way that `/` corresponds to `/public`. If you do not, you run the risk of exposing your database credentials, sessions and other sensitive financial data to the world.

There are several [tutorials online](https://www.digitalocean.com/community/tutorials/how-to-move-an-apache-web-root-to-a-new-location-on-ubuntu-16-04) that explain how to change your document root.

## I am using nginx and want to expose Firefly III under /budget/

The following snippet might help:

```text
location ^~ /firefly-iii/ {
   deny all;
}

location ^~ /budget {
   alias /var/www/firefly-iii/public;
   try_files $uri $uri/ @budget;

   location ~* \.php(?:$|/) {
      include snippets/fastcgi-php.conf;
      fastcgi_param SCRIPT_FILENAME $request_filename;
      fastcgi_param modHeadersAvailable true; #Avoid sending the security headers twice
      fastcgi_pass unix:/run/php/php7.2-fpm.sock;
   }
}

location @budget {
   rewrite ^/budget/(.*)$ /budget/index.php/$1 last;
}
```

## I want to use SQLite?

There is not much to it. However, be warned. SQLite support is best-effort and it's not an efficient database driver for Firefly III. I strongly advice against it. Having said that:

Open your `.env` file and find the lines that begin with `DB_`. These define your database connection. Leave `DB_CONNECTION` and set it to `sqlite`. Delete the rest.

```text
DB_CONNECTION=sqlite
```

Then, in order to install the database, make sure the file `/storage/database/database.sqlite` exists. When it does not exist, you can use this command on Linux to create it:

```text
touch ./storage/database/database.sqlite
```

Then you are ready to install the database in SQLite:

```text
php artisan migrate --seed
php artisan firefly-iii:upgrade-database
```

And presto!

## I want to use PostgreSQL?

In your `.env` file, change the `DB_CONNECTION` to `pgsql`. Update the other `DB_*` settings to match your database settings. The default port for PostgreSQL is 5432.

Then you are ready to install the database in PostgreSQL:

```text
php artisan migrate --seed
php artisan firefly-iii:upgrade-database
```

## I see a white page and nothing else?

Check out the log files in `storage/logs` to see what is going on. Please open a ticker if you are not sure what to do. If the logs are empty Firefly III cannot write to them. Make sure that the web server has write access to this directory. If the logs still remain empty, do you have a `vendor` directory in your Firefly III root? If not, run the Composer commands.

If the pages remain empty, make sure you have enabled the rewrite module in Apache. If you're running nginx, use this as the "location" config:

```text
location / {
     try_files $uri $uri/ /index.php?$query_string;
     autoindex on;
     sendfile off;
}
```

## I get a 404?

If you run Apache, open the `httpd.conf` or `apache2.conf` configuration file \(its location differs, but it is probably in `/etc/apache2`\).

Find the line that starts with `<Directory /var/www>`. If you see `/`, keep looking!

You will see the text `AllowOverride None` right below it. Change it to `AllowOverride All`.

Also run the following commands:

```text
sudo a2enmod rewrite
sudo service apache2 restart
```

That should fix it!

## I get "Be right back"?

Unfortunately, there is no straight answer without more information. Check out the `/storage/logs` directory of your Firefly III installation or check the logs of your Docker instance. The true error will be reported there. If necessary, enable [debug mode](https://github.com/firefly-iii/help/wiki/Enable-debug-logging-and-debug-mode) to collect more log files.

## Can I use it on PHP 5.x?

No. The code has been written specifically for PHP 7.3 and higher.

## It is very slow on my server?

Raspberry Pi's and other microcomputers are not the most speedy devices. User [ndandanov](https://github.com/ndandanov) has very kindly tested what works best, and found out that [installing PHP OpCache is a very good way to speed up Firefly III](https://github.com/firefly-iii/firefly-iii/issues/1095#issuecomment-356975735).

## Decimal points are missing, numbers are off?

When Firefly III is showing amounts without decimal places or other weird things, or you have gotten a blue warning bar, your server is missing vital locale information. There are packages you must install to make sure Firefly III can format amounts. Heroku doesn't have good support for Chinese. This may not be something I can fix.

Ensure with `dpkg-reconfigure` locales that the language you want to use is installed, then reboot Apache or Nginx \(webserver\) and if necessary, PHP FPM.

In order to make the demo site work \(it’s an Ubuntu server\) I run these commands:

```text
sudo apt-get install -y language-pack-nl-base
sudo locale-gen
```

You can see which locales your system has by running

```text
locale -a
```

Depending on your language, a specific list of locales is tried by Firefly III. They can be found on [GitHub](https://github.com/firefly-iii/firefly-iii/tree/main/resources/lang). Open the directory of your language, then open `config.php` and look for the line `locale`.

When it still does not work \(did you reboot?\) please [_open an issue_](https://github.com/firefly-iii/firefly-iii/issues).

### On Docker:

```text
 docker exec -it --user root [container] bash
```

Then, in the container:

Change "nl\_BE" to your locale. Leave the rest.

```text
echo "nl_BE.UTF-8 UTF-8" >> /etc/locale.gen
locale-gen
service apache2 reload
```

## I get 'Unexpected question mark'?

Firefly III requires PHP 7.3 or higher.

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

## I get 'Error: Call to undefined function ctype\_alpha\(\)'?

This may happen when you are on a NAS4free Debian installation or similar platform. This command may help:

```text
pkg install php73-ctype
```

## I get 'Error: could not open input file artisan'?

Make sure you run the artisan commands in the `firefly-iii` directory.

## I get 'Error: call to undefined function numfmt\_create\(\)'?

Make sure you have installed and enabled the PHP intl extension.

## I run SELinux and I don't want to disable it. Now what?

Reddit user [bousquetfrederic](https://www.reddit.com/user/bousquetfrederic) shares [their solution](https://www.reddit.com/r/FireflyIII/comments/84bf0p/selinux_vs_fireflyiii/):

```bash
sudo semanage fcontext -a -t httpd_sys_rw_content_t "/path/to/firefly-iii/storage(/.*)?"
sudo restorecon -R /path/to/firefly-iii/storage
```

## I am trying to upgrade but I get "Foreign key constraint is incorrectly formed"

This could happen when you upgrade a Firefly III installation with MySQL. The cause is that the tables used by Firefly III are stored under the "MyISAM" engine while Firefly III assumes these are stored using the "InnoDB" engine. To fix this, use a program like Sequel Pro or phpMyAdmin and change the engine of all your Firefly III tables to "InnoDB", _before_ you try to upgrade.

## Unable to write to cache directory?

This is a permissions error that may happen when another user than your webserver user has access to the Firefly III installation directory. Try the following command from your `/var/www/` directory:

* `sudo chown -R www-data:www-data firefly-iii`
* `sudo chmod -R 775 firefly-iii`

If you're using Docker, this may also happen when you run "php artisan" commands as root. To fix this, you can use a similar command for Docker. Replace `<container>` with the ID of your container.

* `docker exec -it <container> chown -R www-data:www-data /var/www/firefly-iii/storage`

If the problem persists make sure that you run your cron job as the "www-data" user so the cache directory doesn't get mixed up: `sudo -u www-data php artisan [..]`.

