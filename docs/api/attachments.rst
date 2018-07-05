.. _api_attachments:

===========
Attachments
===========

List
----

``GET /api/v1/attachments``

Returns a list of the users attachments. 

Example return
~~~~~~~~~~~~~~

.. code-block:: json
   
   {
    "data": [
        {
            "type": "attachments",
            "id": "1",
            "attributes": {
                "updated_at": "2018-07-05T05:29:14+02:00",
                "created_at": "2018-07-05T05:29:14+02:00",
                "attachable_type": "FireflyIII\\Models\\TransactionJournal",
                "md5": "5a7aa2388b5c005745e33da9d77730cc",
                "filename": "18001682.pdf",
                "download_uri": "https://demo.firefly-iii.org/api/v1/attachments/1/download",
                "upload_uri": "https://demo.firefly-iii.org/api/v1/attachments/1/upload",
                "title": null,
                "mime": "application/pdf",
                "size": 77893
            }
        }
    ],
    }
   }

Notable about this return are the following aspects:

* The ``upload_uri`` and ``download_uri`` attributes can be used to download or upload transactions. The URL will match your own installation.

Parameters
~~~~~~~~~~

The list is paginated. Use ``page`` to get the next page or use the links from ``links``. 

Get an attachment
-----------------

``GET /api/v1/attachments/<id>``

Will return a single attachment.

Parameters
~~~~~~~~~~

Use the ``include`` parameter to include related objects. These parameters can be combined (use a comma).

* ``include=user``. Includes the user.
* ``include=notes``. Includes the attachments notes.

Both of these includes are included by default.

Download an attachment
----------------------

``GET /api/v1/attachments/<id>/download``

Will send you the attachment's content as a download.


Create an attachment
--------------------

``POST /api/v1/attachments``

Creates a new attachment. This will not yet make the attachment visible or usable, see below. Uploading file content is a separate request.

Parameters
~~~~~~~~~~

Required fields

* ``filename``. The file name of the attachment.
* ``model``. The type of object this attachment is connected to. For valid values, see below.
* ``model_id``. The ID of the object this attachment is connected to.

Valid models:

* ``FireflyIII\Models\Bill`` for bills;
* ``FireflyIII\Models\ImportJob`` for import jobs;
* ``FireflyIII\Models\TransactionJournal`` for transactions.

Optional fields

* ``title``. The title of the attachment.
* ``notes``. Any notes for the attachment.


Upload an attachment
--------------------

``POST /api/v1/attachments/<id>/upload``

If you create or update an attachment the actual file cannot be touched. To change these, use this URI to upload new attachment content. Place the new file in the POST body and the attachment will be updated. This replaces the previous content of the attachment.

Update an attachment
--------------------

``PUT /api/v1/attachments/<id>``

The same rules as above apply, with some noteable exceptions:

* The ``filename`` parameter is no longer mandatory.

Delete an attachment
--------------------

``DELETE /api/v1/attachments/<id>``

Will delete the attachment.

