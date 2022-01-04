# POST commands

On this page you'll find instructions on how to use the import tool's POST commands to import data. This page assumes you're self-hosting the Firefly III data importer (**FIDI**), although these commands also work when using Docker.

!!! info
    The POST commands only work when you're using a Personal Access Token to authenticate.

## Uploading files and importing them

CSV files: You can upload a CSV file and a JSON file to the CSV importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The CSV file and the JSON file must both be uploaded, after which the result will be a log of import attempt.

```bash
curl --location --request POST 'https://your-data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'csv=@"/path/to/csv.csv"' \
--form 'json=@"/path/to/json.json"'
```

You can also import from Nordigen or Spectre, in which case a JSON file is enough:

```bash
curl --location --request POST 'https://your-data-importer.example.com/autoupload?secret=YOURSECRETHERE' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'json=@"/path/to/json.json"'
```

## Importing a local directory

This POST command allows you to import from a local directory, where you have your files ready to go. For example, you have a directory called `/my/bank/files/` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following:

```
POST https://your-csv-importer.example.com/autoimport?directory=/my/bank/files
```

FIDI would then scroll through everything in the `/my/bank/files` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where FIDI can read them.

This command will only accept directories (and subdirectories) from a pre-set directory. Check out the `.env.example` file and find the `IMPORT_DIR_WHITELIST` setting.
