# How to import CSV files

A short how-to guide on how to import (complicated) CSV files using the Data Importer. This guide assumes you have the Data Importer working and running.

## Get your CSV file

Before you start, make sure you know the following things about your CSV file:

- Whether it has headers
- What the delimiter is
- What each column contains

You'll have to compare the column contents with [this reference of all "roles"](../../../references/data-importer/roles.md) that
a column can be. Pretty basic standards are the date of the transaction or the amount, but there are a few special options.

## Upload and get to the configuration screen

When you upload a file and get to the configuration screen, please validate the configuration with the properties of your
CSV file (see above).

Most options are explained on the configuration page itself. 

Also think about the duplicate detection method you wish to use. If you're not sure which one you want to use, please check out the
[reference guide on duplicate detection](../../../references/data-importer/duplicate-detection.md), and make sure you read [how to handle (missed) duplicates](duplicates.md).

The date options are explained on the page itself, and other options should be fairly clear. There's also a guide on [how to map data](map-data.md), if you want to link your CSV data to Firefly III data more easily.

## Select roles

Earlier you validated what the columns your CSV file contain. Select the correct roles for your data using [the role reference](../../../references/data-importer/roles.md).

## Mapping data

There is a full [how to on mapping data](map-data.md) that you should really check out.

## Import the data

The import process consists of two steps. First a conversion and data validation. Then, the data will actually be sent to Firefly III.

Press "Start Job" to start the conversion and validation process. If this is successful, you can press "Start Job" after a few moments to import the data.

Each step can run into plenty of errors. Most of them are documented in [this FAQ](../../../references/faq/data-importer/import.md), but I'm pretty sure I missed a few. Please refer to the [support page](../../../references/support.md) if you need help.
