.. _api_rule_groups:

===========
Rule groups
===========

List
----

``GET /api/v1/rule_groups``

Returns a list of the users rule groups.

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "rule_groups",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "title": "Default rules",
                "text": null,
                "order": 1,
                "active": true
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_groups/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_groups/1"
            },
            "relationships": {
                "user": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/rule_groups/1/relationships/user",
                        "related": "https://demo.firefly-iii.org/api/v1/rule_groups/1/user"
                    },
                    "data": {
                        "type": "users",
                        "id": "1"
                    }
                }
            }
        }
    ],
    "included": [],
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
        "self": "https://demo.firefly-iii.org/api/v1/rule_groups?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/rule_groups?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/rule_groups?&page=1"
    }
   }
   

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a rule group
----------

``GET /api/v1/rule_groups/<id>``

Returns a single rule group.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the user. Is included by default. Is always you.


Create a new rule group
-----------------------

``POST /api/v1/rule_groups``

Creates a new rule. 

Parameters
~~~~~~~~~~

Required global fields

* ``title``. The title of the rule group.
* ``active``. Is the rule active? Submit ``1`` or ``0``.

Optional global fields

* ``description``. Description of the new rule group.

Update a rule group
-------------------

``PUT /api/v1/rule_groups/<id>``

The same rules as above apply.

Delete a rule group
-------------------

``DELETE /api/v1/rule_groups/<id>``

Will delete the rule group. Other data is not removed.
