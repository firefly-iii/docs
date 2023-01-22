# Public installation

There is a public (cloud-based) instance of the Firefly III Data Importer running on [https://data-importer.firefly-iii.org](https://data-importer.firefly-iii.org) that anybody can use.

You can use this instance to import data into your own installation. Please keep in mind it comes with a "price".

- Your own Firefly III installation must be reachable over the internet. This may be a security and privacy risk.
- Make sure you create a public client (uncheck the "confidential"-flag) that uses the following callback URL: `https://data-importer.firefly-iii.org/callback`.
- Any private data you upload may be stored for up to 24hrs.

I appreciate the complexity of running the data importer for yourself so this cloud instance can help you import data into your own installation.

!!! warning "Be careful"
    There **no guarantee** that the server won't be hacked. You also have **no guarantee** that I won't snoop through your files. A bug may make your files public to other users. I'm afraid I can give you zero guarantees and no warranty.
