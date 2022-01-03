# API special endpoints

Some Firefly III API endpoints need a little more guidance than fits in the documentation.

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
