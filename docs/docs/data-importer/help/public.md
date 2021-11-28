# Public installation

There is a public instance of the Firefly III Data Importer (**FIDI**) running on [https://data-importer.firefly-iii.org](https://data-importer.firefly-iii.org). You can use this instance to import data into your own installation. But keep in mind it comes with a "price".

- Your own Firefly III installation must be reachable over the internet. This is a security and privacy risk.
- Make sure you create a public client (uncheck the "confidential"-flag) that uses the following callback URL: `https://data-importer.firefly-iii.org/callback`.
- Any private data you upload will be stored for up to 24hrs.

I appreciate the complexity of running FIDI for yourself so this instance can help you import data into your own installation.

!!! warning
    There **no guarantee** that the server won't be hacked. You also have **no guarantee** that I won't snoop through your files. A bug may make your files public to other users. You have zero guarantees and no warranty.
