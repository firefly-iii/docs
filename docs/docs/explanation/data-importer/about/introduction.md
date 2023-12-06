(TODO validate and cleanup, write better intro)

### Can the data importer sync with my bank?

Yes. The data importer uses Spectre and GoCardless to connect to over 6000 banks. Please see the [configuration page](../installation/configuration.md) for more details and read up on [GoCardless and Salt Edge / Spectre](spectre-and-nordigen.md).

There is also a [Firefly III API](../../firefly-iii/index.md) that you can connect to \[YOUR BANK HERE\], if you are clever enough to build something in your favorite programming language.

### Can you clean-up the transactions from \[my bank\]?

If your bank delivers terrible files, or when the GoCardless / Salt Edge import is exceptionally messy, there is not much I can do about it.

You can use the suggestions on **[this page](messy-transactions.md)** to learn how to clean up transactions.

There are simply too many banks and financial institutions in the world for me to manage exceptions or options for. If you run into a data quality issue, the best place to get it addressed is at the source: your bank.

### Will manually entered transactions match with imported bank transactions?

Probably not. Most imported transactions have different fields with different values, which break the matching algorithm.

### I want to auto-import transactions from \[my bank\] out of the box!

You can use the information on the **[automation page](../advanced/automation.md)** to automate your import.
