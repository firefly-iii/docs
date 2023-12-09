# How to import transfers between accounts

The first time you import data you may run into an issue where the Firefly III data importer creates withdrawals and deposits instead of transfers. Your import will contain transfers, deposits and expenses of them but somehow all you end up with expenses and deposits only. This is a common issue and is caused by the fact that Firefly III doesn't realise the opposing account is an asset account.

If Firefly III knows both accounts are asset accounts, it will create transfers. You must provide the right information and configuration.

## Recognizing asset accounts

Firefly III determines the transaction type based on the *source* and *destination* account. Both must be recognized as asset accounts or liabilities (in some cases). If Firefly III doesn't recognize the accounts, it will create new expense/revenue accounts and create a withdrawal/deposit.

!!! info
    If your files contain very little information on the opposing account (either the source or the destination) this will be difficult to do right.

Use any of the following strategies to so accounts are properly recognized.

### Default account

The default account should be an asset account. If this is correct, and your file contains no information on the source account, you're halfway there.

### Map data

The import has a [mapping stage](../import/map-data.md) during which you can link accounts. Use column role `Opposing account (x)` and `Asset account (x)`. Select the correct asset accounts during the mapping. If both accounts are recognized or mapped as an asset account, the transaction will become a transfer.

#### Asset account names and opposing account names

Very few banks provide meaningful opposing account names for your own bank accounts. But this is a worthwhile field to map, because you can also clean up other names.

#### IBAN and account numbers

If your file contains IBAN's or account numbers, definitely use them to link them to your asset accounts.

### Store IBANs and account numbers

When you create new asset accounts in Firefly III, always store an IBAN or account number. This will improve the (auto) mapping and link transactions.

### Test, test, test

Always try one or two transactions first. Keep an eye on the logs and turn on debug mode if necessary (see the search) so you can see why / how Firefly III and the data importer create the accounts they do.


## Transfers aren't merged


The Firefly III Data Importer is capable of merging two transactions (one from A > B, and one from B < A) if they seem to be the same transaction listed twice. For example, when you import two files: one from your checking account and one from your savings account.

By default, Firefly III will skip saving the second transfer because the first one already exists. The second is recognized as a duplicate because all the fields are the same. This may not always be the case. Examples that will stop this from happening are:

- The second transfer has another internal transaction reference (bunq does this).
- The second transfer has a different description.
- In the second transfer, any other meta-data is different (notes, links, etc).

You'll have to manually edit your file so the transactions are the same.

You can't do this by applying rules to your transfers. Rules are only executed on transactions that are already stored in Firefly III. If your rule changes a transfer into a duplicate of another transfer, this won't make the system delete it.

You can however, create custom rules that trigger on any content in the second transfer, and then delete it.
