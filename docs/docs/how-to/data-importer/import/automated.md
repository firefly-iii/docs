# How to do automated imports

## Preparation

First, do this:

1. [How to install the Data Importer](../installation/docker.md)
2. [How to import using the CLI](../advanced/cli.md)
3. [How to import using HTTP POST](../advanced/post.md)

## Configuration

Then, in the `.importer.env`-file:

- Add `IMPORT_DIR_ALLOWLIST=/import`
- Add value for `FIREFLY_III_ACCESS_TOKEN`
- Add `NORDIGEN` or `SPECTRE` credentials

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

Add the following entry to your Docker compose file:


```
  cron_importer:
    image: alpine
    container_name: firefly_iii_import_cron
    restart: always
    command: sh -c "echo -e \"0 3 * * * wget -qO- http://app:8080/api/v1/cron/[SECRET]\" > /tmp/crontab_tmp && echo -e \"40 2 * * * wget -qO - --post-data '' --header 'Accept":" application/json' 'http://importer:8080/autoupload?directory=/import&secret=[SECRET]'\" >> /tmp/crontab_tmp && crontab /tmp/crontab_tmp && crond -f -L /dev/stdout && rm /tmp/crontab_tmp"
    networks:
      - firefly_iii

```
