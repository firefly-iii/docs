# Duplicate transactions

Sometimes the Firefly III Data Importer will create duplicate transactions, despite being told not to. This is pretty annoying so please open a ticket when this happens and let me know why Firefly III didn't detect a duplicate. I can use this information to fine-tune the duplication process.

## Deleted, but duplicate?

Firefly III will also check deleted transactions when checking for duplicates. This is on purpose. If your import contains bad transactions or informative message hidden as transactions, they will not be re-imported after you've deleted them.

If you're sure you wish to reimport transactions, press the **Purge** button on the last tab of your Profile (under `/profile`).

## Further debugging

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

Some imports contain "floating numbers", which are numbers that look like this:

- `12.00000001`
- `6.95999999`

These numbers may have slight variations. Firefly III will see the difference and create what seems to be a duplicate transaction. The user interface may not show you the trailing digits leading you finding a duplicate transaction.

### Different internal or external ID's

Hidden deep in the JSON comparisons you may find a field called `external_id` or `internal_reference`. These fields will sometimes be different. Spectre is known to change these sometimes.

## How does it work?

There are two duplicate detection methods: content-based and identifier-based.

### Content-based

Technically speaking, Firefly III handles "content-based" duplicate detection and it works as follows.

First, the data importer prepares the transaction. This includes all of the mappings and roles you've configured. This does NOT include rules or webhooks, since Firefly III itself is responsible for those. The data importer finalises the transaction and sends it to Firefly III. Here's an example from the data importer logs:

```
Submitting to Firefly III: {"group_title":null,"error_if_duplicate_hash":false,"transactions":[ ... ]} 
```

The first thing Firefly III will do is generate a hash over this array. You can see this in the Firefly III logs. Remember, Firefly III is doing the duplicate checking:

```
Now in TransactionGroupFactory::create()  
Now in TransactionJournalFactory::create()  
Start of TransactionJournalFactory::create()  
Now creating journal 1/1  
The hash is: 616290b9c880d9b353e7a1b1c3d23d622a10abf6ec532cdebe966cc3e5151d2d { ... }
```

After this hash is created, Firefly III will search for other transactions with the same hash. If it finds them, it reports a duplicate back to the data importer.

This way of processing transactions means that:

- Any (changed) rules in Firefly III do not influence the duplicate detection
- If you edit the transaction after it's imported, the hash remains the same, it will not be updated
- The original ("as is") transaction is checked for duplicates, not the end result after rules or webhooks

Conversely, it also means that:

- If you change the mapping, or the roles of the data before it gets send to Firefly III, the hash changes
- If your bank uses new transaction IDs or changes the CapItaliZAtiON, the hash changes

### Identifier-based

Identifier-based duplicate detection is handled by the data importer. Each transaction you wish to import **must** have a unique identifier in a column.

If you select the column and the field it should be stored in, the data importer will search your Firefly III installation for this specific identifier. When Firefly III reports it's been found, the transaction will not be imported (again).

## Other issues?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
