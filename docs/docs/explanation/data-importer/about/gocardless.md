# Spectre and GoCardless (formerly Nordigen)

GoCardless is a company that offer access to bank account data. It is supported by the Firefly III Data Importer.

There are many more companies that offer these kinds of services, but they are not (yet!) supported.

!!! warning
    As of October 31st, 2025 Salt Edge no longer offers free-tier access for Firefly III users. To prevent disappointment, the instructions for Salt Edge have been removed and in due time, Salt Edge support will be removed from the data importer. 

## Introduction

Through their API you can connect to your bank account and download transactions. You can then import these transactions into Firefly III using the data importer.

The API are free-to-use for Firefly III users. Their products however are paid, and they are a commercial organization. Furthermore, their API access for Firefly III users may be limited.

Please read and agree with all the terms that the company may present you with. They have their own data usage and privacy policies, which you must read up on.  GoCardless is a commercial organisation. They may revoke your access or charge money at any moment. I'm grateful for the free access they provide to Firefly III users.

!!! info "About bank availability"
    GoCardless supports very few 🇺🇸 American and Asian banks. There is little I can do about this. You'll have to import CSV files. I'm working on expanding the support for other organizations that do support other banks.

## GoCardless Bank Account Data API

You can sign up for the GoCardless API on [their website](https://bankaccountdata.gocardless.com/signup). Access to the GoCardless Bank Account Data API is free for both commercial and personal use (that's you). You will not have to request extended access, but you can get the premium access for a fee if you so wish. Keep in mind that the Firefly III Data Importer currently does not support the premium APIs.

### How to sign up for GoCardless

1. Go to [gocardless.com/bank-account-data](https://gocardless.com/bank-account-data/) and press "Get API keys".
2. Click Sign Up
3. Follow the instructions
4. Profit!

GoCardless supports [many PSD2-compliant banks in the EU and the UK](https://gocardless.com/bank-account-data/coverage/), if you happen to live in these regions.

Access to the GoCardless API is limited to raw data only, which means you may have to do data cleanup yourself. You can use Firefly III [rules](../../../how-to/firefly-iii/features/rules.md) or build something yourself.
