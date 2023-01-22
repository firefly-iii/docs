# Uploading files

On this page you'll find instructions on how to upload files into the Firefly III Data Importer (**FIDI**).

## Uploading CSV files

If you want to import from CSV files, you must upload them first. Always upload the CSV file from your bank directly.

### Invalid CSV files

If the file contains any lines before the data starts, you must remove them manually. If there are extra headers (for example every 100 rows) you'll have to delete those too.

## Uploading a configuration file

All importers support a configuration file. They contain instructions for the import process. For CSV importing, you can find a lot of common config files in the [configuration file repository](https://github.com/firefly-iii/import-configurations).

If you want to know more about how the JSON file works, check out [this help page about the JSON configuration file](../help/json.md).

After every (successful) import you get the option to download an automatically made config file to make the next import go more smoothly.

## Pre-uploaded configuration files

It's possible to upload configuration files to a special directory so these files are easily accessible. [Would you like to know more?](../help/config.md)

## FAQ

If the configuration file or uploading files is giving you problems, check out [the FAQ](../help/faq.md).