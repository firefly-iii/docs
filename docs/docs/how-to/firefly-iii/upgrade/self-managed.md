# Upgrade a self-managed server

Firefly III can upgrade itself from very old versions, even back from 4.7.x. In some cases the upgrade process is destructive. It will remove transactions, delete accounts or clean up data.

!!! warning
    Always make a backup of your database and installation before you upgrade, especially when you upgrade major versions.

## Created using composer "create-project"

The best way to upgrade is to "reinstall" Firefly III using the following command:

```bash
composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii-updated %FFVERSION
```

Where `%FFVERSION` is the latest version of Firefly III. This installs Firefly III in a new directory called `firefly-iii-updated`. Assuming your *original* Firefly III installation is in the directory `firefly-iii` you can upgrade by moving over your `.env` file and other stuff:

```bash   
cp firefly-iii/.env firefly-iii-updated/.env
cp firefly-iii/storage/upload/* firefly-iii-updated/storage/upload/
cp firefly-iii/storage/export/* firefly-iii-updated/storage/export/
```

If you use SQLite as a database system (you will know if you do) copy your database as well. Otherwise, the `.env`-file is enough.

Then, run the following commands to finish the upgrade:

```bash
cd firefly-iii-updated
rm -rf bootstrap/cache/*
php artisan cache:clear
php artisan migrate --seed
php artisan firefly-iii:upgrade-database
php artisan passport:install
php artisan cache:clear
cd ..
```

To ensure your webserver serves you the new Firefly III:

```bash
mv firefly-iii firefly-iii-old
mv firefly-iii-updated firefly-iii
```

If you get 500 errors or other problems, you may have to set the correct access rights:

```bash   
sudo chown -R www-data:www-data firefly-iii
sudo chmod -R 775 firefly-iii/storage
```

Remove any old PHP packages or at least, they must not be used by Apache and/or nginx. To disable old PHP versions in Apache, you can use:

```bash
# to disable
sudo a2dismod php7.x 
# to enable
sudo a2enmod php7.x
# restart apache 2
sudo service apache2 restart
```

This assumes you run Apache and your OS package manager can handle multiple PHP versions (not all of them do this). Other commands can be found using a search engine.

## Straight from GitHub

Back up your entire installation directory, and database. Go to the `firefly-iii` folder and run these commands.

!!! warning
    The `main` branch also includes alpha and beta releases. The `git pull` command may inadvertently upgrade your Firefly III version to the latest alpha or beta version if it is available. Verify there is no active alpha or beta on [the latest release](https://version.firefly-iii.org/) page.

```bash
git pull
# alternatively, use:
# git pull origin [version]
rm -rf bootstrap/cache/*
rm -rf vendor/
composer install --no-scripts --no-dev
composer install --no-dev
php artisan migrate --seed
php artisan firefly-iii:decrypt-all
php artisan cache:clear
php artisan firefly-iii:upgrade-database
php artisan passport:install
php artisan cache:clear
```
