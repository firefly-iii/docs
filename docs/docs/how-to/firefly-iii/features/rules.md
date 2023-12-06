# Rules

Firefly III contains a powerful rule engine that can automatically update your transactions. It can do this when transactions are created or when they are changed. It works by combining "triggers" with "actions".

This is especially useful when you're importing data, and you wish all transactions to be updated at once. Or perhaps, you are too lazy to set the correct budget and category all the time, so you make a rule to do this for you.

## Rule groups

Rules are divided in rule groups. Each rule group has rules in a specific order.

## Triggers

A rule must spring into action at the right time! This is decided by triggers that you can set yourself. Here are some notable rule triggers that people use often:

* When a transaction is created
* When the description is something specific
* When the amount is more than *X*.
* When the budget is *X*.

All triggers are case-insensitive.

Rules can be set to be "strict" or not. If a rule is set to be strict, ALL triggers must match for the rule to fire. If a rule is not strict, ANY trigger is enough.

Triggers can be inverted.

!!! info
This can be useful if you wish to match multiple descriptions in one same rule, for example. If your transactions are described "groceries" or "went shopping" or "got food" then a *non-strict* rule could match all of them by adding 3 triggers with different content.

### Special triggers

Some triggers require some tinkering before they work the way you might think.

#### Account number / IBAN triggers

These triggers (for both the source and destination accounts) trigger on either the IBAN or the account number.

#### Amount triggers

It's "amount less or equal" and similar.

#### Date triggers

The date triggers are complex and require your attention.

##### Keywords

You can use several keywords:

- `today`, `yesterday` or `tomorrow`
- `start of this week`, `start of this month`, `start of this quarter` or `start of this year`
- `end of this week`, `end of this month`, `end of this quarter`, `end of this year`

These keywords are not translated. So even when you use Firefly III in Dutch or Russian, you must use the English terminology.

##### Absolute date

You can also use an absolute date, in this form: `YYYY-MM-DD`. So for the 17th of May 2020, you would use `2020-05-17`.

##### Relative dates

You can also use relative date indicators, like so:

- `+3d` (in three days)
- `-2w` (two weeks ago)

You can use `d` for days, `w` for weeks, `m` for months and `y` for years. You can also combine them. To set a date trigger for a year and a half ago, you could do this:

- `-1y -6m`

Notice the **space** between the two.

Likewise, you can mix + and -. To go 11 months back, you could use:

- `-1y +1m`

If your entry is invalid, you can't save the rule.

##### Semi specific dates

I wasn't sure what to call this, but the following date triggers can be set:

- On the 10th day of the month
- In february
- In 2019
- On the 5th of June, whatever the year.

You can do this with the format `xxxx-xx-xx` where you change any set of `xx` into your desired outcome. The format is `year-month-day`. Keep in mind that the other `xx` pairs stay `xx` and need no change. Here are some examples:

- `xxxx-xx-10`. Will trigger on the 10th day of any month.
- `xxxx-04-xx`. Will trigger for any date in April, no matter the year or the day.
- `2018-xx-xx`. Will trigger for any date in 2018.

You can also make some advanced combinations:

- `2017-xx-03`. Will trigger on the 3rd of the month, but only in 2017.
- `2018-09-xx`. Will trigger on any day in September 2018.
- `xxxx-08-07`. Will trigger on August 7th, whatever the year.

So you could say "Transaction date is before" `xxxx-xx-10` and any transaction before the 10th of the month is triggered.

!!! info
These semi specific dates are tricky. The `xx`-values will be filled in by the date of the transaction. If your rule trigger has something like "2018-xx-xx" it will never match transactions from any year except 2018.

## Actions

When the triggers are hit (either ALL or ANY, see the "strict" option), Firefly III will execute the associated rule actions. There are many actions available. Notable ones are:

* Change the budget, category, tag(s), description, amount
* Set a new description
* Change the source or destination account

Combined, this gives you a lot of power over your financial data.

You cannot fire other rules from a rule.

You can refer to a piggy bank from a rule action, so the transaction's amount will be added to (or removed from) the piggy bank. This will only work when the transaction is a transfer.

