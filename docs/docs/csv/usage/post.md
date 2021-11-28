# POST commands

!!! warning
    The Firefly III CSV importer is due to be replaced by the universal [Data Importer](https://docs.firefly-iii.org/data-importer/). Please migrate at your earliest convenience.

On this page you'll find instructions on how to use the import tool's POST commands to import data. This page assumes you're self-hosting the CSV import tool, although these commands also work when using Docker.

!!! info
    The POST commands only work when you're using a Personal Access Token to authenticate.

## Uploading files and importing them

You can upload a CSV file and a JSON file to the CSV importer to have it imported into your Firefly III installation automatically. To illustrate how this works, here's a CURL request that works.

The CSV file and the JSON file must both be uploaded, after which the result will be a log of import attempt.

```bash
curl --location --request POST 'https://your-csv-importer.example.com/autoupload' \
--header 'Accept: application/json' \
--header 'Authorization: Bearer ey....' \
--form 'csv=@"/path/to/csv.csv"' \
--form 'json=@"/path/to/json.json"'
```


## Importing a local directory

This POST command allows you to import from a local directory, where you have a CSV file and a JSON configuration ready to go. For example, you have a directory called `/my/bank/files/` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following:

```
POST https://your-csv-importer.example.com/autoimport?directory=/my/bank/files
```

The CSV importer would then scroll through everything in the `/my/bank/files` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where the CSV importer can read them.

!!! warning
    If PHP can read from the directory you point it to, it will try to do so. Although it will search for non-executable pairs of files (ie. CSV and JSON) it will pick up whatever is there. This is a security risk, so make sure nobody else can access your CSV importer.

