# Self-managed server

If you have your own (virtual) web server you can use this guide to install Firefly III. You may have some ingredients prepared already.

## Ingredients

1. You need a working LAMP, LEMP or WAMP stack. Make sure you use PHP %PHPVERSION. How to set this up is outside the scope of this manual, but this is something [you can look up](https://www.google.com/search?q=lamp+stack+php+%PHPVERSION). 
2. You will also need a (MySQL) database and credentials for a user that has permissions on that database. Firefly III creates its own tables. You can use SQLite if this is difficult to set up. 
3. In case you want to use one of the languages that Firefly III is equipped with, make sure you install the necessary locales. For Debian / Ubuntu for example, use `sudo apt install language-pack-nl-base && sudo locale-gen`.

Several users have created specific guides for their OS and database combination. 

1. [Firefly III in Ubuntu 20.04 and proxmox](https://gist.github.com/Engr-AllanG/34e77a08e1482284763fff429cdd92fa)
2. [Firefly III scripted installer](https://github.com/runlevel-4/firefly-iii-automation)
3. [Firefly III Gulp orchestration scripts](https://github.com/sidyes/firefly-iii-gulp)

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
* PHP support for whatever database you're going to use.

You can search the web to find out how to install these modules. Some may be installed already depending on your system. Use `phpinfo()` or `php -i` to find out.

## Installing Firefly III

!!! warning "Installing by pulling the remote repository"
    It's no longer possible to install Firefly III by pulling the code from the `main` or `develop` branch of the repository. Generated (JS) code and other dependencies are not in the repository, so your new installation may not work as expected. To do so manually, please [review this FAQ question](../../../references/faq/install.md#i-want-to-build-the-firefly-iii-release-myself)

### Main command

v%FFVERSION is the [latest version](https://version.firefly-iii.org/).

- [Download the latest release as a `zip` file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.zip) from GitHub.
- [Download the latest release as a `tar.gz` file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.tar.gz) from GitHub.

It is up to you, if you prefer the `tar.gz` file or the zip file.

### Validate the downloaded file

Optionally, you can validate and test the integrity of your download by also downloading the SHA256 checksum file. 

- [SHA256 checksum file of the `zip` file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.zip.sha256).
- [SHA256 checksum file of the `tar.gz` file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.tar.gz.sha256).

With this SHA256 checksum file, you can verify the integrity of the download by running the following command:

```bash
# Should return: "FireflyIII-v%FFVERSION.zip: OK"
sha256sum -c FireflyIII-v%FFVERSION.zip.sha256
sha256sum -c FireflyIII-v%FFVERSION.tar.gz.sha256

# alternative command:
shasum -a 256 -c FireflyIII-v%FFVERSION.zip.sha256
shasum -a 256 -c FireflyIII-v%FFVERSION.tar.gz.sha256
```

If you also want to verify the digital signature of the release, please follow the instructions under "Verify the signature" on [the page about signatures](../../../explanation/more-information/signatures.md).

### Extract the file

Extract the downloaded file in your web server's root directory, or in a specific directory you want to use.

```bash
# the directory name is up to you, of course:
mkdir /var/www/firefly-iii
unzip FireflyIII-v%FFVERSION.zip -d /var/www/firefly-iii

# the tar.gz file extracts with the following command.
tar -xvf FireflyIII-v%FFVERSION.tar.gz -C /var/www/firefly-iii
```

Some servers require `sudo` to extract or change things in the `/var/www` directory. if this is the case for you, make sure you reset the access rights after wards: 

```bash
# the directory name is up to you, of course:
sudo -u www-data mkdir /var/www/firefly-iii
sudo -u www-data unzip FireflyIII-v%FFVERSION.zip -d /var/www/firefly-iii

# alternative command for the tar.gz file:
sudo tar -xvf FireflyIII-v%FFVERSION.tar.gz -C /var/www/firefly-iii

sudo chown -R www-data:www-data /var/www/firefly-iii
sudo chmod -R 775 /var/www/firefly-iii/storage
```

This should get you the entire installation in the directory of your choice.

### Web server configuration

Most servers will serve files from the `/var/www` directory. Firefly III would be served from `/firefly-iii/public`. This is not really what you would want to do.

You can look up for your webserver (Apache or nginx) how to change the root directory or how to set up virtual hosts. 

### Firefly III configuration

In the directory where you just unzipped Firefly III you will find a `.env.example` file. Rename or copy it to `.env`. 

```bash
cp .env.example .env
```

Open this file using your favorite editor. There are instructions what to do in this file.

Make sure you configure at least the database. For SQLite, you must drop all the configuration except `DB_CONNECTION=sqlite`.

### Initialize the database

This step is very important, because Firefly III needs a database to work with, and it will tell you whether your configuration is correct.

If you decide to use SQLite, make sure you run the following command to create the SQLite database file.

```bash
# the directory may be different on your system:
cd /var/www/firefly-iii
touch ./storage/database/database.sqlite
```

Either way, in all cases, run these commands to initialize the database:

```bash
php artisan firefly-iii:upgrade-database
php artisan firefly-iii:correct-database
php artisan firefly-iii:report-integrity
php artisan firefly-iii:laravel-passport-keys
```

Now you should be able to visit [http://localhost/firefly-iii/public](http://localhost/firefly-iii/public) and see Firefly III.

### It doesn't work!

This manual can't list all the possible exceptions and errors you may run into. Some common issues are documented [in the FAQ](../../../references/faq/install.md).

Look in these directions when you're running into problems:

* Apache may not have mod_rewrite enabled or the htaccess file isn't activated (`AllowOverride`).
* Nginx may not have the correct `try_files` instruction in the `location` block.

## Visiting Firefly III

Check out [the tutorial on creating accounts and transactions](../../../tutorials/finances/first-steps.md).

