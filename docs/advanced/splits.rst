.. _splits:

======================
Splitting transactions
======================

A :ref:`transaction <transactions>` is a very simple thing. Money moves from A to B. It doesn't matter if this is an expense, your salary or you moving money around: *money moves from A to B*:

You can read more about this on the page about :ref:`transactions <transactions>`.

Firefly III stores each financial transaction in "journals". Each journal contains two "transactions". One takes money (-250 from your bank account) and the other one puts it into another account (+250 for Amazon.com). You can verify this by counting. There are always twice as many "transactions" as there are "transaction journals" in your database.

This way Firefly III tries to stay true to what a financial transaction is, which is kind of singular. Money moves from A to B, end of story. Nothing more. 

However, often an expense tells a story. Just take grocery receipts for example. It's one expense sure, but it consists of many parts. And when you buy aspirin and bread at the same time, you might want to split the expense over two budgets, medication and groceries. A single expense would make you lose information. But a split transaction looks like this:

.. graphviz::

   digraph foo {
      graph [fontname = "helvetica", fontsize=11,bgcolor=transparent];
      subgraph cluster_0 {
         label = "Groceries\n- €4,24";
         node [fontname = "helvetica", fontsize=11, shape=rounded, style=filled];
         edge [fontname = "helvetica", fontsize=11];
         
         a[label="- € 2,95", color=grey33, fontcolor=red, fontname = "helvetica bold",style=dashed, shape=ellipse];
         b[label="- € 1,29", color=grey33, fontcolor=red, fontname = "helvetica bold",style=dashed, shape=ellipse];
         c[label="Super Market", color=burlywood1];
         a -> c[label="Aspirin"];
         b -> c[label="Bread"];
    }
      
   }

Likewise, your salary may have multiple components. Your have a base salary. But maybe you got paid overtime, or you handed in some receipts. All that information is lost when you create a singular expense. A split expense might look like this:

.. graphviz::

   digraph foo {
      graph [fontname = "helvetica", fontsize=11,bgcolor=transparent];
      subgraph cluster_0 {
         label = "Salary\n- €1066,03";
         node [fontname = "helvetica", fontsize=11, shape=rounded, style=filled];
         edge [fontname = "helvetica", fontsize=11];
         
         a[label="- € 934,88", color=grey33, fontcolor=darkgreen, fontname = "helvetica bold",style=dashed, shape=ellipse];
         b[label="- € 29,95", color=grey33, fontcolor=darkgreen, fontname = "helvetica bold",style=dashed, shape=ellipse];
         c[label="- € 101,20", color=grey33, fontcolor=darkgreen, fontname = "helvetica bold",style=dashed, shape=ellipse];
         d[label="Checking Account", color=deepskyblue];
         a -> d[label="Base salary"];
         b -> d[label="Reimbursement"];
         c -> d[label="Overtime bonus"];
    }
      
   }

Any time you create a deposit, transfer or a withdrawal, Firefly III allows you to **split** a transaction into multiple parts. When you do this, you can:

- Assign part of an expense to a budget;
- Assign different revenue accounts to parts of a deposit.
- Categorize money differently.

You can split your entire groceries-receipt into small "sub"-transactions, or you can specify each component of your salary. There are many more examples to think of.

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

