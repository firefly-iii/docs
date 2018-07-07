.. _api_available_budgets:

=================
Available Budgets
=================

The "available budgets" endpoint allows you to edit the total amount of money that is available each month. You can see an example of this amount on the ``/budgets`` page where it is used to fill the blue and green progress bars.

The object is called "available budget" in Firefly III's database, which is why the end point is also called "available budget".

Here is a screenshot of such an "available budget" in Firefly III:

.. figure:: https://firefly-iii.org/static/docs/4.7.5/available-budgets.png
   :alt: Available budget
   
   Available budget

List available budgets
----------------------

``GET /api/v1/available_budgets``

Returns a list of the users available budgets. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "available_budgets",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "start_date": "2018-05-01",
                "end_date": "2018-05-31",
                "amount": 1500
            },
        }
   }

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get X
---------------

``GET /api/v1/available_budgets/<id>``

Returns an available budget object.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=transaction_currency``. Includes the available budget. Is included by default.
* ``include=user``. Includes the user.

Create an available budget
--------------------------

``POST /api/v1/available_budgets``

Creates a new available budget. 

Parameters
~~~~~~~~~~

Required global fields

* ``transaction_currency_id``. The currency you're budgeting in.
* ``amount``. The amount of the available budget.
* ``start_date``. The start date of the period in which the budget is available.
* ``end_date``. The end date.

Update an available budget request
----------------------------------

``PUT /api/v1/available_budgets/<id>``

The same rules as above apply, with no noteable exceptions.

Delete the available budget
---------------------------

``DELETE /api/v1/available_budgets/<id>``

Will delete the available budget. Other data is not removed.
