# Upgrade

TODO patch me up

This page gives you instructions on how to upgrade your Firefly III Data Importer (**FIDI**).

## Upgrading a self-hosted FIDI

The best way to upgrade is to "reinstall" FIDI using the following command:

```bash
composer create-project firefly-iii/data-importer --no-dev --prefer-dist updated-data-importer %IMPORTERVERSION
```

This installs the tool in a new directory called `updated-data-importer`. Move over your `.env` file by copy-pasting it.

## Upgrading a Docker container

To upgrade, stop (if necessary) and remove your container using these commands:

```bash
docker stop <container>
docker rm <container>
```

To find out which container is the Firefly III Data Importer, run `docker container ls -a` and look for `fireflyiii/data-importer`.

Then pull the new image using this command:

```bash
docker pull fireflyiii/data-importer:latest
```

Create it again by running the command from [the installation guide](install/docker.md).
