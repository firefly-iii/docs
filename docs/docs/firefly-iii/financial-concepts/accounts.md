# Accounts

Firefly III has several types of accounts. This goes beyond your own bank accounts and credit cards.

## Account types

These are the account types in Firefly III.

### Asset accounts

Asset accounts are normal bank accounts. These accounts can be created with an initial (negative) balance. Asset accounts come in a few flavours.

#### Default asset accounts

This is the default kind of asset account.

#### Shared asset accounts

Shared asset accounts are shared with a partner, roommate or spouse. Use this to indicate that both (all) of you have access to this account. You can't actually share access between accounts yet.

#### Savings account

A type to indicate it's a savings account.

#### Cash wallet

Can be used to track cash expenses. 

#### Credit cards

Indicate the asset account belongs to a credit card. Firefly III does not (yet) respond to this, it's for your own administration only. Firefly III does not use liability accounts for credit cards. 

### Expense accounts

When you spend money, you do so at a store, online or maybe using cash. Each of these places gets its own expense account. You can combine multiple stores into a single expense account if you want.

### Revenue accounts

Another type of account is the revenue account. A revenue account belongs to anyone or any company that sends you money. These may be your employer, parents or friends. Possibly these are clients or the government.

!!! info
    Expense and revenue accounts may share the same name. If you get a refund from Amazon, you will have both an expense account and a revenue account called "Amazon".

### Cash accounts

If you want to track your cash expenses specifically, use a cash wallet asset account, as you can read under "asset accounts". In most cases, cash money is different from "normal" money. When you withdraw money from an ATM and register it in Firefly III, _don't_ register an expense account. Leave the field empty. This will make Firefly III fall back to a specially designed "cash account".

Likewise, if you deposit cash into an asset account, don't mention a revenue account (see below).

### Liabilities

!!! info
    Although you can set the interest rate for a liability, Firefly III will not automatically calculate the interest due.

Firefly III supports liabilities that you can track using Firefly III. The way it works isn't 100% accountant approved. Firefly III has three types of liabilities:

- Loan
- Debt
- Mortgage

When you are the **debtor** you must pay it back. If you are the **creditor** the money will be paid back to you.

- You are the debtor to your student loans.
- You are the creditor when you loaned a friend money to buy a new PC.

Once created Firefly III keeps track of the amounts for you. Here are the two scenarios (debtor and creditor) and how they work in Firefly III.

#### Debtor

You take out student loans or a mortgage, and you keep track of paying it back in Firefly III. You may set the amount due as the **start amount**. You can also start with an empty loan and transfer money away from the loan to pay for stuff. Every transaction from your asset account to the liability means you're paying back your debts. When you transfer money from the liability to your asset account you're borrowing more money. If you transfer money from the liability to an expense account, this is like interest or fees. If money is put into the liability from a revenue account they are waiving fees or paying the loan back for you.

#### Creditor

This is less common but can be useful to track money. You give your friend 1000 euro's for a new PC. Your friend pays off the loan. Firefly III keeps track of the amount due.

If you want to borrow your friend (more) money, you need to do this:

1. Create an empty "creditor" liability. Then, transfer money from your asset account to the liability.
2. Set up a liability with an initial amount. If necessary, transfer more money from your asset account to the liability.

You need a transaction when your friend pays you back the money.

- A deposit from the liability into your own asset account.

## Deleting accounts

If you delete an account, any associated transactions will be removed as well. If you're deleting an asset account, and you've transferred money between the current asset account and other asset accounts, you might see changed balances all around. Remember to correct this, if necessary. You can move the transactions to a new account if you wish to preserve them.

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
