# Rule triggers

The Firefly III rule engine can trigger on a number of things. If you are missing a specific trigger, please check out the [support](../../explanation/support.md) page.

If you want to know more, please check out [how to create a rule](../../how-to/firefly-iii/features/rules.md).

!!! info "Trigger inversion"
    All triggers can be inverted. By checking the "NOT"-box on the rule creation page, the trigger will do the opposite, i.e. NOT match on a description.


## Description and content

Triggers that match on textual content. All triggers have varieties: starts with, ends on, contains, is exactly.

1. Description
2. Notes
3. Attachment name
4. Attachment notes

## Properties

Properties of the transaction in question.

1. Type. Accepts English terms only: "withdrawal", "deposit" or "transfer"
2. If the transaction is reconciled
3. If it has any attachments
4. If it has a (any) category
5. If it has a (any) budget
6. If it has a (any) subscription
7. If it has a (any) tag
8. If it has (any) notes
9. If it has an external URL
10. If it has an external ID
11. ID of the transaction
12. ID of the transaction journal
13. ID of the associated recurring transaction
14. If the transaction exists. This particular trigger is always true, and when you inverse it, always false.

When you inverse these triggers, they look for the opposite property.

## Amount

All amount triggers can handle bigger than, less than, exactly, etc.

1. Amount
2. Foreign amount

Also present are filters for the currency of the transaction.

1. Currency is
2. Foreign currency is.

## Account

Trigger on the source and/or destination account of the transaction.

All the following triggers have varieties: starts with, ends on, contains, is exactly.

1. Source and/or destination account ID
2. Source and/or destination account name
3. Source and/or destination account IBAN
4. Source and/or destination account number

You can also trigger on:

1. Source and/or destination account is the "cash" account

## Meta-data

Meta-data includes all other data related to the transaction. All the following triggers have varieties: starts with, ends on, contains, is exactly.

1. A (any) tag.
2. SEPA CI
3. Category
4. Budget
5. Subscription
6. External ID
7. Internal reference
8. External URL


## Date and time

All of these date and time triggers can handle "on", "before" and "after" varieties.

1. Transaction date
2. Interest date
3. Book date
4. Process date
5. Due date
6. Payment date
7. Invoice date
8. Created at date
9. Updated at date

### Keywords

You can use several keywords:

- `today`, `yesterday` or `tomorrow`
- `start of this week`, `start of this month`, `start of this quarter` or `start of this year`
- `end of this week`, `end of this month`, `end of this quarter`, `end of this year`

### Absolute date

You can also use an absolute date, in this form: `YYYY-MM-DD`. So for the 17th of May 2020, you would use `2020-05-17`.

### Relative dates

You can also use relative date indicators, like so:

- `+3d` (in three days)
- `-2w` (two weeks ago)

You can use `d` for days, `w` for weeks, `m` for months and `y` for years. You can also combine them. To set a date trigger for a year and a half ago, you could do this:

- `-1y -6m`

Notice the **space** between the two.

Likewise, you can mix + and -. To go 11 months back, you could use:

- `-1y +1m`

If your entry is invalid, you can't save the rule.

### Semi specific dates

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


## Would you like to know more?

If you are missing a specific trigger, please check out the [support](../../explanation/support.md) page.
