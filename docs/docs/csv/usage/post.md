# POST commands

On this page you'll find instructions on how to use the import tool's POST command to import data. This page assumes you're self-hosting the CSV import tool, although these commands also work when using Docker.

!!! info
    The POST command only works when you're using a Personal Access Token to authenticate.

## Importing a local directory

This POST command allows you to import from a local directory, where you have a CSV file and a JSON configuration ready to go. For example, you have a directory called `/my/bank/files/` where `bank.csv` and `bank.json` are ready to go. In that case, you could do the following:

```
POST https://your-csv-importer.example.com/autoimport?directory=/my/bank/files
```

The CSV importer would then scroll through everything in the `/my/bank/files` directory and import whatever is there. In other words, the POST command can trigger the import of files already present somewhere in a place where the CSV importer can read them.

!!! warning
    If PHP can read from the directory you point it to, it will try to do so. Although it will search for non-executable pairs of files (ie. CSV and JSON) it will pick up whatever is there. This is a security risk, so make sure nobody else can access your CSV importer.

The command doesn't support uploading files through this command (yet).
