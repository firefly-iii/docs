.. _importbunq:

================
Import from bunq
================

bunq (https://www.bunq.com/) is a Dutch, internationally active mobile bank, headquartered in Amsterdam, Netherlands. bunq offers personal and business accounts and focuses on ease of use transaction accounts.[1]

Firefly III supports the bunq API. Although support is in beta and may not be perfect, it works surprisingly well.

First time
----------

The first time you launch the bunq import tool, you must enter an API key and your IP address. If possible, Firefly III will try to auto-fill your IP address.

img

If you want to connect to the sandbox of bunq instead of their production API, please open your ``.env`` file and change ``BUNQ_USE_SANDBOX`` to ``true``.


Selecting your accounts and options
-----------------------------------

In this screen, you can select the account(s) you want to import from. The accounts you can import into must match the currency of the bunq account. If you want the transactions that will be imported to be run through your `rules <rules>`, check the checkbox.

Importing data
--------------

Once you've selected your accounts, the import will run. 

[1] https://en.wikipedia.org/wiki/Bunq