### Special actions

#### Delete transaction

If you use this trigger, the transaction will be deleted. There is no undo.

## Stop processing

When you create a new rule, you can set an option called "stop processing". If you set it, and the rule is triggered, other rules in the group will NOT be processed anymore.

For any trigger, you can also set the "stop processing" option. If you do, and the trigger is hit, it will stop processing other triggers in the rule. Whether the actions get executed depends on how many triggers were fired so far. If you hit 2 out of 2 when "stop processing" was hit, the actions will fire.

For each action, you can set "stop processing" as well. When you do, any actions after the current one will not fire.


## Converting to another transaction type

If you set an action to convert your transaction to a deposit, a transfer or a withdrawal, configure the rule action correctly. If you don't do this right the rule action wil *silently* fail and nothing will happen. Here you can read what will happen to your transaction. This is dependent on the original type and the future type of the transaction.

These conversions will *not* be applied to split transactions.

**From a deposit to a withdrawal**

The money will be transferred away from the asset account instead of deposited into it. The "action value" you must provide must be the name of a valid destination expense account. If it does not exist, it will be created.

If you leave the action value blank, the new expense account will be named after the revenue account. So, a deposit from "Your Boss" becomes a withdrawal at "Your Boss".

**From a transfer to a withdrawal**

Firefly III will replace the destination asset account with an expense account. So, a transfer from your Checking Account to your Savings Account will be converted into a withdrawal from your Checkings Account to destination Account X, where X is an expense account. The "action value" you must provide must be the name of a valid destination expense account. If it does not exist, it will be created.

If you leave the action value blank, the new expense account will be named after the original destination asset account.

**From a withdrawal to a deposit**

The money will be deposited into the asset account instead of withdrawn from it. The "action value" you must provide must be the name of a valid source revenue account. If it does not exist, it will be created.

If you leave the action value blank, the new revenue account will be named after the original expense account. So, a withdrawal from "Walmart" becomes a deposit from "Walmart".

**From a transfer to a deposit.**

Firefly III will replace the "source" asset account with a revenue account. So, a transfer from your Savings Account to your Checking Account will be converted into a deposit into your Checkings Account from source Account X, where X is a revenue account. The "action value" you must provide must be the name of a valid revenue account. If it does not exist, it will be created.

If you leave the action value blank, the new revenue account will be named after the original source asset account.

**From a withdrawal to a transfer**

The money will be moved away from the original asset account, into another asset account. The "action value" you must provide must be the name of a valid destination asset account. If it does not exist, the action will fail.

If you leave the action value empty, the action will fail.

**From a deposit to a transfer**

The money will be moved into the original asset account, from another asset account. The "action value" you must provide must be the name of a valid source asset account. If it does not exist, the action will fail.

If you leave the action value empty, the action will fail.

## Apply rules

You can apply your rules to existing transactions. On the rule-overview (page ``/rules``), either use the "on/off"-icon or the ellipsis menu in a rule group to apply entire rule groups or individual rules to your transactions. See for some screenshots below.

## Boolean logic

This feature of Firefly III is pretty advanced, even if I say so myself. It does not support complicated rules. Rules like "the budget must be Groceries and the shop must be A or B" combine different operators ("and" and "or"). This will not work.

## Errors

Rule actions may fail. For example, if a transaction has no category, a rule action to remove the category fails. Firefly III does not report this in the user interface because rules are often executed asynchronously. You can check the logs for errors.

If you set up a [Slack or Discord notification channel](../advanced-installation/email.md), you will get these rule specific errors in your Slack or Discord channel.

## Screenshots

![A new rule can be given some basic information.](images/rules-meta.png)

![First you would set up the triggers for the new rule](images/rules-triggers.png)

![Then decide on the actions to take.](images/rules-actions.png)

![Option to run a rule on transactions.](images/apply-rule.png)

![Option to run a rule group on transactions.](images/apply-rule-group.png)


## Can I use a rule (action) to create new transactions?

No. Please use [webhooks](../features/webhooks.md) for that.
