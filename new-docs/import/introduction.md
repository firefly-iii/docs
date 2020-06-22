# Introduction

Importing transactions (automatically) into Firefly III is one of the most asked features of Firefly III. Everybody wants Firefly III to automatically connect to their bank and synchronize all transactions.

In order to import transactions into Firefly III, you'll have to install and run separate tools. These tools can do the sync for you.

## Some notes regarding importing transactions

* It's not as easy as YNAB or Mint, and it's never going to reach that level of sophistication.
* Your bank may not be supported, despite our best efforts.
* You might not be able to easily automate the import/sync process.

## Available tools

A universal tool to import transactions into your Firefly III installation is the CSV importer. If that fails, check out the Spectre importer. The Spectre API is provided by a fintech company called Salt Edge. They offer a **trial** of their Spectre API which you can use to connect to your bank.

If you're banking with bunq, you can use the dedicated bunq importer. You can also migrate from "You Need a Budget" using the dedicated YNAB importer.

If you want to import transactions using FinTS, from Revolut or Plaid, use the tools made by Firefly III users listed below.

### CSV importer

* A separate tool called the [CSV importer](http://github.com/firefly-iii/csv-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-csv-importer/), can import any CSV file from any financial institute that supports CSV files.
(description here)

### Spectre importer

* Built straight into Firefly III, the [Spectre / Salt Edge](https://docs.firefly-iii.org/importing-data/spectre) importer can import any bank [Spectre supports](https://www.saltedge.com/products/spectre/faq#question4).


### bunq importer

* A separate tool called the [bunq importer](http://github.com/firefly-iii/bunq-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-bunq-importer/), can import from [bunq](https://www.bunq.com/).

### YNAB importer

* A separate tool called the [You Need A Budget importer](https://github.com/firefly-iii/ynab-importer), with [documentation](https://firefly-iii.gitbook.io/firefly-iii-ynab-importer/), which can import from YNAB.

### FinTS importer

A separate tool, built by GitHub user @bnw, can import [FinTS](https://github.com/bnw/firefly-iii-fints-importer).

### Revolut importer

* A separate tool, built by GitHub user @Ludo444, can import [Revolut](https://gitlab.com/ludo444/fireflyrevoluttransactions).

### Plaid importer

* [Import from Plaid using this tool by George Hahn](https://gitlab.com/GeorgeHahn/firefly-plaid-connector)

### Other ways of importing

If none of these import methods support your bank or financial org, please check out the [API](api/api).