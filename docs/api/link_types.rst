.. _api_link_types:

==========
Link Types
==========

Link types are the types of links you can create between transactions. Examples include "is paid by" / "pays for" and many others.
 
List
----

``GET /api/v1/link_types``

Returns a list of the system's link types. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "link_types",
            "id": "3",
            "attributes": {
                "updated_at": "2018-07-07T18:07:57+02:00",
                "created_at": "2018-07-07T18:07:57+02:00",
                "name": "Paid",
                "inward": "is (partially) paid for by",
                "outward": "(partially) pays for",
                "editable": 0
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/link_types/3"
                },
                "self": "https://demo.firefly-iii.org/api/v1/link_types/3"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 4,
            "count": 4,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "https://demo.firefly-iii.org/api/v1/link_types?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/link_types?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/link_types?&page=1"
    }
   }

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a link type
---------------

``GET /api/v1/link_types/<id>``

Returns a single link type.

Create a new link type
----------------------

``POST /api/v1/link_types``

Creates a new link type. 

Parameters
~~~~~~~~~~

Required global fields

* ``name``. Name of the link type.
* ``outward``. The outward description.
* ``outward``. The outward description.

Update a link type
------------------

``PUT /api/v1/link_types/<id>``

The same rules as above apply.

Delete a link type
------------------

``DELETE /api/v1/link_types/<id>``

Will delete the link types. Transactions linked under this type will lose their connection.
