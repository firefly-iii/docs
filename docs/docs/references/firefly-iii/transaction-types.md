# Transaction types

## Withdrawals

Withdrawals are meant to record expenses. The source account of each withdrawal is an asset account, and the destination account is an expense account.

To create a withdrawal select a source account first. This should be an [asset account](account-types.md) or a [liability](account-types.md). Then select a destination account (an expense account) or free-type a new one. Withdrawals can also be assigned a [budget](../../how-to/firefly-iii/finances/budgets.md).

Although the form allows you to free-type a destination account as well, this may fail and the transaction can't be saved.

If you want to store cash withdrawals, be sure to read [how to manage cash](../../how-to/firefly-iii/finances/cash.md).

Transactions from asset accounts to expense accounts or liabilities are considered withdrawals.

## Deposits

When you wish to create a deposit, select a revenue account first, as the source account. When it doesn't exist yet, free-type your own input, and it will be created for you. Then, select an [asset account](account-types.md) or a [liability](account-types.md) as the destination account. If the source account already exists the form will recognize that you're creating a deposit, and the "budget"-selector will disappear.

Although the form allows you to free-type a destination account as well, this may fail and the transaction can't be saved.

If you want to store cash deposits, be sure to read [how to manage cash](../../how-to/firefly-iii/finances/cash.md).

Transactions from revenue accounts or from liabilities TO asset accounts are considered deposits.

## Transfers

A transfer is created only between existing asset accounts or liabilities. Select an asset account for both the source and destination from the free-form fields. Transfers can be linked to [piggy banks](../../how-to/firefly-iii/finances/piggy-banks.md), to automatically add or remove money from the piggy bank you select.

Transactions between asset accounts or between liabilities are considered transfers. So, from one asset account to another, that's a transfer. From one liability to another, the same.

## Special transaction types

You won't spot these transaction types in the UI, but they exist nonetheless.

### Opening balance

When you create a new asset account, you can set an opening balance. This is a special transaction type that is created when you create the account. It's a deposit into (or withdrawal from) the account, and the source account is the "opening balance account". This account is created automatically when you create your first asset account.

### Reconciliation

When you reconcile an account, Firefly III creates a special transaction of this type, to store the difference.

### Liability credit

When you create a liability account, you can set a start debt. This amount is recorded using the liability credit transaction type.
