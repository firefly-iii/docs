# Introduction

Importing transactions \(automatically\) into Firefly III is one of the most asked features of Firefly III. Everybody wants Firefly III to automatically connect to their bank and synchronize all transactions.

In order to import transactions into Firefly III, you'll have to install and run separate tools. These tools can do the sync for you.

## Some notes regarding importing transactions

* It's not as easy as YNAB or Mint, and it's never going to reach that level of sophistication.
* Your bank may not be supported, despite our best efforts.
* You might not be able to easily automate the import/sync process.

## Available tools

A universal tool to import transactions into your Firefly III installation is the [CSV importer](http://github.com/firefly-iii/csv-importer). If that fails, check out the [Spectre importer](http://github.com/firefly-iii/spectre-importer). The Spectre API is provided by a fintech company called Salt Edge. They offer a **trial** of their Spectre API which you can use to connect to your bank.

If you're banking with bunq, you can use the dedicated [bunq importer](http://github.com/firefly-iii/bunq-importer). You can migrate from "You Need a Budget" using the dedicated [YNAB importer](http://github.com/firefly-iii/ynab-importer).

If you want to import transactions using FinTS, from Revolut or Plaid, use the tools made by Firefly III users listed below.

### CSV importer

A tool, built by me, called the [CSV importer](http://github.com/firefly-iii/csv-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-csv-importer/), can import any CSV file from any financial institute that supports CSV files.

### Spectre importer

The [Spectre importer](http://github.com/firefly-iii/spectre-importer) importer can import any bank [Spectre supports](https://www.saltedge.com/products/spectre/faq#question4).

The Spectre API is a paid product. After a short testing period, you must pay for the use of the Spectre API.

### bunq importer

The [bunq importer](http://github.com/firefly-iii/bunq-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-bunq-importer/), can import from [bunq](https://www.bunq.com/).

### YNAB importer

The [You Need A Budget importer](https://github.com/firefly-iii/ynab-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-ynab-importer/), can import from YNAB.

### FinTS importer

A separate tool, built by GitHub user @bnw, can import [FinTS](https://github.com/bnw/firefly-iii-fints-importer).

### Revolut importer

A separate tool, built by GitHub user @Ludo444, can import [Revolut](https://gitlab.com/ludo444/fireflyrevoluttransactions).

### Plaid importer

[Import from Plaid using this tool by George Hahn](https://gitlab.com/GeorgeHahn/firefly-plaid-connector)

### Other ways of importing

If none of these import methods support your bank or financial org, please check out the [API](../api/api.md).

