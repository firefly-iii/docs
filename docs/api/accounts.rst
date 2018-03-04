.. _api_accounts:

========
Accounts
========

List
-----

``GET /api/v1/accounts``

Returns a list of the users accounts. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "accounts",
            "id": "1",
            "attributes": {
                "updated_at": "2018-03-04T09:52:06+00:00",
                "created_at": "2018-03-04T09:52:06+00:00",
                "name": "EUR Account",
                "active": true,
                "type": "Asset account",
                "currency_id": 1,
                "currency_code": "EUR",
                "current_balance": 0,
                "current_balance_date": "2018-03-04",
                "notes": null,
                "monthly_payment_date": null,
                "credit_card_type": null,
                "account_number": null,
                "iban": "NL11XOLA6707795988",
                "bic": null,
                "virtual_balance": 0,
                "opening_balance": null,
                "opening_balance_date": null,
                "role": "defaultAsset"
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/accounts/1"
                },
                "self": "http://firefly.local/api/v1/accounts/1"
            }
        }
    ],
    "meta": {
        "pagination": {
            "total": 3,
            "count": 3,
            "per_page": 50,
            "current_page": 1,
            "total_pages": 1
        }
    },
    "links": {
        "self": "http://firefly.local/api/v1/accounts?type=all&page=1",
        "first": "http://firefly.local/api/v1/accounts?type=all&page=1",
        "last": "http://firefly.local/api/v1/accounts?type=all&page=1"
    }
   }



Parameters
~~~~~~~~~~

Add ``type`` to filter the list down:

* ``type=all``. Returns accounts of all types.
* ``type=asset``. Returns all asset accounts.
* ``type=cash``. Returns all cash accounts (should be just one).
* ``type=expense``. Returns all expense accounts.
* ``type=revenue``. Return all revenue accounts.
* ``type=special``. Returns the cash account, initial balance accounts, reconciliation accounts and other accounts that are usually hidden from the user.
* ``type=hidden``. Same list, except for the cash account.
* ``type=*``. Returns a specific type, when it exists.

Unknown types or invalid choices result in all accounts being returned.

The result is paginated according to the users preferences (usually 50). Use ``page`` for pagination (see also ``links`` in the output).

Get account
-----------

``GET /api/v1/accounts/<id>``

Returns a single account.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the owner of the account.
* ``include=piggy_banks``. Includes the related piggy banks of the account.
* ``include=transactions``. Include related transactions.

The list of transaction can be very long. It is paginated according to the users preferences (usually 50). Use ``page`` for pagination. Piggy banks are not paginated.

Create account
--------------

``POST /api/v1/accounts``

Stores a new account and returns the new object.


Parameters
~~~~~~~~~~

Required parameters:

* ``name``. Required. Name of the new account.
* ``type``. Type of the new account. Can be ``asset``, ``expense`` or ``revenue``.
* ``currency_id`` OR ``currency_code`` field. Refers to the preferred currency of the new account. Firefly III must know about the currency.
* ``active``. If account is active. Must be ``0`` or ``1``.
* ``account_role``. Mandatory when ``type=asset``. Can have the following values:

   1) ``defaultAsset`` for default asset accounts.
   2) ``sharedAsset`` for shared asset accounts.
   3) ``savingAsset`` for savings accounts
   4) ``ccAsset`` for credit cards.

* ``cc_type``. Required when ``account_role=ccAsset``. Must be of the value ``monthlyFull``.
* ``cc_monthly_payment_date``. Required when ``account_role=ccAsset``. Defines when the credit card is paid every month. When in doubt, use the first of the month.


Optional and extra parameters:

* ``iban``. Not required. IBAN of the new account. Must be unique, and a valid IBAN.
* ``opening_balance`` and ``opening_balance_date``. The initial balance for the new account plus the date it applies to. Only applies to asset accounts.
* ``bic``. The BIC of the account.
* ``virtual_balance``. Amount of virtual balance.
* ``account number``. Account number (not IBAN) related to the account. Must be unique.
* ``notes``. Any notes.


Update account
--------------

``PUT /api/v1/accounts/<id>``

Update an account. The requirements to the data submitted are equal to that of the "create account"-routine. Notable exceptions are:

* You cannot change the type of the account through the API.
* You cannot change ownership of the account through the API.
* Any fields you leave empty, or do not include, will be blanked out or removed.

The result, when succesfull, will be the updated account.

Delete account
--------------

``DELETE /api/v1/accounts/<id>``

Will delete the account and all associated transactions.
