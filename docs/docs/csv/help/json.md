# JSON

The Firefly III CSV importer generates an import file each time you import CSV files. You can download the CSV file during or after the import.

## Pre-made import files

There's a repository on GitHub with [import configurations for common banks and financial institutions](https://github.com/firefly-iii/import-configurations).

## Example file

```json
{
    "date": "Ymd",
    "default_account": 1,
    "delimiter": "comma",
    "headers": true,
    "ignore_duplicate_lines": true,
    "ignore_duplicate_transactions": true,
    "rules": true,
    "skip_form": false,
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
    "version": 2
}
```

## Explanation

Each field in this file has a function, and they're explained in this table:

### date

Sets the date format of the date entries in the CSV file. For the format, [read this page](https://www.php.net/manual/en/function.date.php).

### default_account

The ID of the default asset accounts into which transactions will be imported if there's no source account.

### delimiter

The delimiter of the entries in the CSV files. Most files use "comma", but you can also use "semicolon" or "tab".

### headers

True or false if the CSV file has headers.

### ignore_duplicate_lines

If the importer should ignore duplicate lines in your CSV file.

### ignore_duplicate_transactions

If checked, Firefly III will give you an error if the transaction already exists.

### rules

Whether or not to apply your rules to the import.

### skip_form

If checked, next time you use the importer it will skip the configuration form.

### specifics

"Specifics" are specific (haha) scripts that can be applied to your import.

### roles

A role for each column.

### do_mapping

Whether or not these columns should be mapped to data in your Firefly III installation. So for each column, it will tell the CSV importer if it should use the mapping in the next array. In the user interface, this is indicated by little check boxes after each column.

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

The mapping. The value in brackets is what's found in the CSV file, the ID links to the account in your Firefly III installation. Here are some examples:

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

The 0 in this example refers to the first column. What kind of a colum this is I don't know. Doesn't matter for the example. It looks like categories. What this means is that if column `0` contains either `Groceries` or the misspelled variant, this should be linked to category 3. 

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

This example maps the account numbers in column 4 (so the fifth one) to accounts in Firefly III.

Each column has their own mapping.


### version

Should be 2.