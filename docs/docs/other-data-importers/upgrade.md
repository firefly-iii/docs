# Upgrade

## Upgrading a self-hosted Importer

The best way to upgrade is to "reinstall" the importer using the following command:

### Spectre

```bash
composer create-project firefly-iii/spectre-importer --no-dev --prefer-dist updated-spectre-importer <next_version>
```

### Nordigen

```bash
composer create-project firefly-iii/nordigen-importer --no-dev --prefer-dist updated-nordigen-importer <next_version>
```

### YNAB

```bash
composer create-project firefly-iii/ynab-importer --no-dev --prefer-dist updated-ynab-importer <next_version>
```

### bunq

```bash
composer create-project firefly-iii/bunq-importer --no-dev --prefer-dist updated-bunq-importer <next_version>
```


Where `<next_version>` is **[the latest version](https://version.firefly-iii.org/)** of the importer. This installs the tool in a new directory called `updated-*-importer`. 

Move over your `.env` file by copy-pasting it.

## Upgrading a Docker container

To upgrade, stop (if necessary) and remove your container using these commands:

```bash
docker stop <container>
docker rm <container>
```

To find out which container is the Firefly III importer, run `docker container ls -a` and look for `fireflyiii/*-importer`.

Then pull the new image using this command:

### Spectre

```bash
docker pull fireflyiii/spectre-importer:latest
```

### Nordigen

```bash
docker pull fireflyiii/nordigen-importer:latest
```

### YNAB

```bash
docker pull fireflyiii/ynab-importer:latest
```

### bunq


```bash
docker pull fireflyiii/bunq-importer:latest
```

Create it again by running the command from the installation guide.
