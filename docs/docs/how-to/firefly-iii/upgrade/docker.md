# How to upgrade Firefly III

Firefly III can upgrade itself from very old versions, even back from 4.7.x. In some cases the upgrade process is destructive. It will remove transactions, delete accounts or clean up data.

!!! warning
    Always make a backup of your database and installation before you upgrade, especially when you upgrade major versions.

## Docker Compose

To update the container run these commands:

```bash
docker compose stop
docker compose rm -f
docker compose pull
docker compose -f docker-compose.yml up -d --remove-orphans
```

If you re-download `docker-compose.yml`, keep in mind that the database version in the Docker composer may have been updated and that this version is not compatible with your current version (ie MariaDB 10 vs MariaDB 11).

## Straight from Docker Hub

To upgrade, stop and remove your container using these commands:

```bash
docker stop <container>
docker rm <container>
```

To find out which container is Firefly III, run `docker container ls -a`.

```bash
docker pull fireflyiii/core:latest
```

And then create it again by running the command from the installation guide. The container should upgrade itself, so it can take some time for it to start. You can save the command you've used to start the container for quicker upgrade.

