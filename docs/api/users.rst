.. _api_users:

=====
Users
=====

This end point will only work for users with admin rights.

List
-----

``GET /api/v1/users``

Returns a list of the users in the system. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "users",
            "id": "1",
            "attributes": {
                "updated_at": "2018-03-04T09:52:06+00:00",
                "created_at": "2018-03-04T09:52:06+00:00",
                "email": "thegrumpydictator@gmail.com",
                "blocked": false,
                "blocked_code": null,
                "role": "owner"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/users/1"
                },
                "self": "http://firefly.local/api/v1/users/1"
            }
        }
    ],
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
        "self": "http://firefly.local/api/v1/users?page=1",
        "first": "http://firefly.local/api/v1/users?page=1",
        "last": "http://firefly.local/api/v1/users?page=1"
    }
   }

Parameters
~~~~~~~~~~

This list is paginated, and you can use ``page`` to change page.

Get user
--------

``GET /api/v1/users/<id>``

Returns a single user.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=accounts``. Include all of the users accounts. This list cannot be filtered or paginated.
* ``include=attachments``. Include all of the users attachments. This list cannot be paginated.
* ``include=bills``. Include all of the users bills. This list cannot be paginated.
* ``include=budgets``. Include all of the users budgets. This list cannot be paginated.
* ``include=categories``. Include all of the users categories. This list cannot be paginated.
* ``include=piggy_banks``. Includes the related piggy banks of the user. This list cannot be paginated.
* ``include=tags``. Includes the related tags of the user. This list cannot be paginated.
* ``include=transactions``. Include related transactions. This list can not be paginated.

Please note that for most users of Firefly III, such lists will be very long and the API will respond poorly.


Create user
-----------

``POST /api/v1/users``

Creates a new user.

Parameters
~~~~~~~~~~

Required parameter:

* ``email``. Email address of the new user. Must be unique.
* ``blocked``. Indicates if the user is blocked. Send ``0`` to allow users to login.

Optional parameters:

* ``blocked_code``. Indicates the reason the user is blocked. At the moment, Firefly III only recognises ``email_changed``.

A user is created with a random password. In order to login, the new user must use the "reset password" routine to gain access.


Update user
--------------

``PUT /api/v1/users/<id>``

Same as above. Note that you cannot change the password in this manner. 

Delete account
--------------

``DELETE /api/v1/users/<id>``

Will delete the user and all associated data. This can include the currently logged in user (yes, you can delete yourself).

Please note that contrary to most other data, users are always deleted completely. There is no undo button, especially not through the API.