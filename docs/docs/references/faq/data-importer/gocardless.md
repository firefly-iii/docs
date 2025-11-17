# GoCardless

## When I delete a transaction, it is imported again?

The data importer will check first if the transaction with a specific "external ID" already exists. When it does, it will not be imported again. Not even when you deleted. However, this check on deleted transactions may fail. Or rather, you may have inadvertently turned it off. But you can turn it on again!

Check out your configuration file. You have a line that says `"ignore_duplicate_transactions":`. Make sure that the value is `true`.

## Is it possible to import from multiple banks?

Yes, this is possible. In both cases, you'll have to run the data importer a few times (once for each bank) and save the configuration file. Make sure you rename it to something useful like "your-bank.json". Use the file during your next run of the data importer.

If the data importer caches something, please make sure to press "Start Over" before you import from the next bank.

## GoCardless imports weird transactions?

This question covers the issue of GoCardless doing something weird. First, it imports transactions

- from the future
- with the wrong details
- with missing details

... or with other strange details. Then, at a later moment, it comes around and imports the correct version of those particular transactions. This leaves you with double transactions and missing details.

This is no something the data importer can prevent, but you can automatically remove those transactions by creating a rule that deletes all transactions that have the `pending`-tag. The [rules page](../../../how-to/firefly-iii/features/rules.md) has more details about rules.

## I have a rule that does not work on imported transactions

There is one [rule action](../../firefly-iii/rule-actions.md) that may not work as expected in combination with the data importer. Any rule action that responds to tags will not respond to the "custom import tag" that you can set during your import configuration.

If you have a [rule](../../../how-to/firefly-iii/features/rules.md) that checks if a tag has a specific value, the custom import tag will be ignored.

This is because the "custom import tag" is not present when a transaction is created by the data importer. It is added later. Since the tag is not yet there when the rule runs, it can't see it and it will be ignored.

This is by design, and this behavior cannot be changed.

## I am rate limited by GoCardless!

Recently, GoCardless introduced rate limits. You can read about it on [their website](https://bankaccountdata.zendesk.com/hc/en-gb/articles/11529584398236-Bank-API-Rate-Limits-and-Rate-Limit-Headers). Depending on the number of banks, and the number of accounts you want to import from you will run into the rate limits.

I cannot fix this for you. The data importer tries to use as few requests as possible. Please do not open issues about this. The data importer (v1.5.6 and up) can handle the rate limits. Other versions may give you cryptic errors.

When this feature was introduced, it was possible to see some weird things, like rate limits not resetting or the rate limit reset time being a negative number of hours. These are all issues with GoCardless, not with the data importer. Please contact GoCardless support if you run into these issues. 

Generally speaking, the time you need to wait is correct. If the time to wait is less than 5 minutes, the data importer will wait for you. If it will take longer, the data importer cannot "wait it out" for you. You must wait yourself for the rate limit to reset. If you keep hammering GoCardless, you may be banned.
