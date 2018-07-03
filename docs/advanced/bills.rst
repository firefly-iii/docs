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

Triggering a bill
-----------------

Once you have created a bill, Firefly III will suggest that you create `a new rule <rules>` that will match the bill. This rule is auto-filled to trigger on obvious things like the amount of the bill and the description you entered. Make sure you fine-tune the rule so any new transactions will auto-match the rule.

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
