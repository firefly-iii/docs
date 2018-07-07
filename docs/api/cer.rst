.. _api_cer:

=======================
Currency Exchange Rates
=======================

List
----

``GET /api/v1/cer``

Get a currency exchange rate.

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": {
        "type": "currency_exchange_rates",
        "id": "1",
        "attributes": {
            "updated_at": "2018-07-07T19:01:30+02:00",
            "created_at": "2018-07-07T19:01:30+02:00",
            "rate": 1.175912
        },
        "links": {
            "0": {
                "rel": "self",
                "uri": "/currency_exchange_rates/1"
            },
            "self": "https://demo.firefly-iii.org/api/v1/currency_exchange_rates/1"
        },
        "relationships": {
            "from_currency": {},
            "to_currency": {}
        }
    },
    "included": []
   }
   

Notable about this return are the following aspects:

* The rate is included for the given date and currencies (see below). Firefly III relies on the Fixer IO API to do currency exchange rates. Out of the box (the free tier) it only supports from EUR to USD.
* Missing in the output above are the from and to currency. They are mentioned but I haven't included the actual objects in the documentation.

Parameters
~~~~~~~~~~

* ``from``. Currency code for the source currency, such as ``EUR`` or ``GBP``.
* ``to``. Currency code for the destination currency, such as ``EUR`` or ``GBP``.
* ``date``. The date you wish the currency exhange rate of.

The default values are ``EUR``, ``USD``, and today's date.
