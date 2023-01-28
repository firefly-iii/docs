# FAQ

Here you will find answers to frequently asked questions.

## Installation questions

- [I get errors during the installation](installation-errors.md)
- [I can't connect to Firefly III](connection-errors.md)
- [I want to know more about Nordigen or Spectre](spectre-and-nordigen.md)

## Import data questions

- [Where to start?](where-to-start.md)
- [My transactions are a mess, now what?](messy-transactions.md)
- [I have duplicate transactions](duplicates.md)
- [I want to re-import transactions](re-import.md)
- [How to fine tune the JSON file?](json.md)

## Other questions

- [Read about some advanced topics](../advanced/index.md)
- [Read about why the data importer is a separate tool](../more-information/separate-tool.md)

## More questions

### Can the data importer sync with my bank?

Yes. The data importer uses Spectre and Nordigen to connect to over 6000 banks. Please see the [configuration page](../installation/configuration.md) for more details and read up on [Nordigen and Salt Edge / Spectre](spectre-and-nordigen.md).

There is also a [Firefly III API](../../firefly-iii/index.md) that you can connect to \[YOUR BANK HERE\], if you are clever enough to build something in your favorite programming language.

### Can you clean-up the transactions from \[my bank\]?

If your bank delivers terrible CSV files, or when the Nordigen / Salt Edge import is exceptionally messy, there is not much I can do about it.

You can use the suggestions on **[this page](messy-transactions.md)** to learn how to clean up transactions.

There are simply too many banks and financial institutions in the world for me to manage exceptions or options for. If you run into a data quality issue, the best place to get it addressed is at the source: your bank.

### I want to auto-import transactions from \[my bank\] out of the box!

You can use the information on the **[automation page](../advanced/automation.md)** to automate your import.

### How do I start over or reset the importer?

Browse to the `/flush`-URL on the data importer to reset it. There is also a button you can use on every page.

### How can I automate this?

The easiest way to automate imports is by using **[the various automation options](../advanced/automation.md)**.

