# JSON configuration file

The data importer generates an import configuration file each time you import data. You can download the configuration file during or after the import.

You can use it to quickly configure your import the way you want to.

## Example file

This is a typical configuration file with all options:

```json
{
  "date": "Ymd",
  "default_account": 49,
  "delimiter": "comma",
  "headers": true,
  "rules": true,
  "skip_form": false,
  "add_import_tag": true,
  "specifics": [
    "AppendHash"
  ],
  "roles": [
    "date_transaction",
    "description",
    "amount",
    "account-name",
    "opposing-name",
    "note"
  ],
  "do_mapping": {
    "3": true,
    "4": true,
    "0": false,
    "1": false,
    "2": false,
    "5": false
  },
  "mapping": {
    "3": {
      "Savings Account": 3
    },
    "4": {
      "Savings Account": 3
    }
  },
  "duplicate_detection_method": "classic",
  "ignore_duplicate_lines": false,
  "ignore_duplicate_transactions": true,
  "unique_column_index": 1,
  "unique_column_type": "external-id",
  "version": 3,
  "flow": "csv",
  "identifier": "123456",
  "connection": "789543",
  "ignore_spectre_categories": false,
  "map_all_data": false,
  "accounts": [
    
  ],
  "date_range": "all",
  "date_range_number": 30,
  "date_range_unit": "d",
  "date_not_before": "2021-01-01",
  "date_not_after": "2021-06-01",
  "nordigen_country": "NL",
  "nordigen_bank": "ABN_AMRO_XY",
  "nordigen_requisitions": [],
  "conversion": true
}
```

## Fields and values

!!! info
    Some options only apply to CSV files, others are exclusive to camt.053 files.

### date

Sets the date format of the date entries in the file. If your file contains internationalized dates, you can prefix
the date format with your country code, like `it:` or `nl:`. Then, enter your date format.

