# Other data import tools

There are various scripts and tools you can use, if the Firefly III Data Importer does not fit your use case.

!!! info
    These are all developed by other users, feel free to contact them if you have support questions.

## Transaction classification

[TransCat](https://github.com/Hapyr/trans-cat) can pre-process your CSV file and automatically assign your transactions to a category based on previous assignments.

## Import tools

### Splitwise

"[Splitwise Firefly Sync](https://github.com/adyanth/splitwise-firefly-sync)" syncs the expenses from Splitwise to Firefly III using their respective APIs.

### FinTS

"[Firefly III FinTS importer](https://github.com/bnw/firefly-iii-fints-importer)" allows you to import using FinTS, a bank-independent protocol for online banking, developed and used by German banks. 

### CAMT (ISO 20022)

[This script](https://github.com/plumped/camt_converter_ISO20022_for_camt) allows you to unzip zip files with camt.053 in them and convert them into CSV for easy processing.

!!! info
    Since the data importer supports camt.053 files, this is no necessary.

### GnuCash

This experimental [Python script](https://gist.github.com/adyanth/20c004869baf33458e416d4396ca40a8) can convert GnuExports to Firefly III compatible JSON.

### Plaid

[Plaid](https://plaid.com/) is a data aggregation service just like Spectre's Salt Edge API mentioned earlier.

- GitLab-user [@GeorgeHahn](https://gitlab.com/GeorgeHahn) built a tool to import from Plaid. [Website and documentation](https://gitlab.com/GeorgeHahn/firefly-plaid-connector)
- GitHub-user [@dvankley](https://github.com/dvankley) built an alternative Plaid importer tool. [Website and documentation](https://github.com/dvankley/firefly-plaid-connector-2)

!!! warning
    The free Plaid program is meant for testing and your milage may vary.

## Bank-specific tools

### Up Bank Australia

These applications allow you to import data from Australian Bank "Up":

- "[UpBankFFImporter](https://github.com/MajorArkwolf/UpBankFFImporter)" by [@MajorArkwolf](https://github.com/MajorArkwolf)
- "[UP_Firefly_API_Connector](https://blog.dupreez.id.au/2021/01/automatically-update-firefly-iii-with-up-banking-transactions/)" by [@Mugl3](https://github.com/Mugl3)

### Credit Agricole

[This Python app](https://github.com/Royalphax/credit-agricole-importer) allows you to import transactions from Crédit Agricole

### Crypto exchanges

[This service](https://github.com/financelurker/crypto-trades-firefly-iii) by [@financelurker](https://github.com/financelurker) lets you import activities from your crypto exchange accounts (like "Binance/binance.com") to your FireFly III account.

### PayPal

"[Firefly III PayPal importer](https://github.com/robvankeilegom/firefly-III-paypal-importer)" by [@robvankeilegom](https://github.com/robvankeilegom) to pull data from the PayPal API and push it to your Firefly III instance.

### Revolut

If you're banking with Revolut, you can use the [Revolut importer](https://gitlab.com/ludo444/fireflyrevoluttransactions), which is built by GitLab user [@ludo444](https://gitlab.com/ludo444).

!!! info
    Want your app on this list? Open an [issue on GitHub](https://github.com/firefly-iii/firefly-iii/issues/)!

