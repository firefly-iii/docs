# Automation

You can automate the data importer in various ways.  

## Automated imports over the command line

Firefly III can import from the command line. Either by calling [the Docker container](../installation/docker.md), or by using your [self-hosted instance](../installation/self-hosted.md).

### Introduction

The following environment variable need to be set. This value must match the local directory. If you're using Docker, set it to `/import`. 

```
IMPORT_DIR_ALLOWLIST=/your/directory
```

!!! note "Command line and Docker"
    When you're using Docker validate that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

### Import a single (CSV or camt.053) file

Use the following command to import a single file:

```bash
# self hosted (file)
php artisan importer:import file.json file.xml

# self hosted (other sources)
php artisan importer:import file.json

# docker (file)
docker exec -it [container-id] php artisan importer:import file.json file.csv

# docker (other sources)
docker exec -it [container-id] php artisan importer:import file.json
```

The JSON file should always point to your JSON configuration file. If you are importing CSV or camt.053 files, replace `file.csv` with the full path to your file.

### Importing a directory

Another import option is present to import everything in a directory. Here are the necessary commands. 

```bash
# self hosted
php artisan importer:auto-import /path/to/your/files

# docker
docker exec -it [container-id] php artisan importer:auto-import /import
```

- For each CSV or camt.053 file to import you need two files: `my-file.xml` (or `my-file.csv`) and `my-file.json`.
- CSV / camt.053 files without a JSON file will be ignored.
- JSON files without a CSV / camt.053 file will be tried as a Nordigen or Spectre import

### Automatic imports using Docker

The following command will the data importer, and it will try to import whatever it finds in the current directory. This is fully automated. It works by mounting the current directory to `/import` and importing all files.

```bash
docker run \
--rm \
-v $PWD:/import \
-e FIREFLY_III_ACCESS_TOKEN= \
-e IMPORT_DIR_ALLOWLIST=/import \
-e FIREFLY_III_URL= \
-e WEB_SERVER=false \
fireflyiii/data-importer:latest
```

!!! info "Personal Access Token"
    This little trick only works when you use a [personal access token](../installation/configuration.md).

!!! info "Nordigen or Spectre information"
    If necessary, expand this command with the necessary Nordigen or Spectre keys and ID's.

## Automated imports using the web (POST)

## Introduction

You can use the data importer's POST commands to import data. This page assumes you're self-hosting the data importer, although these commands also work when using Docker.

!!! info "Personal Access Token required"
    The POST commands only work when you're using a Personal Access Token to authenticate.

!!! info "Nordigen or Spectre information"
    You cannot submit Nordigen or Spectre information using the POST commands, the data importer must already be configured with them.

For all examples, the following environment variables need to be set:

```
# the secret is required and must be at least 16 characters long
AUTO_IMPORT_SECRET=YOURSECRETHERE

# if this value is not set to true, you cannot upload files and impor tthem
CAN_POST_FILES=true

# if this value is not set to true, you cannot import a local directory
CAN_POST_AUTOIMPORT=true

# this value must match the local directory
IMPORT_DIR_ALLOWLIST=/your/directory
```

## Uploading files and importing them

CSV+camt.053 files: You can upload a file and a JSON file to the data importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The file and the JSON file will both be uploaded, after which the result will be a log of import attempt.

```bash
curl --location --request POST 'https://data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'importable=@"/local/path/to/csv.csv"' \
--form 'json=@"/local/path/to/json.json"'
```

You can also import from Nordigen or Spectre, in which case a JSON file is enough:

```bash
curl --location --request POST 'https://data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'json=@"/local/path/to/json.json"'
```

## Importing a local directory

This POST command allows you to import from a local directory, where you have your files ready to go. For example, you have a directory called `/import` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following:

```bash
curl --location --request POST 'https://data-importer.example.com/autoimport?directory=/import&secret=YOURSECRETHERE'
```

The data importer will scroll through everything in the `/import` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where the data importer can read them.
