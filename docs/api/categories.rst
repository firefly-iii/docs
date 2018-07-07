.. _api_categories:

==========
Categories
==========

List
----

``GET /api/v1/categories``

Returns a list of the users categories. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "categories",
            "id": "2",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "active": true,
                "name": "House"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/categories/2"
                },
                "self": "https://demo.firefly-iii.org/api/v1/categories/2"
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
        "self": "https://demo.firefly-iii.org/api/v1/categories?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/categories?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/categories?&page=1"
    }
   }
   

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a category
--------------

``GET /api/v1/categories/<id>``

Returns a single category.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the user.
* ``include=transactions``. Includes the transactions linked to the category.

Create a category
-----------------

``POST /api/v1/categories``

Creates a new category. 

Parameters
~~~~~~~~~~

Required global fields

* ``name``. Name of the new category.
* ``active``. Is the category active? Submit ``0`` or ``1``.

Update a category
-----------------

``PUT /api/v1/categories/<id>``

The same rules as above apply.

Delete a category
-----------------

``DELETE /api/v1/categories/<id>``

Will delete the category. Other data is not removed.
