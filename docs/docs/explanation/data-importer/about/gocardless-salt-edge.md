# Spectre and GoCardless (formerly Nordigen)

## Introduction

Both the GoCardless API and Spectre (Salt Edge's API) are free-to-use for Firefly III users. Their products however are paid, and they are commercial organizations. Furthermore, their API access for Firefly III users may be limited.

Please read and agree with all the terms that either company may present you with. They have their own data usage and privacy policies, which you must read up on.

!!! info "Disclaimer"
    As a general disclaimer: both GoCardless and Salt Edge are commercial organisations. They may revoke your access or charge money at any moment. I'm grateful for the free access they provide to Firefly III users.

!!! info "About bank availability"
    Both GoCardless and Salt Edge support very few 🇺🇸 American and Asian banks. There is little I can do about this. You'll have to import CSV files.

## Salt Edge's Spectre API

You can sign up for Salt Edge's services on [this page](https://www.saltedge.com/client_users/sign_up).

Your account will initially have a "pending" status. In order to get access to real banks, please request "test" access from your Client's dashboard main page and mention you’re a Firefly III user.

### Limits

Note that Spectre does not offer the possibility of connecting to financial institutions via PSD2/Open Banking channels in the EU or the UK. These connections are limited to web scraping connections. Furthermore, there is a limit of 10 banks.

Since access to the Spectre API is limited to raw data only, you may have to do data cleanup yourself. You can use Firefly III [rules](../../../how-to/firefly-iii/features/rules.md) or build something yourself.

You can see if your bank is supported [on this page](https://www.saltedge.com/products/spectre/countries?channel%5B%5D=non_regulated).

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

Access to the GoCardless API is limited to raw data only, which means you may have to do data cleanup yourself. You can use Firefly III [rules](../../../how-to/firefly-iii/features/rules.md) or build something yourself.
