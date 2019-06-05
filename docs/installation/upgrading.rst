.. _upgrading:

=======
Upgrade
=======

Firefly III has had a long and stormy history. There are many ways of installing Firefly III, so there are many ways to upgrade.

.. contents::
   :local:

Docker
------

Upgrade straight from Docker Hub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To upgrade, stop and remove your container using these commands:

.. code-block:: bash

   docker stop <container>
   docker rm <container>

To find out which container is Firefly III, run ``docker container ls -a``.

.. code-block:: bash

   docker pull jc5x/firefly-iii:latest

And then create it again by running the command from the :ref:`installation guide <installdocker>`. The container should upgrade itself so it can take some time for it to start. You should save the command you've used to start the container for easier upgrade.

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`.


Docker Hub via docker compose
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To update the container run these commands:

.. code-block:: bash

   docker-compose stop firefly_iii_app
   docker-compose rm
   docker-compose pull firefly_iii_app
   docker-compose -f docker-compose.yml up -d

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Virtual or real server
----------------------

Created using composer "create-project"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The best way to upgrade is to "reinstall" Firefly III using the following command:

.. code-block:: bash
   
   composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii-updated <next_version>

Where ``<next_version>`` is the latest version of Firefly III. This installs Firefly III in a new directory called ``firefly-iii-updated``. Assuming your *original* Firefly III installation is in the directory ``firefly-iii`` you can upgrade by simply moving over your ``.env`` file and other stuff:

.. code-block:: bash
   
   cp firefly-iii/.env firefly-iii-updated/.env
   cp firefly-iii/storage/upload/* firefly-iii-updated/storage/upload/
   cp firefly-iii/storage/export/* firefly-iii-updated/storage/export/

If you use SQLite as a database system (you will know if you do) copy your database as well. Otherwise the ``.env``-file is enough.

Then, run the following commands to finish the upgrade:

.. code-block:: bash
   
   cd firefly-iii-updated
   rm -rf bootstrap/cache/*
   php artisan cache:clear
   php artisan migrate --seed
   php artisan firefly:upgrade-database
   php artisan firefly:verify
   php artisan passport:install
   php artisan cache:clear
   cd ..

To make sure your webserver serves you the new Firefly III:

.. code-block:: bash
   
   mv firefly-iii firefly-iii-old
   mv firefly-iii-updated firefly-iii

If you get 500 errors or other problems, you may have to set the correct access rights:

.. code-block:: bash
   
   sudo chown -R www-data:www-data firefly-iii
   sudo chmod -R 775 firefly-iii/storage

Make sure you remove any old PHP7.0 or PHP7.1 packages or at least, make sure they are not used by Apache and/or nginx. To disable PHP 7.0 or PHP7.1 in Apache, you can use:

.. code-block:: bash
   
   sudo a2dismod php7.0
   sudo a2dismod php7.1
   sudo a2enmod php7.2
   sudo service apache2 restart

This assumes you run Apache and your OS package manager can handle multiple PHP versions (not all of them do this). Other commands can be found using a search engine.

If you're having trouble with (parts of) this step, please check out the :ref:`FAQ <faq>`

Straight from Github
~~~~~~~~~~~~~~~~~~~~

Make sure you backup your entire installation directory, and database.

Go to the ``firefly-iii`` folder and run these commands:

.. code-block:: bash

   git pull
   rm -rf bootstrap/cache/*
   rm -rf vendor/
   composer install --no-scripts --no-dev
   composer install --no-dev
   php artisan migrate --seed
   php artisan cache:clear
   php artisan firefly:upgrade-database
   php artisan firefly:verify
   php artisan passport:install
   php artisan cache:clear

If you're having trouble with (parts of) this step, please check out the :ref:`FAQ <faq>`

Heroku
~~~~~~
Backup the PGS database from Heroku's dashboard, then create a new application (or destroy the database on your existing one), and import the backup by following these instructions: https://devcenter.heroku.com/articles/heroku-postgres-import-export#import
