# Manage multiple currencies

!!! tip
    I've not yet finished writing this tutorial. Some items may not be filled in yet. I apologize for the inconvenience. Please refer to the [support page](../../explanation/support.md) if you have questions.

Firefly III supports many currencies, and you can add custom currencies as well. This tutorial explains something about it and also shows you the system's quirks when doing so.

## View available currencies

Go to Options > Currencies in the left-hand menu. Here you can see all available and enabled currencies. By default, only one currency is enabled. Press the "Enable" button to enable a currency.

(TODO add screenshot of currency overview)

## Add a custom currency

To add a currency click "Create a new currency". The form is simple enough. Use [a three-letter code from this list](https://en.wikipedia.org/wiki/ISO_4217#List_of_ISO_4217_currency_codes).

The number of decimals is almost always 2, but some cryptocurrencies require more decimals. The maximum is 12.

The symbol is what's used in most overviews and charts. If you have multiple currencies using the same symbol (for example the US and Australian dollar), you can choose to add an identifying letter: US$ and A$.

(TODO add screenshot)

## Create a multi-currency transaction

When you create a new transaction, you have the option to add a foreign amount. The currencies that are enabled are options in the list. If you select a foreign currency, you must also enter the foreign amount.

(TODO add screenshot)

(TODO add screenshot of the result)

## Create an asset account with another currency

When you create an asset account, you can select the currency of the account. This is the currency that will be used for the account. You can only select currencies that are enabled.

(TODO add screenshot)

### Transfer between asset accounts in different currencies

When you transfer money between two asset accounts with different currencies, you must set the amount of the transfer in both currencies. The balances of each account will be updated accordingly:

(TODO add screenshot)

## Quirks

(TODO chart example in FAQ)

(TODO this is more of a how-to than a tutorial)
