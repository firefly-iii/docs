# Upgrade a self-managed server

Firefly III can upgrade itself from very old versions, even back from 4.7.x. In some cases the upgrade process is destructive. It will remove transactions, delete accounts or clean up data.

!!! warning
    Always make a backup of your database and `storage` before you upgrade, especially when you upgrade major versions.

## Created using composer "create-project"

The best way to upgrade is to use the "Straight from GitHub" instructions below. In recent times, the deployment of Firefly III has changed and the "create-project" method is no longer recommended. 

## Straight from GitHub

[Download the latest release as a zip file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.zip) from GitHub.

Unzip the new release wherever you've installed Firefly III. In this example, it is `/var/www/firefly-iii`, but it could be anywhere. To do this over the command line, use the following command:

```bash
# The destination directory can be changed, of course.
unzip -o FireflyIII-v%FFVERSION.zip -x "storage/*" -d /var/www/firefly-iii
```

Use `sudo` if necessary, but if you do, make sure that you set the ownership of the `/var/www/firefly-iii` directory to `www-data` again:

```bash
# The destination directory can be changed, of course.
sudo chown -R www-data:www-data /var/www/firefly-iii
sudo chmod -R 775 /var/www/firefly-iii/storage
```

### Exclude the storage directory

When unzipping, make sure you do not overwrite the storage directory. That's why the `-x "storage/*"` part is important. It prevents the storage directory from being overwritten. If you forget this, you will lose all your uploads and exports.

### Run upgrade commands

Run the following commands to upgrade the database and the application:

```bash
php artisan migrate --seed
php artisan firefly-iii:decrypt-all
php artisan cache:clear
php artisan firefly-iii:upgrade-database
php artisan firefly-iii:laravel-passport-keys
php artisan cache:clear
```
