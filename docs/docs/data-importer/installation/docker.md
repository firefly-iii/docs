# Docker installation

## Single installation

To run the Data Importer using the following `run` command. You will start a web server on port 8081 that will allow you to use the data importer.  

Append the command with your Personal Access Token and Firefly III URL. The values you need and where to get them are explained on the **[Configuration page](configuration.md)**. Note that most people don't use Nordigen *and* Spectre values at the same time.

All environment variables are optional, but convenient.

```bash
docker run \
-e FIREFLY_III_ACCESS_TOKEN=(here) \
-e FIREFLY_III_URL=(here) \
-e NORDIGEN_ID=(here) \
-e NORDIGEN_KEY=(here) \
-e SPECTRE_APP_ID=(here) \
-e SPECTRE_SECRET=(here) \
-p 8081:8080 \
fireflyiii/data-importer:latest

```

!!! note
    Change `docker run` to `docker run -d` to make sure the image runs in the background.

!!! ip
    You may need to clear your cookies, browse to `/flush` or press \[Reauthenticate\] after changing the environment variables.

## Together with Firefly III

You can run the data importer in a Docker Compose combination with Firefly III. An **[example docker-compose.yml](https://github.com/firefly-iii/docker/blob/main/docker-compose-data.yml)** is available on GitHub.

- Notice how Firefly III uses the `.env` file. Use [the example file](https://github.com/firefly-iii/firefly-iii/blob/main/.env.example) from the Firefly III repository as a base.
- FIDI has its own configuration file `.fidi.env`. FIDI has its own [example file here](https://github.com/firefly-iii/data-importer/blob/main/.env.example).
- The MariaDB also has its own configuration file in `.db.env`. Check out [Docker Hub](https://hub.docker.com/_/mariadb) for more details.

The following things are important to remember:

* Make sure the MySQL password is *the same* in the `.env` and `.db.env` file.
* The `FIREFLY_III_URL` variable FIDI requires is `http://app:8080`.
