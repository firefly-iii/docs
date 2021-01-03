# Upgrade

## Upgrading a self-hosted CSV Importer

The best way to upgrade is to "reinstall" the Firefly III CSV importer using the following command:

```bash
composer create-project firefly-iii/csv-importer --no-dev --prefer-dist updated-csv-importer <next_version>
```

Where `<next_version>` is **[the latest version](https://version.firefly-iii.org/)** of the Firefly III CSV importer. This installs the tool in a new directory called `updated-csv-importer`. 

Move over your `.env` file by copy-pasting it.

## Upgrading a Docker container

To upgrade, stop (if necessary) and remove your container using these commands:

```bash
docker stop <container>
docker rm <container>
```

To find out which container is the Firefly III CSV importer, run `docker container ls -a` and look for `fireflyiii/csv-importer`.

Then pull the new image using this command:

```bash
docker pull fireflyiii/csv-importer:latest
```

Create it again by running the command from the installation guide.