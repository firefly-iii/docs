# Configure the import

This page contains instructions on how to configure your import using the Firefly III Data Importer (**FIDI**).

After uploading a file, you'll be presented with a list of options. Some options are specific to a way of importing, like CSV files, Nordigen or Spectre.

## Nordigen / Spectre import options

You must select the accounts to import from (use the checkbox), and indicate in which account the data must be imported.

Your selection may be limited: if the IBAN matches you have no choice. If the currency matches, only accounts with that currency can be selected.

## File options

### Headers

CSV only. Select this checkbox when your CSV file has headers on the first line of the file.

### CSV delimiter

CSV only. Select the field separator of our CSV file. This is almost always a comma.

### Date format

CSV only. Sets the date format of the date entries in the CSV file. If your file contains internationalized dates, you can prefix the date format with your country code, like `it:` or `nl:`. Then, enter your date format.

Read more about the format in the [PHP documentation](https://www.php.net/manual/en/datetime.format.php).

Here are some examples:

* `Ymd`. Will convert `20210318`
* `F/j/Y`. Will convert `January/17/2021`
* `nl:d F Y`. Will convert Dutch date `5 mei 2021`

## Import options

### Default import account

Select the asset account you want to link transactions to, if your import doesn't have enough meta-data to determine this. This is some time useful when files just list the transactions and the destination, nothing more.

### Rules

Select this if you want Firefly III to apply your rules to the import. It is useful to run your rules after the import.

### Import tag

When you check this FIDI will add a tag to each imported transaction denoting the import; this groups your import under a tag. Any rules that remove all tags from a transaction will *not* work when you use this option. The tag will always be added. This is not because FIDI uses some magic trick. The tag is added *after* the transaction is created and most people's rules don't fire then.

## Duplicate transaction detection

### General detection options

Sometimes imports contain duplicated lines. Use this option to remove them from your CSV file or import. It almost never makes sense to import duplicate lines.

### Detection method

FIDI has three methods of duplicate detection. Select the one that fits your use case the most.

#### No duplicate detection

This is the choice to make when you want no duplicate detection. FIDI will just import everything in your CSV file or data import.

#### Content-based

!!! info
    If you're unsure about what setting to use, use content-based duplicate detection.

FIDI will submit all transactions to Firefly III where they will be checked for duplications. If you ever submitted the exact same transaction before Firefly III will ignore it. This is a useful feature when your CSV file or import has no real identifiers (see ahead).

Many people use content-based duplicate detection in order to import files twice, or import files which may have overlap. Even transactions that are found in `today.csv` and `last-week.csv` will be detected as duplicates.

This method even works when you edit the transactions later. The duplicate will still be detected.

#### Identifier-based

Identifier-based duplicate detection is useful when your bank has very precise and complete statements. My bank for example, gives every transaction a unique ID. I use "identifier-based" duplicate detection. I've configured the **Unique column index** to the column that contains the identifier and I use the **Unique column type** "External reference" to save it in.

Whenever I import transactions FIDI will search for the identifier first and if it exists already, the transaction will not be imported.

The identifier-based duplicate detection method is pretty advanced, because it implies that you or your bank keep track of unique identifiers in your transactions, and you import them into the same field all the time. If you switch columns or switch fields it may stop working.

## Other options

If you want to, check the "skip form" button so you don't have to go through these options each time you start an import.

