# How to import using the CLI

## Introduction

The Data Importer can import from the command line. Either by calling [the Docker container](../installation/docker.md), or by using your [self-managed instance](../installation/self-managed.md).

If you use the data importer just to import data (and the web interface is unused), please read the considerations below.

### Configuration

The following environment variable need to be set. This value must match the local directory. If you're using Docker, set it to `/import`.

```
IMPORT_DIR_ALLOWLIST=/your/directory
```

!!! note "Command line and Docker"
    When you're using Docker validate that you've mounted a directory with your files in it. This is something you must have done when you launched the Docker container, using for example `-v /path/to/my/files:/import`.

### Importing CSV, camt.053 files and JSON files

Importing CSV or camt.053 data requires two separate files: the actual content (CSV or XML) and a JSON configuration file. You have get this configuration file *first*, by doing a single import through the UI. Once you have the JSON configuration file you can use it to import any file from your bank, assuming the structure of the file is the same.

### Importing from GoCardless and Salt Edge

If you import from GoCardless or Salt Edge, you just need the JSON configuration file from the data importer. This can be a little confusing because GoCardless also offers JSON downloads of your raw transactions. All you need to import is the JSON file from the data importer itself. This will contain enough information to download everything from GoCardless or Salt Edge.

## Commands

### Import a single (CSV or camt.053) file

Use the following command to import a single file.

Remember that the JSON file is a reference to the data importer configuration file.

```bash
# self managed (file)
php artisan importer:import file.json file.xml

# self hosted (other sources)
php artisan importer:import file.json

# docker (file)
docker exec -it [container-id] php artisan importer:import file.json file.csv

# docker (other sources)
docker exec -it [container-id] php artisan importer:import file.json
```

The JSON file should always point to your JSON configuration file. If you are importing CSV or camt.053 files, replace `file.csv` with the full path to your file.

### Import a directory

Another import option is present to import everything in a directory. Here are the necessary commands.

```bash
# self managed
php artisan importer:auto-import /path/to/your/files

# docker
docker exec -it [container-id] php artisan importer:auto-import /import
```

- For each CSV or camt.053 file to import you need two files: `my-file.xml` (or `my-file.csv`) and `my-file.json`.
- CSV / camt.053 files without a JSON file will be ignored.
- JSON files without a CSV / camt.053 file will be tried as a GoCardless or Spectre import. Remember that the JSON file is a reference to the data importer configuration file, you do not need to download transactions yourself.

## Automatic imports using Docker

The following command will run the data importer once. It will try to import whatever it finds in the current directory, and then exit. This is fully automated. It works by mounting the current directory to `/import` and importing all files.

!!! warning "Different image"
    Notice how this command uses the `latest-cli` image. This is a different image than the `latest` image. If you start this with the wrong tag, t will start the web server as well, and it will never exit.

```bash
docker run \
--rm \
-v $PWD:/import \
-e FIREFLY_III_ACCESS_TOKEN= \
-e IMPORT_DIR_ALLOWLIST=/import \
-e FIREFLY_III_URL= \
-e WEB_SERVER=false \
fireflyiii/data-importer:latest-cli
```

!!! info "Personal Access Token"
    This little trick only works when you use a [personal access token](../how-to-configure.md) (as you can see in the command).

!!! info "GoCardless or Spectre information"
    If necessary, expand this command with the necessary GoCardless or Spectre keys and ID's.

## Exit codes and troubleshooting

By default, the importer also dumps the debug logs in the console. This can be useful to troubleshoot issues. The importer will also return an exit code. This can be used to determine if the import was successful or not automatically. For example, when you monitor the import remotely.

| Exit code | Meaning                                                    |
|-----------|------------------------------------------------------------|
| 0         | Successful import                                          |
| 1         | Generic error or unspecified problem during import         |
| 64        | Cannot connect to Firefly III                              |
| 65        | Invalid path provided                                      |
| 66        | Path is not allowed                                        |
| 67        | There are no files in the provided directory               |
| 68        | Cannot read configuration file                             |
| 69        | Cannot parse configuration file                            |
| 70        | The importable file cannot be found                        |
| 71        | The importable file cannot be read                         |
| 72        | Too many errors processing the data in the importable file |
| 73        | Nothing was imported during this run                       |
| 74        | Your GoCardless user agreement has expired                 |
