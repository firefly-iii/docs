
(TODO clean up)

# Upgrade

This page gives you instructions on how to upgrade your Data Importer installation.

## Upgrading a Docker container

To upgrade, stop (if necessary) and remove your container using these commands:

```bash
docker stop [container-id]
docker rm [container-id]
```

To find out which container is the Firefly III Data Importer, run `docker container ls -a` and look for `fireflyiii/data-importer`.

Then pull the new image using this command:

```bash
docker pull fireflyiii/data-importer:latest
```

Create it again by running the command from [the installation guide](docker.md).

## Upgrading a self-hosted instance

The best way to upgrade is to "reinstall" the data importer using the following command:

```bash
cd /var/www && \
    composer create-project firefly-iii/data-importer \
    --no-dev --prefer-dist updated-data-importer %IMPORTERVERSION
```

This installs the tool in a new directory called `updated-data-importer`. Move over your `.env` file by copy-pasting it. For example:

```bash
cp /var/www/data-importer/.env /var/www/updated-data-importer/.env
mv /var/www/data-importer /var/www/old-data-importer
mv /var/www/updated-data-importer /var/www/data-importer
```

If necessary, use `sudo` to execute these commands, then correct the access rights with `chown`.

```bash   
sudo chown -R www-data:www-data data-importer
sudo chmod -R 775 data-importer/storage
```
