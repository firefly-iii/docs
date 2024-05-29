# How to reconcile accounts

Firefly III has a "reconciliation" view which allows you to verify your firefly transactions exactly match your account statement.
This is an easy way to have peace of mind that your bank or credit card company is (hopefully) honest. This can also help to resolve incorrect balances after importing a large set of historical transactions into Firefly III.

Open the reconcile view from either the Asset Accounts Listing (/accounts/asset) "actions" drop down menu, "Reconcile this account".

![reconcile-account-index](https://github.com/firefly-iii/docs/assets/206041/8a433655-d430-4f83-b5e9-2ccc2b69e05f)
![The button is shown in your list of accounts](../../../images/how-to/firefly-iii/finances/reconcile-account-index.png)

or from the Asset Account Home view (/accounts/show/123) 3 dot drop down menu, "Reconcile this account".
![reconcile-account-home](https://github.com/firefly-iii/docs/assets/206041/497887b3-afb6-46e7-a681-d0155aadf224)

First, enter a date range and set the opening and closing balance as it shows on your account statement. 
![These dates and amounts must match your bank statement.](../../../images/how-to/firefly-iii/finances/reconcile-set-amounts.png)

For example:

* Start date: January 1st, 2018. Balance: € 120
* Ending date: January 31st, 2018. Balance: € 788

Next, press **Start reconciling** to continue.

Firefly III will show you the transactions from this range, plus a few previous and later dated transactions in case the transaction date differs from the account posted date.

For each transaction line on your account statement, find the matching transaction in Firefly III and check the box next to the amount column. Your goal is to verify that your Firefly III transactions exactly match your account statement. Go over your entire bank statement and check each transaction in Firefly III.  

If you find duplicate transactions, you can click on the transaction description to enter view mode, and from that view you can delete the transaction. After deletion, you will be returned to the reconcile view.

If you find incorrect transactions, you can click the "edit" pencil icon, to go into edit mode. After edited, you will be returned to the reconcile view.

After you have all the transactions matched (all boxes in the statement date range are checked), look at the amount at the top of the screen in the secito labeled "Reconciliation options". 

### Amount under "Reconciliation options" is less than zero

This means that your Firefly III asset account has less money in it than it should have. Look for duplicate transactions or incorrect amounts and correct them as needed. When you press the "Store reconciliation" button you can let Firefly III create an automated transaction to correct this difference. 

![When your account is too low on funds, you can allow Firefly III to create a corrective transaction.](../../../images/how-to/firefly-iii/finances/reconcile-negative-action.png)

### Amount under "Reconciliation options" is more than zero

This means that your Firefly III asset account has more money in it than it should have. Look for missing transactions or incorrect amounts and correct them as needed. When you press the "Store reconciliation" button you can let Firefly III create an automated transaction to correct this difference. 

![When your account is too full, you can allow Firefly III to create a corrective transaction.](../../../images/how-to/firefly-iii/finances/reconcile-positive-action.png)

### Amount under "Reconciliation options" is exactly zero!

Congrats! This means that your Firefly III transactions exactly match your account statement. You can now press "Store reconciliation" to mark the checkmarked transactions as reconciled.

![When there is no mismatch between your bank statements and Firefly III, you don't need to do anything.](../../../images/how-to/firefly-iii/finances/reconcile-neutral-action.png)

When you press the "Store reconciliation" button, Firefly III will present you with an overview of what you have just selected and ask you which action to take. You can let Firefly III generate a corrective transaction, or you can choose to ignore the difference. 

