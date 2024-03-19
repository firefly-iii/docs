# How to use rules

Firefly III contains a powerful rule engine that can automatically update your transactions. It can do this when transactions are created or when they are changed. It works by combining "triggers" with "actions".

This is especially useful when you're importing data, and you wish all transactions to be updated at once. Or perhaps, you are too lazy to set the correct budget and category all the time, so you make a rule to do this for you.

Rules are divided in rule groups. Each rule group has rules in a specific order.

## Triggers

A rule must spring into action at the right time! This is decided by triggers that you can set yourself. Here are some notable rule triggers that people use often:

* When a transaction is created
* When the description is something specific
* When the amount is more than *X*.
* When the budget is *X*.

For a full list of triggers please check out [this reference of all rule triggers](../../../references/firefly-iii/rule-triggers.md).

Most triggers are case-insensitive, but depending on your database the triggers may be case-sensitive.

Rules can be set to be "strict" or not. If a rule is set to be strict, ALL triggers must match for the rule to fire. If a rule is not strict, ANY trigger is enough.

This can be useful if you wish to match multiple descriptions in one same rule, for example. If your transactions are described "groceries" or "went shopping" or "got food" then a *non-strict* rule could match all of them by adding 3 triggers with different content.

Triggers can be inverted, in which case they do the exact opposite.

## Actions

When the triggers are hit (either ALL or ANY, see the "strict" option), Firefly III will execute the associated rule actions. There are many actions available. Notable ones are:

* Change the budget, category, tag(s), description, amount
* Set a new description
* Change the source or destination account

Combined, this gives you a lot of power over your financial data. There is [a reference to the full list of actions](../../../references/firefly-iii/rule-actions.md).

<!-- If the list of actions is not enough, you can use the [expression engine](expressions.md) to create more complex actions. -->

You cannot fire other rules from a rule.

You can refer to a piggy bank from a rule action, so the transaction's amount will be added to (or removed from) the piggy bank. This will only work when the transaction is a transfer.

## Stop processing?

### Stop processing other rules

When you create a new rule, you can set an option called "stop processing". If you set it, and the rule is triggered, other rules in the group will NOT be processed anymore.

Example: you have three rules in a group to add the tag "Groceries" to your groceries. One for each store you frequent. Once the first rule has triggered, you no longer need to check the other two rules.

### Stop processing other triggers

!!! info 
    This only applies to "non-strict" rules, because for strict rules, all triggers need to be hit anyway.

For any trigger in a non-strict rule, you can also set the "stop processing" option. Non-strict rules search for each trigger one by one, independently of one another, and pool the results together. If you search for transactions that start with "A" and transactions that start with "B", two searches are done and the results are presented as one list.

If you set "stop processing" on any trigger, Firefly III will stop the search as soon as the first trigger finds something. It will not continue with the other triggers unless there are no transactions at all that match the first trigger.

For example, if you create a rule that searches for transactions that start with "A" and transactions that start with "B" and you set the first trigger to "stop processing", no transactions that start with "B" will ever be found, if there are still transactions that start with "A".

"Stop processing other triggers" may lead to unpredictable results. The rule may (not) work as expected when you test it. But these kinds of rules, applied to newly created transactions do not check *other* transactions. 

In many cases this means that a rule that does not work on multiple transactions, *will* work on a newly created transaction. This is because the rule is applied to the newly created transaction individually, and not to a group of transactions. 

### Stop processing other actions

For each action, you can set "stop processing" as well. When you do, if the action changes a transaction, any actions after the current one will not fire.

## Apply rules

You can apply your rules to existing transactions. On the rule-overview (page ``/rules``), either use the "on/off"-icon or the ellipsis menu in a rule group to apply entire rule groups or individual rules to your transactions. See for some screenshots below.

## Boolean logic

This feature of Firefly III is pretty advanced, even if I say so myself. It does not support complicated rules. Rules like "the budget must be Groceries and the shop must be A or B" combine different operators ("and" and "or"). This will not work.

## Errors

Rule actions may fail. For example, if a transaction has no category, a rule action to remove the category fails. Firefly III does not report this in the user interface because rules are often executed asynchronously. You can check the logs for errors.

If you set up a [Slack or Discord notification channel](../advanced/notifications.md), you will get these rule specific errors in your Slack or Discord channel.

## Can I use a rule (action) to create new transactions?

No. Please use [webhooks](../features/webhooks.md) for that.

## Screenshots

![A new rule can be given some basic information.](../../../images/how-to/firefly-iii/features/rules-meta.png)

![First you would set up the triggers for the new rule](../../../images/how-to/firefly-iii/features/rules-triggers.png)

![Then decide on the actions to take.](../../../images/how-to/firefly-iii/features/rules-actions.png)

![Option to run a rule on transactions.](../../../images/how-to/firefly-iii/features/apply-rule.png)

![Option to run a rule group on transactions.](../../../images/how-to/firefly-iii/features/apply-rule-group.png)


