# Command line / CLI

Firefly III has a bunch of CLI commands that you can use. Generally speaking these are meant for large operations. Here's a full overview.

See also: [How to use the CLI](../../how-to/firefly-iii/features/cli.md).

## List all commands

`php artisan`

Please note that this will also list all the internal upgrade commands Firefly III uses.

## Apply rules

`php artisan firefly-iii:apply-rules`

This command will apply your rules and rule groups on a selection of your transactions. To use it, add the following parameters:

* `--user[=USER]`. The user ID. [default: "1"]
* `--token[=TOKEN]`. The user's access token. Take this from the `/profile` page.
* `--accounts[=ACCOUNTS]`. A comma-separated list of asset accounts or liabilities to apply your rules to.
* `--rule_groups[=RULE_GROUPS]`. A comma-separated list of rule groups to apply. Take the ID's of these rule groups from the Firefly III interface.
* `--rules[=RULES]`. A comma-separated list of rules to apply. Take the ID's of these rules from the Firefly III interface. Using this option overrules the option that selects rule groups.
* `--all_rules`. If set, will overrule both settings and apply ALL of your rules.
* `--start_date[=START_DATE]`. The date of the earliest transaction to be included (inclusive). If omitted, will be your very first transaction ever. Format: YYYY-MM-DD
* `--end_date[=END_DATE]`. The date of the latest transaction to be included (inclusive). If omitted, will be your latest transaction ever. Format: YYYY-MM-DD

For more information about rules, see also [how to use rules](../../how-to/firefly-iii/features/rules.md).

## Cronjob

`php artisan firefly-iii:cron`

Fires the cronjob. See also [how to set up the cron job](../../how-to/firefly-iii/advanced/cron.md).

## Export data

`php artisan firefly-iii:export-data`

Allows you to export all Firefly III data. To use it, add the following parameters:

* `--user[=USER]`. The user ID that the export should run for. [default: "1"]
* `--token[=TOKEN]`. The user's access token.
* `--start[=START]`. First transaction to export. Defaults to your very first transaction. Only applies to transaction export.
* `--end[=END]`. Last transaction to export. Defaults to today. Only applies to transaction export.
* `--accounts[=ACCOUNTS]`. From which accounts or liabilities to export. Only applies to transaction export. Defaults to all of your asset accounts.
* `--export_directory[=EXPORT_DIRECTORY]`. Where to store the export files. [default: "./"]
* `--export-transactions`. Create a file with all your transactions and their metadata. This flag and the other flags can be combined.
* `--export-accounts`. Create a file with all your accounts and some metadata.
* `--export-budgets`. Create a file with all your budgets and some metadata.
* `--export-categories`. Create a file with all your categories and some metadata.
* `--export-tags`. Create a file with all your tags and some metadata.
* `--export-recurring`. Create a file with all your recurring transactions and some metadata.
* `--export-rules`. Create a file with all your rules and some metadata.
* `--export-bills`. Create a file with all your bills and some metadata.
* `--export-piggies`. Create a file with all your piggy banks and some metadata.
* `--force`. Force overwriting of previous exports if found.

Keep in mind that on Docker, you must export to `./storage/export` to have the files available on your own system.

See also [how to export data](../../tutorials/firefly-iii/exporting-data.md).
