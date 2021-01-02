# Docker

There are several ways of installing Firefly III using Docker, which will be detailed below. If you're new to Docker or are not sure how to use Docker please tread carefully.

!!! info
    Also read the **[Frequently Asked Questions](../faq/docker.md)**.

!!! info
    🎥 When you're a visual learner, please make sure to check out David Burgess' [excellent installation tutorial on YouTube](https://dbtechreviews.com/2020/08/firefly-iii-installed-on-docker-self-hosted-personal-finance/).

## Docker tags

Firefly III has several Docker tags. The instructions always assume `jc5x/firefly-iii:latest`. This is the latest stable release. Other tags are:

* `jc5x/firefly-iii:beta`. This tag contains beta releases.
* `jc5x/firefly-iii:alpha`. This tag contains alpha releases.
* `jc5x/firefly-iii:develop`. Always the latest develop image. Maybe unstable.

All Docker tags are built for ARMv7, ARM64 and AMD64. ARMv6 is not included, so these images will *not* work on the Raspberry Pi Zero, Raspberry Pi 1 (A+B) or Raspberry Pi Compute Module.

## Straight from Docker Hub

The instructions in this section will help you set up a single container.

With these commands you create one container: the container for Firefly III itself. If you do this, you should already have a MySQL or a Postgres database running somewhere. For example, when you have one central database container for all of your Docker containers. Without such a database container, Firefly III will **not** work.

Docker containers should only do one thing, which is why you need a separate database container.

### Create some volumes

These are used to persistently store uploaded files and exported data.

```text
docker volume create firefly_iii_upload
```

### Start the container

Run this Docker command to start the Firefly III container. Make sure that you edit the environment variables to match your own database. You should really change the `APP_KEY` as well. It should be a random string of _exactly_ 32 characters. You can generate such a key with the following command: `head /dev/urandom | LANG=C tr -dc 'A-Za-z0-9' | head -c 32`.

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
jc5x/firefly-iii:latest
```

Firefly III assumes that you're using MySQL, which a lot of people do. If you use PostgreSQL, change the following environment variable in the command: `DB_CONNECTION=pgsql` and make sure you change the port, `DB_PORT=5432`.

When executed this command will fire up a Docker container with Firefly III inside of it. It may take some time to start. If the database is set up properly it will automatically migrate and install a default database and you should be able to surf to your container (usually located at [localhost](http://localhost)) to use Firefly III.

!!! info
    The Apache server inside this Docker image will run as `www-data`. This will be reflected by the files you upload: they will be owned by `www-data`. You can change the user the image runs under but that user must exist inside the Docker image or things may not work as expected.

## Using Docker Compose

"Docker Compose" is a tool that can automatically set up and link several Docker containers using just one command. This is easier than running the commands manually.

### Download compose file

Download [the Docker compose file](https://raw.githubusercontent.com/firefly-iii/docker/main/docker-compose.yml) located in the GitHub repository and place it somewhere convenient. It doesn't really matter where you place it, but I suggest a dedicated directory.

Make sure you grab the raw file, and don't copy paste from your browser. The spaces in the file are very important. So use "Save As".

!!! info
    The Apache server inside this Docker image will run as `www-data`. This will be reflected by the files you upload: they will be owned by `www-data`. You can change the user the image runs under but that user must exist inside the Docker image or things may not work as expected.

### Download environment variables

Next step is to download [the environment variable file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example) from the GitHub repository and place in the same folder as the `docker-compose.yml`.

It is **important** that you rename the file to `.env`. You can see in the Docker compose file why this is. There is a reference to it: `env_file: .env`. If you don't name it `.env`, but something else, you must edit the Docker compose file.

### Start the container

Run the following command in the directory where both `docker-compose.yml` and `.env` are present.

```text
docker-compose -f docker-compose.yml up -d
```

You can follow the progress of the installation (it can take a few minutes) by running this command:

```text
docker container ls -f name=fireflyiii
```

This will list the Firefly III containers. You can see the list starts with a container ID, for example `abc1234aab`. This container ID is probably different for you.

Use the following command to follow the progress. To cancel, press Ctrl-C.

```text
docker container logs -f <containerID>
```

When the installation is done, Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your [localhost](http://localhost).

You may see an error like this one: `Could not reliably determine the server's fully qualified domain name`. You can safely ignore it.

### Surf to Firefly III

You can now visit Firefly III at [http://localhost](http://localhost) or [http://docker-ip:port](http://docker-ip:port) if it is running on a custom port.

## Docker and reverse proxies

In the `.env` file you downloaded you will find a variable called `TRUSTED_PROXIES` which must be set to either the reverse proxy machine or simply `**`. Set `APP_URL` to the URL Firefly III will be on. For example:

```text
# ...
APP_URL=https://firefly.example.com
TRUSTED_PROXIES=**
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
```

## Supported Docker environment variables

There are many environment variables that you can set in Firefly III. Just check out the [default env file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example) that lists them all.

