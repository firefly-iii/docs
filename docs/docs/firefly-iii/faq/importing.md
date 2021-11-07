# Importing data

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I'm getting prompted by Salt Edge to request test access. Am I doing it wrong?

[Salt Edge](https://www.saltedge.com) doesn't just let you import data. Once you have created an account and set up Firefly III to import data from their systems you can only import test data at first. You'll have [to contact them](https://www.saltedge.com/test_access) to get your account upgraded.

This is a bit annoying, having to jump through hoops to get permission to use Salt Edge, but it's the best I can do. Since Firefly III is open source software I cannot share my secret keys. They would be out on the street. So, each user has to get their own permission from Salt Edge.

## Why is Spectre a trial?

The Spectre API is a paid product by Salt Edge. It's used by many financial tools, fintechs and others in the financial space. They are kind enough to offer trials to users of Firefly III, but these are limited in time and scope. Salt Edge is a business-to-business organisation, which is reflected in their pricing: the cost of their API starts at about 500$ per month.



## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.

## Can Firefly III sync with my bank?

Firefly III has several separate _general purpose_ import tools that can import information from your bank. The most important ones are:

- The [CSV importer](https://github.com/firefly-iii/csv-importer/) can import almost any CSV file
- The [Nordigen importer](https://github.com/firefly-iii/nordigen-importer) connects to the [Nordigen](https://nordigen.com/en/) service and supports over 2000+ banks, mainly EU.
- The [Salt Edge / Spectre importer](https://github.com/firefly-iii/spectre-importer/) connects to Salt Edge's [Spectre API](https://www.saltedge.com/products/spectre) and supports over 3000+ banks, mainly US.

There is also a [Firefly III API](../api.md) that you can connect to \[YOUR BANK HERE\], if you are clever enough to build something in your favorite programming language.

To see which other importers are available for Firefly III, check out [this extensive list](../importing-data/introduction.md).

## I want to auto-import transactions from \[my bank\] out of the box!

Firefly III has [many tools](introduction.md) to import transactions. You must install these tools separately.

Most tools come with the necessary hooks to automate the import yourself. This also depends on your bank's support for these kinds of things.

Unfortunately I don't have the resources to work with the 2000+ different bank API's, export schemes, PDF files, CSV formats or OFX files that are out there. YSK there are too many banks are out there and none of them use the same platform, protocol or data format. So if you ever wonder why it's not automated: this is why ;)
