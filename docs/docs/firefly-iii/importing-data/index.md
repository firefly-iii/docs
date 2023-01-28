# Introduction

In order to import transactions into Firefly III, you'll have to install the **[Firefly III Data Importer](../../data-importer/index.md)**. This app connects to the [Firefly III API](https://api-docs.firefly-iii.org/).

Firefly III and the Data Importer are two different applications.

This data importer is a universal importer, which means it can import from any sources you can think of. And if it can't, well then drop me a line and make me add your favorite data source.

The data import supports a variety of sources:

- You can import **CSV files** from *any* source: your bank, YNAB, Tiller or any other source of financial data.
- You can import from your bank directly using a secure connection.
- You can set it up to run daily or weekly to keep Firefly III up to date.

## Other import tools

There are more import tools if the Firefly III Data Importer does not fit your use case.

### Transaction classification

[TransCat](https://github.com/Hapyr/trans-cat) can pre-process your CSV file and automatically assign your transactions to a category based on previous assignments. The project has not yet been tested extensively, and bug reports are very welcome.

### 'Splitwise' to Firefly III

This tool syncs the expenses from Splitwise to Firefly III using their respective APIs.

- [Website and documentation](https://github.com/adyanth/splitwise-firefly-sync)
- [Credits](https://github.com/adyanth)

### FinTS importer

A tool built by GitHub user [@bnw](https://github.com/bnw) that allows you to import using FinTS, a bank-independent protocol for online banking, developed and used by German banks. 

- [Website and documentation](https://github.com/bnw/firefly-iii-fints-importer)

### GnuCash conversion script

This experimental [Python script](https://gist.github.com/adyanth/20c004869baf33458e416d4396ca40a8) can convert GnuExports to Firefly III compatible JSON.

### Plaid importers

[Plaid](https://plaid.com/) is a data aggregation service just like Spectre's Salt Edge API mentioned earlier.

- GitLab user [@GeorgeHahn](https://gitlab.com/GeorgeHahn) built a tool to import from Plaid.
  - [Website and documentation](https://gitlab.com/GeorgeHahn/firefly-plaid-connector)
- GitHub user [@dvankley](https://github.com/dvankley) built an alternative Plaid importer tool.
  - [Website and documentation](https://github.com/dvankley/firefly-plaid-connector-2)

!!! warning
    The free Plaid program is meant for testing and your milage may vary.

## Bank-specific tools

### Up Bank Australia

This application allows you to import data from Australian Bank "Up":

- [Website](https://github.com/MajorArkwolf/UpBankFFImporter)
- [Credits](https://github.com/MajorArkwolf)

### Credit Agricole

This Python app allows you to import transactions from Credit Agricole

- [Website](https://github.com/Royalphax/credit-agricole-importer)
- [Credits](https://github.com/Royalphax)

### Crypto exchanges importer

This service by [@financelurker](https://github.com/financelurker) lets you import activities from your crypto exchange accounts (like "Binance/binance.com") to your FireFly III account.

- [Website](https://github.com/financelurker/crypto-trades-firefly-iii)
- [Documentation](https://github.com/financelurker/crypto-trades-firefly-iii)

### PayPal importer

A tool by [@robvankeilegom](https://github.com/robvankeilegom) to pull data from the PayPal API and push it to your Firefly III instance.

- [Website and documentation](https://github.com/robvankeilegom/firefly-III-paypal-importer)

### Revolut importer

If you're banking with [Revolut](https://www.revolut.com/), you can use the [Revolut importer](https://gitlab.com/ludo444/fireflyrevoluttransactions), which is built by GitLab user [@ludo444](https://gitlab.com/ludo444).

- [Website and documentation](https://gitlab.com/ludo444/fireflyrevoluttransactions)

### UP Bank Australia importer

A tool made by GitHub user [@Mugl3](https://github.com/Mugl3) that allows you to import from UP Bank Australia using Python.

- [Website](https://github.com/Mugl3/UP_Firefly_API_Connector)
- [Documentation](https://blog.dupreez.id.au/2021/01/automatically-update-firefly-iii-with-up-banking-transactions/)

## Other ways of importing

If none of these import methods support your bank or financial organisation, please check out the [API](../api/index.md).
