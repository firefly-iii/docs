# Account types

These are the account types in Firefly III.

See also:

- [An explanation about accounts](../../explanation/financial-concepts/accounts.md)
- [An explanation about liabilities](../../explanation/financial-concepts/liabilities.md)
- [A reference of all transaction types](../../references/firefly-iii/transaction-types.md)
- [How to manage accounts](../../how-to/firefly-iii/finances/accounts.md)
- [How to reconcile accounts](../../how-to/firefly-iii/finances/reconcile.md)
- [How to manage liabilities](../../how-to/firefly-iii/finances/liabilities.md)
- [Tutorial: create accounts and transactions](../../tutorials/finances/first-steps.md)
- [Tutorial: manage your mortgage](../../tutorials/finances/mortgage.md)

## Asset accounts

Asset accounts are normal bank accounts. These accounts can be created with an initial (negative) balance. Asset accounts come in a few flavours.

### Default asset accounts

This is the default kind of asset account.

### Shared asset accounts

Shared asset accounts are shared with a partner, roommate or spouse. Use this to indicate that both (all) of you have access to this account. You can't actually share access between accounts yet.

### Savings account

A type to indicate it's a savings account.

### Cash wallet

Can be used to track cash expenses.

### Credit cards

Indicate the asset account belongs to a credit card. Firefly III does not (yet) respond to this, it's for your own administration only. Firefly III does not use liability accounts for credit cards.

## Expense accounts

When you spend money, you do so at a store, online or maybe using cash. Each of these places gets its own expense account. You can combine multiple stores into a single expense account if you want.

## Revenue accounts

Another type of account is the revenue account. A revenue account belongs to anyone or any company that sends you money. These may be your employer, parents or friends. Possibly these are clients or the government.

!!! info
    Expense and revenue accounts may share the same name. If you get a refund from Amazon, you will have both an expense account and a revenue account called "Amazon".

## Cash accounts

If you want to track your cash expenses specifically, use a cash wallet asset account, as you can read under "asset accounts". In most cases, cash money is different from "normal" money. When you withdraw money from an ATM and register it in Firefly III, _don't_ register an expense account. Leave the field empty. This will make Firefly III fall back to a specially designed "cash account".

Likewise, if you deposit cash into an asset account, don't mention a revenue account (see below).

## Liabilities

(TODO expand liabilities)

See [liabilities](liabilities.md).
