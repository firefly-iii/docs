.. _faq:

===
FAQ
===

.. _faqdocker:

Docker
------

.. contents::
   :local:

Question one
~~~~~~~~~~~~

Text be here.

Question two
~~~~~~~~~~~~

Text be here.

.. _faqselfhosted:

Self-hosted (VM)
----------------

.. contents::
   :local:

I have to access Firefly III through /public/ and it gives me a warning?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This means that the Document Root of your webserver is configured wrong. You should configure your webserver in such a way that ``/`` corresponds to ``/public``. If you do not, you run the risk of exposing your database credentials, sessions and other sensitive financial data to the world.

More text be here.

I want to use SQLite
~~~~~~~~~~~~

There is not much to it. Open your ``.env`` file and find the lines that begin with ``DB_``. These define your database connection. Leave ``DB_CONNECTION``. Delete the rest.

.. code-block:: bash
   
   DB_CONNECTION=sqlite

Then, in order to install the database, make sure the file ``/storage/database/database.sqlite`` exists. When it does not exist, you can use this command on Linux to create it:

.. code-block:: bash
   
   touch ./storage/database/database.sqlite

Then you are ready to install the database in SQLite:

.. code-block:: bash

   php artisan migrate --seed
   php artisan firefly:upgrade-database
   php artisan firefly:verify

And presto!

I want to use PostgreSQL
~~~~~~~~~~~~

In your ``.env`` file, change the ``DB_CONNECTION`` to ``pgsql``. Update the other ``DB_*`` settings to match your database settings. The default port for PostgreSQL is 5432.

I see a white page and nothing else
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer be here.

I get a 404
~~~~~~~~~~~

Answer be here.

I get "Be right back"
~~~~~~~~~~~~~~~~~~~~~

Answer be here.

When I login, I get "Page has expired"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer be here


.. _faqthirdparty:

Third-party hosted
------------------
This section is empty.