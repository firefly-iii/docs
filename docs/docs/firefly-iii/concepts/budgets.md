# Budgets

Once you start creating transactions you start to realise that in a month, the same kind of stuff always comes back. For example:

* Bills
* Groceries
* Cigarettes
* Going out for drinks
* Clothing

Like wise, you should start to notice that you always spend the same amount of money on these things. That amount may be too high for your tastes, and you may want to change that. Or at least, keep track of it.

These things are **budgets**. Budgets are a kind of "category" that come back every single month. Bills are returning (rent, water, electricity). You buy groceries every day. You need to pay rent every month.

In what is called an [envelope system](http://en.wikipedia.org/wiki/Envelope_system) you stuff money in envelopes and spend your money from those envelopes.

Firefly III uses this method, which means you can create "envelopes" for any period. Example: € 200,- for "groceries" or € 500,- for "bills" every month. On the budgets-page you can create budgets and set envelopes each month (or each week or year). Expenses can then be assigned a budget and you will see on the budget page how well you are doing.

There is even a special budget report.

Firefly III also features categories. These are also interesting and useful, but slightly different.

Each budget is valid for the current time period only (look to the top right). First, set the amount that is available to you by clicking the pencil icon next to "*Available in ~~~*". By default, this is zero.

Then, create some budgets with the "Create a budget" button either in the center of the screen or in the top right menu. All you need for a budget is a name.

Once you've created some budgets you can set the amount of the budget using the input below the name. If you have already spent money in a budget, this will be shown as well. You can see that the top blue bar will update. It will be blue if you have budgeted all the money available, and turn red / orange if you budget more money than you have.

Both the amount available and the amount budgeted are for a specific period: if you go back a month or forward a month, both of these amounts are reset. Firefly III will remember what you've set the amounts to of course, but every period has their own amounts.

In your preferences, you can change this range to be weekly, or even yearly.

## Automatic budgeting

Firefly III v5.2.0 and later can automatically manage your budgets. Edit or create a budget and pick from the following options:

### Fixed amount

Firefly III will create a new budget limit every selected period. The exact behavior depends entirely on your settings:

If you set it to "monthly", € 200,- Firefly III will give you an automatic budget limit of € 200,-, valid for one month, every month. This will happen automatically.

Other settings will have a similar effect:

* Daily: Firefly III will create a budget limit of one day, every day.
* Weekly: Firefly III will create a weekly budget limit every week, every Monday.
* Monthly: Firefly III will create a monthly budget limit every month, on the first of every month. 
* Quarterly: Firefly III will create a quarterly budget limit every three months, on the first of every quarter (1st of January, 1st of April, 1st of July, 1st of October). 
* Half yearly: Firefly III will create a half year long budget limit every six months, twice a year (1st of January, 1st of July). 
* Yearly: Firefly III will create a year long budget limit every twelve months, once a year (1st of January). 

### Rollover

Rollover budgets can be used to "save up" money in a budget. Firefly III will take the budget left from the previous period and add the configured amount to the budget.

If you set it to "monthly", € 25,- Firefly III will behave in the following way:

* January, the budget will be set to € 25,-.
* February, the budget will be set to € 50,-.
* March, € 75,- etc.

If you spend money in your budget, this will be reflected in the budget. For example, with the example budget now at € 75,-, this is what happens when you spend € 19,95:

* April, the budget will be set to € 80,05: 75 + 25 - 19,95.
* May, € 105,05. Same logic.

If at any point you spend more than the amount in the budget, the routine will start over. So if you spend 199,95 (which is more than 105,05):

* June, the budget will be set to € 25,- again.

Just like the "fixed amount" auto-budget settings, these changes will happen on specific moments. This depends on the budget settings:

* Daily: Firefly III will create a budget limit of one day, every day.
* Weekly: Firefly III will create a weekly budget limit every week, every Monday.
* Monthly: Firefly III will create a monthly budget limit every month, on the first of every month. 
* Quarterly: Firefly III will create a quarterly budget limit every three months, on the first of every quarter (1st of January, 1st of April, 1st of July, 1st of October). 
* Half yearly: Firefly III will create a half year long budget limit every six months, twice a year (1st of January, 1st of July). 
* Yearly: Firefly III will create a year long budget limit every twelve months, once a year (1st of January). 

### Special attention

You can't change the trigger dates (like every Tuesday or the 5th of the month). After the amount has been created (on the first of each period or daily) you can freely edit or remove the limit. Firefly III won't stop you.

This feature will only work when you configure the [cron job](../advanced-installation/cron.md) correctly.

If you set the budget to "monthly", the budget limit created will also be "monthly". You can't do a daily increase on a monthly budget limit for example.

This routine is multi-currency aware, so it will also work for USD or CAD or whatever exotic currency you have configured. However, due to UI constraints, you only set one auto-budget per currency. You can't set two routines, one for USD and one for EUR.

## The difference between budgets and categories

If you try to save money every month on a certain subject, it's a budget. Groceries are budget. Bills are a budget. If you travel by train occasionally, it's not a budget.

First and foremost: a category is "incidental". You don't buy new furniture every month but you might want to keep track of such expenses. Or you don't care about costs for public traffic (budget-wise) but a category would be nice.

The rule of thumb is: would you make a real life envelope for it? If yes: budget. If no: category.

Categories can be used in deposits (earning money). Budgets cannot.

