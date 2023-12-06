(TODO validate and cleanup)


## Mixed content

Some banks re-use the columns for different content. For example, "Sparkasse" (DE) uses the BIC column for other data if there is no BIC available. If your bank has similar issues, the import will probably fail. The best solution is to ignore the column entirely.


## Extra header rows (CSV only)

Some banks will insert an extra header-row (`Source,Amount,Destination`) every 100 rows. As if a computer would forget the column names. If your bank does this, those extra header rows will fail during the import.


## Not enough info to make rows unique

If you don't specifically configure the importer to import non-unique rows, open the file in Excel or Numbers and add a row with a basic sequence: 1,2,3,4 etc. That should be enough to make the rows unique.

# Missing data

Some banks do not deliver enough data to make decent imports. You can see this when the following things happen:

- A lot of transactions where the opposing account is called `(no name)`
- A lot of transactions with `(no description)`

There is unfortunately not much I can do about it. Here are some tips that I hope will make life easier for you.

## Create rules to append transactions

Even when there is the tiniest bit of information in your transactions, you can use the rule engine to append the transactions
and make them more complete. For example:

- If the description contains `SPRMKT`, set the description to `Groceries` and set the destination account to `Supermarket`.
- Every transaction of exactly `6.00` is probably Starbucks

## Destination / expense accounts

Some users make expense accounts for stores. You can also group transactions under "Groceries" and "Restaurant" and call it a day.
