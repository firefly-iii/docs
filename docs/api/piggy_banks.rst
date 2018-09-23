.. _api_piggy_banks:

===========
Piggy Banks
===========

List
----

``GET /api/v1/piggy_banks``

Returns a list of the users piggy banks. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "piggy_banks",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "name": "New camera",
                "currency_id": 1,
                "currency_code": "EUR",
                "currency_symbol": "€",
                "currency_dp": 2,
                "target_amount": 1000,
                "percentage": 73,
                "current_amount": 735,
                "left_to_save": 265,
                "save_per_month": 13.25,
                "start_date": "2015-04-01",
                "target_date": "2020-04-01",
                "order": 1,
                "active": false,
                "notes": null
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/piggy_banks/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/piggy_banks/1"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 14,
            "count": 14,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1"
    }
   }

Most fields should be fairly obvious.

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a piggy bank
----------------

``GET /api/v1/piggy_banks/<id>``

Returns one piggy bank.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=account``. Includes the account linked to the piggy bank.
* ``include=user``. Includes the user linked to the piggy bank.
* ``include=piggy_bank_events``. Includes any events linked to the piggy bank.

Create a new piggy bank
-----------------------

``POST /api/v1/piggy_banks``

Creates a new piggy bank. 

Parameters
~~~~~~~~~~

Required global fields

* ``name``. The name of the piggy bank.
* ``account_id``. The account to be linked to the piggy bank.
* ``target_amount``. The amount you wish to save.

Optional global fields

* ``current_amount``. The amount of money in the piggy bank right now.
* ``start_date``. The date you started saving.
* ``target_date``. The date you want to have saved the amount in the piggy bank.
* ``notes``. Any notes.

Update a piggy bank
-------------------

``PUT /api/v1/piggy_banks/<id>``

The same rules as above apply.

Delete the piggy bank
---------------------

``DELETE /api/v1/piggy_banks/<id>``

Will delete the piggy bank. Other data is not removed.
