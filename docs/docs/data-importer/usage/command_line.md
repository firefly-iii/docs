# Command line

On this page you'll find instructions on how to use the Firefly III Data Importer's (**FIDI**) command line.

## Importing a single file

Use the following command to import a single file:

```bash
# self hosted (CSV)
php artisan importer:import file.csv file.json

# self hosted (other sources)
php artisan importer:import file.json

# docker (CSV)
docker exec -it <container> php artisan importer:import file.csv file.json

# docker (other sources)
docker exec -it <container> php artisan importer:import file.json
```

If you are importing CSV files, replace `file.csv` with the path to your CSV file.

The JSON file should always point to your JSON configuration file.

When you're using Docker, and you're not using the [instant import commands](../install/docker.md) make sure that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

## Importing a directory

Use the following command to import a full directory (CSV only):

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
