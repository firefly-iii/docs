# Import from bunq

[bunq](https://www.bunq.com) is a Dutch, internationally active mobile bank, headquartered in Amsterdam, Netherlands. bunq offers personal and business accounts. For more information, see [Wikipedia](https://en.wikipedia.org/wiki/Bunq).

*Support for the bunq API is currently (as of September 2019) disabled. I'm working on [new import routines](https://www.patreon.com/posts/30012174) that will replace the built-in import code of Firefly III. I apologize for the inconvenience. The text below is for reference only. As soon as I have the bunq import up and running again, you will see this in the Firefly III release notes.*

Firefly III supports the bunq API. Although support is in beta and may not be perfect, it works surprisingly well.

## First time

The first time you launch the bunq import tool, you must enter an API key and your IP address. If possible, Firefly III will try to auto-fill your IP address.

If you want to connect to the sandbox of bunq instead of their production API, please open your ``.env`` file and change ``BUNQ_USE_SANDBOX`` to ``true``.


## Selecting your accounts and options

In the next screen, you can select the account(s) you want to import from. The accounts you can import into must match the currency of the bunq account. If you want the transactions that will be imported to be run through your rules, check the checkbox.

## Importing data

Once you've selected your accounts, the import will run. Transactions that were already imported will be skipped.
