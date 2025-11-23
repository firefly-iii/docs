# Search

The search engine will search in the description of transactions only. Other filters are possible, and are listed below.

The search does not support `OR`, all queries are joined as `AND` queries (A and B and C).

## How it works

In the future, I hope to make it easier to apply these to your search.

All search filters work like this:

- `example:value` for basic words
- `example:"long value"` for words with spaces
- `example:123` for numbers
- `example:123.45` for numbers with decimals
- `example:2023-09-17` for dates
- `-example:value` for the negation of a search filter. It works on all previous examples too.

## Description and content

1. Description: `description_is`, `description_contains`, `description_starts`, `description_ends`
2. Notes: `notes_are`, `notes_contain`, `notes_start`, `notes_end`
3. Attachment name: `attachment_name_is`, `attachment_name_contains`, `attachment_name_starts`, `attachment_name_ends`
4. Attachment notes: `attachment_notes_are`, `attachment_notes_contain`, `attachment_notes_start`, `attachment_notes_end`

To negate any of these, just add a `-`. The search would become (for example): "description does not start with".

## Properties

These search options search for properties of the transaction in question.

1. Type. Accepts English terms only: "withdrawal", "deposit" or "transfer": `type:withdrawal`
2. If the transaction is reconciled: `reconciled:true`
3. If it has any attachments: `has_attachments:true`
4. If it has a (any) category: `has_any_category:true`
5. If it has a (any) budget: `has_any_budget:true`
6. If it has a (any) subscription: `has_any_subscription:true`
7. If it has a (any) tag: `has_any_tag:true`
8. If it has (any) notes: `has_any_notes:true`
9. If it has an external URL: `has_any_external_url:true`
10. If it has an external ID: `has_any_external_id:true`
11. ID of the transaction: `id:123`
12. ID of the transaction journal: `journal_id:123`
13. ID of the associated recurring transaction: `recurrence_id:123`
14. If the transaction exists. This particular trigger is always true, and when you inverse it, always false: `exists:true`

When you inverse these search options, they look for the opposite property.

## Amount

All amount search options can handle bigger than, less than, exactly, etc.

1. Amount: `amount:123.45`, `more:123.45`, `less:123.45`
2. Foreign amount: `foreign_amount:123.45`, `foreign_amount_more:123.45`, `foreign_amount_less:123.45`

Also present are search options for the currency of the transaction.

1. Currency is: `currency_is:EUR`
2. Foreign currency is: `foreign_currency_is:USD`

## Account

These search for the source and/or destination account of the transaction.

### Source and/or destination

- `account_id`, triggers on any account ID
- `account_is`, triggers on the exact name.
- `account_contains`, triggers on any account name that contains the value.
- `account_starts`, triggers on any account name that starts with the value.
- `account_ends`, triggers on any account name that ends with the value.
- `account_is_cash:true`, triggers when any account is the cash account

### Source and/or destination account number (or IBAN)

These search options are the same as above, but for the account number or IBAN.

- `account_nr_is`, triggers on the exact account number.
- `account_nr_contains`, triggers on any account number that contains the value.
- `account_nr_starts`, triggers on any account number that starts with the value.
- `account_nr_ends`, triggers on any account number that ends with the value.

### Source account

All these search options also work for the source account when you use `source_account_` instead of `account_`.

### Destination account

All these search options also work for the destination account when you use `destination_account_` instead of `account_`.

## Meta-data

Meta-data includes all other data related to the transaction. All the following search options have varieties: starts with, ends on, contains, is exactly.

1. A (any) tag: `tag_is`, `tag_contains`, `tag_starts`, `tag_ends`
2. SEPA CT: `sepa_ct_is`
3. Category: `category_is`, `category_contains`, `category_starts`, `category_ends`
4. Budget: `budget_is`, `budget_contains`, `budget_starts`, `budget_ends`
5. Subscription: `subscription_is`, `subscription_contains`, `subscription_starts`, `subscription_ends`
6. External ID: `external_id_is`, `external_id_contains`, `external_id_starts`, `external_id_ends`
7. Internal reference: `internal_reference_is`, `internal_reference_contains`, `internal_reference_starts`, `internal_reference_ends`
8. External URL: `external_url_is`, `external_url_contains`, `external_url_starts`, `external_url_ends`

## Date and time

All of these date and time search options can handle "on", "before" and "after" varieties:

1. Transaction date: `date_on`, `date_before`, `date_after`
2. Interest date: `interest_date_on:2023-01-01`, ...
3. Book date: `book_date_on:2023-01-01`, ...
4. Process date: `process_date_on:2023-01-01`, ...
5. Due date: `due_date_on:2023-01-01`, ...
6. Payment date: `payment_date_on:2023-01-01`, ...
7. Invoice date: `invoice_date_on:2023-01-01`, ...
8. Created at date: `created_at_on:2023-01-01`, ...
9. Updated at date: `updated_at_on:2023-01-01`, ...

### Keywords

You can use several keywords for dates. It may make it easier to search for relative periods.

- `today`, `yesterday` or `tomorrow`
- `start of this week`, `start of this month`, `start of this quarter` or `start of this year`
- `end of this week`, `end of this month`, `end of this quarter`, `end of this year`

### Absolute date

You can use an absolute date, in this form: `YYYY-MM-DD`. So for the 17th of May 2020, you would use `2020-05-17`.

### Relative dates

You can also use relative date indicators, like so:

- `"+3d"` (in three days)
- `"-2w"` (two weeks ago)

You can use `d` for days, `w` for weeks, `m` for months and `y` for years. You can also combine them. To creatre a search for a year and a half ago, you could do this:

- `date_is:"-1y -6m"`

Notice the **space** between the two date indicators and the added quotes.

Likewise, you can mix + and -. To go 11 months back, you could use:

- `"-1y +1m"`

If your entry is invalid, the search may not work.

### Semi specific dates

I wasn't sure what to call this, but the following date searches can be used:

- On the 10th day of the month
- In february
- In 2019
- On the 5th of June, whatever the year.

You can do this with the format `xxxx-xx-xx` where you change any set of `xx` into your desired outcome. The format is `year-month-day`. Keep in mind that the other `xx` pairs stay `xx` and need no change. Here are some examples:

- `xxxx-xx-10`. Will search for transactions on the 10th day of any month.
- `xxxx-04-xx`. Will search for transactions on any date in April, no matter the year or the day.
- `2018-xx-xx`. Will search for transactions on any date in 2018.

You can also make some advanced combinations:

- `2017-xx-03`. Will search for transactions on the 3rd of the month, but only in 2017.
- `2018-09-xx`. Will search for transactions on any day in September 2018.
- `xxxx-08-07`. Will search for transactions on August 7th, whatever the year.

So you could say "Transaction date is before" `xxxx-xx-10` and any transaction before the 10th of the month is found by the search.

!!! info
    These semi specific dates are tricky. The `xx`-values will be filled in by the date of the transaction. If your search has something like "2018-xx-xx" it will never match transactions from any year except 2018.

## Would you like to know more?

If you are missing a specific search option, please check out the [support](../../explanation/support.md) page.
