# JSON

!!! warning
    The Firefly III CSV importer is due to be replaced by the universal [Data Importer](https://docs.firefly-iii.org/data-importer/). Please migrate at your earliest convenience.

The Firefly III CSV importer generates an import file each time you import CSV files. You can download the CSV file during or after the import.

## Pre-made import files

There's a repository on GitHub with [import configurations for common banks and financial institutions](https://github.com/firefly-iii/import-configurations).

## Example file

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
    "unique_column_index": 0,
    "unique_column_type": "note",
    "version": 2
}
```

## Explanation

Each field in this file has a function, and they're explained in this table:

### date

Sets the date format of the date entries in the CSV file. If your file contains internationalized dates, you can prefix the date format with your country code, like `it:` or `nl:`. Then, enter your date format.

Read more about the format in the [PHP documentation](https://www.php.net/manual/en/datetime.format.php).

Here are some examples:

* `Ymd`. Will convert `20210318`
* `F/j/Y`. Will convert `January/17/2021`
* `nl:d F Y`. Will convert Dutch date `5 mei 2021`

### default_account

The ID of the default asset accounts into which transactions will be imported if there's no source account. This is some time useful when files just list the transactions and the destination, nothing more.

### delimiter

The delimiter of the entries in the CSV files. Most files use "comma", but you can also use "semicolon" or "tab".

### headers

True or false if the CSV file has headers, a top row that explains what each column is for.

### rules

Whether or not to apply your rules to the import. It is useful to run your rules after the import although it will significantly slow down the import. The execution of rules can be slow when you have a lot of them.

### skip_form

If checked, next time you use the importer it will skip the configuration form. You can always go back to the form when using the user interface.

### specifics

"Specifics" are the bank specific scripts that can be applied to your import. They are decrepated and may be removed in a future version of the CSV importer. You can read more about them on the page about [import configuration](../usage/configure.md).

### roles

Each column in your CSV file gets a single role. This array in the JSON file indicates the role for each column. The user interface shows you all the possible roles, but you can also [read the code](https://github.com/firefly-iii/csv-importer/blob/main/config/csv_importer.php#L150) to learn which roles are available.

### do_mapping

Whether or not these columns should be 'mapped' to data in your Firefly III installation. Mapping is a process where values in your CSV file will always point in a specific value in your Firefly III installation. For each column, it will tell the CSV importer if it should use the mapping in the next array. In the user interface, this is indicated by little check boxes after each column.

Here are some examples:

```json
{
"do_mapping": [ true, true, false]
}
```

Column 0 and column 1 should be mapped, and column 2 should not. Keep in mind that the array counts from 0, so in your CSV file this would indicate: map the first two columns but don't map the third column.

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

The mapping. The value in quotes is what's found in the CSV file. The numeric ID links to the object in your Firefly III installation. Here are some examples:

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

The 0 in this example refers to the first column, because we count from zero. In this example, if column `0` contains either `Groceries` or the misspelled variant the CSV importer should link to a category with ID #3. From the mapping array alone you can't tell that I'm talking about columns. This is something you can find or set in the `roles` array.

Another example:

```json
{
	"4": {
		"NL21INGB9861487085": 15,
		"NL35ABNA6289099205": 23,
		"289099205": 23,
	}

}
```

This example maps the account numbers in column #4 to account ID's in Firefly III. 

You can configure a mapping for any column, but not all roles allow themselves to be mapped. For example, you can't map the "transaction amount". If you try, it will be ignored.

### duplicate_detection_method

The CSV importer has three methods to detect duplicate transactions. The [import configuration](../usage/configure.md) page has all the details. The JSON file reflects your choices.

* `none`. Do no duplicate detection.
* `classic`. Do content-based duplicate detection.
* `cell`. Do identifier-based duplicate detection.

Again, to learn more about these options, read about [import configuration](../usage/configure.md).

### ignore_duplicate_lines

Regardless of the choice of duplicate detection, you should leave this on `true`, so duplicated lines in your CSV files will be removed.

### ignore_duplicate_transactions

This variable is not really used anymore, but it's an indicator of which `duplicate_detection_method` you're using. For `classic`, it will always be `true`. Otherwise it's `false`.

### unique_column_index

This contains the column number that contains the unique value for the duplicate detection. It's only ever used when you use the `cell`-method, which stands for identifier-based duplicate detection. Read more about [import configuration](../usage/configure.md).

### unique_column_type

This contains the field type of the unique identifier. It's only ever used when you use the `cell`-method, which stands for identifier-based duplicate detection. Read more about [import configuration](../usage/configure.md).

### version

The version should always be "2" so the importer knows how to parse your file.
