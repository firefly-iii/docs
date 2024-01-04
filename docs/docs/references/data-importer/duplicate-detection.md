# Duplicate detection

The data importer will not import the same transaction twice, because that would be annoying for the user. This is accomplished by a trick called "duplicate detection". For each transaction that is about to be imported, the data importer will first see if it exists already in Firefly III. If a duplicate exists, it will not be imported again.

The data importer has two ways of detecting duplicates. They are explained further ahead. Sometimes the first method is better, and sometimes the second one. This depends a little bit on your import. In most cases "content-based" (see ahead) duplicate detection works well enough.

If you run into problems when using duplicate detection, please read [how to manage (missed) duplicates](../../how-to/data-importer/import/duplicates.md).

### Content-based

Technically speaking, Firefly III handles "content-based" duplicate detection, and it works as follows.

First, the data importer prepares the transaction. This includes all the mappings and roles you've configured. This does NOT include rules or webhooks, since Firefly III itself is responsible for those. The data importer finalises the transaction and sends it to Firefly III. Here's an example from the data importer logs:

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
