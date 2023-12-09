# How to handle (missed) duplicates

Sometimes the Data Importer will create duplicate transactions, despite being told not to. Some other times the Data Importer refuses to import a transaction because it claims to be a duplicate transaction.

The Firefly III data importer can recognise two different types of duplicate transactions. By default, it will refuse to import both of these types.

1. Duplicate entries in your files are skipped, unless you explicitly tell the data importer to import them anyway.
2. Firefly III itself will refuse to import transactions it believes already exist. You can overrule this.

## Deleted, but duplicate?

The Data Importer will also check **deleted** transactions when checking for duplicates. This is on purpose! If your import contains bad transactions or informative message hidden as transactions, they will not be re-imported after you've deleted them. If you're sure you wish to reimport transactions, press the **Purge** button on the last tab of your Profile (under `/profile`).

Even when you **delete** the original transaction, importing it again will result in a duplication error. 

If you want to reimport duplicate transactions after deleting them:

1. Turn off duplicate detection
2. Use the "purge"-button in your profile page to permanently remove deleted transactions

## Common causes of false negatives

!!! info
    You know it's a duplicate, but the Data Importer didn't catch it.

### Rounding errors

Some imports contain "floating numbers", which are numbers that look like this:

- `12.00000001`
- `6.95999999`

These numbers may have slight variations. Firefly III will see the difference and create what seems to be a duplicate transaction. The user interface may not show you the trailing digits leading you finding a duplicate transaction.

### Different internal or external ID's

You may find your transaction has a field called `external_id` or `internal_reference`. These fields will sometimes be different. Spectre is known to change these sometimes for no good reason.

### Transfers are imported twice

Learn [how to import transfers between accounts](transfers.md).

### Transfers aren't imported as transfers

Learn [how to import transfers between accounts](transfers.md).

## Common causes of false positives

!!! info
    You know it's not a duplicate, but the Data Importer believes it is

This happens mostly when your data source has too little information to go on. For example, a CSV file with only a very few columns.

## Debugging

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

## Other issues?

Please open an issue [on GitHub](https://github.com/firefly-iii/firefly-iii/).

!!! info
    At this point the duplication detection process is 100% correct all the time. If you still believe it's broken, please provide a reproducible example.
