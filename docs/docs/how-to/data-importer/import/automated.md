# How to do automated imports

## Preparation

First, do this:

1. [How to install the Data Importer](../installation/docker.md)
2. [How to import using the CLI](../advanced/cli.md)
3. [How to import using HTTP POST](../advanced/post.md)

## Configuration

Then, in the `.importer.env`-file:

- Add `IMPORT_DIR_ALLOWLIST=/import`
- Add a value for `FIREFLY_III_ACCESS_TOKEN`
- Add `NORDIGEN` or `SPECTRE` credentials (`NORDIGEN` is used for GoCardless).
- Set `CAN_POST_AUTOIMPORT=true`
- Set `CAN_POST_FILES=true`


And in the Docker Compose file from the installer, mount a local directory to `/import` in the container:

```yaml
volumes:
  - ./import:/import
```

## Run the import once

In the Data Importer, run through the import and download the configuration file. Put the JSON-file in the import folder you created and bound to the container. Be sure to name it `config.json`. The name can be anything though.

## Run another import, automatically

Run the following command:

```bash
docker exec firefly_iii_importer php artisan importer:import /import/config.json
```

Where `firefly_iii_importer` is the container ID, and where `config.json` is the configuration file from the previous step. This should run the import again.

## Make it a cron job

To make this a cron job, run `crontab -e` and add the following line:

```cronexp
0 22 * * * docker exec firefly_iii_importer php artisan importer:import /import/config.json
```

This particular cron job will run on the host system. To make the cron job for the data importer a part of the `docker-compose.yml` file as well, you'll need to do something more complex.

1. Specify the `AUTO_IMPORT_SECRET=` in the your .env file to some string of at least 16 characters. Visit this page for inspiration: https://www.random.org/passwords/?num=1&len=16&format=html&rnd=new. 

2. Replace [SECRET] with STATIC_CRON_TOKEN from .env files and [AUTO_IMPORT_SECRET] with whatever you specified above. Then, add the following entry to your Docker compose file:  

```
  cron_importer:
    image: alpine
    container_name: firefly_iii_cron
    restart: always
    command: sh -c "
      apk add tzdata
      && ln -s /usr/share/zoneinfo/${TZ} /etc/localtime
      && echo \"0 3 * * * wget -qO- http://app:8080/api/v1/cron/[SECRET];echo\" > /tmp/crontab_tmp 
      && echo -e \"40 2 * * * wget -qO - --post-data '' --header 'Accept":" application/json' 'http://importer:8080/autoimport?directory=/import&secret=[AUTO_IMPORT_SECRET]'\" >> /tmp/crontab_tmp 
      && crontab /tmp/crontab_tmp
      && rm /tmp/crontab_tmp
      && crond -f -L /dev/stdout"
    networks:
      - firefly_iii

```

3. Optionally, if your using Portainer, because the secrets are present in stack.env you can let Portainer replace the [] for you with: 

```
      && echo \"0 3 * * * wget -qO- http://app:8080/api/v1/cron/$STATIC_CRON_TOKEN;echo\" > /tmp/crontab_tmp 
      && echo -e \"40 2 * * * wget -qO - --post-data '' --header 'Accept":" application/json' 'http://importer:8080/autoimport?directory=/import&secret=$AUTO_IMPORT_SECRET'\" >> /tmp/crontab_tmp 
```