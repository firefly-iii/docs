# Duplicate transactions

Sometimes the Firefly III CSV importer will create duplicate transactions, despite being told not to. This is pretty annoying so please open a ticket when this happens and let me know why Firefly III didn't detect a duplicate. I can use this information to fine-tune the duplication process.

Use the *debug view* to see why a transaction is imported, despite being a duplicate of another transaction.

Open both transactions in different tabs of your browser. Notice how the URL is something like this:

* [https://demo.firefly-iii.org/transactions/show/297](https://demo.firefly-iii.org/transactions/show/297)

Change the work "show" in the URL to "debug":

* [https://demo.firefly-iii.org/transactions/**debug**/297](https://demo.firefly-iii.org/transactions/show/297)

If you do this for **both** transactions you will end up with a specific JSON variant of the transaction.

Send it to me or compare it yourself to see the differences between two seemingly equal transactions.

- The `created_at` and `updated_at` fields are not used in the comparison by Firefly III.
- The `import_hash_v2` and `original_source` are not used in the comparison by Firefly III.

## Other issues?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
