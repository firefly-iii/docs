(TODO clean up, move stuff to references, move stuff to explanation)

# Search

You can search for transactions using the box in the left top of the page. Apart from basic stuff like `Groceries` or `"query with spaces"`, you can also use special operators to search.

You can combine operators like so: `some:operator another:thing` but you can't use `AND` or `OR`.

## Operators

All search operators work `like:this`. Either you set the `value:here` or when you wish to include spaces, `you:"should do this"`.

To negate a search, use a minus: `-category:something`. Any search operator can be negated.

### Source account

Use these operators to filter transactions based on the source account name:

* `source_account_starts:query`
* `source_account_ends:query`
* `source_account_is:query`
* `source_account_contains:query`.

You can filter on the IBAN or account number as well:

* `source_account_nr_starts:query`
* `source_account_nr_ends:query`
* `source_account_nr_is:query`
* `source_account_nr_contains:query`

When you know the account ID, you can use `source_account_id:query`. This will also accept comma separated values, like so: `source_account_id:1,2,3`.

You can also search for source cash accounts, denoted by "(cash)" in the UI. Use `source_is_cash:true`. You can't reverse this by using `false`.

### Destination account

The same applies to the destination account name (and number):

* `destination_account_starts:query`
* `destination_account_ends:query`
* `destination_account_is:query`
* `destination_account_contains:query`
* `destination_account_nr_starts:query`
* `destination_account_nr_ends:query`
* `destination_account_nr_is:query`
* `destination_account_nr_contains:query`
* `destination_account_id:1`

You can also search for destination cash accounts, denoted by "(cash)" in the UI. Use `destination_is_cash:true`.

### Source or destination account

You can search for a specific ID (source *or* destination) using `account_id`. This value also accepts comma separated values: `account_id:1,2,3`.

You can also search for either source or destination cash accounts, denoted by "(cash)" in the UI. Use `account_is_cash:true`. You can't reverse this by using `false`.

You can also search in the name of either the source or destination account:

* `account_is:query`
* `account_contains:query`
* `account_starts:query`
* `account_ends:query`
* `account_nr_is:query`
* `account_nr_contains:query`
* `account_nr_starts:query`
* `account_nr_ends:query`

### Description

Use either of the following:

* `description_starts:query`
* `description_ends:query`
* `description_contains:query`
* `description_is:query`.

### Currency

Use `currency_is:query` or `foreign_currency_is:query`.

`currency_is` will also search in foreign currencies.

You can use either the currency code (`EUR`) or (part of) the full name: `"US Dol"`.

### Transaction properties

The following properties can be used to search for transactions with specific properties. Use the word "true" to activate it. You can't use "false" to negate the effect.

Attachments, notes and tags:

* `has_attachments:true`
* `has_no_attachments:true`
* `has_no_tag:true`
* `has_any_tag:true`
* `no_notes:true`
* `any_notes:true`

Categories, budgets and bills:

* `has_no_category:true`
* `has_any_category:true`
* `has_no_budget:true`
* `has_any_budget:true`
* `has_no_bill:true`
* `has_any_bill:true`

Other fields

* `any_external_url:true`
* `no_external_url:true`

### Category, budget, bill or tag

* `category_is:query`
* `category_contains:query`
* `category_starts:query`
* `category_ends:query`
* `budget_is:"query with spaces"`
* `budget_contains:query`
* `budget_starts:query`
* `budget_ends:query`
* `bill_is:query`
* `bill_contains:query`
* `bill_starts:query`
* `bill_ends:query`
* `tag_is:query`
* `tag_is_not:query`

### Other interesting fields:

* `external_id_is:query`
* `external_id_contains:query`
* `external_id_starts:query`
* `external_id_ends:query`
* `internal_reference_is:query`
* `internal_reference_contains:query`
* `internal_reference_starts:query`
* `internal_reference_ends:query`
* `external_url_is:query`
* `external_url_contains:query`
* `external_url_starts:query`
* `external_url_ends:query`
* `recurrence_id:query`
* `id:query`
* `journal_id:query`

### Notes

* `notes_contain:query`
* `notes_start:query`
* `notes_end:"query with spaces"`
* `notes_are:query`

### Amount of the transaction

Use a dot, not a comma: `12.34` will work. `12,34` will not. `€ 34,-` will not.

The amount operator uses positive amounts for all transactions.

* `amount_exactly:12.34`
* `amount_less:100`. Less or equal.
* `amount_more:21`. More or equal.
* `foreign_amount_exactly:34.56`
* `foreign_amount_less:34.56`
* `foreign_amount_more:34.56`

### Transaction type

* `transaction_type:Deposit`

Will only accept the English terminology: `Withdrawal`, `Deposit`, `Transfer`, etc.

### Attachments

Will search in attachments and their properties:

* `attachment_name_is:query`
* `attachment_name_contains:query`
* `attachment_name_starts:query`
* `attachment_name_ends:query`
* `attachment_notes:query`
* `attachment_notes_contain:query`
* `attachment_notes_start:query`
* `attachment_notes_end:query`

### The date

* `date_is:2020-01-01`
* `date_before:today`
* `date_after:"start of this month"`
* `interest_date_*` (same options)
* `book_date_*` (same options)
* `process_date_*` (same options)
* `due_date_*` (same options)
* `payment_date_*` (same options)
* `invoice_date_*` (same options)
* `created_at_*` (same options)
* `updated_at_*` (same options)

You can use several keywords:

- `today`, `yesterday` or `tomorrow`
- `"start of this week"`, `"start of this month"`, `"start of this quarter"` or `"start of this year"` (remember the quotes)
- `"end of this week"`, `"end of this month"`, `"end of this quarter"`, `"end of this year"` (remember the quotes)

These keywords are not translated. So even when you use Firefly III in Dutch or Russian, you must use the English terminology.

##### Absolute date

You can also use an absolute date, in this form: `YYYY-MM-DD`. So for the 17th of May 2020, you would use `date_is:2020-05-17`.

##### Relative dates

You can also use relative date indicators, like so. Notice the quotes around each query:

- `"+3d"` (in three days)
- `"-2w"` (two weeks ago)

You can use `d` for days, `w` for weeks, `m` for months and `y` for years. You can also combine them. To set a date for a year and a half ago, you could do this:

- `"-1y -6m"`

Notice the **space** between the two.

Likewise, you can mix + and -. To go 11 months back, you could use:

- `"-1y +1m"`
