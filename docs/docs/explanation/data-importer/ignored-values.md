## The Data importer has ignored these values?

The data importer wil sometimes ignore data from Spectre. In the notes of the transaction, you will see something like this:

![An example error message](images/ignored.png)

The data importer will do this when both the source and destination account information of a transaction are *the same*. This may happen when you get credit card refunds, when interest is paid to your account or when interest payments are taken from your account.

Some banks pretend the source and destination accounts of a transaction are the same. This is not supported in Firefly III so the data importer changes either the source or the destination to another, generic account. For your convenience, the ignored data is stored in the notes of the transaction.
