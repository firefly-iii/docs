# Search

You can search for transactions using the box in the left top of the page. Apart from basic stuff like `Groceries` or `"query with spaces"`, you can also use special operators to search.

You can combine operators like so: `some:operator and:another` but you can't use `AND` or `OR`. 

## Operators

All search operators work `like:this`. Either you set the `value:here` or when you wish to include spaces, `you:"should do this"`.

### Source account

Use these operators to filter transactions based on the source account name: `source_account_starts:query`, `source_account_ends:query`, `source_account_is:query`, `source_account_contains:query`.

You can filter on the IBAN or account number as well: `source_account_nr_starts:query`, `source_account_nr_ends:query`, `source_account_nr_is:query`, `source_account_nr_contains:query`.

When you know the account ID, you can use `source_account_id:query`. This will also accept comma separated values, like so: `source_account_id:1,2,3`.

You can also search for source cash accounts, denoted by "(cash)" in the UI. Use `source_is_cash:true`.

### Destination account

The same applies to the destination account name (and number):

* `destination_account_starts`, `destination_account_ends`,  `destination_account_is`, `destination_account_contains`
* `destination_account_nr_starts`, `destination_account_nr_ends`, `destination_account_nr_is`, `destination_account_nr_contains`
* `destination_account_id`

You can also search for destination cash accounts, denoted by "(cash)" in the UI. Use `destination_is_cash:true`.

### Source or destination account

You can search for a specific ID (source *or* destination) using `account_id`. This value also accepts comma separated values: `account_id:1,2,3`.

You can also search for either source or destination cash accounts, denoted by "(cash)" in the UI. Use `account_is_cash:true`.

### Description

Use either of the following: `description_starts`, `description_ends`, `description_contains`, `description_is`.

### Currency

Use `currency_is` or `foreign_currency_is`. 

`currency_is` will also search in foreign currencies. 

You can use either the currency code (`EUR`) or (part of) the full name: `US Dol`.

### Transaction properties

The following properties can be used to search for transactions with specific properties. Use the word "true" to activate it. You can't use "false" to negate the effect.

* `has_attachments:true`, `has_no_category:true`, `has_any_category:true`, `has_no_budget:true`, `has_any_budget:true`, `has_no_tag:true`, `has_any_tag:true`, `no_notes:true`, `any_notes:true`

### Category, budget, bill or tag

* `category_is`
* `budget_is`
* `bill_is`
* `tag_is`

### Notes

* `notes_contain`
* `notes_start`
* `notes_end`
* `notes_are`

### Amount of the transaction

Use a dot, not a comma: `12.34` will work. `12,34` will not. `€ 34,-` will not.

* `amount_exactly`
* `amount_less`. Less or equal.
* `amount_more`. More or equal.

### Transaction type.

* `transaction_type`

Will only accept the English terminology: `Withdrawal`, `Deposit`, `Transfer`, etc.

### The date

* `date_is:`
* `date_before:`
* `date_after:`

You can use several keywords:

- `today`, `yesterday` or `tomorrow`
- `"start of this week"`, `"start of this month"`, `"start of this quarter"` or `"start of this year"` (remember the quotes)
- `"end of this week"`, `"end of this month"`, `"end of this quarter"`, `"end of this year"` (remember the quotes)

These keywords are not translated. So even when you use Firefly III in Dutch or Russian, you must use the English terminology.

##### Absolute date

You can also use an absolute date, in this form: `YYYY-MM-DD`. So for the 17th of May 2020, you would use `date_is:2020-05-17`.

##### Relative dates

You can also use relative date indicators, like so:

- `+3d` (in three days)
- `-2w` (two weeks ago)

You can use `d` for days, `w` for weeks, `m` for months and `y` for years. You can also combine them. To set a date for a year and a half ago, you could do this:

- `-1y -6m`

Notice the **space** between the two.

Likewise, you can mix + and -. To go 11 months back, you could use:

- `-1y +1m`

### Creation date

Will only accept `YYYY-MM-DD`.

* `created_on:YYYY-MM-DD`
* `updated_on:YYYY-MM-DD`

### Other fields:

* `external_id`
* `internal_reference`
