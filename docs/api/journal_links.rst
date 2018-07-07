.. _api_journal_links:

=============
Journal Links
=============

List
----

``GET /api/v1/X``

Returns a list of the users transactions. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
    }
   }

Notable about this return are the following aspects:

* These

Parameters
~~~~~~~~~~

* ``parameter``. Bla bla bla

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get X
---------------

``GET /api/v1/X/<id>``

Returns X.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=X``. Includes the X.

Create X
------------------

``POST /api/v1/X``

Creates a new X. 

Parameters
~~~~~~~~~~

Required global fields

* ``X``. Bla bla

Optional global fields

* ``X``. Bla bla

Update X
------------------

``PUT /api/v1/X/<id>``

The same rules as above apply, with some noteable exceptions:

* Bla 

Delete X
------------------

``DELETE /api/v1/X/<id>``

Will delete the X. Other data is not removed.
