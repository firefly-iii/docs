.. _api_recurrences:

======================
Recurring Transactions
======================

List
----

``GET /api/v1/recurrences``

Returns a list of the users recurring transactions. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "recurrences",
            "id": "4",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "transaction_type_id": 1,
                "transaction_type": "Withdrawal",
                "title": "Pay AWS",
                "description": "Pay my AWS bill (every four weeks, weekly).",
                "first_date": "2018-03-02",
                "latest_date": null,
                "repeat_until": null,
                "apply_rules": true,
                "active": true,
                "repetitions": 0,
                "notes": "",
                "recurrence_repetitions": [
                    {
                        "id": 4,
                        "updated_at": "2018-07-07T16:07:59+02:00",
                        "created_at": "2018-07-07T16:07:59+02:00",
                        "repetition_type": "weekly",
                        "repetition_moment": "5",
                        "repetition_skip": 3,
                        "weekend": 4,
                        "description": "Every week on Friday",
                        "occurrences": [
                            "2018-07-13",
                            "2018-08-10",
                            "2018-09-07",
                            "2018-10-05",
                            "2018-11-02"
                        ]
                    }
                ],
                "transactions": [
                    {
                        "currency_id": 1,
                        "currency_code": "EUR",
                        "currency_symbol": "€",
                        "currency_dp": 2,
                        "foreign_currency_id": null,
                        "source_id": 1,
                        "source_name": "Checking Account",
                        "destination_id": 12,
                        "destination_name": "amazon.com",
                        "amount": "25.450000000000",
                        "foreign_amount": null,
                        "description": "AWS bills just float away don't they.",
                        "meta": [
                            {
                                "name": "category_name",
                                "value": "Bills",
                                "category_id": 5,
                                "category_name": "Bills"
                            }
                        ]
                    }
                ]
            },
            "meta": [
                {
                    "name": "tags",
                    "value": "auto-generated",
                    "tags": [
                        "auto-generated"
                    ]
                }
            ],
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/recurring/4"
                },
                "self": "https://demo.firefly-iii.org/api/v1/recurrences/4"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 5,
            "count": 5,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/recurrences?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/recurrences?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/recurrences?&page=1"
    }
   }
   

Notable about this return are the following aspects:

* The ``recurrence_repetitions`` array you see can hold more than one recurrence repetition. This is impossible in the Firefly III user interface but certainly possible through the API.
* The same goes for the ``transactions`` array.

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get once recurring transactions
-------------------------------

``GET /api/v1/recurrences/<id>``

Returns a single recurring transaction.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the user. This is always you.
* ``include=transactions``. The transactions already created by the recurring transactions.

Create a recurring transaction
------------------------------

``POST /api/v1/recurrences``

Creates a new recurring transaction. 

Parameters
~~~~~~~~~~

Required global fields

* ``type``. The type of transaction you wish to make. Must be ``withdrawal``, ``deposit`` or ``transfer``.
* ``title``. Title of the recurring transaction.
* ``first_date``. First date that the recurring transaction will fire. Must always be in the future.
* ``apply_rules``. After creating the recurring transaction, fire your rules? ``0`` or ``1``.
* ``active``. Is the recurring transaction active? ``0`` or ``1``.

For each repetition, you need to submit the following. Extra repetitions can be created. Use ``1``, ``2``, etc.

* ``repetitions[0][type]``. Required. The type of repetition. Valid options are: ``daily``, ``weekly``, ``ndom``, ``monthly``, ``yearly``.
* ``repetitions[0][moment]``. Required. Repetition type meta data. See below for explanations.
* ``repetitions[0][skip]``. Required. How many repetitions to skip every time.
* ``repetitions[0][weekend]``. Required. How to respond when it's a weekend. See below for explanation.


For the transaction, you can submit multiple entries (effectively making a split transction). These are the values. Extra transactions can be created. Use ``1``, ``2``, etc.

* ``transactions[0][description]``. Required. Description of the transaction.
* ``transactions[0][amount]``. Required. The amount of the transaction.
* ``transactions[0][currency_id]``. Required if no ``currency_code``. The currency to use for the transaction.
* ``transactions[0][currency_code]``. Required if no ``currency_id``. The currency to use for the transaction.
* ``transactions[0][foreign_amount]``. Optional. Foreign amount for the tranaction.
* ``transactions[0][foreign_currency_id]``. Optional. Required when the foreign amount is submitted. You need to submit either the ID or the code.
* ``transactions[0][foreign_currency_code]``. Optional. Required when the foreign amount is submitted. You need to submit either the ID or the code.
* ``transactions[0][budget_id]``. The ID of the budget you wish to link to this transaction.
* ``transactions[0][category_name]``. The name of the category you wish to link to this transaction.
* ``transactions[0][source_id]``. The ID of the source account for this transaction. Must be of the correct account type. Submit either the ID or the name.
* ``transactions[0][source_name]``. The name of the source account for this transaction. Must be of the correct account type. Submit either the ID or the name.
* ``transactions[0][destination_id]``. The ID of the destination account for this transaction. Must be of the correct account type. Submit either the ID or the name.
* ``transactions[0][destination_name]``. The name of the destination account for this transaction. Must be of the correct account type. Submit either the ID or the name.


Optional global fields

* ``description``. Not to be confused with the transaction description, this field describes the recurring transaction itself.
* ``repeat_until``. Until when the recurring transaction must run. Is not required. Cannot be combined with ``nr_of_repetitions``.
* ``nr_of_repetitions``. Denotes how many transactions the system can make before stopping. Cannot be combined with ``repeat_until``.
* ``tags``. Comma separated list of tags. Applies to all transactions.
* ``piggy_bank_id``. Link the transcation(s) to a piggy bank. Only works for transfers.

Repetition types
~~~~~~~~~~~~~~~~

Valid repetition types are ``daily``, ``weekly``, ``ndom``, ``monthly``, ``yearly``.

* ``daily``. The ``moment`` value must be empty.
* ``weekly``. The ``moment`` value must be between 1 and 7 (inclusive).
* ``ndom``. The ``moment`` value must be a comma value, like so: ``2,2``. The first number must be between 1 and 5, for the week in the month. The second number must be between 1 and 7, for the day of the week. Together this is code for: the second Tuesday of the month.
* ``monthly``. The day of the month, between 1-31.
* ``yearly``. A full date, like ``2018-11-27``. The year does not matter.

Respond to the weekend
~~~~~~~~~~~~~~~~~~~~~~

* ``1``. Do nothing, just create the transaction.
* ``2``. Create no transaction.
* ``3``. Skip to the previous Friday.
* ``4``. Skip to the next Monday.


Update a recurring transaction
------------------------------

``PUT /api/v1/recurrences/<id>``

The same rules as above apply.

Delete a recurring transaction
------------------------------

``DELETE /api/v1/recurrences/<id>``

Will delete the recurring transaction. Other data is not removed.
