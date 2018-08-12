.. _api_bills:

=====
Bills
=====

List
-----

``GET /api/v1/bills``

Returns a list of the users bills. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "bills",
            "id": "1",
            "attributes": {
                "updated_at": "2018-03-04T12:48:42+00:00",
                "created_at": "2018-03-04T12:48:42+00:00",
                "name": "Example bill",
                "match": [
                    "all",
                    "match",
                    "words"
                ],
                "amount_min": 10,
                "amount_max": 102.1,
                "date": "2018-03-01",
                "repeat_freq": "monthly",
                "skip": 0,
                "automatch": true,
                "active": true,
                "attachments_count": 0,
                "pay_dates": [],
                "paid_dates": [],
                "next_expected_match": null,
                "notes": "sfsdadasdasdada"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/bills/1"
                },
                "self": "http://firefly.local/api/v1/bills/1"
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
        "self": "http://firefly.local/api/v1/bills?page=1",
        "first": "http://firefly.local/api/v1/bills?page=1",
        "last": "http://firefly.local/api/v1/bills?page=1"
    }
   }

Parameters
~~~~~~~~~~

Notable in the return of a bill are the arrays ``pay_dates`` and ``paid_dates``. When you submit a start date and end date, Firefly III will fill these arrays, like so: ``["2018-04-01","2018-05-01"]``. These dates indicate when the bill was paid in the given range, or when it is expected to be paid.

The result is paginated according to the users preferences (usually 50). Use ``page`` for pagination (see also ``links`` in the output).


Get bill
--------

``GET /api/v1/bills/<id>``

Returns a single bill.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the owner of the bill.
* ``include=attachments``. Includes the attached files.
* ``include=transactions``. Include related transactions.

The list of transaction can be very long. It is paginated according to the users preferences (usually 50). Use ``page`` for pagination. Attachments are not paginated.

Create bill
-----------

``POST /api/v1/bills``

Creates a new bill.

Parameters
~~~~~~~~~~

Required fields:

* ``name``. Name of the new bill. Must be unique.
* ``match``. Words to match on, comma separated. Must be a unique set.
* ``amount_min``. Minimum amount to match on.
* ``amount_max``. Maximum amount to match on. Must be larger than ``amount_min``.
* ``date``. The date you first expect the bill to hit.
* ``repeat_freq``. How often you expect the bill to hit. Can be one of the following: ``weekly``, ``monthly``, ``quarterly``, ``half-year``, ``yearly``.
* ``skip``. How often the bill is skipped. Normally you would submit ``0`` (for example for every month). Max is 31.
* ``automatch``. If the bill will automatch new transactions. Can be ``0`` or ``1``.
* ``active``. If the bill is active. Can be ``0`` or ``1``.
* ``currency_id``. The currency of the new bill. This refers to the internal ID of the currency within Firefly III. This field is mandatory when ``currency_code`` is not present.
* ``currency_code``. The currency of the new code, as a three-letter code (``USD``, ``EUR``, etc). This field is mandatory when ``currency_id`` is not present.

Optional fields:

* ``notes``. Any extra notes.

Update bill
-----------

``PUT /api/v1/bills/<id>``

The same requirements as for the new bill apply.

* You cannot change ownership of the bill through the API.
* Any fields you leave empty, or do not include, will be blanked out or removed.

Delete bill
-----------

``DELETE /api/v1/bills/<id>``

Will delete the bill. Does not delete related transactions.
