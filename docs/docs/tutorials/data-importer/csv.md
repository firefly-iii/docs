# Select a data source

## Introduction

Depending on how you installed the data importer, you can find it at any of the following urls:

- http://localhost:8080/
- http://localhost:81/

Browse to your data importer URL.

To import data first select your data source. You have the following choices:

1. Import from CSV or camt.053 files
2. Import from GoCardless
3. Import from Spectre

![Select import routine](images/selection.png "Select import routine")

## Import a CSV file or a camt.053 file

You have to upload the file you wish to import. Optionally, you can upload a "configuration file". The configuration file is used to pre-set the import configuration, so you don't have to do it manually all the time.

!!! info "A note when importing CSV files"
If the file contains any lines before the data starts, you must remove them manually. If there are extra headers (for example every 100 rows) you'll have to delete those too.

There may be a standard configuration file for your bank in **[this GitHub repository](https://github.com/firefly-iii/import-configurations)**. If not, it is OK to continue without a configuration file.

![Upload CSV](images/upload-csv.png "Upload CSV")

If you continue, you will end up at [the configuration screen](configure-import.md).

## Import from GoCardless

If you import from GoCardless, you can also optionally upload a GoCardless configuration file. Also, you may have to enter your GoCardless ID and GoCardless Key, if they are not part of the data importer's environment variables.

Read the page about [GoCardless and Spectre](../faq/spectre-and-nordigen.md) for more information about GoCardless.

![GoCardless identifiers](images/nordigen-info.png "GoCardless identifiers")

After these settings, you must select your country and your bank of choice.

![GoCardless bank selection](images/nordigen-bank.png "GoCardless bank selection")

If you continue, you will end up at [the configuration screen](configure-import.md).

## Import from Spectre

If you import from Spectre, you can also optionally upload a Spectre configuration file. Also, you may have to enter your Spectre App ID and Spectre Secret, if they are not part of the data importer's environment variables.

Read the page about [GoCardless and Spectre](../faq/spectre-and-nordigen.md) for more information about GoCardless.

![Spectre identifiers](images/spectre-info.png "Spectre identifiers")

After these settings, you must select an existing connection, or create a new one.

![Spectre connection](images/spectre-connection.png "Spectre connection")

If you continue, you will end up at [the configuration screen](configure-import.md).



# Configure the import

After uploading a file, you'll be presented with a list of options. Some options are specific to a way of importing, like CSV or camt.053 files, GoCardless or Spectre. We start from the top and go down the page.

## GoCardless and Spectre import options

For GoCardless and Spectre you must first select the accounts to import from, and indicate in which account the data must be imported.

Your selection may be limited: if the IBAN matches you have no choice. If the currency matches, only accounts with that currency can be selected.

![Account selection](images/account-select.png "Account selection")

## CSV file options

### Headers

When you import a CSV file, this checkbox allows you to indicate if your CSV file has headers on the first line of the file instead of data.

![A CSV file with headers](images/headers.png "A CSV file with headers")

### Convert to UTF-8

Some files are not delivered as UTF-8, which is a common text encoding format. You can ask the data importer to convert the files. You may end up with garbled text. This may happen especially when you have lines with special characters in them.

### CSV delimiter

When you import a CSV file, you must select the field separator of our CSV file. This is almost always a comma.

![A CSV file with comma separation](images/comma.png "A CSV file with comma separation")

### Date format

This option sets the date format of the date entries in the CSV file. If your file contains internationalized dates, you can prefix the date format with your country code, like `it:` or `nl:`. Then, enter your date format.

Read more about the format in the [PHP documentation](https://www.php.net/manual/en/datetime.format.php).

Here are some examples:

* `Ymd`. Will convert `20210318`
* `F/j/Y`. Will convert `January/17/2021`
* `nl:d F Y`. Will convert Dutch date `5 mei 2021`

![Date configuration value "Ymd" is necessary to parse this file](images/date.png "Date configuration value 'Ymd' is necessary to parse this file")

## camt.053 file options

The camt.053 file options are not yet documented, because I am lazy and the camt.053 import is only just released: thinks may change quickly. All other options below apply to camt.053 files as well.

## Import options

### Default import account

Select the asset account you want to link transactions to, if your import doesn't have enough meta-data to determine this. This is some time useful when files just list the transactions and the destination, nothing more.

### Rules

Select this if you want Firefly III to apply your rules to the import. It is useful to run your rules after the import, so the transactions are cleaned up.

### Import tag

When you check this the data importer will add a tag to each imported transaction denoting the import; this groups your import under a tag.

!!! note "Rules"
If you have rules that remove all tags from a transaction, they will *not* work when you use this option. The tag will always be added. This is not because the data importer uses some magic trick. The tag is added *after* the transaction is created.

### Custom import tag

You can set a custom import tag if you do not like the default one. To learn more about the possibilities, read the [FAQ on custom import tags](../faq/custom-import-tag.md).

### Map data

If you import data, you can "map" the data found to data already present in Firefly III. You can use this to map account names in the CSV or camt.053 file to account names already in Firefly III. If you do not map data, Firefly III will make one-on-one to existing or to be created data.

### Date range

For GoCardless and Spectre imports, you can select a date range, limiting the import. Options are as follows:

- Import everything.
- Go back a number of days, weeks, months or years.
- Select a specific range to import from.

## Duplicate transaction detection

Checkout the [FAQ on duplicate transactions](../faq/duplicates.md) and the [FAQ on re-importing transactions](../faq/re-import.md) for more information.

!!! info "Duplicate detection"
If you're unsure about what setting to use, use content-based duplicate detection.

### General detection options

Sometimes imports contain duplicated lines. Use this option to remove them from your import. It almost never makes sense to import duplicate lines. These options don't apply to GoCardless and Spectre imports.

### Detection method

The data importer has three methods of duplicate detection. Select the one that fits your use case the most. Extra options may appear or disappear.

#### No duplicate detection

This is the choice to make when you want no duplicate detection. The data importer will just import *everything* in your data import.

#### Content-based

The data importer will submit all transactions to Firefly III, where they will be checked for duplications. If you ever submitted the exact same transaction before Firefly III will ignore it. This method even works when you edit the transactions in later stage. The duplicate will still be detected.

#### Identifier-based

Identifier-based duplicate detection is useful when your bank has very precise and complete statements. On the configuration page, select i which column your bank has a unique identifier, like a transaction ID. Also select the field on which this unique identifier can be stored.

When importing your data, the data importer will first search for this unique identifier in the selected column, before it will try to import the transaction.

![Unique header settings](images/unique-headers.png "Unique header settings")

## Other options

If you want to, check the "skip form" button, so you don't have to go through these options each time you start an import.


# Fine tune CSV or camt.053 imports

Next to the [configuration settings](configure-import.md) you also have options to further tune your CSV or camt.053 file import.

## CSV+camt.053 column roles

You have to tell the Firefly III data importer what each column means. The page looks something like this:

![An example CSV file with 3 columns.](./images/example.png)

Each column must be given a role. You can of course, choose to ignore a column. These are the roles that you can choose from:

!!! info "About camt.053 roles"
The importer also allows you to set the roles for the content in camt.053. Since camt.053 are more strictly organised, your options may be limited. The text below mentions CSV files, but most options are also possible for camt.053 files.

### (ignore this column)

Select this role to ignore the content of the column.

### Date

This sets the main date of the transaction. This date will be used for sorting transactions. If your CSV file also includes a timestamp *in the same column* you can include it in your date format, and it'll be parsed as well.

It's important to be consistent about the date you use. Especially when your CSV has several date fields. Choose the date closest to the actual transaction.

### Description

The description of the transaction. If you select multiple columns to be the description of the transaction, the columns will be concatenated together.

### Asset account (\*)

These roles (several variations) are used to indicate the asset account in the transaction, usually your own. Think of these columns as the "payer" column, the person or account paying the money.

The "asset account" role and the "opposing account" role (see ahead) will be automatically switched by the data importer when the transaction is the other way around.

### Opposing account (\*)

These roles (in several variations) are used to indicate the opposing account. Usually these are stores or shops or opposing account details. Think of these columns as the "payee" column, the person or account receiving the money.

The "asset account" role and the "opposing account" role (see earlier) will be automatically switched by the data importer when the transaction is the other way around.

### Amount

Indicates the amount of the transaction. Use "Amount (negated column)" if the transactions get imported the wrong way around.

### Amount (in foreign currency)

Indicates the foreign amount of the transaction. Is always present next to the normal amount.

### Amount (credit / debit column)

Some banks split the amount in two columns. One for debits, one for credits. Use this column type for either field.

### Bank specific credit/debit indicator

Some banks use a column with a magic letter or word to indicate if the transaction is an expense or income. The data importer has a role for such columns, and [most letters are recognized](https://github.com/firefly-iii/data-importer/blob/main/app/Services/CSV/Converter/BankDebitCredit.php#L51).

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

These are meta-dates related to the transaction you can set. Import these dates so data isn't lost.

Most people use the date that is closest to the actual transaction date as the main date (see earlier in the text about the "date" field). The other dates can be stored pretty much as you wish.

When reconciling transactions it might be useful to select the processing date of the bank as the date.

### External ID / Internal reference

Some banks give transactions their own ID's. Use this field to track them.

### Tags

The Firefly III can import space and comma separated tags.

### Note(s)

Any notes you wish to import. If you select multiple columns to be stored in the notes field, they will be concatenated together. It's not that column A will override column B, for example.

Multilines notes spanning to more than one line can be imported, just remember to close quotes correctly and to use [Markdown format](https://www.markdownguide.org/basic-syntax/#line-breaks):

> ```
> "this","is my","csv line","with my notes: to add a newline, finish a sentence with two spaces  
> and continue on the next line
> 
> or give a double enter"
> ```

In Firefly III you'll see the notes this way:

![How your notes will be presented in Firefly III](./images/multiline-notes-sample.png)

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

### Other leftover fields

Many CSV files contain extra data. Things like zip codes, retention policies or other data that doesn't really fit in Firefly III can be stored in the "notes"-field. This doesn't make the data more easily accessible but at least it'll be saved.


# Map data

If you import data into Firefly III, you may notice that most banks aren't particularly "clean" when it comes to account names. Check out this example:

![Weird opposing account names.](./images/difficult1.png)

In this example, taken from a Dutch Rabobank CSV file, you'll see various weird things:

- One restaurant with two different names.
- Several shops with their location in the name.
- Date information in the name.

To fix this, Firefly III supports a process called "mapping" where you can link values like these to one unified shop entry. This example will make it pretty clear. It is taken directly from the data importer:

![Mapping names to one account.](./images/map.png)

You can map account names, currency names, categories and many other fields to values already present in your Firefly III database. This will greatly smooth out the import process.
