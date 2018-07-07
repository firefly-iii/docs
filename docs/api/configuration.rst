.. _api_configuration:

=============
Configuration
=============

List
----

``GET /api/v1/configuration``

Returns a list of the system's configuration values.

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": {
        "is_demo_site": true,
        "permission_update_check": -1,
        "last_update_check": 1530979700,
        "single_user_mode": true
    }
   }

Update configuration
--------------------

``POST /api/v1/configuration``

You can update the configuration of your system by POSTing the new value. 

Parameters
~~~~~~~~~~

The following parameters are required.

* ``name``. Name of the configuration value. Must be one of ``is_demo_site``, ``permission_update_check``, or ``single_user_mode``.
* ``value``. The new value of the configuration value.
