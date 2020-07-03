# Reconciling accounts

Although more and more people have access to fancy online banking, a lot of users still receive paper bank statements in the mail, every week or every month.

This means that each transaction must be entered by hand when it occurs, and must be compared to your bank statements by hand later. Firefly III has a "reconciliation"-view that allows you to do just that.

In the asset account overview, and on the page of an individual asset account, you will find a button with a checkbox in it (✓). This button opens the reconciliation mode.

## Match dates and balances

When reconciling an account, you must first match the amounts and dates on your bank statement, with the input fields in Firefly III. For example:

* Start date: January 1st, 2018. Balance: € 120,-
* Start date: January 31st, 2018. Balance: € 788,-

So Firefly III will show the same dates and balances as your bank statement does. You can press **Start reconciling** to continue.

The goal is to put a checkbox (next to "Amount") for each transaction that is also on your bank statements. Go over your entire bank statement and check each transaction in Firefly III.

Read below to see what to do next.

### Transactions not listed on bank statement

If you have a transaction in Firefly III that is not on your bank statement, it may have been saved with the wrong data. You should remove it from Firefly III, or change it so it matches a known transaction from your bank statements.

### Transactions not listed in Firefly III

It seems you forgot to enter a transaction! Quickly add it and return to the reconciliation view later.

### Amount under "Reconciliation options" is less than zero

This means that your Firefly III asset account has less money in it than it should have. Perhaps you entered a transaction wrongly or twice. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to _enter_ a transaction, you should correct that first!

### Amount under "Reconciliation options" is more than zero

This means that your Firefly III asset account has more money in it than it should have. Maybe you have forgotten a transaction or entered the wrong amount. When you press "Store reconciliation" you can let Firefly III create an automated transaction to correct this difference. Of course, if you have simply forgotten to check a transaction or even to _enter_ a transaction, you should correct that first!

### Amount under "Reconciliation options" is exactly zero!

Congrats! This means that you and your bank agree on your balance. You can now press "Store reconciliation" to reconcile your account.

## Store reconciliation

When you press "Store reconciliation", Firefly III will present you with an overview of what you have just selected and ask you which action to take. You can let Firefly III generate a corrective transaction, or you can choose to ignore the difference. Of course when you ignore the difference, your account balance may still be different from what your bank thinks it is!

## Screenshots

![The button is shown in your list of accounts](../.gitbook/assets/reconcile-account-index%20%281%29.png)

![These dates and amounts must match your bank statement.](../.gitbook/assets/reconcile-set-amounts%20%281%29.png)

![When the result is negative, your Firefly III asset account is too low on funds.](../.gitbook/assets/reconcile-negative-result%20%281%29.png)

![When your account is too low on funds, you can allow Firefly III to create a corrective transaction.](../.gitbook/assets/reconcile-negative-action%20%281%29.png)

![When the result is positive, your Firefly III asset account has too much money in it.](../.gitbook/assets/reconcile-positive-result%20%281%29.png)

![When your account is too full, you can allow Firefly III to create a corrective transaction.](../.gitbook/assets/reconcile-positive-action%20%281%29.png)

![When there is no mismatch between your bank statements and Firefly III, you don&apos;t need to do anything.](../.gitbook/assets/reconcile-neutral-action%20%281%29.png)

