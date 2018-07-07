.. _api_rules:

=====
Rules
=====

List
----

``GET /api/v1/rules``

Returns a list of the users rules.

Example return
~~~~~~~~~~~~~~

It's long. It includes rule actions and triggers and that is a lot of data.

.. code-block:: json
   
   {
    "data": [
        {
            "type": "rules",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "title": "Your first default rule",
                "text": null,
                "order": 1,
                "active": true,
                "stop_processing": false,
                "strict": true
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rules/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rules/1"
            },
            "relationships": {
                "rule_group": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/rules/1/relationships/rule_group",
                        "related": "https://demo.firefly-iii.org/api/v1/rules/1/rule_group"
                    },
                    "data": {
                        "type": "rule_groups",
                        "id": "1"
                    }
                },
                "rule_triggers": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/rules/1/relationships/rule_triggers",
                        "related": "https://demo.firefly-iii.org/api/v1/rules/1/rule_triggers"
                    },
                    "data": [
                        {
                            "type": "rule_triggers",
                            "id": "1"
                        },
                        {
                            "type": "rule_triggers",
                            "id": "2"
                        },
                        {
                            "type": "rule_triggers",
                            "id": "3"
                        }
                    ]
                },
                "rule_actions": {
                    "links": {
                        "self": "https://demo.firefly-iii.org/api/v1/rules/1/relationships/rule_actions",
                        "related": "https://demo.firefly-iii.org/api/v1/rules/1/rule_actions"
                    },
                    "data": [
                        {
                            "type": "rule_actions",
                            "id": "1"
                        },
                        {
                            "type": "rule_actions",
                            "id": "2"
                        }
                    ]
                }
            }
        }
    ],
    "included": [
        {
            "type": "users",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
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
                "self": "https://demo.firefly-iii.org/api/v1/users/1"
            }
        },
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
        },
        {
            "type": "rule_triggers",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "trigger_type": "user_action",
                "trigger_value": "store-journal",
                "order": 1,
                "active": true,
                "stop_processing": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_triggers/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_triggers/1"
            }
        },
        {
            "type": "rule_triggers",
            "id": "2",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "trigger_type": "description_is",
                "trigger_value": "The Man Who Sold the World",
                "order": 2,
                "active": true,
                "stop_processing": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_triggers/2"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_triggers/2"
            }
        },
        {
            "type": "rule_triggers",
            "id": "3",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "trigger_type": "from_account_is",
                "trigger_value": "David Bowie",
                "order": 3,
                "active": true,
                "stop_processing": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_triggers/3"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_triggers/3"
            }
        },
        {
            "type": "rule_actions",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "action_type": "prepend_description",
                "action_value": "Bought the world from ",
                "order": 1,
                "active": true,
                "stop_processing": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_triggers/1"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_actions/1"
            }
        },
        {
            "type": "rule_actions",
            "id": "2",
            "attributes": {
                "updated_at": "2018-07-07T16:07:59+02:00",
                "created_at": "2018-07-07T16:07:59+02:00",
                "action_type": "set_category",
                "action_value": "Large expenses",
                "order": 2,
                "active": true,
                "stop_processing": false
            },
            "links": {
                "0": {
                    "rel": "self",
                    "uri": "/rule_triggers/2"
                },
                "self": "https://demo.firefly-iii.org/api/v1/rule_actions/2"
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
        "self": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1",
        "first": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1",
        "last": "https://demo.firefly-iii.org/api/v1/piggy_banks?&page=1"
    }
   }
   

Notable about this return are the following aspects:

* It includes all rule actions and trigger, which are separate objects.

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get a rule
----------

``GET /api/v1/rules/<id>``

Returns a single rule.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=rule_group``. Includes the rule group. Is included by default.
* ``include=rule_triggers``. Includes all rule triggers. Are included by default.
* ``include=rule_actions``. Includes all rule actions. Are included by default.
* ``include=user``. Includes the user.


Create a new rule
-----------------

``POST /api/v1/rules``

Creates a new rule. 

Parameters
~~~~~~~~~~

Required global fields

