# Spectre and GoCardless (formerly Nordigen)

Salt Edge and GoCardless are two companies that offer access to bank account data. They are both supported by the Firefly III Data Importer.

There are many more companies that offer these kinds of services, but they are not (yet!) supported.

## Introduction

Both organizations work the same way. Through their API you can connect to your bank account and download transactions. You can then import these transactions into Firefly III using the data importer.

Both APIs are free-to-use for Firefly III users. Their products however are paid, and they are commercial organizations. Furthermore, their API access for Firefly III users may be limited.

Please read and agree with all the terms that either company may present you with. They have their own data usage and privacy policies, which you must read up on.  Both GoCardless and Salt Edge are commercial organisations. They may revoke your access or charge money at any moment. I'm grateful for the free access they provide to Firefly III users.

!!! info "About bank availability"
    Both GoCardless and Salt Edge support very few 🇺🇸 American and Asian banks. There is little I can do about this. You'll have to import CSV files. I'm working on expanding the support for other organizations that do support other banks.

## Salt Edge's Spectre API

You can sign up for Salt Edge's services on [this page](https://www.saltedge.com/client_users/sign_up). 

Your account will initially have a "pending" status. In order to get access to real banks, please request "test" access from your Client's dashboard main page and mention you’re a Firefly III user.

### Limits

Note that Spectre does not offer the possibility of connecting to financial institutions via PSD2/Open Banking channels in the EU or the UK. These connections are limited to web scraping connections. Furthermore, there is a limit of 10 banks.

Since access to the Spectre API is limited to raw data only, you may have to do data cleanup yourself. You can use Firefly III [rules](../../../how-to/firefly-iii/features/rules.md) or build something yourself.

You can see if your bank is supported [on this page](https://www.saltedge.com/products/spectre/countries?channel=non_regulated).

## GoCardless Bank Account Data API

You can sign up for the GoCardless API on [their website](https://bankaccountdata.gocardless.com/signup). Access to the GoCardless Bank Account Data API is free for both commercial and personal use (that's you). You will not have to request extended access, but you can get the premium access for a fee if you so wish. Keep in mind that the Firefly III Data Importer currently does not support the premium APIs.

### How to sign up for GoCardless

1. Go to [gocardless.com/bank-account-data](https://gocardless.com/bank-account-data/) and press "Get API keys".
2. Click Sign Up
3. Follow the instructions
4. Profit!

GoCardless supports [many PSD2-compliant banks in the EU and the UK](https://gocardless.com/bank-account-data/coverage/), making it an alternative for Salt Edge's Spectre API, if you happen to live in these regions.

Access to the GoCardless API is limited to raw data only, which means you may have to do data cleanup yourself. You can use Firefly III [rules](../../../how-to/firefly-iii/features/rules.md) or build something yourself.
