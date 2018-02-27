.. _links:

=====
Links
=====

More often than not a transaction isn't just "a transaction" but a connected to some other transactions. Maybe you've been reimbursed money by your boss. Maybe an expense is paid back to you by an friend. Or perhaps a friend paid you back for something or other.

.. graphviz::

   digraph foo {
      graph [fontname = "helvetica",bgcolor=transparent]; 
      node [fontname = "helvetica", fontsize=11, style=filled, shape=rounded];
      edge [fontname = "helvetica", fontsize=11];
      rankdir="LR";
      a[label="Lunch with client", color=coral1];
      b[label="Reimbursment from boss", color=darkseagreen3]

      a -> b[label="is reimbursed by"]
   }

In Firefly III you can store these links between transactions. By default, four link types are available. You can see these under Administration > Transaction links configuration.

* Is paid for by
* Is refunded by
* Is reimbursed by
* Relates to

These links work both ways. When transaction A has been refunded by transaction B, B is noted to refund A.

.. graphviz::

   digraph foo {
      graph [fontname = "helvetica",bgcolor=transparent]; 
      node [fontname = "helvetica", fontsize=11, style=filled, shape=rounded];
      edge [fontname = "helvetica", fontsize=11];
      rankdir="LR";
      a[label="Reimbursment from boss", color=darkseagreen3]
      b[label="Lunch with client", color=coral1];

      a -> b[label="reimburses"]
   }

You can also add your own link types if you want to.

To make a link with another transaction, go to the overview of a transaction and use the "Link transaction" button from the dropdown menu. Select the correct type of link from the dropdown and select the transaction to be linked. Optionally you can add some comments.

You can remove or reverse a link once it has been created.

Screenshots
-----------

.. figure:: https://firefly-iii.org/static/docs/4.7.0/links-inward.png
   :alt: Inward link of transaction

   The "Lunch with client" expense is reimbursed by your boss in transaction "Lunch reimbursement".

.. figure:: https://firefly-iii.org/static/docs/4.7.0/links-inward.png
   :alt: Outward link of transaction

   Vice versa, "Lunch reimbursement" reimburses you for "Lunch with client".

.. figure:: https://firefly-iii.org/static/docs/4.7.0/links-dropdown.png
   :alt: Dropdown menu to create a link

   Select "Link transaction" to create a link.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/links-modal.png
   :alt: Modal dialog to create a link

   Use this modal to create a new link

.. figure:: https://firefly-iii.org/static/docs/4.7.0/links-change.png
   :alt: You can delete the link or make the transactions switch positions.

   You can delete the link or make the transactions switch positions.
