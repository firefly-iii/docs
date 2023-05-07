# Docker installation

## Together with Firefly III

You can run the data importer in a Docker Compose combination with Firefly III. A **[docker-compose.yml](https://github.com/firefly-iii/docker/blob/main/docker-compose-data.yml)** is available on GitHub. Download the raw file and store it in a directory of your choice.

Then, download the environment variable files:

- Download the `.env` file for Firefly III [from the Firefly III repository](https://github.com/firefly-iii/firefly-iii/blob/main/.env.example). Save the raw file as `.env` next to the docker compose file.
- Download the `.importer.env` file from the [Data Importer repository](https://github.com/firefly-iii/data-importer/blob/main/.env.example) and save it as `.importer.env` next to the other files.
- The final file contains the database variables and can be downloaded from [the Docker repository](https://raw.githubusercontent.com/firefly-iii/docker/main/database.env). Save it as a new file called `.db.env`.

If you save all example files and change nothing, it will NOT YET work. You must do a few things: 

1. Change `DB_PASSWORD` in `.env` to something else. Pick a nice password.
2. Also change `MYSQL_PASSWORD` in `.db.env` to the SAME value
3. Change `FIREFLY_III_URL` in `.importer.env` to `http://app:8080`. Nothing else!

!!! note
    Change the password FIRST. If you change the password *after* you started Docker, it will complain about having no access.

Run the following command in the directory where all files are present.

```text
docker compose -f docker-compose.yml up -d --pull=always
```

You can follow the progress of the installation by running this command:

```text
docker compose -f docker-compose.yml logs -f
```

When the installation is done, Firefly III will thank you for installing it. Once you see this message, you can visit Firefly III. It will be running at your [localhost](http://localhost).

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
    Change `docker run` to `docker run -d` so the image runs in the background.

!!! ip
    You may need to clear your cookies, browse to `/flush` or press \[Reauthenticate\] after changing the environment variables.


