# Manage a bill

!!! tip
    I've not yet finished writing this tutorial. Some items may not be filled in yet. I apologize for the inconvenience. Please refer to the [support page](../../references/support.md) if you have questions.

You can use bills to track regular income from your accounts to any third party. To read more about bills, see also:

- [An explanation about bills](../../explanation/financial-concepts/bills.md)
- [How to manage bills](../../how-to/firefly-iii/finances/bills.md)

## Create your first bill

In the left-hand menu, go to Bills, and press "Create new bill". You can also use the right-hand menu, where you can press "Create bill".

In either case, you see this screen:

(TODO add screenshot)

Fill in the name and the expected amount of the bill. The actual amount of a transaction linked to this bill is always allowed to be more or less, but these amounts are used by Firefly III to calculate the expected amounts each period.

Be sure to indicate when you expect this bill to arrive for the first time. If this bill is already running you can also add a date in the past. The important thing is that Firefly III knows on which day of the period the bill is supposed to arrive. On the next line, you indicate how often the bill arrives. The default is "monthly" but you see a few options.

To set a bill bi-weekly, or every 3 days, use the "skip"-field. For a bi-weekly bill, fill in 1.

The optional fields on the right allow you to give the bill an end date and an extension date. If you set up notifications according to [how to set up notifications](../../how-to/firefly-iii/advanced/notifications.md), Firefly III will warn you about the bill's expiry/extension date. You can also add a group to your bill. Any group that doesn't exist yet will be created.

### Create a rule

If you press "Store new bill" you get redirected to the form to create a new rule. You can read about this on the page [how to manage rules](../../how-to/firefly-iii/features/rules.md). 

For this tutorial, we will skip this step. In the left-hand menu, click Bills again.

## See it in the overview

In the overview, you will see your just-created bill. It will look something like this:

(TODO add screenshot)

If you click it, you will see the details of the bill:

(TODO add screenshot)

On the home page the bill is also visible:

(TODO add screenshot)

## Link a transaction

Now, if you make a withdrawal you can select the bill to be linked to the transaction. Note that this will not work for transfers or deposits. You can only link bills to withdrawals.

(TODO add screenshot)

Note that it doesn't matter if the amount is not right for the bill (too much or too little). Firefly III will still link the bill to the transaction. It's also okay to link transactions
to a bill that fall outside the bill's schedule. Firefly III will still link the bill to the transaction.

## See bill being paid

On the bill page, you can see that the transaction is linked to the bill and the bill is now paid. You can also see the next expected payment date.

(TODO add screenshot)

(TODO add screenshot)

## Look it up in reports

If you go to the reports page, you can see the bill in the "default financial report". The monthly overview features all bills of that period and whether they were paid.

(TODO add screenshot)
