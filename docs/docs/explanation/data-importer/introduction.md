# Firefly III Data Importer

The Firefly III data importer can be used to import data into Firefly III. It is a [separate tool](separate-tool.md) from Firefly III with 
its own [installation](../../how-to/data-importer/installation/docker.md) and [upgrade](../../how-to/data-importer/upgrade/docker.md) guides. 

The importer can import [a number of file types](../../how-to/data-importer/import/file.md). It can also download transactions from several [third party data providers](../../how-to/data-importer/import/third-party-providers.md).

### Can the data importer sync with my bank?

Yes. The data importer uses several [third party data providers](../../how-to/data-importer/import/third-party-providers.md) to connect to a range of banks world wide. Please see the [configuration page](../../how-to/data-importer/how-to-configure.md) for configuration details.

There is also a [Firefly III API](../../references/firefly-iii/api/index.md) that you can connect to \[YOUR BANK HERE\], if you are clever enough to build something in your favorite programming language.

### Can you clean-up the transactions from \[my bank\]?

If your bank delivers terrible files, or when the GoCardless import is exceptionally messy, there is not much I can do about it.

There are too many banks and financial institutions in the world for me to manage exceptions or options for. If you run into a data quality issue, the best place to get it addressed is at the source: your bank.

### Will manually entered transactions match with imported bank transactions?

Probably not. Most imported transactions have different fields with different values, which break the matching algorithm.

### I want to auto-import transactions from \[my bank\] out of the box!

There are several ways to do this:

1. [Using the CLI (and a cron job)](../../how-to/data-importer/advanced/cli.md)
2. [Using the web (and a cron job)](../../how-to/data-importer/advanced/post.md)

## Is the data importer multi-user?

Yes. It borrows login information from Firefly III using OAuth. To make sure it redirects to Firefly III, where you can log in, **do not** set the `FIREFLY_III_ACCESS_TOKEN` in the data importer environment variables. Use only the `FIREFLY_III_URL` variable. This way, each user must authenticate to the data importer.

Some features are not available when you set up a multi-user data importer: you cannot use the POST import function, and you can't import over the command line.

If you use Firefly III with "remote user authentication" (for example Authelia) the data importer can only use personal access tokens. That means that it cannot be made multi-user.

In such cases, you must set up multiple data importers, one for each user.
