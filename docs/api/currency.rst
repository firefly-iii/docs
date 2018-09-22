.. _api_currency:

==========
Currencies
==========

List
----

``GET /api/v1/currencies``

Returns a list of the system's available currencies.

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "currencies",
            "id": "11",
            "attributes": {
                "updated_at": "2018-07-07T18:07:57+02:00",
                "created_at": "2018-07-07T18:07:57+02:00",
                "name": "Australian dollar",
                "code": "AUD",
                "symbol": "A$",
                "decimal_places": 2,
                "default": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/currencies/11"
                },
                "self": "https://demo.firefly-iii.org/api/v1/currencies/11"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 22,
            "count": 22,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/currencies?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/currencies?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/currencies?&page=1"
    }
   }

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a single currency
---------------------

``GET /api/v1/currencies/<id>``

Returns one currency.

Create a currency
-----------------

``POST /api/v1/currencies``

Creates a new currency.

Parameters
~~~~~~~~~~

Required global fields

* ``name``. Name of the new currency.
* ``code``. Currency code of the new currency. See `ISO 4217 <https://en.wikipedia.org/wiki/ISO_4217>`_.
* ``symbol``. Symbol for the currency, like $ or €.
* ``decimal_places``. Number of decimal places of currency.
* ``default``. Should the new currency be the new default currency? Accepts ``true`` or ``false``. 

Update a currency
-----------------

``PUT /api/v1/currencies/<id>``

The same rules as above apply.

Delete a currency
-----------------

``DELETE /api/v1/currencies/<id>``

Will delete the currency. To do so, the user must have the ``owner``-role and the currency must not be used in the system any more. Other data is not removed.
