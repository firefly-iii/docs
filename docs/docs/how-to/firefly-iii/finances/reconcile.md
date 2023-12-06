(TODO cleanup, make guide, drop title)

# Reconciling accounts

Although more and more people use fancy online banking, a lot of users still receive paper bank statements in the mail, every week or every month.

This means that each transaction must be entered by hand when it occurs, and must be compared to your bank statements by hand later. Firefly III has a "reconciliation"-view that allows you to do just that.

In the asset account overview, and on the page of an individual asset account, you will find a button with a checkbox in it (✓). This button opens the reconciliation mode.

First, enter a date range and set the opening and start balance as it shows on your bank statement. It is assumed that these are correct of course, but this we shall find out now. Then, click "start reconciling".

Firefly III will show you the transactions from this range, plus some extra transactions just for good measure. Select all transactions that appear on your bank statements.

When you are done selecting transactions, the amount under "Reconciliation options" should be zero. It could be that it is different.

* When the amount is below zero, your Firefly III asset account has less money in it than your bank says it should have.
* When the amount is more than zero, your Firefly III asset account has more money in it than your banks says it should have.

Either way, press "Store reconciliation" to store the result. The transactions will be marked as "cleared" and you can optionally create a transaction that will correct the balance of your Firefly III asset account (a reconciliation).

## Match dates and balances

When reconciling an account, you must first match the amounts and dates on your bank statement, with the input fields in Firefly III. For example:

* Start date: January 1st, 2018. Balance: € 120
* Start date: January 31st, 2018. Balance: € 788

So Firefly III will show the same dates and balances as your bank statement does. You can press **Start reconciling** to continue.

The goal is to put a checkbox (next to "Amount") for each transaction that is also on your bank statements. Go over your entire bank statement and check each transaction in Firefly III.

Read below to see what to do next.

### Transactions not listed on bank statement

If you have a transaction in Firefly III that is not on your bank statement, it may have been saved with the wrong data. You should remove it from Firefly III, or change it, so it matches a known transaction from your bank statements.

### Transactions not listed in Firefly III

It seems you forgot to enter a transaction! Quickly add it and return to the reconciliation view later.

### Amount under "Reconciliation options" is less than zero

This means that your Firefly III asset account has less money in it than it should have. Perhaps you entered a transaction wrongly or twice. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to *enter* a transaction, you should correct that first!

### Amount under "Reconciliation options" is more than zero

This means that your Firefly III asset account has more money in it than it should have. Maybe you have forgotten a transaction or entered the wrong amount. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to *enter* a transaction, you should correct that first!

### Amount under "Reconciliation options" is exactly zero!

Congrats! This means that you and your bank agree on your balance. You can now press "Store reconciliation" to reconcile your account.

## Store reconciliation

When you press "Store reconciliation", Firefly III will present you with an overview of what you have just selected and ask you which action to take. You can let Firefly III generate a corrective transaction, or you can choose to ignore the difference. Of course when you ignore the difference, your account balance may still be different from what your bank thinks it is!

## Screenshots

![The button is shown in your list of accounts](./images/reconcile-account-index.png)

![These dates and amounts must match your bank statement.](./images/reconcile-set-amounts.png)

![When the result is negative, your Firefly III asset account is too low on funds.](./images/reconcile-negative-result.png)

![When your account is too low on funds, you can allow Firefly III to create a corrective transaction.](./images/reconcile-negative-action.png)

![When the result is positive, your Firefly III asset account has too much money in it.](./images/reconcile-positive-result.png)

![When your account is too full, you can allow Firefly III to create a corrective transaction.](./images/reconcile-positive-action.png)

![When there is no mismatch between your bank statements and Firefly III, you don't need to do anything.](./images/reconcile-neutral-action.png)
