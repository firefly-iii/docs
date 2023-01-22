# Command line

On this page you'll find instructions on how to use the Firefly III Data Importer's (**FIDI**) command line.

For all examples, the following environment variable need to be set:

```
# this value must match the local directory
IMPORT_DIR_WHITELIST=/your/directory
```

## Importing a single file

Use the following command to import a single file:

```bash
# self hosted (CSV)
php artisan importer:import file.json file.csv

# self hosted (other sources)
php artisan importer:import file.json

# docker (CSV)
docker exec -it <container> php artisan importer:import file.json file.csv

# docker (other sources)
docker exec -it <container> php artisan importer:import file.json
```

The JSON file should always point to your JSON configuration file.

If you are importing CSV files, replace `file.csv` with the path to your CSV file.

When you're using Docker, and you're not using the [instant import commands](../install/docker.md) (see ahead as well) make sure that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

## Importing a directory

Use the following command to import a full directory:

```bash
#self hosted
php artisan importer:auto-import /path/to/your/files

# docker
docker exec -it <container> php artisan importer:auto-import /import
```

- For each CSV file to import you need two files: `my-file.csv` and `my-file.json`. 
- CSV files without a JSON file will be ignored.
- JSON files without a CSV file will be tried as a Nordigen or Spectre import

When you're using Docker, and you're not using the [instant import commands](../install/docker.md) make sure that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

## Run automatic imports

This command will launch FIDI which will then try to import whatever it finds in the current directory. This is fully automated. It works by mounting the current directory to `/import` and importing all files.

!!! info
    This little trick only works when you use a [personal access token](configure.md).

```bash
docker run \
--rm \
-v $PWD:/import \
-e FIREFLY_III_ACCESS_TOKEN= \
-e IMPORT_DIR_WHITELIST=/import \
-e FIREFLY_III_URL= \
-e WEB_SERVER=false \
fireflyiii/data-importer:latest
```

If necessary, expand this command with the necessary Nordigen or Spectre keys and ID's.