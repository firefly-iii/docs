# Bad files from your bank.

Some banks deliver abysmal CSV files. They have an interest to keep you inside their eco-system and will do anything to stop you from moving to another system. Here are some common problems and their solutions.

## Not enough info to make rows unique

If you don't specifically configure the importer to import non-unique rows, open the file in Excel or Numbers and add a row with a basic sequence: 1,2,3,4 etc. That should be enough to make the rows unique.

## Transfers aren't merged

The Firefly III Data Importer (**FIDI**) is capable of merging two transactions (one from A > B, and one from B < A) if they seem to be the same transaction listed twice. For example, when you import two files: one from your checking account and one from your savings account.

By default, Firefly III will skip saving the second transfer because the first one already exists. The second is recognized as a duplicate because all the fields are the same. This may not always be the case. Examples that will stop this from happening are:

- The second transfer has another internal transaction reference (bunq does this).
- The second transfer has a different description.
- In the second transfer, any other meta-data is different (notes, links, etc).

You'll have to manually edit your file so the transactions are the same.

You can't do this by applying rules to your transfers. Rules are only executed on transactions that are already stored in Firefly III. If your rule changes a transfer into a duplicate of another transfer, this won't make the system delete it.

You can however, create custom rules that trigger on any content in the second transfer, and then delete it.

### Merging transfers using an identifier

If your bank supplies your CSV files with identifiers, you may configure FIDI to do an [identifier-based unique check](../usage/configure.md). If both transactions share the same identifier, this may work for you.

## Other issues?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
