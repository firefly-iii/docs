.. _api_transactions:

============
Transactions
============

List
-----

``GET /api/v1/transactions``

Returns a list of the users transactions. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "transactions",
            "id": "1",
            "attributes": {
                "updated_at": "2018-03-04T12:21:20+00:00",
                "created_at": "2018-03-04T12:21:20+00:00",
                "description": "Some test transaction",
                "date": "2017-01-01",
                "type": "Withdrawal",
                "identifier": 0,
                "journal_id": 1,
                "reconciled": false,
                "amount": -12.34,
                "currency_id": 1,
                "currency_code": "EUR",
                "currency_dp": 2,
                "foreign_amount": null,
                "foreign_currency_id": null,
                "foreign_currency_code": null,
                "foreign_currency_dp": null,
                "bill_id": null,
                "bill_name": null,
                "category_id": null,
                "category_name": null,
                "budget_id": null,
                "budget_name": null,
                "notes": "",
                "source_id": 1,
                "source_name": "EUR Account",
                "source_iban": "NL11XOLA6707795988",
                "source_type": "Asset account",
                "destination_id": 4,
                "destination_name": "(no name)",
                "destination_iban": null,
                "destination_type": "Expense account"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/transactions/1"
                },
                "self": "http://firefly.local/api/v1/transactions/1"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 1,
            "count": 1,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "http://firefly.local/api/v1/transactions?type=default&page=1",
        "first": "http://firefly.local/api/v1/transactions?type=default&page=1",
        "last": "http://firefly.local/api/v1/transactions?type=default&page=1"
    }
   }

Notable about this return are the following aspects:

* Amount of a transfer or deposit is always positive. Withdrawal is negative.
* Identifier is 0 for the first of a split transaction, 1 for the second, etc.
* The website uses the ``journal_id`` to find the transaction. The API uses the transaction ID. These are different!


Parameters
~~~~~~~~~~

* ``type``. Use this to limit the types of transactions you will get back. Options are as follows:

   1) ``all``. Returns all types.
   2) ``withdrawal``, ``withdrawals`` or ``expense`` for withdrawals and expenses.
   3) ``deposit``, ``deposits`` or ``income`` for deposits and income.
   4) ``transfer`` or ``transfers`` for transfers between asset accounts.
   5) ``opening_balance`` for opening balance transactions.
   6) ``reconciliation`` or ``reconciliations`` for reconciliations.
   7) ``special`` or ``specials`` for opening balance transactions and reconciliations.
   8) ``default`` for withdrawals, expenses and transfers.
* ``start``. The start date for the range you wish to select.
* ``end``. The end date for the range you wish to select.

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get transaction
---------------

``GET /api/v1/transactions/<id>``

Returns a single transaction. This routine can in fact return multiple transactions, in case of split transactions. You will note that they all share the same ``journal_id``.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the owner of the account.
* ``include=piggy_bank_events``. Includes the related piggy bank events of the transaction. These some times appear with transfers.
* ``include=journal_meta``. Include meta data related to the transaction.
* ``include=tags``. Include tags.
* ``include=transactions``. Include transactions.

Create transaction
--------------

``POST /api/v1/transactions``

Creates a new (split) transaction. This request requires some global information and a set of transactions, with a minimum of 1 transaction.

Parameters
~~~~~~~~~~

Required global fields

* ``type``. Must be ``withdrawal``, ``transfer`` or ``deposit``.
* ``description``. Description of the transaction.
* ``date``. Date of the transaction.

Optional global fields

* ``piggy_bank_id`` or ``piggy_bank_name`` to link a piggy bank to the transaction. Will only work with transfers.
* ``bill_id`` or ``bill_name`` to link a bill to the transaction. Will only work with withdrawals.
* ``tags``. A comma separated list of tags.
* ``interest_date``. Interest date.
* ``book_date``. Booking date.
* ``process_date``. Date of processing.
* ``due_date``. Due date.
* ``payment_date``. Payment date.
* ``invoice_date``. Invoice date.
* ``internal_reference``. Internal reference.
* ``notes``. Any notes.

To submit actual transaction data, use the following format. The ``*`` must be an incremental number, starting with ``0`` for each set.

Required transaction fields:

* ``transactions[*][amount]``. The amount of the transaction. Must be positive.
* ``transactions[*][source_id]`` or ``transactions[*][source_name]``. The source account of the transaction. Must be an existing asset account for transfers and withdrawals. May be a new revenue account for deposits. You can leave both blank in a deposit to create a cash deposit.
* ``transactions[*][destination_id]``or ``transactions[*][destination_name]``. The destination account of the transaction. Must be an existing asset account for transfers and deposits. May both be blank for a cash withdrawal, or create a new expense account for withdrawals (fill in only the name).
* ``transactions[*][description]``. Not actually mandatory until you submit more than 1 transaction. Must be different from the global description. Cannot be the same as other transactions in your submission.
* ``transactions[*][currency_id]`` or ``transactions[*][currency_code]``. Indicates the currency of the transaction.

Optional transaction fields:

* ``transactions[*][foreign_amount]``. The amount of the transaction in a foreign currency.
* ``transactions[*][foreign_currency_id]`` or ``transactions[*][foreign_currency_code]``. Must be present when you submit ``transactions[*][foreign_amount]``.
* ``transactions[*][reconciled]``. To indicate if the tranaction has been reconciled. I advise to leave this at ``0`` when creating new transactions.
* ``transactions[*][budget_id]`` or ``transactions[*][budget_name]``. Set the budget. Must be an existing budget. Will only work for withdrawals.
* ``transactions[*][category_id]`` or ``transactions[*][category_name]``. Set the category. The category ID must be an existing one, but you can submit new categories by filling in just the name.

Update transaction
------------------

``PUT /api/v1/transactions/<id>``

The same rules as above apply, with some noteable exceptions:

* You cannot change the type of the transaction through the API.
* You cannot change ownership of the transaction through the API.
* Any fields you leave empty, or do not include, will be blanked out or removed.
* If you submit too few transactions, the missing ones will be deleted.
* If you submit more transactions, they will be created.


Delete transaction
------------------

``DELETE /api/v1/accounts/<id>``

Will delete the transaction and any splits it might have. Other data is not removed.
