# Duplicate transactions

Sometimes the Firefly III CSV importer will create duplicate transactions, despite being told not to. This is pretty annoying so please open a ticket when this happens and let me know why Firefly III didn't detect a duplicate. I can use this information to fine-tune the duplication process.

Use the *debug view* to see why a transaction is imported, despite being a duplicate of another transaction.

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

### New opposing accounts

This happens when spend money in a place you never visited before, and you import the transaction twice. The first time Firefly III doesn't know about the shop so the import will go:

```json
{
    "destination_id": null,
    "destination_name": "KFC"
}
```

The second import of the *same* transaction will look like this:

```json
{
    "destination_id": 132,
    "destination_name": null
}
```

This results in a duplicate transaction. Duplication is checked on the user's input, not on the user's output. A solution is in the works.

## Other issues?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