Read more about the format in the [PHP documentation](https://www.php.net/manual/en/datetime.format.php).

Here are some examples:

* `Ymd`. Will convert `20210318`
* `F/j/Y`. Will convert `January/17/2021`
* `nl:d F Y`. Will convert Dutch date `5 mei 2021`

### default_account

The ID of the default asset accounts into which transactions will be imported if there's no source account. This is some
time useful when files just list the transactions and the destination, nothing more.

### delimiter

The delimiter of the entries in the CSV files. Most files use "comma", but you can also use "semicolon" or "tab".

### headers

True or false if the CSV file has headers, a top row that explains what each column is for.

### rules

Whether to apply your rules to the import. It is useful to run your rules after the import, although it will
significantly slow down the import. The execution of rules can be slow when you have a lot of them.

### skip_form

If checked, next time you use the importer it will skip the configuration form. You can always go back to the form when
using the user interface.

### roles

Each column in your CSV file gets a single role. This array in the JSON file indicates the role for each column. The
user interface shows you all the possible roles, but you can
also [read the code](https://github.com/firefly-iii/data-importer/blob/main/config/csv.php) to learn which
roles are available.

Below is a list of possible roles:

| role                  | description                              |
|-----------------------|------------------------------------------|
| _ignore               | (ignore this column)                     |
| account-bic           | Asset account (BIC)                      |
| account-iban          | Asset account (IBAN)                     |
| account-id            | Asset account ID (matching FF3)          |
| account-name          | Asset account (name)                     |
| account-number        | Asset account (account number)           |
| amount                | Amount                                   |
| amount_credit         | Amount (credit column)                   |
| amount_debit          | Amount (debit column)                    |
| amount_foreign        | Amount (in foreign currency)             |
| amount_negated        | Amount (negated column)                  |
| subscription-id               | Subscription ID (matching FF3)                   |
| bill-name             | Subscription name                                |
| budget-id             | Budget ID (matching FF3)                 |
| budget-name           | Budget name                              |
| category-id           | Category ID (matching FF3)               |
| category-name         | Category name                            |
| currency-code         | Currency code (ISO 4217)                 |
| currency-id           | Currency ID (matching FF3)               |
| currency-name         | Currency name (matching FF3)             |
| currency-symbol       | Currency symbol (matching FF3)           |
| date_book             | Transaction booking date                 |
| date_due              | Transaction due date                     |
| date_interest         | Interest calculation date                |
| date_invoice          | Transaction invoice date                 |
| date_payment          | Transaction payment date                 |
| date_process          | Transaction process date                 |
| date_transaction      | Date                                     |
| description           | Description                              |
| external-id           | External ID                              |
| external-url          | External URL                             |
| foreign-currency-code | Foreign currency code (ISO 4217)         |
| generic-debit-credit  | Generic bank debit/credit indicator      |
| ing-debit-credit      | ING specific debit/credit indicator      |
| internal_reference    | Internal reference                       |
| note                  | Note(s)                                  |
| opposing-bic          | Opposing account (BIC)                   |
| opposing-iban         | Opposing account (IBAN)                  |
| opposing-id           | Opposing account ID (matching FF3)       |
| opposing-name         | Opposing account (name)                  |
| opposing-number       | Opposing account (account number)        |
| rabo-debit-credit     | Rabobank specific debit/credit indicator |
| sepa_batch_id         | SEPA Batch ID                            |
| sepa_cc               | SEPA Clearing Code                       |
| sepa_ci               | SEPA Creditor Identifier                 |
| sepa_country          | SEPA Country Code                        |
| sepa_ct_id            | SEPA end-to-end Identifier               |
| sepa_ct_op            | SEPA Opposing Account Identifier         |
| sepa_db               | SEPA Mandate Identifier                  |
| sepa_ep               | SEPA External Purpose                    |
| tags-comma            | Tags (comma separated)                   |
| tags-space            | Tags (space separated)                   |

### do_mapping

Whether these columns should be 'mapped' to data in your Firefly III installation. Mapping is a process where
values in your CSV file will always point in a specific value in your Firefly III installation. For each column, it will
tell the CSV importer if it should use the mapping in the next array. In the user interface, this is indicated by little
check boxes after each column.

Here are some examples:

```json
{
  "do_mapping": [
    true,
    true,
    false
  ]
}
```

Column 0 and column 1 should be mapped, and column 2 should not. Keep in mind that the array counts from 0, so in your
CSV file this would indicate: map the first two columns but don't map the third column.

In some JSON files, the order of `true` and `false` gets mixed up, which is why you'll see something like this:

```json
{
  "do_mapping": {
    "0": true,
    "2": false,
    "1": true
  }
}
```

What you see here is the same thing as the previous example. Map the first two columns, don't map the last one.

### mapping

The mapping. The value in quotes is what's found in the CSV file. The numeric ID links to the object in your Firefly III
installation. Here are some examples:

```json
{
  "0": {
    "Groceries": 3,
    "Grozeries": 3,
    "Bills": 2,
    "Going out": 21
  }
}
```

The 0 in this example refers to the first column, because we count from zero. In this example, if column `0` contains
either `Groceries` or the misspelled variant the CSV importer should link to a category with ID #3. From the mapping
array alone you can't tell that I'm talking about columns. This is something you can find or set in the `roles` array.

Another example:

```json
{
  "4": {
    "NL21INGB9861487085": 15,
    "NL35ABNA6289099205": 23,
    "289099205": 23
  }
}
```

This example maps the account numbers in column #4 to account ID's in Firefly III.

You can configure a mapping for any column, but not all roles allow themselves to be mapped. For example, you can't map
the "transaction amount". If you try, it will be ignored.

### duplicate_detection_method

The CSV importer has three methods to detect duplicate transactions. The [reference](duplicate-detection.md)
page has all the details. The JSON file reflects your choices.

* `none`. Do no duplicate detection.
* `classic`. Do content-based duplicate detection.
* `cell`. Do identifier-based duplicate detection.

Again, to learn more about these options, read [the reference about duplicate detection](duplicate-detection.md).

### ignore_duplicate_lines

Regardless of the choice of duplicate detection, you should leave this on `true`, so duplicated lines in your CSV files
will be removed.

### ignore_duplicate_transactions

This variable is not really used anymore, but it's an indicator of which `duplicate_detection_method` you're using.
For `classic`, it will always be `true`. Otherwise, it's `false`.

### unique_column_index

This contains the column number that contains the unique value for the duplicate detection. It's only ever used when you
use the `cell`-method, which stands for identifier-based duplicate detection. Read more
about [duplicate detection](duplicate-detection.md).

### unique_column_type

This contains the field type of the unique identifier. It's only ever used when you use the `cell`-method, which stands
for identifier-based duplicate detection. Read more about [duplicate detection](duplicate-detection.md).

### version

The version should always be "3" so the importer knows how to parse your file.

### add_import_tag

If set to true, the import will the same tag to all transactions in the import.

### flow

Determines what is in your import. `csv`, `spectre` or `nordigen`. The `nordigen` variable refers to GoCardless.

### identifier

Spectre only, and contains the bank identifier.

### connection

Spectre only, and contains the bank connection.

### ignore_spectre_categories

Spectre only. Set to true, this will make the importer ignore Spectre's suggested categories.

### map_all_data

Spectre and GoCardless only. Is an indication if you wish to map data.

### accounts

Spectre and GoCardless only. A list of accounts from your provider that you wish to import, and into which Firefly III
account you want to import.

### date_range

Spectre and GoCardless only. What date range to import from your provider.

- `all`: Import everything
- `partial`: Go back `date_range_number` units of `date_range_unit` (see below)
- `range`: Import a specific range

### date_range_unit

Spectre and GoCardless only. `d` for days, `w` for weeks, `m` for months, `y` for years. Used only if date_range is partial.

### date_range_number

Spectre and GoCardless only. Number of days/weeks/months/years to go back. Used only if date_range is partial.

### date_not_before

Spectre and GoCardless only. Used only if date_range is `range`. Will not import from dates before the set date.

### date_not_after

Spectre and GoCardless only. Used only if date_range is `range`. Will not import from dates after the set date.

### nordigen_country

GoCardless only. The country of the bank you selected to import from.

### nordigen_bank

GoCardless only. The bank you selected to import from.

### nordigen_requisitions

GoCardless only. A list of valid "requisitions" (permissions to import) from your bank.

### conversion

CSV only. If the importer should attempt to convert the file to UTF-8.
