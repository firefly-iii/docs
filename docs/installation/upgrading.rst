============
Upgrade
============

Firefly III has had a long and stormy history. There are many ways of installing Firefly III, so there are many ways to upgrade.

.. contents::
   :local:

Docker
------

Upgrade straight from Docker Hub
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
To upgrade, stop your container using 

.. code-block:: bash

   docker stop <container>

Then run:

.. code-block:: bash

   docker pull jc5x/firefly-iii:latest

And then start it again by running the command under "Start the container". Before you visit it again, upgrade the database:

.. code-block:: bash

   docker exec -it <container> php artisan migrate
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`


Docker Hub via docker compose
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To update the container just run ``docker-compose restart firefly-app``. You can even add this command to a chrontab. Before you visit it again, upgrade the database:

.. code-block:: bash

   docker exec -it <container> php artisan migrate
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`


Docker Hub via run/pull
~~~~~~~~~~~~~~~~~~~~~~~

To update the container just run ``docker stop firefly-app && docker pull jc5x/firefly-iii && docker start firefly-app``. You can even add this command to a chrontab. Before you visit it again, upgrade the database:

.. code-block:: bash

   docker exec -it <container> php artisan migrate
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

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
   php artisan migrate --env=production # Answer yes when asked.
   php artisan cache:clear
   php artisan firefly:upgrade-database
   php artisan firefly:verify
   cd ..

To make sure your webserver serves you the new Firefly III:

.. code-block:: bash
   
   mv firefly-iii firefly-iii-old
   mv firefly-iii-updated firefly-iii

If you get 500 errors or other problems, you may have to set the correct access rights:

.. code-block:: bash
   
   sudo chown -R www-data:www-data firefly-iii
   sudo chmod -R 775 firefly-iii/storage

Make sure you remove any old PHP7.0 packages or at least, make sure they are not used by Apache and/or nginx. To disable PHP 7.0 in Apache, you can use:

.. code-block:: bash
   
   sudo a2dismod php7.0
   sudo a2enmod php7.1
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
   php artisan migrate --env=production --force
   php artisan cache:clear
   php artisan firefly:upgrade-database
   php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`FAQ <faq>`
