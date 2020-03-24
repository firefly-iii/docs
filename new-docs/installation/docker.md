# Docker

There are several ways of installing Firefly III using Docker, which will be detailed below. If you're new to Docker or are not sure how to use Docker please tread carefully.

**Frequently Asked Questions** and comments about docker can be found in the FAQ for Docker.

## Docker tags

Firefly III has several Docker tags. The instructions always assume `jc5x/firefly-iii:latest`. This is the latest stable release. Other tags are:

* `jc5x/firefly-iii:stable`. Same as `latest`. 
* `jc5x/firefly-iii:beta`. This tag will also include beta releases.
* `jc5x/firefly-iii:alpha`. This tag will also include alpha and beta releases.
* `jc5x/firefly-iii:release-x.x.x`. These are version specific tags and will include alpha, beta and stable releases.
* `jc5x/firefly-iii:develop`. Always the latest develop image. Maybe unstable.

All Docker tags are built for ARM, ARM64 and AMD64.

## Straight from Docker Hub

The instructions in this section will help you set up a single container.

With these commands you create one container: the container for Firefly III itself. If you do this, you should already have a MySQL or a Postgres database running somewhere. For example, when you have one central database container for all of your Docker containers. Without such a database container, Firefly III will **not** work.

Docker containers should only do one thing, which is why you need a separate database container.

### Create some volumes

These are used to persistently store uploaded files and exported data.

```
docker volume create firefly_iii_export
docker volume create firefly_iii_upload
```

### Start the container

Run this Docker command to start the Firefly III container. Make sure that you edit the environment variables to match your own database. You should really change the `APP_KEY` as well. It should be a random string of *exactly* 32 characters. You can generate such a key with the following command: `head /dev/urandom | LANG=C tr -dc 'A-Za-z0-9' | head -c 32`.

```
docker run -d \
-v firefly_iii_export:/var/www/firefly-iii/storage/export \
-v firefly_iii_upload:/var/www/firefly-iii/storage/upload \ 
-p 80:80 \
-e APP_KEY=CHANGEME_32_CHARS \
-e DB_HOST=CHANGEME \
-e DB_PORT=5432 \
-e DB_DATABASE=CHANGEME \
-e DB_USERNAME=CHANGEME \
-e DB_PASSWORD=CHANGEME \
jc5x/firefly-iii:latest
```

Firefly III assumes that you're using PostgreSQL, which a lot of people do. If you use MySQL, add the following environment variable to the command: `DB_CONNECTION=mysql` and make sure you change the port, `DB_PORT=3306`.

If you want to run the Docker container as another user, add `--user=`. Possible values are `user`, `user:group`,`uid`, `uid:gid`, `user:gid`, `uid:group`.

When executed this command will fire up a Docker container with Firefly III inside of it. It may take some time to start. If the database is set up properly it will automatically migrate and install a default database and you should be able to surf to your container (usually located at localhost) to use Firefly III.

## Docker Hub with automatic updates via docker compose

"Docker compose" is a tool that can automatically set up and link several Docker containers using just one command. This is easier than building the containers manually.

### Download compose file

