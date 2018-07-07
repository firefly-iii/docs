.. _api_preferences:

===========
Preferences
===========

List
----

``GET /api/v1/preferences``

Returns a list of the users preferences. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "preferences",
            "id": "5",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "name": "language",
                "data": "en_US"
            },
            "links": {
                "self": "https://demo.firefly-iii.org/api/v1/preferences/5"
            }
        }
    ]
   }

Notable about this return is that each preference may have another type. There are arrays, integers and strings. This list is not paginated.

Get a preference
----------------

``GET /api/v1/preferences/<id>``

Returns a single preference.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects.

* ``include=user``. Includes the user the preference belongs to. This is always you.

Update a preference
-------------------

``PUT /api/v1/preferences/<id>``

Update a preference. The only required field is ``data``, which contains the new preference.
