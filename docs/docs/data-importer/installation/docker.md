# Docker

TODO patch me up

There are a few ways to use the Firefly III Data Importer (**FIDI**) and Docker. There are some *gotchas* when it comes to Docker and IP addresses, so please check out the instructions at the bottom of the page.

FIDI uses the Firefly III API. Read more about the API in [the Firefly III documentation](../../firefly-iii/api.md).

!!! warning
    You should really read the [configuration page](configure.md) first, to know which variables you need.

To run FIDI, use the following run command. How to get the the values of the variables is explained on the [configuration](configure.md) page.

```bash
docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN=(here) \
-e FIREFLY_III_URL=(here) \
-e NORDIGEN_ID=(here) \
-e NORDIGEN_KEY=(here) \
-e SPECTRE_APP_ID=(here) \
-e SPECTRE_SECRET=(here) \
-p 8081:8080 \
fireflyiii/data-importer:latest

```

!!! info
    Change `docker run` to `docker run -d` to make sure the image runs in the background.

By running this script, you will start a web server on port 8081 that will allow you to use FIDI. You should append the command with your Personal Access Token and Firefly III URL. You should really read the [configuration page](configure.md) on how to get these values.

All environment variables are optional, but convenient.

!!! important
    You may need to clear your cookies, browse to `/flush` or press \[Reauthenticate\] after changing the environment variables.

## Together with Firefly III

The example Docker Compose file below shows you how to manage both FIDI and Firefly III in one Docker Compose file. This has the advantage that they will be able to communicate easily.

- Notice how Firefly III uses the `.env` file. Use [the example file](https://github.com/firefly-iii/firefly-iii/blob/main/.env.example) from the Firefly III repository as a base.
- FIDI has its own configuration file `.fidi.env`. FIDI has its own [example file here](https://github.com/firefly-iii/data-importer/blob/main/.env.example).
- The MariaDB also has its own configuration file in `.db.env`. Check out [Docker Hub](https://hub.docker.com/_/mariadb) for more details.


Some helpful hints:

* Make sure the MySQL password is the same in the `.env` and `.db.env` file.
* The `FIREFLY_III_URL` variable FIDI requires is `http://app:8080`.


```yaml
version: '3.3'

services:
  app:
    image: fireflyiii/core:latest
    restart: always
    volumes:
      - firefly_iii_upload:/var/www/html/storage/upload
    env_file: .env
    ports:
      - 80:8080
    depends_on:
      - db
  db:
    image: mariadb    
    restart: always
    env_file: .db.env
    volumes:
      - firefly_iii_db:/var/lib/mysql
  fidi:
    image: fireflyiii/data-importer:latest
    restart: always
    env_file: .fidi.env
    ports:
      - 8081:8080
    depends_on:
      - app
volumes:
  firefly_iii_upload:
  firefly_iii_db:
```


