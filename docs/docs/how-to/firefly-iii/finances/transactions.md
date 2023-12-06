(TODO write me)




Transactions have a few useful fields:

* A description
* The amount (duh)
* The date
* The accounts involved (from and to)
* .. and some meta-information.

In Firefly III, a transaction can be a withdrawal, a deposit or a transfer. Beyond the obvious, they are slightly different from one another.

## Withdrawals

To create a withdrawal select a source account first. This should be an [asset account](accounts.md) or a [liability](liabilities.md). Then select a destination account (an expense account) or free-type a new one. Withdrawals can also be assigned a [budget](organizing.md).

Although the form allows you to free-type a destination account as well, this may fail and the transaction can't be saved.

## Deposits

When you wish to create a deposit, select a revenue account first, as the source account. When it doesn't exist yet, free-type your own input, and it will be created for you. Then, select an [asset account](accounts.md) or a [liability](liabilities.md) as the destination account. If the source account already exists the form will recognize that you're creating a deposit, and the "budget"-selector will disappear.

Although the form allows you to free-type a destination account as well, this may fail and the transaction can't be saved.

## Transfers

A transfer is created only between existing asset accounts. Select an asset account for both the source and destination from the free-form fields. Transfers can be linked to [piggy banks](piggies.md), to automatically add or remove money from the piggy bank you select.




## Split transactions

What has been described here are "singular transactions". Firefly III stores each financial transaction in a journal. Each journal contains two "transactions". One takes money (-250 from your bank account) and the other one puts it into another account (+250 for Amazon.com).

You can verify this by counting. There are always twice as many "transactions" as there are "journals" in your database.

This way, Firefly III tries to stay true to what a financial transaction is, which is kind of singular. Money moves from A to B, end of story. Nothing more.

However, often an expense tells a story. Take grocery receipts for example. It's one expense sure, but it consists of many parts. And when you buy aspirin and bread at the same time, you might want to split the expense over two budgets, medication and groceries. A single expense would make you lose information.

Likewise, your salary may have multiple components. Your base salary may be 1200. Plus 100 bonus. Etc. All that information is lost when you enter it using a singular, not split deposit.

![Transaction with multiple parts](images/transaction5.png)

Any time you create a deposit, transfer or a withdrawal, Firefly III lets you **split** a transaction into multiple parts. When you do this, you can:

* Assign part of an expense to a budget;
* Assign different revenue accounts to parts of a deposit.
* Categorize money differently.

You can split your entire groceries-receipt into small "sub"-transactions. Or you can specify each component of your salary.



### Constraints

It's important to realise the following constraints when dealing with split transactions.

* When making an expense (withdrawal), you can only split the destination accounts, not the source accounts. You can't create one expense that originates from two or three asset accounts. But you can divide a withdrawal over several expense accounts. You can split your groceries over several departments, but you can't pay a bill from two asset accounts.
* Deposits must end up in one asset account. You can't make a deposit from one revenue accounts and split it over separate asset accounts. Your salary, when divided over different splits, must end up in one asset account.
* Transfers can be split, but all splits must have the same source + destination.

## Transaction links

More often than not a transaction isn't just "a transaction" but a connected to some other transactions. Maybe you've been reimbursed money by your boss. Maybe an expense is paid back to you by a friend. Or perhaps a friend paid you back for something or other.

![Inward link](./images/links1.png)

In Firefly III you can store these links between transactions. By default, four link types are available. You can see these under Administration > Transaction links configuration.

* Is paid for by
* Is refunded by
* Is reimbursed by
* Relates to

These links work both ways. When transaction A has been refunded by transaction B, B is noted to refund A.

![Outward link](./images/links2.png)

You can also add your own link types if you want to.

To make a link with another transaction, go to the overview of a transaction and use the "Link transaction" button under the transaction. If the transaction has been split, select the correct split to link. Select the correct type of link from the dropdown and select the transaction to be linked. Optionally you can add some comments.

You can remove or reverse a link once it has been created.

### Use of links

It is important to realise that links don't *do* anything. They won't change your transactions, or subtract amounts or anything like that.

### Screenshots

![The "Lunch with client" expense is reimbursed by your boss in transaction "Lunch reimbursement".](./images/links-inward.png)

![Vice versa, "Lunch reimbursement" reimburses you for "Lunch with client".](./images/links-outward.png)

![Use this modal to create a new link](./images/links-modal.png)

![You can delete the link or make the transactions switch positions.](./images/links-change.png)
