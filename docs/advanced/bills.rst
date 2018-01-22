.. _bills:

=====
Bills
=====

You can keep an eye on your expected recurring :ref:`expenses <transactions>` by creating bills. Things like rent and utilities must be paid every month and Firefly III can keep track of such things.

When you create a bill, you tell Firefly III in what range you expect the bill to be.

* Minimum amount: 700,-
* Maximum amount: 800,-

You also input the title of the bill and some keywords to look out for:

* Description: Monthly rent
* Matches on: ``landlord``, ``rent``, ``monthly``

You should also indicate how often this bill has to be paid:

* Repeats every month

Bills are triggered when you create an expense with certain words in the description, with an amount in the pre-set range or going to a specific :ref:`expense account <accounts>`. When triggered, the transaction and the bill are connected and the bill will be marked as "paid". At least, for this period. Bills can be set to be expected every week, month or year.

This works in two ways: Firefly III checks transactions within a certain range (amount), and it checks for keywords in the description and in the expense account.

When you create a transaction with the following properties, it will match to this bill:

* Amount: 780,50
* Expense account: "Land lord"
* Description: "Rent"

The date of a bill
------------------

When you create a bill you also have to fill in the (first) date you expect the bill to hit. This date is purely cosmetic and will be used to inform you when the bill can be expected. For example:

* A monthly bill, on the 3rd day of the month, will hit: 3 Jan, 3 Feb, 3 Mar, etc.
* A weekly bill, starting on 15 Jan, will hit: 15 Jan, 22 Jan, 29 Jan, 5 Feb, etc.

Screenshots
-----------

.. figure:: https://firefly-iii.org/static/docs/4.7.0/bills-transactions.png
   :alt: Match of bill

   The matched bill will be visible in your transaction lists.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/bills-frontpage.png
   :alt: Example of bills

   The front page of Firefly III will also start showing the bills.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/bills-show.png
   :alt: Example of bill

   Individual bills will end up looking like this picture (under Money Management, then Bills)
