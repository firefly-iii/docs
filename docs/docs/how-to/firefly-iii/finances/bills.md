# How to use bills

Bills are a way to manage your finances. You can read more about it in the [explanation about bills](../../../explanation/financial-concepts/bills.md).

When you create a bill, you tell Firefly III in what range you expect the bill to be. You also input the title of the bill, and how often the bill is expected to be paid.

* Description
* Minimum amount: 700
* Maximum amount: 800
* Description: Monthly rent
* Repeats every month

![The bills on the dashboard](../../../images/how-to/firefly-iii/finances/create-bill.png)

You can also set the end date and the extension date. If you know [how to set up a cron job](../advanced/cron.md), Firefly III can alert you about these dates.

The minimum and maximum amount and the period allow Firefly III to predict for you how much you should expect to spend on these bills. On the frontpage, a little box will tell you how you're doing.  If you enter a number in the "skip" field, the bill will be automatically skipped every X times; a bill that arrives every 3 months can be entered by filling in "2".

After you create a bill you are automatically redirected to the page to create a new rule. You can learn [how to manage rules](../features/rules.md). This new rule is autofilled to trigger on obvious things like the amount of the bill and the description you entered. Fine-tune the rule so any new transactions will auto-match the rule. 

When you delete the bill, transactions associated with the bill will lose this association but will not be deleted.

## The date of a bill

When you create a bill you also have to fill in the (first) date you expect the bill to hit. This date is purely cosmetic and will be used to inform you when the bill can be expected. For example:

* A monthly bill, on the 3rd day of the month, will hit: 3 Jan, 3 Feb, 3 Mar, etc.
* A weekly bill, starting on 15 Jan, will hit: 15 Jan, 22 Jan, 29 Jan, 5 Feb, etc.

Keep in mind that weekly bills may fall outside your expected range. At some point a weekly bill will hit 5 times in one month.

## Screenshots

The front page of Firefly III will also start showing the bills.

![The bills on the dashboard](../../../images/how-to/firefly-iii/finances/bills-frontpage.png)

Individual bills will end up looking like this picture:

![Overview of a bill](../../../images/how-to/firefly-iii/finances/bills-show.png)