Download [the Docker compose file](https://raw.githubusercontent.com/firefly-iii/docker/master/docker-compose.yml) located in the GitHub repository and place it somewhere convenient. It doesn't really matter where you place it.

Make sure you grab the raw file, and don't copy paste from your browser. The spaces in the file are very important. So use "Save As".

If you want to any container under another user, add the `user:` key under `image:`, with the same indentation. Possible values are `user`, `user:group`,`uid`, `uid:gid`, `user:gid`, `uid:group`.

### Download environment variables

Download [the environment variable file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example) from the GitHub repository and place in the same folder as the `docker-compose.yml`.

It is **important** that you rename the file to `.env`. You can see in the Docker compose file why this is. There is a reference to it: `env_file: .env`. If you don't name it `.env`, but something else, you must edit the Docker compose file.

### Start the container

Run the following command in the directory where both `docker-compose.yml` and `.env` are present.

```
docker-compose -f docker-compose.yml up -d
```

You can follow the progress of the installation (it can take a few minutes) by running this command:

```
docker container ls -f name=firefly_iii_app
```

This will list the Firefly III container. You can see the list starts with a container ID, for example `abc1234aab`. This container ID is probably different for you. 

Use the following command to follow the progress. To cancel, press Ctrl-C.

```
docker container logs -f <containerID>
```

Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your localhost.

You may see an error like this one: `Could not reliably determine the server's fully qualified domain name`. You can safely ignore it.

### Surf to Firefly III

You can now visit Firefly III at [http://localhost](http://localhost) or [http://docker-ip:port](http://docker-ip:port) if it is running on a custom port.

## Docker Hub with automatic updates via run/pull

This will let you manually start the two docker containers you need to run Firefly III. One is for the database, the second is for the app itself.

### Create some volumes

These are used to persistently store uploaded files and exported data.

```
docker volume create firefly_iii_export
docker volume create firefly_iii_upload
docker volume create firefly_iii_db
```

### Run command

Use the following run commands as a template.

Change the following variables in the commands you see in the block below. This is not mandatory but highly recommended.

 * `POSTGRES_PASSWORD` must be changed to a suitable database password of your choice.
 * `DB_PASSWORD` must be equal to this password.
 * `APP_KEY`

Keep in mind that `POSTGRES_PASSWORD` and `DB_PASSWORD` have to be *identical*. `POSTGRES_PASSWORD` is used to initialise the database, and `DB_PASSWORD` is used to connect to the database. So if these variables are different, it won't run.

If you want to run the Docker container as another user, add `--user=`. Possible values are `user`, `user:group`,`uid`, `uid:gid`, `user:gid`, `uid:group`.

Also keep in mind that `APP_KEY` must be *exactly* 32 characters long.

Then run the commands you see here.

To start the database:

```
docker run -d \
--name=firefly_iii_db \
-e POSTGRES_PASSWORD=firefly \
-e POSTGRES_USER=firefly \
-v firefly_iii_db:/var/lib/postgresql/data \
postgres:10
```

Then, to start Firefly III itself:

```   
docker run -d \
--name=firefly_iii_app \
--link=firefly_iii_db \
-e DB_HOST=firefly_iii_db \
-e DB_DATABASE=firefly \
-e DB_USERNAME=firefly \
-e DB_PORT=5432 \
-e DB_PASSWORD=firefly \
-e APP_KEY=CHANGEME_32_CHARS \
-p 80:80 \
-v firefly_iii_export:/var/www/firefly-iii/storage/export \
-v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
jc5x/firefly-iii:latest
```

You can follow the progress of the installation (it can take a few minutes) by running this command:

```
docker container ls -f name=firefly_iii_app
```   

This will list the Firefly III container. You can see the list starts with a container ID, for example `abc1234aab`. This container ID is probably different for you. 

Use the following command to follow the progress. To cancel, press Ctrl-C.

```   
docker container logs -f <containerID>
```

Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your localhost.

You may see an error like this one: `Could not reliably determine the server's fully qualified domain name`. You can safely ignore it.


### Surf to Firefly III

You can now visit Firefly III at `http://localhost` or `http://docker-ip:port` if it is running on a custom port.

## Docker and reverse proxies

In the `.env` file you downloaded you will find a variable called `TRUSTED_PROXIES` which must be set to either the reverse proxy machine or simply `**`. Set `APP_URL` to the URL Firefly III will be on. For example:

```
# ...
APP_URL=https://firefly.example.com
TRUSTED_PROXIES=**
# ...
```

On the command line, this would be something like:

```
-e DB_HOST=mysql \
-e DB_DATABASE=firefly \
-e DB_USERNAME=firefly \
-e DB_PORT=5432 \
-e DB_PASSWORD=somepw \
-e APP_KEY=CHANGEME_32_CHARS \
-e APP_URL=https://firefly.example.com \
-e TRUSTED_PROXIES=** \
```

Keep in mind that the `APP_URL` setting does **absolutely nothing** for your reverse proxy or anything! It's only used to determine the URL of Firefly III when Firefly III is incapable of doing so: when using the command line or when drafting emails. 

If you wish to enable SSL as well, Firefly III (or rather Laravel) respects the HTTP header `X-Forwarded-Proto`. Add this to your vhost file:

```
RequestHeader set X-Forwarded-Proto "https" 
```
   
If you are using Nginx add the following to your location block:

```
proxy_set_header X-Forwarded-Proto $scheme;
```

## Supported Docker environment variables

There are many environment variables that you can set in Firefly III. Just check out the [default env file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example) that lists them all. 