* ``title``. The title of the rule.
* ``rule_group_id``. The rule group ID that the rule will be stored in. Required if no rule group name is submitted.
* ``rule_group_title``. The rule group name that the rule will be stored in. Required if no rule group ID is submitted.
* ``trigger``. What triggers the rule to fire. Must be either ``store-journal`` or ``update-journal``.
* ``strict``. Will the rule be strict, or non-strict? Submit ``1`` or ``0``.
* ``stop_processing``. Should Firefly III stop processing after this rule has fired? Submit ``1`` or ``0``.
* ``active``. Is the rule active? Submit ``1`` or ``0``.

Optional global fields

* ``description``. Description of the new rule.


For each rule trigger (and there must be at least **one**), you need to submit the following fields. For multple rule triggers, submit 1, 2, 3, etc.

* ``rule-triggers[0][name]``. Must be a valid rule trigger. See for a list below.
* ``rule-triggers[0][stop-processing]``. NOT mandatory. Indicates if no further triggers must be processed once this trigger has hit.
* ``rule-triggers[0][value]``. The value that the trigger should trigger on.

For each rule action (and there must be at least one), you must submit the following fields:

* ``rule-actions[0][name]``. Must be a valid rule action. See the list below.
* ``rule-actions[0][stop-processing]``. NOT mandatory. Indicates if no further actions must be processed once this action has fired.
* ``rule-actions[0][value]``. The value that the action should apply.


Valid rule triggers
~~~~~~~~~~~~~~~~~~~

* ``from_account_starts``. The source account starts with X.
* ``from_account_ends``. The source account ends with X.
* ``from_account_is``.  The source account is X.
* ``from_account_contains``. The source account contains X.
* ``to_account_starts``. The destination account starts with X.
* ``to_account_ends``. The destination account ends with X.
* ``to_account_is``. The destination is X.
* ``to_account_contains``. The destination account contains X.
* ``amount_less``. Amount is less than X.
* ``amount_exactly``. Amount is exactly X.
* ``amount_more``. Amount is more than X.
* ``description_starts``. Description starts with X.
* ``description_ends``. Description ends with X.
* ``description_contains``. Description starts with X.
* ``description_is``. Description starts with X.
* ``transaction_type``. Type is either ``withdrawal``, ``deposit`` or ``transfer``.
* ``category_is``. The category is X.
* ``budget_is``. The budget is X.
* ``tag_is``. A tag is X.
* ``currency_is``. The currency is X 
* ``has_attachments``. The transaction has attachments.
* ``has_no_category``. The transaction has no category.
* ``has_any_category``. The transaction has a (any) category.
* ``has_no_budget``. The transaction no budget.
* ``has_any_budget``. The transaction a (any) budget.
* ``has_no_tag``. The transaction has no tag(s).
* ``has_any_tag``. The transaction has a (any) tags.
* ``notes_contain``. The notes contain X.
* ``notes_start``. The notes start with X.
* ``notes_end``. The notes end with X.
* ``notes_are``. The notes are X.
* ``no_notes``. The transaction has no notes.
* ``any_notes``. The transaction has any notes.

Valid rule actions
~~~~~~~~~~~~~~~~~~

* ``set_category``. Set the category of the transaction to X.
* ``clear_category``. Clear any category from the transaction.
* ``set_budget``. Set the budget of the transaction to X.
* ``clear_budget``. Clear any budget from the transaction.
* ``add_tag``. Add a tag to the transaction.
* ``remove_tag``. Remove tag X from the transaction.
* ``remove_all_tags``. Remove all tags from the transaction.
* ``set_description``. Set the description to X.
* ``append_description``. Append the description with X.
* ``prepend_description``. Prepend the description with X.
* ``set_source_account``. Set the source account to X.
* ``set_destination_account``. Set the destination account to X.
* ``set_notes``. Set the notes to X.
* ``append_notes``. Append the notes with X.
* ``prepend_notes``. Prepend the notes with X.
* ``clear_notes``. Clear all notes from the transaction.
* ``link_to_bill``. Link the transaction to a bill.

Update a rule
-------------

``PUT /api/v1/rules/<id>``

The same rules as above apply.

Delete a rule
-------------

``DELETE /api/v1/rules/<id>``

Will delete the rule. Other data is not removed.
