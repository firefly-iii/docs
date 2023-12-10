# Self-managed server

If you have your own (virtual) web server you can use this guide to install Firefly III. You may have some ingredients prepared already.

## Ingredients

You need a working LAMP, LEMP or WAMP stack. Run PHP %PHPVERSION. Here are some Google queries to help you.

1. [Install a LAMP stack with PHP %PHPVERSION](https://www.google.com/search?q=lamp+stack+php+%PHPVERSION)
2. [Upgrade Ubuntu PHP %PHPVERSION](https://www.google.com/search?q=upgrade+ubuntu+php+%PHPVERSION)
3. [PHP %PHPVERSION raspberry pi](https://www.google.nl/search?q=PHP+%PHPVERSION+raspberry+pi)

You need a (MySQL) database and credentials for a user that has permissions on that database. Firefly III creates its own tables.

Several users have created specific guides for their OS and database combination.

1. [Raspberry Pi 3, with Docker and Docker compose](https://gist.github.com/josephbadow/588c2ae961231fe338c459127c7d835b)
2. [Firefly III in Ubuntu 20.04 and proxmox](https://gist.github.com/Engr-AllanG/34e77a08e1482284763fff429cdd92fa)
3. [Firefly III scripted installer](https://github.com/runlevel-4/firefly-iii-automation)
4. [Firefly III Gulp orchestration scripts](https://github.com/sidyes/firefly-iii-gulp)

In case you want to use one of the languages that Firefly III is equipped with, install the necessary locales. For Debian / Ubuntu for example, use `sudo apt install language-pack-nl-base && sudo locale-gen`.

## Preparing your server

### Extra packages

Install the following PHP modules:

* PHP BCMath Arbitrary Precision Mathematics
* PHP Internationalization extension
* PHP Curl
* PHP Zip
* PHP Sodium
* PHP GD
* PHP XML
* PHP MBString
* PHP whatever database you're gonna use.

You can search the web to find out how to install these modules. Some may be installed already depending on your system. Use `phpinfo()` to find out.

### Installing composer

If you have sudo rights (try `sudo ls`) you can install composer using the following command:

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

Verify the installation of composer using the following command.

```bash
composer -v
```

If you have no sudo rights, you can simply [download composer](https://getcomposer.org/download/) with the instructions under the header "manual download". Use `php composer.phar` instead of `composer` in the instructions ahead.

## Installing Firefly III

### Main command

Browse to `/var/www` which is probably the directory where your web server is configured to find its files.

Enter the following command.

```bash
composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii %FFVERSION
```

%FFVERSION is the [latest version](https://version.firefly-iii.org/).

If this gives an error because of read/write permissions, prepend the command with `sudo`. Then fix the permissions:

```bash
sudo chown -R www-data:www-data firefly-iii
sudo chmod -R 775 firefly-iii/storage
```

### Configuration

In the `firefly-iii` directory you will find a `.env` file. Open this file using your favorite editor. There are instructions what to do in this file.

### Initialize the database

This step is very important, because Firefly III needs a database to work with, and it will tell you whether your configuration is correct. Run the following command in the Firefly III directory.

```bash
php artisan firefly-iii:upgrade-database
php artisan firefly-iii:correct-database
php artisan firefly-iii:report-integrity
php artisan passport:install
```

Now you should be able to visit [http://localhost/firefly-iii/public](http://localhost/firefly-iii/public) and see Firefly III.

### It doesn't work!

This manual can't list all the possible exceptions and errors you may run into. Some common issues are documented [in the FAQ](../../../references/faq/install.md).

Look in these directions when you're running into problems:

* Apache may not have mod_rewrite enabled or the htaccess file isn't activated (`AllowOverride`).
* Nginx may not have the correct `try_files` instruction in the `location` block.

## Visiting Firefly III

Check out [the tutorial on creating accounts and transactions](../../../tutorials/finances/first-steps.md).
