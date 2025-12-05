# How to install Firefly III using Docker

Firefly III can be installed using Docker. There are ready-made Docker containers for almost all platforms. If you've never used Docker before, please first read into it yourself.

The easiest way to install Firefly III is using "Docker compose", which is a Docker tool that allows you to define and run multi-container Docker applications. With Docker compose, you use a YAML file to configure your application's services. Then, with a single command, you create and start all the services from your configuration.

The YAML file and all necessary configuration are provided online for your convenience.

If you have questions, please refer to [the Docker FAQ](../../../references/faq/docker.md) or contact me using the instructions from the [support page](../../../explanation/support.md).

## Docker Compose

Download [the Docker Compose file](https://raw.githubusercontent.com/firefly-iii/docker/main/docker-compose.yml) and place it somewhere convenient. To include the Data Importer in your installation, please read [how to install the data importer](../../data-importer/installation/docker.md).

Grab the raw file, and don't copy-paste the text from your browser. The spaces in the file are very important. So use "Save As".

### Download configuration files

There are two configuration files you need to run this Docker Compose file. Download all files and save them in the same folder as the Docker Compose file.

- The first file contains Firefly III variables and can be downloaded from [the Firefly III repository](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example). Save it as a new file called `.env`.
- The second file contains the database variables and can be downloaded from [the Docker repository](https://raw.githubusercontent.com/firefly-iii/docker/main/database.env). Save it as a new file called `.db.env`.

It is **important** that you rename the file as instructed here. You can see in the Docker compose file why this is. There is a reference to it: `env_file:`. If you don't name it as it is in the Docker Compose file, you must edit the Docker compose file to match the file names.

Instructions:

1. Change `DB_PASSWORD` in `.env` to something else. Pick a nice password.
2. Change `MYSQL_PASSWORD` in `.db.env` to the SAME value

!!! note
    Change the password FIRST. If you change the password *after* you run Firefly III, it will complain about having no access because the password has been stored in  the database volume.

#### Change to PostgreSQL

Users running `arm/v7` (some Raspberry Pi) users may have to switch to PostgreSQL, because reliable containers running MariaDB and MySQL are not available for these platforms. To do this, change the following lines in the `.env` file.

```text
DB_CONNECTION=pgsql
DB_HOST=db
DB_PORT=5432
```
Also change variable names in `.db.env` file from MYSQL\_\* to POSTGRES\_\*. MYSQL_RANDOM_ROOT_PASSWORD can be removed.

Change the `docker-compose.yml` file to point to `postgres` instead of `mariadb:lts`.

Then, change the mount point of the database under volumes (`firefly_iii_db`) to `/var/lib/postgresql`.

!!! note
    Pointing the image to `postgres` will install PostgreSQL-18. If you wish to use a lower version, ensure the mount point of the volumes (`firefly_iii_db`) is `/var/lib/postgresql/data`.

### Start the container

Run the following command in the directory where both `docker-compose.yml` and all configuration files are present.

```bash
docker compose -f docker-compose.yml up -d --pull=always
```

You can follow the progress of the installation by running this command:

```text
docker compose -f docker-compose.yml logs -f
```

When the installation is done, Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your [localhost](http://localhost).

### Surf to Firefly III

You can now visit Firefly III at [http://localhost](http://localhost) or [http://docker-ip:port](http://docker-ip:port) if it is running on a custom port. To continue, read [the tutorial on how to create accounts and transactions](../../../tutorials/finances/first-steps.md).

## Plain Docker

You can also use Docker itself, skipping Docker Compose. This allows you to set up a single container, with just Firefly III inside of it. If you do this, you should already have a MySQL or a Postgres database running somewhere. Without such a database container, Firefly III will not work.

### Create a volume

This volume is used to persistently store uploaded files.

```text
docker volume create firefly_iii_upload
```

### Start the container

Run this Docker command to start the Firefly III container. Edit the environment variables to match your own database. You should really change the `APP_KEY` as well. It should be a random string of _exactly_ 32 characters. You can generate such a key with the following command: 

```bash
head /dev/urandom | LC_ALL=C tr -dc 'A-Za-z0-9' | head -c 32 && echo
```

```text
docker run -d \
-v firefly_iii_upload:/var/www/html/storage/upload \
-p 80:8080 \
-e APP_KEY=CHANGEME_32_CHARS \
-e DB_HOST=CHANGEME \
-e DB_PORT=3306 \
-e DB_CONNECTION=mysql \
-e DB_DATABASE=CHANGEME \
-e DB_USERNAME=CHANGEME \
-e DB_PASSWORD=CHANGEME \
fireflyiii/core:latest
```

Firefly III assumes that you're using MySQL. If you use PostgreSQL, change the following environment variable in the command: `DB_CONNECTION=pgsql` and change the port, `DB_PORT=5432`.

!!! note
    To connect to a database on your host machine from Firefly III running in Docker, set `DB_HOST=host.docker.internal`. For Linux users, you'll need to include the `--add-host=host.docker.internal:host-gateway` option.

When executed this command will fire up a Docker container with Firefly III inside of it. It may take some time to start. If the database is set up properly it will automatically migrate and install a default database, and you should be able to surf to your container (usually located at [localhost](http://localhost)) to use Firefly III.

If you have questions, please refer to [the Docker FAQ](../../../references/faq/docker.md) or contact me using the instructions from the [support page](../../../explanation/support.md).
