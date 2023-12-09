# How to use Spectre Salt Edge

## Introduction

The Spectre (Salt Edge's) API is free-to-use for Firefly III users. Their products however are paid, and they are commercial organizations. Furthermore, their API access for Firefly III users may be limited.

Please read and agree with all the terms that the company may present you with. They have their own data usage and privacy policies, which you must read up on.

!!! info "Disclaimer"
    As a general disclaimer: Salt Edge is a commercial organisation. They may revoke your access or charge money at any moment. I'm grateful for the free access they provide to Firefly III users.

!!! info "About bank availability"
    Salt Edge supports very few 🇺🇸 American and Asian banks. There is little I can do about this. You'll have to import CSV files.

## Salt Edge's Spectre API

You can sign up for Salt Edge's services on [this page](https://www.saltedge.com/client_users/sign_up).

Your account will initially have a "pending" status. In order to get access to real banks, please request "test" access from your Client's dashboard main page and mention you’re a Firefly III user.

### Limits

Note that Spectre does not offer the possibility of connecting to financial institutions via PSD2/Open Banking channels in the EU or the UK. These connections are limited to web scraping connections. Furthermore, there is a limit of 10 banks.

Since access to the Spectre API is limited to raw data only, you may have to do data cleanup yourself. You can use Firefly III [rules](../../firefly-iii/features/rules.md) or build something yourself.

You can see if your bank is supported [on this page](https://www.saltedge.com/products/spectre/countries?channel%5B%5D=non_regulated).
