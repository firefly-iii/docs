.. _splits:

======================
Splitting transactions
======================

A :ref:`transaction <transactions>` is a very simple thing. Money moves from A to B. It doesn't matter if this is an expense, your salary or you moving money around: *money moves from A to B*:

You can read more about this on the page about :ref:`transactions <transactions>`.

Firefly III stores each financial transaction in "journals". Each journal contains two "transactions". One takes money (-250 from your bank account) and the other one puts it into another account (+250 for Amazon.com). You can verify this by counting. There are always twice as many "transactions" as there are "transaction journals" in your database.

This way Firefly III tries to stay true to what a financial transaction is, which is kind of singular. Money moves from A to B, end of story. Nothing more. 

However, often an expense tells a story. Just take grocery receipts for example. It's one expense sure, but it consists of many parts. And when you buy aspirin and bread at the same time, you might want to split the expense over two budgets, medication and groceries. A single expense would make you lose information.

Likewise, your salary may have multiple components. Your base salary may be 1200. Minus 200 for taxes. Plus 100 bonus. Etc. All that information is lost when you only support singular, unsplitted deposit, like Firefly III usually does.

However, any time you create a deposit, transfer or a withdrawal, Firefly III allows you to **split** a transaction into multiple parts. When you do this, you can:

- Assign part of an expense to a budget;
- Assign different revenue accounts to parts of of a deposit.
- Categorize money differently.

You can split your entire groceries-receipt into small "sub"-transactions. You can specify each component of your salary. 

Screenshots
-----------

.. figure:: https://firefly-iii.org/static/docs/4.7.0/split-button.png
   :alt: Button to split a transaction
   
   Click the button to split a new transaction

.. figure:: https://firefly-iii.org/static/docs/4.7.0/split-create-button.png
   :alt: Alternative button to split.
   
   You can also check this checkbox when you're creating a new transaction.


.. figure:: https://firefly-iii.org/static/docs/4.7.0/split-add.png
   :alt: Add splits
   
   Add as many splits as you want. They can have their own category or budget (not tag).


.. figure:: https://firefly-iii.org/static/docs/4.7.0/split-view.png
   :alt: View splits
   
   In the transaction view, you can see each split as you normally would.


.. figure:: https://firefly-iii.org/static/docs/4.7.0/split-list.png
   :alt: View transaction
   
   Views and lists will show the split amount when relevant.

