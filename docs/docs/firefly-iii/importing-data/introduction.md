# Introduction

Importing transactions (automatically) into Firefly III is one of the most asked features of Firefly III. Everybody wants Firefly III to automatically connect to their bank and synchronize all transactions.

In order to import transactions into Firefly III, you'll have to install and run separate tools. These tools can do the synchronization for you. All of these apps connect to the Firefly III API (documented [on a separate website](https://api-docs.firefly-iii.org/)). To connect these apps to the API, most require an access token or some kind of an OAuth flow to be followed.

## Some notes regarding importing transactions

* It's not as easy as YNAB or Mint, and it's never going to reach that level of sophistication.
* Your bank may not be supported, despite our best efforts.
* You might not be able to easily automate the import/sync process.

!!! info
    Some background information on automated imports can be found in the [FAQ](faq.md).


## Available tools

The following tools are available to import data into Firefly III. They are listed here in order of popularity:

### CSV importer

A tool called the [CSV importer](http://github.com/firefly-iii/csv-importer) can import any CSV file from any financial institute that supports CSV files.

- [Website](http://github.com/firefly-iii/csv-importer)
- [Documentation](../../../csv)

### Spectre / Salt Edge importer

The [Spectre importer](http://github.com/firefly-iii/spectre-importer) is a good alternative to the CSV importer. This importer uses the Spectre API, provided by a fintech company called Salt Edge. They offer a **trial** of their Spectre API which you can use to connect to your bank. From your bank, Spectre will download and clean-up transactions.

!!! warning
    The Spectre API is a paid product. After a short testing period, you must pay for the use of the Spectre API.

- [Website](http://github.com/firefly-iii/spectre-importer)
- [Documentation](../../../other-data-importers)

### FinTS importer

A tool built by GitHub user [@bnw](https://github.com/bnw) that allows you to import using FinTS, a bank-independent protocol for online banking, developed and used by German banks. 

- [Website and documentation](https://github.com/bnw/firefly-iii-fints-importer)

### Plaid importer

[Plaid](https://plaid.com/) is a data aggregation service just like Spectre's Salt Edge API mentioned earlier. GitHub user [@GeorgeHahn](https://gitlab.com/GeorgeHahn) built a tool to import from Plaid.

!!! warning
    The free Plaid program is meant for testing and your milage may vary.

- [Website and documentation](https://gitlab.com/GeorgeHahn/firefly-plaid-connector)

## Bank-specific tools

### Crypto exchanges importer

This service by [@financelurker](https://github.com/financelurker) lets you import activities from your crypto exchange accounts (like "Binance/binance.com") to your FireFly III account.

- [Website](https://github.com/financelurker/crypto-trades-firefly-iii)
- [Documentation](https://github.com/financelurker/crypto-trades-firefly-iii)

### bunq importer

If you're banking with [bunq](https://www.bunq.com/), you can use the dedicated [bunq importer](http://github.com/firefly-iii/bunq-importer).

!!! warning
    API keys for bunq are only available for paying bunq users.

- [Website](http://github.com/firefly-iii/bunq-importer)
- [Documentation](../../../other-data-importers)

### Revolut importer

If you're banking with [Revolut](https://www.revolut.com/), you can use the [Revolut importer](https://gitlab.com/ludo444/fireflyrevoluttransactions), which is built by GitLab user [@ludo444](https://gitlab.com/ludo444).

- [Website and documentation](https://gitlab.com/ludo444/fireflyrevoluttransactions)

### YNAB importer

You can migrate from "You Need a Budget" using the dedicated [YNAB importer](http://github.com/firefly-iii/ynab-importer).

- [Website](https://github.com/firefly-iii/ynab-importer)
- [Documentation](../../../other-data-importers)

### UP Bank Australia importer

A tool to import from Made by GitHub user [@Mugl3](https://github.com/Mugl3) that allows you to import from UP Bank Australia using Python.

- [Website](https://github.com/Mugl3/UP_Firefly_API_Connector)
- [Documentation](https://blog.dupreez.id.au/2021/01/automatically-update-firefly-iii-with-up-banking-transactions/)


## Other ways of importing

If none of these import methods support your bank or financial organisation, please check out the [API](../api.md).
