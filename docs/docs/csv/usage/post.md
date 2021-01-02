# POST

On this page you'll find instructions on how to use the import tool's POST command to import data.

This page assumes you're self-hosting the CSV import tool, although these commands also work when using Docker.

!!! info
    The POST command only works when you're using a Personal Access Token to authenticate.

This POST command 

## Importing multiple files

You can submit a POST request to the following URL to make the CSV importer import stuff:

`POST http://your-csv-importer/autoimport`

Optionally, provide the `directory` argument to tell the CSV importer from which directory to import from.

The result will be that the CSV importer imports whatever is in that directory.