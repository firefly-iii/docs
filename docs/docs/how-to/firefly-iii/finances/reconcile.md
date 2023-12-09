# How to reconcile accounts

Although more and more people use fancy online banking, a lot of users still receive paper bank statements in the mail, every week or every month.

This means that each transaction must be entered by hand when it occurs, and must be compared to your bank statements by hand later. Firefly III has a "reconciliation"-view that allows you to do just that.

In the asset account overview, and on the page of an individual asset account, you will find a button with a checkbox in it (✓). This button opens the reconciliation mode.

![The button is shown in your list of accounts](../../../images/how-to/firefly-iii/finances/reconcile-account-index.png)

First, enter a date range and set the opening and start balance as it shows on your bank statement. It is assumed that these are correct of course. For example:

* Start date: January 1st, 2018. Balance: € 120
* Start date: January 31st, 2018. Balance: € 788

So Firefly III will show the same dates and balances as your bank statement does. You can press **Start reconciling** to continue.

![These dates and amounts must match your bank statement.](../../../images/how-to/firefly-iii/finances/reconcile-set-amounts.png)

The goal is to put a checkbox (next to "Amount") for each transaction that is also on your bank statements. Go over your entire bank statement and check each transaction in Firefly III. Firefly III will show you the transactions from this range, plus some extra transactions just for good measure. 

### Amount under "Reconciliation options" is less than zero

This means that your Firefly III asset account has less money in it than it should have. Perhaps you entered a transaction wrongly or twice. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to *enter* a transaction, you should correct that first!

![When your account is too low on funds, you can allow Firefly III to create a corrective transaction.](../../../images/how-to/firefly-iii/finances/reconcile-negative-action.png)

### Amount under "Reconciliation options" is more than zero

This means that your Firefly III asset account has more money in it than it should have. Maybe you have forgotten a transaction or entered the wrong amount. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to *enter* a transaction, you should correct that first!

![When your account is too full, you can allow Firefly III to create a corrective transaction.](../../../images/how-to/firefly-iii/finances/reconcile-positive-action.png)

### Amount under "Reconciliation options" is exactly zero!

Congrats! This means that you and your bank agree on your balance. You can now press "Store reconciliation" to reconcile your account.

![When there is no mismatch between your bank statements and Firefly III, you don't need to do anything.](../../../images/how-to/firefly-iii/finances/reconcile-neutral-action.png)

When you press "Store reconciliation", Firefly III will present you with an overview of what you have just selected and ask you which action to take. You can let Firefly III generate a corrective transaction, or you can choose to ignore the difference. Of course when you ignore the difference, your account balance may still be different from what your bank thinks it is!

