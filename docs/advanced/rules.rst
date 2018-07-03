.. _rules:

=====
Rules
=====

Firefly III contains a powerful rule engine that can automatically update your transactions when they are created or when they are changed. It works by combining "triggers" with "actions". This is especially useful when you're importing data and you wish all transactions to be updated at once. Or perhaps, you are too lazy to set the correct budget and category all the time.

Rule groups
-----------

Rules are divided over rule groups. Each rule group has rules in a specific order. You can set rule groups to stop processing other rule (groups).

Rules can be set to be "strict" or not. If a rule is set to be strict, EACH trigger must match. If a rule is not scrict, ANY trigger must match.


Triggers
--------

A rule must spring into action at the right time! This is decided by triggers that you can set yourself. All triggers must be match (AND, not OR). Here are some notable rule triggers that people use often:

* When a transaction is created
* When the description is something specific
* When the amount is above *X*.
* When the budget is *X*.

Rules can be set to be "strict" or not. If a rule is set to be strict, EACH trigger must match. If a rule is not scrict, ANY trigger must match.

Actions
-------

When all triggers are hit, Firefly III will execute the actions. There are many actions available. Notable ones are:

* Change the budget, category, tag(s), description, amount
* Set a new description
* Change the source or destination account

Combined, this gives you a lot of power over your financial data.

Screenshots
-----------


.. figure:: https://firefly-iii.org/static/docs/4.7.0/rules-meta.png
   :alt: Meta data of a rule

   A new rule can be given some basic information.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/rules-triggers.png
   :alt: Set the triggers

   First you would set up the triggers for the new rule.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/rules-actions.png
   :alt: Set the actions

   Then decide on the actions to take.
