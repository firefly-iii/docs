# FAQ

An FAQ about importing data into Firefly III

## I want to auto-import transactions from [my bank] out of the box!

Firefly III has many tools to import transactions. You must install these tools separately.

Developing an import routine is a very time-consuming and expensive process. You wouldn't believe the kind of stuff you have to build to have a routine that even works half the time. This involves a lot of code and a lot of testing, which is why I decided to move this into separate import routines.

There are a lot of banks in the world. Each one has its own weird quircks when it comes to your transactions. Supporting each bank is a very though job. 

## Why is Spectre a trial?

The Spectre API is a paid product by Salt Edge. It's used by many financial tools, fintechs and others in the financial space. They are kind enough to offer trials to users of Firefly III, but these are limited in time and scope. Salt Edge is a business-to-business organisation, which is reflected in their pricing: the cost of their API starts at about 500$ per month.
