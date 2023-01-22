TODO write me

The identifier-based duplicate detection method is pretty advanced, because it implies that you or your bank keep track of unique identifiers in your transactions, and you import them into the same field all the time. If you switch columns or switch fields it may stop working.

My bank for example, gives every transaction a unique ID. I use "identifier-based" duplicate detection. I've configured the **Unique column index** to the column that contains the identifier and I use the **Unique column type** "External reference" to save it in.

Whenever I import transactions FIDI will search for the identifier first and if it exists already, the transaction will not be imported.

This is a useful feature when your CSV file or import has no real identifiers (see ahead). Many people use content-based duplicate detection in order to import files twice, or import files which may have overlap. Even transactions that are found in `today.csv` and `last-week.csv` will be detected as duplicates.

