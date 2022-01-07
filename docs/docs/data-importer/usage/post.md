# POST commands

On this page you'll find instructions on how to use the import tool's POST commands to import data. This page assumes you're self-hosting the Firefly III data importer (**FIDI**), although these commands also work when using Docker.

!!! info
    The POST commands only work when you're using a Personal Access Token to authenticate.

For all examples, the following environment variables need to be set:

```
# the secret is required and must be at least 16 characters long
AUTO_IMPORT_SECRET=YOURSECRETHERE

# if this value is not set to true, you cannot upload files and impor tthem
CAN_POST_FILES=true

# if this value is not set to true, you cannot import a local directory
CAN_POST_AUTOIMPORT=true

# this value must match the local directory
IMPORT_DIR_WHITELIST=/your/directory
```

## Uploading files and importing them

CSV files: You can upload a CSV file and a JSON file to the CSV importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The CSV file and the JSON file must both be uploaded, after which the result will be a log of import attempt.

```bash
curl --location --request POST 'https://fidi/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'csv=@"/local/path/to/csv.csv"' \
--form 'json=@"/local/path/to/json.json"'
```

You can also import from Nordigen or Spectre, in which case a JSON file is enough:

```bash
curl --location --request POST 'https://fidi/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'json=@"/local/path/to/json.json"'
```

## Importing a local directory

This POST command allows you to import from a local directory, where you have your files ready to go. For example, you have a directory called `/my/bank/files/` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following:

```bash
curl --location --request POST 'https://fidi/autoimport?directory=/your/directory&secret=YOURSECRETHERE'
```

FIDI would then scroll through everything in the `/your/directory` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where FIDI can read them.
