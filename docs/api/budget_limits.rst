.. _api_budget_limits:

=========================
Budget amounts and limits
=========================

List
----

``GET /api/v1/budget_limits``

Returns a list of the users budget limits. These are the amounts set for a specific budget in a specific budget. For example, 300,- for budget "Groceries" between 1 January 2018 and 31 January 2018. 

Firefly III calls these "budget limits".

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "budget_limits",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-14T15:20:48+02:00",
                "created_at": "2018-07-14T15:20:48+02:00",
                "start_date": "2016-04-01",
                "end_date": "2016-04-01",
                "amount": "160"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/budget_limits/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/budget_limits/1"
            },
            "relationships": {
                "budget": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/budget_limits/1/relationships/budget",
                        "related": "https://demo.firefly-iii.org/api/v1/budget_limits/1/budget"
                    },
                    "data": {
                        "type": "budgets",
                        "id": "1"
                    }
                }
            }
        }
    ],
    "included": [],
    "meta": {
        "pagination": {
            "total": 18,
            "count": 18,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/budget_limits?budget_id=0&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/budget_limits?budget_id=0&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/budget_limits?budget_id=0&page=1"
    }
}
   

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Other parameters you can use are:

* ``budget_id=x``. Limits the list to a specific budget ID's limits.
* ``start=YYYY-MM-DD``. Limits the list to a specific start date. No earlier budget limits will be returned.
* ``end=YYYY-MM-DD``. Limits the list to a specific start date. No later budget limits will be returned.

Get a budget limit
------------------

``GET /api/v1/budget_limits/<id>``

Returns a single budget limit.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related object(s).

* ``include=budget``. Includes the associated budget. Is included by default.

Create a budget limit
---------------------

``POST /api/v1/budget_limits``

Creates a new budget limit. 

Parameters
~~~~~~~~~~

Required global fields

* ``budget_id``. ID of the associated budget.
* ``amount``. The amount you want to set for this budget.
* ``start_date``. The start date of the budget limit. So the start of the period in which you wish to budget.
* ``end_date``. The end date of the budget limit. So the end of the period in which you wish to budget.

Update a budget limit
---------------------

``PUT /api/v1/budget_limits/<id>``

The same rules as above apply.

Delete a budget limit
---------------------

``DELETE /api/v1/budget_limits/<id>``

Will delete the budget limit. Transactions will stay connected to the budget and the budget itself will not be deleted. But there will no longer be an amount set for this particular limit's period.

