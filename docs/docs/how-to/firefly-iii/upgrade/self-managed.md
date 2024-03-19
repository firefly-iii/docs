# Upgrade a self-managed server

Firefly III can upgrade itself from very old versions, even back from 4.7.x. In some cases the upgrade process is destructive. It will remove transactions, delete accounts or clean up data.

!!! warning
    Always make a backup of your database and installation before you upgrade, especially when you upgrade major versions.

## Created using composer "create-project"

The best way to upgrade is to use the "Straight from GitHub" instructions below. In recent times, the deployment of Firefly III has changed and the "create-project" method is no longer recommended. 

## Straight from GitHub

!!! danger "New instructions"
    These instructions have changed after the release of Firefly III v6.1.11 on 2024-03-20.

[Download the latest release as a zip file](https://github.com/firefly-iii/firefly-iii/releases/download/v%FFVERSION/FireflyIII-v%FFVERSION.zip) from GitHub.

Unzip it into your `/var/www/firefly-iii` directory using the following command.

```bash
unzip FireflyIII-v%FFVERSION.zip -x "storage/*" -d /var/www/firefly-iii
```

Use sudo if necessary

!!! warning "Exclude the storage directory"
    The `-x "storage/*"` part is important. It prevents the storage directory from being overwritten. If you forget this, you will lose all your uploads and exports.

Then run the following commands:

```bash
composer install --no-scripts --no-dev
composer install --no-dev
php artisan migrate --seed
php artisan firefly-iii:decrypt-all
php artisan cache:clear
php artisan firefly-iii:upgrade-database
php artisan passport:install
php artisan cache:clear
```
