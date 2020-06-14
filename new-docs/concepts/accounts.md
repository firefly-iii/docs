# Accounts

Firefly III has several types of accounts. This goes beyond your own bank accounts and credit cards; there's more to finance than those two. There are three kinds of accounts in Firefly III.

These different account types exist because my Googling into accounting has learned me that you should split these up. Internally too, even accounts with the same name but different types are split up. For example, if you shop at the place you work at, you will have a revenue account called "Albert Heijn" from which your salary is drawn but *also* an expense account called "Albert Heijn" where you pay your groceries.

## A note on your opening balance

When you define an account's opening balance, you also have to set the date. Keep in mind that the opening balance is a transaction too. Let's say you set your opening balance to be 270,-- on December 1st. Trick question. What was your balance the week before, in November 27th? And assume no other transactions have been made.

The correct answer is: 0.00. Because the opening balance was posted one week later, the balance of the account *before* the opening balance is zero.


## Account types

These are the account types in Firefly III

### Asset accounts

Asset accounts are normal bank accounts. They hold your own money. Your bank account is an asset account. Your savings account is an asset account. They would be called "Savings account" or "Checking account". These accounts can be created with an initial (negative) balance, which is useful since you won't be entering your entire financial history.

Asset accounts come in three flavours:

#### Default asset accounts

This is the default kind of asset account.

#### Shared asset accounts

Shared asset accounts are shared with a partner, roommate or spouse. Use this to indicate that both (all) of you have access to this account. In Firefly III itself, you won't be able to actually share access between accounts, so this indication is purely for you.

#### Credit cards

Used to indicate the asset account belongs to a credit card. Firefly III does not (yet) respond to this, it's just for your administration.

**Note**: Credit cards are not liabilities. You should use them as if they weren't a way to borrow money, but rather a way to use money that you have stored elsewhere (and that you will move to this account later).

### Expense accounts

When you spend money, you do so at a store, online or maybe using cash. Each of these places gets its own expense account.

### Cash accounts

Cash money is different though. When you withdraw money from an ATM and register it in Firefly III, *don't* register an expense account. Leave the field empty. This will make Firefly III fall back to a specially designed "cash account".

Likewise, if you deposit cash into an asset account, don't mention a revenue account (see below).

### Revenue accounts

Another type of account is the revenue account. A revenue account belongs to anyone or any company that sends you money. These may be your employer, parents or friends. Possibly these are clients or the government.

### Liabilities

Firefly III supports liabilities such as debts and loans, that you can track using Firefly III.
