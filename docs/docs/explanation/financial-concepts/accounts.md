# Accounts

See also:

- [Reference: all account types](../../references/firefly-iii/account-types.md)
- [How-to: reconcile accounts](../../how-to/firefly-iii/finances/reconcile.md)
- [Tutorial: my first accounts](../../tutorials/finances/first-accounts.md)

And many more subjects under the [how-to](../../how-to/index.md) and [tutorial](../../tutorials/index.md) sections.

Firefly III has several types of accounts. This goes beyond your own bank accounts and credit cards. Accounts are one of the core concepts of Firefly III. In a double booking system, everything is related to an account. Accounts are the holders of transactions and each transaction in Firefly III must have a source and a destination account.

## Unique account numbers and IBANs

Firefly III will not let you create multiple accounts with the same IBAN or account number. They have to be unique.

One exception exists for expense accounts and revenue accounts. As you have read, expense and revenue accounts are used as the opposing accounts for your transactions. But you may run into the situation where you have an expense account with the same name as a revenue account. For example, "Government Tax Department" which both *pays* you money and *gives* you money (but probably a lot less often).

Such accounts can share an IBAN or an account number. They don't need to have the same name.

Asset accounts can't use an IBAN or an account number if it's taken by either an expense account a revenue account.

## A note on your opening balance

When you define an account's opening balance, you also have to set the date. Keep in mind that the opening balance is a transaction too. Let's say you set your opening balance to be 270- on December 1st. Trick question. What was your balance the week before, in November 27th? And assume no other transactions have been made.

The correct answer is: 0.00. Because the opening balance was posted one week later, the balance of the account _before_ the opening balance is zero.

So if you set an opening balance for an account and create transactions from before the opening balance, the running balance may not be what you expect.

## Virtual balance

If you set a virtual balance, that amount will always be added to the actual balance of the account. If your credit card limit is 1000, set a virtual balance of 1000.
