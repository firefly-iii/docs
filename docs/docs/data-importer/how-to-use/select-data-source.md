# Select a data source

## Introduction

To import data first select your data source. You have the following choices:

1. Import from CSV files
2. Import from Nordigen
3. Import from Spectre

TODO screenshot

## Import a CSV file

You have to upload the CSV file you wish to import. Optionally, you can upload a "configuration file". The configuration file is used to pre-set the import configuration, so you don't have to do it manually all the time.

If the file contains any lines before the data starts, you must remove them manually. If there are extra headers (for example every 100 rows) you'll have to delete those too.

There may be a standard configuration file for your bank in **[this GitHub repository](https://github.com/firefly-iii/import-configurations)**. If not, it is OK to continue without a configuration file.

TODO screenshot

If you continue, you will end up at [the configuration screen](configure-import.md).

## Import from Nordigen

If you import from Nordigen, you can also optionally upload a Nordigen configuration file. Also, you may have to enter your Nordigen ID and Nordigen Key, if they are not part of the data importer's environment variables.

Read the page about [Nordigen and Spectre](../faq/spectre-and-nordigen.md) for more information about Nordigen.

TODO screenshot upload

TODO screenshot config variables

After these settings, you must select your country and your bank of choice.

TODO screenshot

TODO screenshot

If you continue, you will end up at [the configuration screen](configure-import.md).

## Import from Spectre

If you import from Nordigen, you can also optionally upload a Nordigen configuration file. Also, you may have to enter your Nordigen ID and Nordigen Key, if they are not part of the data importer's environment variables.

Read the page about [Nordigen and Spectre](../faq/spectre-and-nordigen.md) for more information about Nordigen.

TODO screenshot upload

TODO screenshot config variables

After these settings, you must select an existing connection, or create a new one.

TODO screenshot

TODO screenshot

If you continue, you will end up at [the configuration screen](configure-import.md).
