# Set roles

Once you've configured the CSV file, you have to tell the Firefly III CSV importer what each column means. The page looks something like this:

![An example CSV file with 3 columns.](./images/example.png)

## Column and example data

You can see what kind of data Firefly III has found in your CSV file for each column.

## Map data?

Some times, data in your CSV files does not match what you'd like it to be in Firefly III. In order to make sure this goes well, check the "Map data?"-checkbox. Instructions on what to do will follow on the next page. Use this when your data has the following properties:

* `SHOPNM`, `shop-name-123`, `shop-name-city` and other variations when you just want it to say `Shop Name`.

## Roles

Each column must be given a role. You can of course, choose to ignore a column. These are the roles that you can choose from:

### (ignore this column)

Select this role to ignore the content of the column.

### Date

This sets the main date of the transaction.

### Description

The description of the transaction.

### Asset account (\*)

These roles (several variations) are used to indicate the asset account in the transaction, usually your own. "Asset account ID (matching FF3)" is a special column that's only relevant when you import old data from Firefly III itself.

### Opposing account (\*)

These roles (in several variations) are used to indicate the opposing account. Usually these are stores or shops but they can also be your own accounts (for transfers).

### Amount

Indicates the amount of the transaction. Use "Amount (negated column)" if the transactions get imported the wrong way around.

### Amount (in foreign currency)

Indicates the foreign amount of the transaction. Is always present next to the normal amount.

### Amount (credit / debit column)

Some banks split the amount in two columns. One for debits, one for credits. Use this column type for either field.

### Bill

Use this field to link the transaction to the right bill.

### Budget

Use this field to link the transaction to the right budget.

### Category

Use this field to link the transaction to the right category.

### Currency code / name / symbol

Use this field to set the currency of the transaction.

### Foreign currency code (ISO 4217)

Use this field to set the currency code of the foreign amount of the transaction.

### Meta date fields

Consists of:

- Interest calculation date
- Transaction booking date
- Transaction process date
- Transaction due date
- Transaction payment date
- Transaction invoice date

These are meta-dates related to the transaction you can set.

### External ID / Internal reference

Some banks give transactions their own ID's. Use this field to track them.

### Tags

The Firefly III can import space and comma separated tags.

### Note(s)

Any notes you wish to import.

Multilines notes spanning to more than one line can be imported, just remember to close quotes correctly and to use [markdown format](https://www.markdownguide.org/basic-syntax/#line-breaks):

> ```
> "this","is my","csv line","with my notes: to add a newline, finish a sentence with two spaces  
> and continue on the next line
> 
> or give a double enter"
> ```

In Firefly III you'll see the notes this way:

![How your notes will be presentend in Firefly III](./images/multiline-notes-sample.png)

### Debit/credit indicator

The CSV importer supports the use of fields like "D" and "C" or "debit" and "credit" to indicate if the amount should be positive or negative.

### SEPA fields

The Firefly III CSV importer can import several [SEPA](https://en.wikipedia.org/wiki/Single_Euro_Payments_Area) related fields. As a rule, these are read-only after importing.

- SEPA end-to-end Identifier
- SEPA Opposing Account Identifier
- SEPA Mandate Identifier
- SEPA Clearing Code
- SEPA Creditor Identifier
- SEPA External Purpose
- SEPA Country Code
- SEPA Batch ID
