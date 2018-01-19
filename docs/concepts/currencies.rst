.. _currencies:

==========
Currencies
==========

Firefly III supports as many currencies as you like. By default it ships with a variety of currencies, amongst which also crypto currencies, which Firefly III also supports.

You can add your own currencies if you're missing one.


Adding currencies
-----------------

Under Options > Preferences you will find the "Currencies" page. When you are an admin, you will see the button "Create a new currency". You should enter some details such as the name, the $ymbol of the currency and of course the currency code (preferrably according to the `ISO 4217 <https://www.currency-iso.org/dam/downloads/lists/list_one.xml>`_).

Currencies have decimal places. Most have 2, like the Euro. Notable exceptions are Bitcoin (8) and the Mauritanian ouguiya (no decimals). Both are supported by Firefly III. Bitcoin is present by default.

Set the default currency
------------------------

Firefly III support multiple currencies but it requires one default currency. When you install Firefly III this is the Euro. You can change this if you want to.

Set currency for asset accounts
-------------------------------

Asset accounts have one main currency. My personal bank accounts are in Euro. But I have a credit card in USD. You can set this when you create or edit an asset account. This is important when you create or import transactions.

Creating transactions
---------------------

When you try to create a transaction in Euro's on an asset account that in US Dollars, you must set the amount in both USD and EUR. Firefly III will suggest an exchange rate, based on the excellent `fixer.io API <http://fixer.io/>`_. However, you can change both amounts. Banks often use exchange rates that are less in your favour.

Creating transfers
------------------
When you create a transfer between an account in EUR and USD (or other currencies) you must also indicate the amount transferred in both currencies. Firefly III will support you in this by suggesting exchange rates.

Screenshots
-----------

.. figure:: https://firefly-iii.org/static/docs/4.7.0/currency-create.png
   :alt: Create currency
   
   This screen allows you to create a new currency. Pretty straight-forward.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/currency-default.png
   :alt: Default currency
   
   In this instance of Firefly III, the default currency is the British Pound.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/currency-asset.png
   :alt: Asset currency
   
   Each account has its own default currency.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/currency-withdrawal.png
   :alt: Foreign withdrawal
   
   When you withdraw an amount in a "foreign" currency, Firefly III needs to know the amount in the native currency. Firefly III will suggest the amount based on current exchange rates.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/currency-transfer.png
   :alt: Foreign transfer
   
   Likewise when you transfer money between two asset accounts, both currencies must have a monetary value. Firefly III will suggest the amount based on current exchange rates.
