# Common data import issues and questions

## Firefly III gives a page that says "Empty", and nothing else

1. Make sure you **uncheck** the "Confidential" checkbox in your OAuth Client settings.
2. Make sure the port is also present in the `VANITY_URL`, so `http://localhost:9001` (example)

## All transactions are imported as today?

Make sure that the date field in your CSV file (`2023-09-17`) is marked as the "Transaction" date, and make sure the format (`Y-m-d`) matches the actual content in the file. Follow the format in [this table](https://www.php.net/manual/en/datetime.format.php).

## I get 504 Gateway Timeout errors

When you use the web interface of the data importer, the web page will time out after abou 600 seconds. Your reverse proxy (if present) may even be more strict. Although the import process continues in the background, the page is "lost" and you will not get status updates anymore. Please use smaller batches when importing data so the page does not time out.

## Mixed content

Some banks re-use the columns for different content. For example, "Sparkasse" (DE) uses the BIC column for other data if there is no BIC available. If your bank has similar issues, the import will probably fail. The best solution is to ignore the column entirely.

## Extra header rows (CSV only)

Some banks will insert an extra header-row (`Source,Amount,Destination`) every 100 rows. As if a computer would forget the column names. If your bank does this, those extra header rows will fail during the import.

## Not enough info to make rows unique

If you don't specifically configure the importer to import non-unique rows, open the file in Excel or Numbers and add a row with a basic sequence: 1,2,3,4 etc. That should be enough to make the rows unique.

## Missing data?

Some banks do not deliver enough data to make decent imports. You can see this when the following things happen:

- A lot of transactions where the opposing account is called `(no name)`
- A lot of transactions with `(no description)`

There is unfortunately not much I can do about it. Here are some tips that I hope will make life easier for you.

## Solution: create rules to append transactions

Even when there is the tiniest bit of information in your transactions, you can use the rule engine to append the transactions
and make them more complete. For example:

- If the description contains `SPRMKT`, set the description to `Groceries` and set the destination account to `Supermarket`.
- Every transaction of exactly `6.00` is probably Starbucks

## Solution: Destination / expense accounts

Some users make expense accounts for stores. You can also group transactions under "Groceries" and "Restaurant" and call it a day.
