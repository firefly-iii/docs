# Duplicate transactions

!!! warning
    The Firefly III CSV importer is due to be replaced by the universal [Data Importer](https://docs.firefly-iii.org/data-importer/). Please migrate at your earliest convenience.

Sometimes the Firefly III CSV importer will create duplicate transactions, despite being told not to. This is pretty annoying so please open a ticket when this happens and let me know why Firefly III didn't detect a duplicate. I can use this information to fine-tune the duplication process.

Use the *debug view* to see why a transaction is imported, despite being a duplicate of another transaction. Remember that rules don't influence the (de)duplication process, because rules are applied *after* the duplication check.

Open both transactions in different tabs of your browser. Notice how the URL is something like this:

* [https://demo.firefly-iii.org/transactions/show/123](https://demo.firefly-iii.org/transactions/show/123)

Change the word `show` in the URL to `debug`:

* [https://demo.firefly-iii.org/transactions/**debug**/123](https://demo.firefly-iii.org/transactions/debug/123)

If you do this for **both** transactions you will end up with a specific JSON variant of the transaction.

Send it to me or [compare it yourself](https://jsoncompare.org/) to see the differences between two seemingly equal transactions.

- The `created_at` and `updated_at` fields are not used in the comparison by Firefly III.
- The `import_hash_v2` and `original_source` are not used in the comparison by Firefly III.
- The `id` and `transaction_journal_id` fields are not used in the comparison by Firefly III.

## Common causes

Some common causes of duplicate issues are listed below.

### Rounding errors

Some CSV files contain "floating numbers", which are numbers that look like this:

- `12.00000001`
- `6.95999999`

These numbers may have slight variations. Firefly III will see the difference and create what seems to be a duplicate transaction. The user interface may not show you the trailing digits leading you finding a duplicate transaction.

### Different internal or external ID's

Hidden deep in the JSON comparisons you may find a field called `external_id` or `internal_reference`. These fields will sometimes be different. Spectre is known to change these up every now and then just for the heck of it. 

## Other issues?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
