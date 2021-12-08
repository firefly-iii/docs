# Introduction

In order to import transactions into Firefly III, you'll have to install the **[Firefly III Data Importer](../../data-importer/index.md)**. This app connects to the [Firefly III API](https://api-docs.firefly-iii.org/).

This data importer is a universal importer, which means it can import from any sources you can think of. And if it can't, well then drop me a line and make me add your favorite data source.

The data import supports a variety of sources:

- You can import **CSV files** from *any* source: your bank, YNAB, Tiller or any other source of financial data.
- You can import from your bank directly using a secure connection.

## Other import tools

There are more import tools if the Firefly III Data Importer does not fit your use case.

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

### Revolut importer

If you're banking with [Revolut](https://www.revolut.com/), you can use the [Revolut importer](https://gitlab.com/ludo444/fireflyrevoluttransactions), which is built by GitLab user [@ludo444](https://gitlab.com/ludo444).

- [Website and documentation](https://gitlab.com/ludo444/fireflyrevoluttransactions)

### UP Bank Australia importer

A tool to import from Made by GitHub user [@Mugl3](https://github.com/Mugl3) that allows you to import from UP Bank Australia using Python.

- [Website](https://github.com/Mugl3/UP_Firefly_API_Connector)
- [Documentation](https://blog.dupreez.id.au/2021/01/automatically-update-firefly-iii-with-up-banking-transactions/)

## Other ways of importing

If none of these import methods support your bank or financial organisation, please check out the [API](../api.md).
