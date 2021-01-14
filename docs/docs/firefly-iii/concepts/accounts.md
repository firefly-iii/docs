# Accounts

Firefly III has several types of accounts. This goes beyond your own bank accounts and credit cards; there's more to finance than those two.

These different account types exist because my Googling into accounting has learned me that you should split these up. Internally too, even accounts with the same name but different types are split up. For example, if you shop at the place you work at, you will have a revenue account called "Albert Heijn" from which your salary is drawn but _also_ an expense account called "Albert Heijn" where you pay your groceries.

## A note on your opening balance

When you define an account's opening balance, you also have to set the date. Keep in mind that the opening balance is a transaction too. Let's say you set your opening balance to be 270,-- on December 1st. Trick question. What was your balance the week before, in November 27th? And assume no other transactions have been made.

The correct answer is: 0.00. Because the opening balance was posted one week later, the balance of the account _before_ the opening balance is zero.

So if you set an opening balance for an account and create transactions from before the opening balance, the opening balance will be affected.

## Account types

These are the account types in Firefly III

### Asset accounts

Asset accounts are normal bank accounts. They hold your own money. Your bank account is an asset account. Your savings account is an asset account. They would be called "Savings account" or "Checking account". These accounts can be created with an initial (negative) balance, which is useful since you won't be entering your entire financial history.

Asset accounts come in a few flavours. These are all cosmetic by the way, there is no technical difference.

As for the roles that are available:

#### Default asset accounts

This is the default kind of asset account.

#### Shared asset accounts

Shared asset accounts are shared with a partner, roommate or spouse. Use this to indicate that both (all) of you have access to this account. In Firefly III itself, you won't be able to actually share access between accounts, so this indication is purely for you.

#### Savings account

A type to indicate it's a savings account.

#### Cash wallet

Can be used to track cash expenses, which I personally don't recommend. 

#### Credit cards

Used to indicate the asset account belongs to a credit card. Firefly III does not (yet) respond to this, it's for your administration.

**Note**: Credit cards are not liabilities. You should use them as if they weren't a way to borrow money, but rather a way to use money that you have stored elsewhere (and that you will move to this account later).

### Expense accounts

When you spend money, you do so at a store, online or maybe using cash. Each of these places gets its own expense account.

### Cash accounts

If you want to track your cash expenses specifically, use a cash wallet asset account, as you can read under "asset accounts". In most cases, cash money is different from "normal" money. When you withdraw money from an ATM and register it in Firefly III, _don't_ register an expense account. Leave the field empty. This will make Firefly III fall back to a specially designed "cash account".

Likewise, if you deposit cash into an asset account, don't mention a revenue account (see below).

### Revenue accounts

Another type of account is the revenue account. A revenue account belongs to anyone or any company that sends you money. These may be your employer, parents or friends. Possibly these are clients or the government.

### Liabilities

Firefly III supports liabilities such as debts and loans, that you can track using Firefly III. The idea is pretty simple, but it isn't 100% accountant approved. So beware.

!!! info
    Although you can set the interest rate for a liability, Firefly III will not automatically calculate the interest due.

Any debt or loan you have is stored as a liability with a negative start balance, starting on the day you took out the loan. For example, -30.000 student loans, starting on July 5th, 2015.

A mortgage can also be stored this way.

If you borrow money to other people, I recommend you use the same system. Store the money as a negative amount. My reasoning is that since you don't have the money you're in the red, and each deposit from those other people increases your networth back to what it's supposed to be.

If your debt is gradually increasing because of interest payments or you borrowing more money, you must create transactions with the debt as the source and your asset account as the destination. Firefly III will handle the rest. 

When you pay off your debt you create transactions with your asset account as the source and the debt as the destination. 

This way you can use Firefly III to track debts, both incoming and outgoing.

## Deleting accounts

If you delete an account, any associated transactions will be removed as well. If you're deleting an asset account and you've transferred money between the current asset account and other asset accounts, you might see changed balances all around. Remember to correct this, if necessary. You can move the transactions to a new account if you wish to preserve them.
