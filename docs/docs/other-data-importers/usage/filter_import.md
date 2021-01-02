# Filter your import

The Spectre and YNAB importers have an extra option to filter the import.

## Spectre

The first thing you must do is create a new connection to your bank or select an existing one:

![Select existing connection or create a new one](images/select_connection.png)

The **first time** you use the Spectre importer, you must create a new connection (duh).

In that case, you get redirected to the Spectre website where you can find your bank using the auto-complete dropdown:

![Start typing to find your bank](images/search.png)

If you can only find fake banks, you must first upgrade your Spectre account. By default, the Spectre API comes with fake data only. To get access to real life data you must upgrade your account by [contacting Spectre support](https://www.saltedge.com/clients/request_test_access). 

Spectre will ask for consent:

![You must give permission to continue](images/consent.png)

The connection will be made, after which you get sent back to the Firefly III Spectre importer:

![Connecting to a fake bank](images/connecting.png)

Once back at the importer, the new connection is listed among your connections. Select it, and continue to the configuration.

## YNAB

You can create multiple budgets in YNAB. Each has a currency. You can import from multiple budgets. Select the correct budget to continue.