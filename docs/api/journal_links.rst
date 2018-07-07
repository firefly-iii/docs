.. _api_journal_links:

=============
Journal Links
=============

Journal links denote the links you can make between transactions, as explained in :ref:`the section about <links>`. Using this part of the API, you can create and manage links between transactions. These objects are called "journal links" because it refers to the internal name for a transaction.

List
----

``GET /api/v1/journal_links``

Returns a list of the users links. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "journal_links",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "notes": ""
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/journal_links/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/journal_links/1"
            },
            "relationships": {
                "inward": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/journal_links/1/relationships/inward",
                        "related": "https://demo.firefly-iii.org/api/v1/journal_links/1/inward"
                    },
                    "data": {
                        "type": "transactions",
                        "id": "4"
                    }
                },
                "outward": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/journal_links/1/relationships/outward",
                        "related": "https://demo.firefly-iii.org/api/v1/journal_links/1/outward"
                    },
                    "data": {
                        "type": "transactions",
                        "id": "8"
                    }
                },
                "link_type": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/journal_links/1/relationships/link_type",
                        "related": "https://demo.firefly-iii.org/api/v1/journal_links/1/link_type"
                    },
                    "data": {
                        "type": "link_types",
                        "id": "1"
                    }
                }
            }
        }
    ],
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
        "self": "https://demo.firefly-iii.org/api/v1/journal_links?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/journal_links?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/journal_links?&page=1"
    }
   }

Notable about this return is that the linked transactions are included in the ``included`` section which is not displayed here.

Parameters
~~~~~~~~~~

* ``name``. Limit the list to a certain link type.

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a single journal link
-------------------------

``GET /api/v1/journaL_links/<id>``

Returns one journal link.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=inward``. Includes the inward transaction.
* ``include=outward``. Includes the inward transaction.
* ``include=link_type``. Includes the link type.

Create a journal link
---------------------

``POST /api/v1/journal_links``

Creates a new journal link. 

Parameters
~~~~~~~~~~

Required global fields

* ``link_type_id``. The ID of the link type.
* ``inward_id``. The inward transaction journal.
* ``outward_id``. The outward transaction journal.

Optional global fields

* ``notes``. Any extra notes.

Update a journal link
------------------

``PUT /api/v1/journal_links/<id>``

The same rules as above apply.

Delete a journal link
---------------------

``DELETE /api/v1/journal_links/<id>``

Will delete the journal link. Other data is not removed.
