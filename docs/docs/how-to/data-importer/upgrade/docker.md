# Upgrade using Docker

This page gives you instructions on how to upgrade your Data Importer installation.

## Upgrade Docker compose

The default installation refers to Docker Compose. To upgrade, do this in the directory where you stored all the Docker Compose and environment files.

```bash
docker compose stop
docker compose rm -f
docker compose pull
docker compose -f docker-compose.yml up -d --remove-orphans
```

## Upgrade Docker

To upgrade a single container, stop and remove your container using these commands:

```bash
docker stop [container-id]
docker rm [container-id]
```

To find out which container is the Firefly III Data Importer, run `docker container ls -a` and look for `fireflyiii/data-importer`.

Then pull the new image using this command:

```bash
docker pull fireflyiii/data-importer:latest
```

Create it again by running the commands from [the installation how-to guide](../installation/docker.md).
