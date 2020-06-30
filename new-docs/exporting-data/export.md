# Exporting data

_This function is available from version 5.0.0-alpha.2 and onwards_

Firefly III allows you to export transactions and other data to CSV files.

## Basic export

Go to /export in your Firefly III installation, or follow the menu under "import and export".

Here you'll find a button that you can use to export all of your transactions. This may take some time, and your installation may time-out.

If you want more fine-grained control over the export, or if you want to export other files as well, please use the command line options.

## Command line

The basic command for the command line is this: `php artisan firefly-iii:export-data`. Without a date or other options it won't do anything. Refer to the options below.

What the file name will be depends on what you export. The basic format is like called `yyyy_mm_dd_transactions.csv`.

You can use the following options to configure the export.

* `--start=yyyy-mm-dd`. Start date of the export. This applies to transactions only.
* `--end=yyyy-mm-dd`. Start date of the export. This applies to transactions only.
* `--accounts=1,2,3,4`. Only include these asset accounts or liabilities in the export of transactions. Comma separated list of ID's. This applies to transactions only.
* `--export_directory=./`. Where to store the files. Must be writeable. Defaults to `./` \(the current directory\).

You can set what to export using the following flags:

* `--export-accounts`. Creates a separate file with all your accounts and some meta data.
* `--export-budgets`. Creates a separate file with all your budgets and some meta data.
* `--export-categories`. Creates a separate file with all your categories and some meta data.
* `--export-tags`. Creates a separate file with all your tags and some meta data.
* `--export-recurring`. Creates a separate file with all your recurring transactions and some meta data.
* `--export-rules`. Creates a separate file with all your rules and some meta data.
* `--export-bills`. Creates a separate file with all your bills and some meta data.
* `--export-piggies`. Creates a separate file with all your piggy banks and some meta data.
* `--export-transactions`. Creates a separate file with all your transactions and some meta data.

If you add none of these flags, Firefly III will export nothing.

