# Command line

On this page you'll find instructions on how to use the import tool's command line.

This page assumes you're self-hosting the CSV import tool, although these commands also work when using Docker.

## Importing a single file.

Use the following command to import a single file:

```bash
# self hosted
php artisan importer:import file.csv file.json

# docker
docker exec -it <container> php artisan importer:import file.csv file.json
```

Replace `file.csv` with the path to your CSV file, and the JSON file should point (obviously) to your JSON file.

When you're using Docker, and you're not using the [instant import commands](../install/docker.md) make sure that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

## Importing a directory

Use the following command to import a full directory:

```bash
#self hosted
php artisan importer:auto-import /path/to/your/files

# docker
docker exec -it <container> php artisan importer:auto-import /import
```

In this directory, each file that must be imported is expected to have the extension `csv`, and the accompanying configuration file must have the same file name, except for the extension: that has to be `json`. So `my-file.csv` MUST be accompanied by `my-file.json` for this command to work.

When you're using Docker, and you're not using the [instant import commands](../install/docker.md) make sure that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.