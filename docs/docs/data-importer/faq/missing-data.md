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
