.. _api_budgets:

=======
Budgets
=======

This API endpoint can be used to manage your budgets. To set the amount of a budget, in a specific period, use :ref:`the budget limit end point<api_budget_limits>`.

List
----

``GET /api/v1/budgets``

Returns a list of the users budgets. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "budgets",
            "id": "2",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "active": true,
                "name": "Bills"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/budgets/2"
                },
                "self": "https://demo.firefly-iii.org/api/v1/budgets/2"
            }
        }
    ],
    "included": [],
    "meta": {
        "pagination": {
            "total": 2,
            "count": 2,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/budgets?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/budgets?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/budgets?&page=1"
    }
   }
   

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a budget
------------

``GET /api/v1/budgets/<id>``

Returns a single budget.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the user.
* ``include=transactions``. Includes the transactions linked to the budget.

To set the amount of a budget, in a specific period, use :ref:`the budget limit end point<api_budget_limits>`.

Create a budget
---------------

``POST /api/v1/budgets``

Creates a new budget. To set the amount of a budget, in a specific period, use :ref:`the budget limit end point<api_budget_limits>`.

Parameters
~~~~~~~~~~

Required global fields

* ``name``. Name of the new budget.
* ``active``. Is the budget active? Submit ``0`` or ``1``.

Update a budget
---------------

``PUT /api/v1/budgets/<id>``

The same rules as above apply. To set the amount of a budget, in a specific period, use :ref:`the budget limit end point<api_budget_limits>`.

Delete a budget
---------------

``DELETE /api/v1/budgets/<id>``

Will delete the budget. Other data is not removed. Budget limits are deleted as well.
