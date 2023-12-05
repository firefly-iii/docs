### Introduction

You can use the data importer's POST commands to import data. This page assumes you're self-hosting the data importer, although these commands also work when using Docker.

!!! info "Personal Access Token required"
    The POST commands only work when you're using a Personal Access Token to authenticate, set in your `.env`-file or environment variables.

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

### Uploading files and importing them

CSV+camt.053 files: You can upload a file and a JSON file to the data importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The file and the JSON file will both be uploaded, after which the result will be a log of import attempt. Remember that the JSON file is a reference to the data importer configuration file. You do not need to download transactions from GoCardless or Salt Edge.

```bash
curl --location --request POST 'https://data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'importable=@"/local/path/to/csv.csv"' \
--form 'json=@"/local/path/to/json.json"'
```

You can also import from GoCardless or Spectre, in which case a JSON file is enough:

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
