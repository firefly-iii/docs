# FAQ

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I'm getting prompted by Salt Edge to request test access. Am I doing it wrong?

[Salt Edge](https://www.saltedge.com) doesn't just let you import data. Once you have created an account and set up Firefly III to import data from their systems you can only import test data at first. You'll have [to contact them](https://www.saltedge.com/test_access) to get your account upgraded.

This is a bit annoying, having to jump through hoops to get Salt Edge access, but it's the best I can do. Since Firefly III is open source software I cannot share my secret keys. They would be out on the street. So, each user has to get their own access to Salt Edge.

## I get an error about openssl_pkey_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.

## Can Firefly III sync with my bank?

Firefly III has a *general purpose* import tool that can import CSV files. There is also a Firefly III API that you can connect to [YOUR BANK HERE], if you are clever enough to build something in your favorite programming language. 

Firefly III won't be able to sync with [YOUR BANK HERE] out of the box. There are several ways of importing data, but Firefly III isn't connected to [YOUR BANK HERE] and probably never will. Most countries have between 10 and 30 consumer banks and it's barely doable to maintain just a few. I do have the wish to support many banks, but I must do so through other services. 

Unfortunately, I just don't have the time or the resources to build a custom import routine for [YOUR BANK HERE]. If this is something you're specifically looking for, please use Mint or YNAB, or build it yourself.

Keep in mind that most banks don't offer secure ways to download transactions. Providers like Mint.com and YNAB often require your username and password to download transactions.

## Why can't I import duplicate transactions?

Firefly III can recognise two different types of duplicate transactions. It will refuse to either of them.

When you import from a certain source and a specific expense is an exact duplicate of an earlier imported expense, Firefly III will refuse to import the transaction. An exact duplicate transaction is a transaction where *every* field is equal to another transaction. For example, if you import the same CSV file twice, or when you import from Spectre but you reset your settings in the meantime. 

You can only import such transactions if you add unique data, such as another column that identifies the actual transaction (an ID or something). Make sure you map this column to the "external ID"-field.

Firefly III can also recognise duplicate transfers over different files.

If you delete the transaction, Firefly III will *still* not import the transaction. This is by design. A lot of users have banks that insert dummy lines into their CSV files. Once deleted, these lines must stay deleted, even when you import them again. So if you are testing your import, please be ready to remove lines from the database.
