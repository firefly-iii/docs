# Self-hosted server

If you have your own (virtual) web server you can use this guide to install Firefly III. You may have some ingredients prepared already.

## Ingredients

You need a working LAMP, LEMP or WAMP stack. If you don't have one, search the web to find out how to get one. Make sure you're running PHP 7.4. There are many tutorials that will help you install one. Here are some Google queries to help you.

1. [Install a LAMP stack with PHP 7.4](https://www.google.com/search?q=lamp+stack+php+7.4)
2. [Upgrade Ubuntu PHP 7.4](https://www.google.com/search?q=upgrade+ubuntu+php+7.4)
3. [PHP 7.4 raspberry pi](https://www.google.nl/search?q=PHP+7.4+raspberry+pi)

If you wish to use another database such as SQLite or Postgres, please check out the FAQ.

You need a (MySQL) database and credentials for a user that can access that database. Firefly III creates its own tables. Avoid using the root user.

Several users have created specific guides for their OS and database combination. Please keep in mind that Firefly III may have other system requirements.

Firefly III requires **PHP 7.4** so these instructions may not be relevant anymore.

1. [CentOS 7, with nginx and PHP 7.2](https://old.reddit.com/r/FireflyIII/comments/825n4l/centos_7_nginx_installation_guide/)
2. [Ubuntu Server 16.04LTS with nginx and PHP 7.2](https://old.reddit.com/r/FireflyIII/comments/8thxuu/fireflyiii_on_ubuntu_server_1604lts_nginx_php72/)
3. [Ubuntu Server 18.04 with nginx and PHP 7.2](https://gist.github.com/philthynz/ec04833a8e39c7f7d1b0d33cb4197a95)
4. [Ubuntu Server 18.04 with nginx, PHP 7.3 and a Let's Encrypt certificate](https://gist.github.com/optimistic5/ca5a4a8593dcdb7360f712d37a0cc657)
5. [Raspberry Pi 3, with Docker and Docker compose](https://gist.github.com/josephbadow/588c2ae961231fe338c459127c7d835b)
6. [Firefly III in FreeBSD (FreeNAS)](https://gist.github.com/Zamana/bdfed1a06ba08467bd3ce92f4715c7fd)
7. [Firefly III in FreeNAS (alternative)](https://forum.freenas-community.org/t/firefly-iii-personal-finance-manager-in-a-jail/45)

In case you want to use one of the languages that Firefly III is equipped with, make sure you have installed the necessary locales. For Debian / Ubuntu for example, use `sudo apt install language-pack-nl-base && sudo locale-gen`.

## Preparing your server

### Extra packages

Install the following PHP modules:

* PHP BCMath Arbitrary Precision Mathematics
* PHP Internationalization extension
* PHP Curl
* PHP Zip
* PHP GD
* PHP XML
* PHP MBString
* PHP LDAP
* PHP whatever database you're gonna use.

With exception of the database plugin, the following command will install all of the above plugins:
```
sudo apt install php7.4-{gd, intl, mbstring, curl, zip, xml, bcmath, ldap}
```
Some of this may be installed already depending on your system. The command above will skip over any preinstall plugins as long as the versions match, otherwise they will be updated.

To install the PHP MySQL Database Plugin, run the following:
```
sudo apt install php7.4-mysql
```

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

This concludes the server preparations. If you're having trouble with (parts of) this step, please check out the FAQ.

## Installing Firefly III

### Main command

Browse to `/var/www` which is probably the directory where your web server is configured to find its files.

Enter the following command.

```bash
composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii <latest>
```

You should replace `<latest>` with the latest version, which you can find on the [Firefly III version page](https://version.firefly-iii.org/).

If this gives an error because of access rights, prepend the command with `sudo`. Then fix the access rights:

```bash
sudo chown -R www-data:www-data firefly-iii
sudo chmod -R 775 firefly-iii/storage
```

### Configuration

In the `firefly-iii` directory you will find a `.env` file. Open this file using your favorite editor. There are instructions what to do in this file.

### Initialize the database

This step is very important, because Firefly III needs a database to work with and it will tell you whether or not your configuration is correct. Run the following command in the Firefly III directory.

```bash
php artisan migrate:refresh --seed
php artisan firefly-iii:upgrade-database
php artisan passport:install
```

Now you should be able to visit [http://localhost/firefly-iii/](http://localhost/firefly-iii/public) and see Firefly III.

## Accessing Firefly III

### Browsing to site

Browsing to the site should be easy. You should see a login screen.

### Registering an account

You cannot login yet. Click on "Register a new account" and fill in the form.

### Your first accounts

You will be logged in automatically. Follow the instructions and you are done!

