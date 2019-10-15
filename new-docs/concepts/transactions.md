# Transactions

A transaction is a very simple thing. Money moves from A to B. It doesn't matter if this is an expense, your salary or you moving money around: *money moves from A to B*:

![Transferring money from your checking account to your savings account](images/transaction1.png)

![An expense is moving money from you to the supermarket.](images/transaction2.png)

In Firefly III and most other systems this is stored using a "[double-entry bookkeeping system](http://en.wikipedia.org/wiki/Double-entry_bookkeeping_system>)". You get money and your boss loses it. You spend money and the Supermarket "earns" it:

![Your boss loses money, you earn it.](images/transaction3.png)

![You lose money, the supermarket earns it.](images/transaction4.png)

Each transaction is stored twice. Once as a loss (for one party), and once as a profit (for the other party). This seems pretty pointless, and technically it is. But it was designed back when clerks could be fraudulent and this double-entry system stopped fraud. In these modern days it is useful to check if all records are straight.

It is also useful when transferring money back and forth between your own accounts. This is the same as spending money. It's all moving money around. This helps maintain the internal consistency of the database.

Transactions have a few useful fields:

* A description
* The amount (duh)
* The date
* The accounts involved (from and to)
* .. and some meta-information.

In Firefly III, a transaction can be a withdrawal, a deposit or a transfer. Beyond the obvious, they are slightly different from one another:

## Withdrawals

Withdrawals have a free-format field for the "expense account" which you can fill in freely. If you go to a new store, simply enter the withdrawal with the new store as the expense account, and Firefly III will start tracking it automatically. Withdrawals can also be assigned a "budget".

## Deposits

Deposits have free-format field for the "revenue account". This works in the same way as withdrawals do.

## Transfers

Transfers have no free-format field. A transfer can only occur between existing asset accounts. But transfers can also be linked to piggy banks. So you could move € 200 to your savings account and have it added to your piggy bank "new couch".

## Split transactions

What has been described here are singular transactions. Firefly III stores each financial transaction in a journal. Each journal contains two "transactions". One takes money (-250 from your bank account) and the other one puts it into another account (+250 for Amazon.com).

You can verify this by counting. There are always twice as many "transactions" as there are "journals" in your database.

This way, Firefly III tries to stay true to what a financial transaction is, which is kind of singular. Money moves from A to B, end of story. Nothing more. 

However, often an expense tells a story. Just take grocery receipts for example. It's one expense sure, but it consists of many parts. And when you buy aspirin and bread at the same time, you might want to split the expense over two budgets, medication and groceries. A single expense would make you lose information.

Likewise, your salary may have multiple components. Your base salary may be 1200. Plus 100 bonus. Etc. All that information is lost when you enter it using a singular, unsplitted deposit.

![Transaction with multiple parts](images/transaction5.png)

Any time you create a deposit, transfer or a withdrawal, Firefly III allows you to **split** a transaction into multiple parts. When you do this, you can:

- Assign part of an expense to a budget;
- Assign different revenue accounts to parts of a deposit.
- Categorize money differently.

You can split your entire groceries-receipt into small "sub"-transactions. You can specify each component of your salary.

## Multi-currency transactions

Firefly III supports multi-currency transactions. You can set the foreign currency for any (split) transaction.
