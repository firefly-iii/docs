# Docker

## Using Docker Compose

### Download Docker Compose file

Download **[the Docker Compose file](https://raw.githubusercontent.com/firefly-iii/docker/main/docker-compose.yml)** and place it somewhere convenient. It doesn't really matter where you place it, but I suggest a dedicated directory.

If you also want to use the Firefly III Data Importer, grab the [alternative Docker Compose file](https://raw.githubusercontent.com/firefly-iii/docker/main/docker-compose-data.yml) instead.

Either way, grab the raw file, and don't copy-paste the text from your browser. The spaces in the file are very important. So use "Save As".

!!! info
    The Apache server inside this Docker image will run as `www-data`. This will be reflected by the files you upload: they will be owned by `www-data`. You can change the user the image runs under but that user must exist inside the Docker image or things may not work as expected.

### Download environment variables

There are two environment variable-files you need to run this Docker Compose file. Download all three files and save them next to the Docker Compose file.

- The first file contains Firefly III variables and can be downloaded from [the Firefly III repository](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example). Save it as a new file called `.env`.
- The second file contains the database variables and can be downloaded from [the Docker repository](https://raw.githubusercontent.com/firefly-iii/docker/main/database.env). Save it as a new file called `.db.env`.

If you've downloaded the Docker Compose file that *includes* the Data Importer, you'll need a third `.env` file:

- Download the [Data Importer environment variables](https://raw.githubusercontent.com/firefly-iii/data-importer/main/.env.example) and save it as a new file called `.importer.env`.

It is **important** that you rename the file as instructed here. You can see in the Docker compose file why this is. There is a reference to it: `env_file:`. If you don't name it as it is in the Docker Compose file, you must edit the Docker compose file to match the file names.

If you include the data importer, you MUST do this:

1. Change `FIREFLY_III_URL` in `.importer.env` to `http://app:8080`

Either way, you should also do this (not mandatory):

1. Change `DB_PASSWORD` in `.env` to something else. Pick a nice password.
2. Change `MYSQL_PASSWORD` in `.db.env` to the SAME value

### Start the container

Run the following command in the directory where both `docker-compose.yml` and all environment variable files are present.

```text
docker-compose -f docker-compose.yml up -d
```

You can follow the progress of the installation by running this command:

```text
docker-compose -f docker-compose.yml logs -f
```

When the installation is done, Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your [localhost](http://localhost).

### Surf to Firefly III

You can now visit Firefly III at [http://localhost](http://localhost) or [http://docker-ip:port](http://docker-ip:port) if it is running on a custom port.

## Straight from Docker Hub

The instructions in this section will help you set up a single container.

With these commands you create one container: the container for Firefly III itself. If you do this, you should already have a MySQL or a Postgres database running somewhere. Without such a database container, Firefly III will **not** work.

### Create some volumes

These are used to persistently store uploaded files and exported data.

```text
docker volume create firefly_iii_upload
```

### Start the container

Run this Docker command to start the Firefly III container. Edit the environment variables to match your own database. You should really change the `APP_KEY` as well. It should be a random string of _exactly_ 32 characters. You can generate such a key with the following command: `head /dev/urandom | LC_ALL=C tr -dc 'A-Za-z0-9' | head -c 32 && echo`.

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

When executed this command will fire up a Docker container with Firefly III inside of it. It may take some time to start. If the database is set up properly it will automatically migrate and install a default database, and you should be able to surf to your container (usually located at [localhost](http://localhost)) to use Firefly III.

!!! info
    The Apache server inside this Docker image will run as `www-data`. This will be reflected by the files you upload: they will be owned by `www-data`. You can change the user the image runs under but that user must exist inside the Docker image or things may not work as expected.

## Docker tags

The instructions always assume `fireflyiii/core:latest`. This is the latest stable release. Other tags are:

* `fireflyiii/core:beta`. This tag contains beta releases.
* `fireflyiii/core:alpha`. This tag contains alpha releases.
* `fireflyiii/core:develop`. Always the latest develop image. Maybe unstable.

All Docker tags are built for ARMv7, ARM64 and AMD64. ARMv6 is not included, so these images will *not* work on the Raspberry Pi Zero, Raspberry Pi 1 (A+B) or Raspberry Pi Compute Module.

## Docker and reverse proxies

In the `.env` file you downloaded you will find a variable called `TRUSTED_PROXIES` which must be set to either the reverse proxy machine or simply `*`. Set `APP_URL` to the URL Firefly III will be on. For example:

```text
# ...
APP_URL=https://firefly.example.com
TRUSTED_PROXIES=*
# ...
```

On the command line, this would be something like:

```text
-e DB_HOST=fireflyiiidb \
-e DB_DATABASE=firefly \
-e DB_USERNAME=firefly \
-e DB_PORT=3306 \
-e DB_CONNECTION=mysql \
-e DB_PASSWORD=somepw \
-e APP_KEY=CHANGEME_32_CHARS \
-e APP_URL=https://firefly.example.com \
-e TRUSTED_PROXIES=** \
```

Keep in mind that the `APP_URL` setting does **absolutely nothing** for your reverse proxy or anything! It's only used to determine the URL of Firefly III when Firefly III is incapable of doing so: when using the command line or when drafting emails.

If you wish to enable SSL as well, Firefly III (or rather Laravel) respects the HTTP header `X-Forwarded-Proto`. Add this to your vhost file:

```text
RequestHeader set X-Forwarded-Proto "https"
```

If you are using Nginx add the following to your location block:

```text
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Server $host;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $host;
# This line is optional and may help in some cases.
# proxy_set_header X-Forwarded-Port $server_port;
```

For Apache, use something like:

```text
<VirtualHost *:443>
        ServerName firefly.mydomain.com
        ServerAdmin EMAIL
        ProxyPreserveHost On
        ProxyRequests Off
        SSLEngine On
        SSLCertificateFile      /etc/letsencrypt/live/.../fullchain.pem
        SSLCertificateKeyFile   /etc/letsencrypt/live/.../privkey.pem
        ProxyPass / http://127.0.0.1:8080/
        ProxyPassReverse / http://127.0.0.1:8080/
        ErrorLog ${APACHE_LOG_DIR}/finance_error.log
        CustomLog ${APACHE_LOG_DIR}/finance_access.log combined
        RequestHeader set X-Forwarded-Proto expr=%{REQUEST_SCHEME}
        RequestHeader set X-Forwarded-SSL expr=%{HTTPS}
</VirtualHost>
```

## Supported Docker environment variables

There are many environment variables that you can set in Firefly III. Just check out the [default env file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example) that lists them all.

