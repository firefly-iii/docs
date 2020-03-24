# Upgrade

Firefly III has had a long and stormy history. There are many ways of installing Firefly III, so there are many ways to upgrade.

## Docker

### Upgrade straight from Docker Hub

To upgrade, stop and remove your container using these commands:

```bash
docker stop <container>
docker rm <container>
```

To find out which container is Firefly III, run `docker container ls -a`.

```bash
docker pull jc5x/firefly-iii:latest
```

And then create it again by running the command from the installation guide. The container should upgrade itself so it can take some time for it to start. You should save the command you've used to start the container for easier upgrade.

If you want to run the Docker container as another user, add `--user=`. Possible values are `user`, `user:group`,`uid`, `uid:gid`, `user:gid`, `uid:group`.

### Docker Hub via docker compose

To update the container run these commands:

```bash
docker-compose stop firefly_iii_app
docker-compose rm
docker-compose pull firefly_iii_app
docker-compose -f docker-compose.yml up -d
```

If you want to any container under another user, add the `user:` key under `image:`, with the same indentation. Possible values are `user`, `user:group`,`uid`, `uid:gid`, `user:gid`, `uid:group`.

if you redownload `docker-compose.yml`, keep in mind that the database version in the Docker composer may have been updated and that this version is not compatible with your current version (ie PostgreSQL 10 vs PostgreSQL 12).

## Virtual or real server

### Created using composer "create-project"

The best way to upgrade is to "reinstall" Firefly III using the following command:

```bash
composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii-updated <next_version>
```

Where `<next_version>` is the latest version of Firefly III. This installs Firefly III in a new directory called `firefly-iii-updated`. Assuming your *original* Firefly III installation is in the directory `firefly-iii` you can upgrade by simply moving over your `.env` file and other stuff:

```bash   
cp firefly-iii/.env firefly-iii-updated/.env
cp firefly-iii/storage/upload/* firefly-iii-updated/storage/upload/
cp firefly-iii/storage/export/* firefly-iii-updated/storage/export/
```

If you use SQLite as a database system (you will know if you do) copy your database as well. Otherwise the `.env`-file is enough.

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

To make sure your webserver serves you the new Firefly III:

```bash
mv firefly-iii firefly-iii-old
mv firefly-iii-updated firefly-iii
```

If you get 500 errors or other problems, you may have to set the correct access rights:

```bash   
sudo chown -R www-data:www-data firefly-iii
sudo chmod -R 775 firefly-iii/storage
```

Make sure you remove any old PHP packages or at least, make sure they are not used by Apache and/or nginx. To disable old PHP versions in Apache, you can use:

```bash
# to disable
sudo a2dismod php7.x 
# to enable
sudo a2enmod php7.x
# restart apache 2
sudo service apache2 restart
```

This assumes you run Apache and your OS package manager can handle multiple PHP versions (not all of them do this). Other commands can be found using a search engine.

### Straight from Github

Make sure you backup your entire installation directory, and database.

Go to the `firefly-iii` folder and run these commands:

```bash
git pull
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

### Heroku

Backup the PGS database from Heroku's dashboard, then create a new application (or destroy the database on your existing one). Instructions to do so are [on this page](https://devcenter.heroku.com/articles/heroku-postgres-import-export#export). Spin up your new Firefly III Heroku installation, then import the backup by following these instructions [on this page](https://devcenter.heroku.com/articles/heroku-postgres-import-export#import).

Firefly III will then set itself up, and you should be good to go from right where you left off on your previous installation.
