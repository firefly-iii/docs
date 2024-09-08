# Salt Edge and GoCardless

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
