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

A **false negative** is when you know it's a duplicate, but the Data Importer didn't catch it.

### Rounding errors

Some imports contain "floating numbers", which are numbers that look like this:

- `12.00000001`
- `6.95999999`

These numbers may have slight variations. Firefly III will see the difference and create what seems to be a duplicate transaction. The user interface may not show you the trailing digits leading you finding a duplicate transaction.

### Different internal or external ID's

You may find your transaction has a field called `external_id` or `internal_reference`. These fields will sometimes be different. Spectre is known to change these sometimes for no good reason. Nordigen may give pending transactions a different ID from booked transactions.

### Transfers are imported twice

Learn [how to import transfers between accounts](transfers.md).

### Transfers aren't imported as transfers

Learn [how to import transfers between accounts](transfers.md).

## Common causes of false positives

A **false positive** happens when you know it's not a duplicate, but the Data Importer believes it is.

This happens mostly when your data source has too little information to go on. For example, a CSV file with only a very few columns. This has very few other solutions.

## Further debugging

When you are not sure why a duplicate is happening, or when you suspect a bug, please follow these three debugging steps first. I know I'm asking a lot, but in many cases the cause can be found easily enough.

### First debug step

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

### Second debug step

More debug information may be found in the debug logs of the data importer. At the end of the import and conversion routines, the data importer submits the transactions to Firefly III.

Here is an example of what the data importer submits to Firefly III. Warning: it's a lot!

```
local.DEBUG: Submitting to Firefly III: {"group_title":null,"error_if_duplicate_hash":true,"transactions":[{"type":"withdrawal","date":"2017-01-01 00:00:00","currency_id":1,"currency_code":null,"amount":"12.340000000000","description":"Some test transaction 2","source_id":1,"source_name":null,"destination_id":null,"destination_name":"IsNew1123x","original_source":"jc5-data-import-v1.4.3","tags":[],"source_iban":null,"source_number":null,"source_bic":null,"destination_iban":null,"destination_number":null,"destination_bic":null}]}
```

What you see here is the raw JSON that is submitted. If you look closely, you can see the amount, a description, some metadata and more interesting stuff.

If you compare two of these, you may not see a difference, but online compare tools like [this one](https://jsoncompare.org/) can help you find the differences. 

Some differences aren't entirely visible to the naked eye. For example, if you have a category "Groceries" with ID #1, submitting "Groceries" or "1" will result in the same category. But Firefly III will see this as a difference. This is a silly example as the data importer is consistent about these kinds of things, but it may happen when banks switch from account names to IBANs, for example.

### Third debug step

If you want to dive even deeper into why a transaction is (not) a duplicate, even though it should (not) be, you can see what the data importer has downloaded from GoCardless or Spectre. This particular step is not possible for users who import CSV or CAMT files.

The data importer connects to GoCardless/Spectre, and will at some point start downloading JSON transactions. Here's a snippet from a GoCardless transaction. Again, these are pretty large blobs of JSON, be warned!

```
production.DEBUG: Parsed Nordigen transaction "ID HERE". {"type":"withdrawal","date":"2024-02-02T01:47:33+00:00","datetime":"2024-02-02T01:47:33+00:00","amount":"6.500000000000","description":"Long description here","payment_date":"2024-02-01","order":0,"currency_code":"EUR","tags":["booked"],"category_name":null,"category_id":null,"notes":"","external_id":"ID HERE","internal_reference":"","additional-information":"","source_id":2,"destination_name":"Destination name here","destination_number":""}
```

Here too, you may recognize familiar fields such as the amount and the destination of the transaction.

If you compare two of these, you may not see a difference, but online compare tools like [this one](https://jsoncompare.org/) can help you find the differences. In these cases, it's not always easy to see if a difference is present, so make sure you also check out the previous debug step to see if the data importer is doing strange data conversions.

## Other issues?

Please open an issue [on GitHub](https://github.com/firefly-iii/firefly-iii/).

!!! info
    At this point the duplication detection process is pretty much 100% correct all the time. If you still believe it's broken, please provide a reproducible example.
