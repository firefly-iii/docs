# Docker

There are a few ways to use the data importers with Docker.

There are some *gotchas* when it comes to Docker and IP addresses, so please check out the instructions at the bottom of the page.

## Run as a web server

This is the easiest way to run any importer. Simply use the following run command to launch the importer:

### Spectre

```bash
docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e SPECTRE_APP_ID= \
-e SPECTRE_SECRET= \
-p 8081:8080 \
fireflyiii/spectre-importer:latest
```

### YNAB

```bash
docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e YNAB_API_CODE= \
-p 8081:8080 \
fireflyiii/ynab-importer:latest
```

### bunq

```bash
docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e BUNQ_API_CODE= \
-e BUNQ_API_URL=https://api.bunq.com \
-p 8081:8080 \
fireflyiii/bunq-importer:latest
```

By running this script, you will start a web server on port 8081 that will allow you to import data. You should append the command with your Personal Access Token, Firefly III URL and the necessary tokens.

### Use the pre-defined script

Use `run-hosted.sh` to make it easier to manage the parameters.

- [run-hosted.sh for Spectre](scripts/run-hosted-spectre.sh.txt)
- [run-hosted.sh for YNAB](scripts/run-hosted-ynab.sh.txt)
- [run-hosted.sh for bunq](scripts/run-hosted-bunq.sh.txt)

### Append "-d"

Change `docker run` to `docker run -d` to make sure the image runs in the background.

## Run inline

This command will launch the importer which will then try to import everything based on the config file in `/home/james/config.json`. This is fully automated.

### Spectre

```bash
docker run \
--rm \
-v /home/james/config.json:/import/spectre.json \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e SPECTRE_APP_ID= \
-e SPECTRE_SECRET= \
-e WEB_SERVER=false \
fireflyiii/spectre-importer:latest
```

### YNAB

```bash
docker run \
--rm \
-v /home/james/config.json:/import/ynab.json \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e YNAB_API_CODE= \
-e WEB_SERVER=false \
fireflyiii/ynab-importer:latest
```

### bunq

```bash
docker run \
--rm \
-v /home/james/config.json:/import/bunq.json \
-e FIREFLY_III_ACCESS_TOKEN= \
-e FIREFLY_III_URL= \
-e BUNQ_API_CODE= \
-e BUNQ_API_URL=https://api.bunq.com \
-e WEB_SERVER=false \
fireflyiii/bunq-importer:latest
```

The advantage of this piece of code is that with a working configuration file, you can automate the import.

This can also be made easier for yourself:

### Use pre-defined script

Use `run-inline.sh` to make it easier to manage your tokens.

- [run-inline.sh for Spectre](scripts/run-inline-spectre.sh.txt)
- [run-inline.sh for YNAB](scripts/run-inline-ynab.sh.txt)
- [run-inline.sh for bunq](scripts/run-inline-bunq.sh.txt)

## Docker and IP addresses

If you run the importer, the IP address you need to contact Firefly III isn't 127.0.0.1, even when you run Firefly III on the same machine. Docker uses an internal network. There's a good chance your Firefly III installation has an IP address that starts with 172.17. You can find out the internal IP address of Firefly III using this command:

```bash
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER
```

Instead of `CONTAINER`, use the container ID of your Firefly III installation.

If your Firefly III installation is online, you can also use the web address. If you want to, you can generate a Personal Access Token on the [demo site](https://demo.firefly-iii.org/) and use the demo site as a test. Keep in mind that the demo site is public to everybody so everyone will see what you import.

### Example scripts for a full setup

The commands below set up a basic MariaDB instance and an installation of Firefly III. It will then start the YNAB importer. This is just to show you what the relationship is between these different Docker images.

```bash
# run a basic MariaDB instance.
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=super_secret -e MYSQL_DATABASE=fireflyiii -d mariadb:latest

# get the IP of the MariaDB instance:
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mariadb

# run a basic Firefly III instance (update the IP of the database if necessary)
docker run -d \
--name fireflyiii \
-v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
-p 8082:8080 \
-e APP_KEY=123456789012345678901234567890aa \
-e DB_HOST=172.17.0.2 \
-e DB_CONNECTION=mysql \
-e DB_PORT=3306 \
-e DB_DATABASE=fireflyiii \
-e DB_USERNAME=root \
-e DB_PASSWORD=super_secret \
fireflyiii/core:latest

# Chase the log files to see when Firefly III is ready to go:
docker logs -f $(docker container ls -a -f name=fireflyiii --format="{{.ID}}")

# get Firefly III IP address:
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' $(docker container ls -a -f name=fireflyiii --format="{{.ID}}")

# Adapt run-inline.sh and run it using your personal access token and YNAB API token
# You can find it here:
# - https://github.com/firefly-iii/spectre-importer-docker/blob/main/run-inline.sh
# - https://github.com/firefly-iii/ynab-importer-docker/blob/main/run-inline.sh
# - https://github.com/firefly-iii/bunq-importer-docker/blob/main/run-inline.sh

./run-inline.sh

```
