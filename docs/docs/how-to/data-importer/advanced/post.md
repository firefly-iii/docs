# How to import using HTTP POST

## Introduction

You can use the data importer's POST commands to import data. This page assumes you're self-managing the data importer, although these commands also work when using Docker.

!!! info "Personal Access Token required"
    The POST commands only work when you're using a Personal Access Token to authenticate, set in your `.env`-file or environment variables. You add this token to the Authentication header.

!!! info "GoCardless or Spectre information"
    You cannot submit GoCardless or Spectre information using the POST commands, the data importer must already be configured with them.

For all examples, the following environment variables need to be set:

```
# the secret is required and must be at least 16 characters long
AUTO_IMPORT_SECRET=YOURSECRETHERE

# if this value is not set to true, you cannot upload files and import them
CAN_POST_FILES=true

# if this value is not set to true, you cannot import a local directory
CAN_POST_AUTOIMPORT=true

# this value must match the local directory
IMPORT_DIR_ALLOWLIST=/your/directory
```

## Uploading files and importing them

All of these commands require a working Personal Access token (`Authorization: Bearer ey....`). Read more about this in the [API documentation](../../firefly-iii/features/api.md) under "Personal Access Tokens".

### CSV and camt.053

You can upload a file and a JSON file to the data importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The file and the JSON file will both be uploaded, after which the result will be a log of import attempt. Remember that the JSON file is a reference to the data importer configuration file. You do not need to download transactions from GoCardless or Salt Edge. The `Bearer ` value is static and must not be changed, but `ey....` must be replaced with a Personal Access Token.

```bash
curl --location --request POST 'https://data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'importable=@"/local/path/to/csv.csv"' \
--form 'json=@"/local/path/to/json.json"'
```

### GoCardless and Spectre

You can also import from GoCardless or Spectre, in which case a JSON file is enough. The `Bearer ` value is static and must not be changed, but `ey....` must be replaced with a Personal Access Token.

```bash
curl --location --request POST 'https://data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'json=@"/local/path/to/json.json"'
```

### Importing a local directory

This POST command allows you to import from a local directory, where you have your files ready to go. For example, you have a directory called `/import` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following.

Remember that the JSON file is a reference to the data importer configuration file.

```bash
curl --location --request POST 'https://data-importer.example.com/autoimport?directory=/import&secret=YOURSECRETHERE'
```

The data importer will scroll through everything in the `/import` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where the data importer can read them.

In order to set this up, you need the following environment variables:

```
CAN_POST_AUTOIMPORT=true
AUTO_IMPORT_SECRET=YOURSECRETHERE
IMPORT_DIR_ALLOWLIST=/import
```

1. You must set `CAN_POST_AUTOIMPORT=true` or the command is disabled and will never work.
2. Without a 16-character secret in `AUTO_IMPORT_SECRET` it will not work either. [Generate one using this page](https://www.random.org/passwords/?num=1&len=16&format=html&rnd=new).
3. This denotes the directory from which you are allowed to import. Any subdirectory will also be accepted by the POST command. So, you could set this to `/import` and use the POST command to import from `/import/some/other/directory`.

An optional variable is:

```
FALLBACK_IN_DIR=false
```

Each file you import must be accompanied by a JSON file that contains the configuration for the data importer. For example:

```
bank.csv
bank.json
another_csv_file.csv
another_csv_file.json
some_xml_file.xml
some_xml_file.json
```

BUT, if you set `FALLBACK_IN_DIR=true`, you can create a single `_fallback.json` file, and it will be used for all files in the directory that do not have an accompanying JSON file. Example:

```
_fallback.json
bank.csv
another_csv_file.csv
another_csv_file.json
no_config.csv
some_xml_file.xml
some_xml_file.json
```

In the list above, both `bank.csv` and `no_config.csv` will be imported using the `_fallback.json` file.
