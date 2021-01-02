# JSON files

The importer uses a specific JSON configuration format that you can edit yourself. Here's a full example of a JSON file.

```json
{
    "rules": true,
    "skip_form": false,
    "accounts": {
        "123": 456
    },
    "version": 1,
    "mapping": {
        "Some shop": "13",
        "Some other shop": "0",
    },
    "account_types": {
        "8": "expense",
    },
    "date_range": "all",
    "date_range_number": 30,
    "date_range_unit": "d",
    "date_not_before": "",
    "date_not_after": "",
    "do_mapping": true
}
```

Each key is explained below. They are the same for each importer.

## rules

`"rules": true,`

Whether or not to apply your rules to each transaction.

## skip_form

`"skip_form": false,`

Whether or not to skip most configuration forms the next time you run the import.

## accounts


```json
    "accounts": {
        "123": 456
    },
```

A mapping between your source accounts and your Firefly III accounts. In this example, `123` is the source account (an internal identifier) and `456` is the reference to the Firefly III account.

## version

`"version": 1,`

Allows for (future) JSON changes. Should always be 1.

## mapping

```json
    "mapping": {
        "Some shop": "13",
        "Some other shop": "0",
    },
```

Each key (`"Some shop"`) refers to a Firefly III account (`13`). If no mapping is made, the account will be searched for and possibly generated automatically.

## account_types

```json
"account_types": {
        "8": "expense",
    },
```

This is used to cache some data about your Firefly III instance. Please don't edit it.

## date_range

`"date_range": "all",`

Can be set to three values: `all`, `partial` and `range`.

## date_range_number and date_range_unit

```json
    "date_range_number": 30,
    "date_range_unit": "d",
```

Will be used when `date_range` is set to "partial". Valid numbers + the units are used to calculate how far back to import. Valid units: `d` (days), `w` (weeks), `m` (months), `y` (years). 

```json
    "date_not_before": "",
    "date_not_after": "",
```

Will be used when `date_range` is set to "range". Use format `YYYY-MM-DD`. You can leave either one, or both empty.

## do_mapping

`"do_mapping": true`

If you want to do account mapping.
