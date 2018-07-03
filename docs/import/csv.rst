.. _importcsv:

================
Import CSV files
================

Firefly III can import data from CSV files. It uses a very clever system inspired by `Atlassian JIRA <https://www.atlassian.com/software/jira>`_ to do so. On this page I will assume you have a CSV file from your bank available, and you want to import this file into Firefly III. Well, first go to "Import and export" and select "Import data". Click on "Import a file".

Please note there is a :ref:`FAQ about the import process <faqimport>` as well.

Select a file
-------------

Find your file and upload it. There is no need to upload a "configuration file". You will see what this is for in a later step.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/import-file.png
   :alt: Select a file
   
   Use this page to select your file and indicate the file format.


Configure your file
-------------------

There are some basic settings required before you can continue. Most are pretty obvious but here are some pointers:

Date format
    Most CSV files have dates like this: ``20170623``. Some have ``2017-06-23`` or ``06/23/2017``. The date format must correspond to the date. Check `the parameters <https://secure.php.net/manual/en/datetime.createfromformat.php#refsect1-datetime.createfromformat-parameters>`_ carefully.

Optional fields
    If you have rules or bills, they can be taken into account automatically. This could prove to be slow, however. Other options are bank-specific fixes because most banks create very bad CSV files.


.. figure:: https://firefly-iii.org/static/docs/4.7.0/import-options.png
   :alt: Import options
   
   These options apply to the entire import.


Select column roles
-------------------

In CSV files, each column contains a specific type of information. However, Firefly III does not know which information. Therefor, the next step involves telling Firefly III what each column is about. In the screenshot you can see how I indicate for each column what its role is. 

Notice how I've set some columns to be "mapped". This can be very useful for stuff like budgets, account names and other indicators.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/import-roles.png
   :alt: Set column roles
   
   Each column has its own role

Mapping data
------------

A use case a lot of people run into is that their data is polluted somehow. For example, consider this list of Dutch super markets, extracted from a CSV file.

* ``ALBERT HEIJN 2101 ARNHEM``
* ``ALBERT HEIJN 3532 HEERENVEEN``
* ``ALBERT HEIJN 4022 AMSTERDA``

It's obvious these are the same super market: Albert Heijn. Yet Firefly III would create separate expense accounts for each one. This is where mapping comes in. In the previous step, I gave one column the role "Opposing account (name)" which comes in handy now.

Each of these combinations will now be linked to "Albert Heijn". I can do this with other fields as well, optimizing my import.

.. figure:: https://firefly-iii.org/static/docs/4.7.0/import-map.png
   :alt: Set column mapping
   
   Map individual cells to a specific entry in your Firefly III database


Once you press start, the import will run. This could take a while. 

Running the import
------------------

Once you have set up everything, you are ready to import your data. You can see what is happening while the import is running:

.. figure:: https://firefly-iii.org/static/docs/4.7.5/import-progress.png
   :alt: The import is running
   
   The import is running...



Finishing up
------------

.. figure:: https://firefly-iii.org/static/docs/4.7.5/import-finished.png
   :alt: The import is done
   
   The import is done!



Once the import is complete, you can find the results under the linked :ref:`tag <tags>`.

You can download the configuration file. This will prevent you from having to start ALL over when the import fails. If you download from common banks, these files can be shared in the `configuration center <https://github.com/firefly-iii/import-configurations/wiki>`_ where other users may benefit from them as well.


Import over command line
------------------------

When you have a CSV file **and** a configuration file, you can run an import over the command line with the following command:

.. code-block:: bash

   php artisan firefly:create-import

It has two mandatory arguments:

* The location of the CSV file
* The location of the configuration file.

There are also some options:

* ``--start`` set this so the job will start right now.
* ``--token=<token>`` set this to the token you can find on your profile page. The import will not work without it.

The command then becomes:

.. code-block:: bash

   php artisan firefly:create-import file.csv config.json --start --token=<token>

You can read more about this command in the help text.

.. code-block:: bash

   php artisan help firefly:create-import

