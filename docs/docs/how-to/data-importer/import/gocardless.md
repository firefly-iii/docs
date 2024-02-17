# How to use GoCardless

## Introduction

The GoCardless API is free-to-use for Firefly III users. The GoCardless product however is paid, and they are a commercial organization. Furthermore, the API access for Firefly III users may be limited.

Please read and agree with all the terms the company may present you with. They have their own data usage and privacy policies, which you must read up on.

!!! info "Disclaimer"
    As a general disclaimer: GoCardless is a commercial organisation. They may revoke your access or charge money at any moment. I'm grateful for the free access they provide to Firefly III users.

!!! info "About bank availability"
    GoCardless supports very few 🇺🇸 American and Asian banks. There is little I can do about this. You'll have to import CSV files.

## GoCardless Bank Account Data API

You can sign up for the GoCardless API on [their website](https://bankaccountdata.gocardless.com/signup). Access to the GoCardless Bank Account Data API is free for both commercial and personal use (that's you). You will not have to request extended access, but you can get the premium access for a fee if you so wish. Keep in mind that the Firefly III Data Importer currently does not support the premium APIs.

!!! note
    How to sign up for GoCardless:

     1. Go to [nordigen.com](https://nordigen.com/en/) or follow the [direct link](https://bankaccountdata.gocardless.com/signup) to the signup form.
     2. Press Login
     3. Press "Looking for Bank Account Data (Formerly Nordigen)?"
     4. Click Sign Up
     5. Follow the instructions
     6. Profit!

GoCardless supports [many PSD2-compliant banks in the EU and the UK](https://nordigen.com/en/coverage/), making it an alternative for Salt Edge's Spectre API, if you happen to live in these regions.

Access to the GoCardless API is limited to raw data only, which means you may have to do data cleanup yourself. You can use Firefly III [rules](../../firefly-iii/features/rules.md) or build something yourself.
