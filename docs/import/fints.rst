.. _importfints:

==================
Import using FinTS
==================

.. contents::
   :local:

Firefly III can import data using the excellent FinTS protocol. It's pretty self-explanatory. Select the FinTS option on the import page and follow the instructions.

The list of accounts that are presented to you in the second step of the import are the IBANs of the "SEPA-Accounts" as reported by the bank. Blank lines probably mean that the accounts have no IBAN. This is weird for European banks but not entirely unexpected. If importing one of the blank lines does not work, it is most likely not supported by the library used by Firefly III. 

If this is the case, please get in touch using GitHub. We must make a `minimum working example <https://github.com/mschindler83/fints-hbci-php/blob/master/Samples/statement_of_account.php>`_ together and contact the developer.

Please note there is a :ref:`FAQ about the import process <faqimport>` as well.

Connecting to comdirect.de
--------------------------

For those of you using comdirect, these settings have been shared by a helpful user:

* FinTS API URL: `https://fints.comdirect.de/fints <https://fints.comdirect.de/fints>`_
* Bank code: Your Bankleitzahl
* Username: your login username without appending 2x 0
* PIN/Password: well, your login pin

