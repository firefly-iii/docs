# API special endpoints

Some Firefly III API endpoints need a little more guidance than fits in the documentation.

## Transaction update

Updating transactions is straight-forward, but updating splits is more complicated.

If you want to update a split transaction, you must know and submit the `transaction_journal_id` for each split, even if you do not want to change anything in the split. Like so:

```json
{
    "apply_rules": false,
    "fire_webhooks": false,
    "transactions":
    [
        {
            "transaction_journal_id": 1222,
            "description": "Updated description"
        },
        {
            "transaction_journal_id": 1333
        }
    ]
}
```

As you can see, the second transaction will not be updated.

!!! warning
    If you do not submit a split, not even its ID, the split will be **deleted**.

!!! warning
    If you submit changes to a split without submitting the `transaction_journal_id`, it will be created as a new split. The previous split will be deleted.

## Bulk transaction update

This is a special endpoint where you can use (very) basic queries to update transactions in a group.

The `query` parameter is a JSON array with the following format:

```json
{
	"where": {
		"account_id": 1
	},
	"update": {
		"account_id": 2
	}
}
```

The `where` and `update` objects are mandatory and the only field currently supported for both is `account_id`.

This will search transactions with `account_id`  = `1` (source OR destination) and change it to `account_id` = `2`.
