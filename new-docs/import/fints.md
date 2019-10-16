# Import using FinTS

Firefly III can import data using the excellent FinTS protocol. It's pretty self-explanatory. Select the FinTS option on the import page and follow the instructions.


*Support for FintS is currently (as of October 2019) **broken**. This has to do with new PSD2 regulations for which most libraries aren't ready yet. I'm working on [new import routines](https://www.patreon.com/posts/30012174) that will replace the built-in FinTS import code of Firefly III. I apologize for the inconvenience. The text below is for reference only. As soon as I have the FinTS import up and running again, you will see this in the Firefly III release notes.*

The list of accounts that are presented to you in the second step of the import are the IBANs of the "SEPA-Accounts" as reported by the bank. Blank lines probably mean that the accounts have no IBAN. This is weird for European banks but not entirely unexpected. If importing one of the blank lines does not work, it is most likely not supported by the library used by Firefly III. 

If this is the case, please get in touch using GitHub. We must make a [minimum working example](https://github.com/mschindler83/fints-hbci-php/blob/master/Samples/statement_of_account.php>) together and contact the developer.

## Connecting to comdirect.de

For those of you using comdirect, these settings have been shared by a helpful user:

* FinTS API URL: [https://fints.comdirect.de/fints](https://fints.comdirect.de/fints>)
* Bank code: Your Bankleitzahl
* Username: your login username without appending 2x 0
* PIN/Password: well, your login pin
