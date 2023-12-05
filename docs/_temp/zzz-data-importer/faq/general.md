# General questions

## Is the data importer multi-user?

Yes. It borrows login information from Firefly III using OAuth. To make sure it redirects to Firefly III, where you can log in, **do not** set the `FIREFLY_III_ACCESS_TOKEN` in the data importer environment variables. Use only the `FIREFLY_III_URL` variable. This way, each user must authenticate to the data importer.

Some features are not available when you set up a multi-user data importer: you cannot use the POST import function, and you can't import over the command line.

If you use Firefly III with "remote user authentication" (for example Authelia) the data importer can only use personal access tokens. That means that it cannot be made multi-user.

In such cases, you must set up multiple data importers, one for each user.


## How can I safely submit debug information?

A lot of data files contain private information. You should **never** share these files on GitHub. They are very hard to remove. 

!!! warning "Uploading files to GitHub"
    Do not upload CSV files or CAMT.053 to GitHub directly without censoring them first.

Upload as few lines or blocks of data as is necessary to reproduce the error. Removing private information from the remaining data consists of (your choice):

- Replace names with fake names;
- Replace IBANs with [fake IBANs](https://fakeiban.org/);
- Replace amounts with fake amounts

!!! note "Consistency is important"
    Try to remove as little data as you dare. Try to replace data consistently, always replacing IBAN "ABC" for the same (fake) IBAN for example.

 You may always send your data file to me personally at [james@firefly-iii.org](mailto:james@firefly-iii.org). That leaks your personal data to a single person at least. I cannot guarantee nobody will ever hack me, but your files will be removed once the issue is closed.

## The Data importer has ignored these values?

The data importer wil sometimes ignore data from Spectre. In the notes of the transaction, you will see something like this:

![An example error message](images/ignored.png)

The data importer will do this when both the source and destination account information of a transaction are *the same*. This may happen when you get credit card refunds, when interest is paid to your account or when interest payments are taken from your account.

Some banks pretend the source and destination accounts of a transaction are the same. This is not supported in Firefly III so the data importer changes either the source or the destination to another, generic account. For your convenience, the ignored data is stored in the notes of the transaction.
