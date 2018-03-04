.. _installdocker:

======
Docker
======

.. contents::
   :local:

There are several ways of installing Firefly III using Docker, which will be detailed below. If you're new to Docker or are not sure how to use Docker please thread carefully.

Straight from Docker Hub
------------------------
If you do this, you should already have a MySQL database running somewhere. For example, when you have one central MySQL database for all of your docker containers.

Create some volumes
~~~~~~~~~~~~~~~~~~~

These are used to persistently store uploaded files and exported data.

.. code-block:: bash

   docker volume create firefly_iii_export
   docker volume create firefly_iii_upload

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Start the container
~~~~~~~~~~~~~~~~~~~

Run this Docker command. Make sure that you edit the command to match your own database. You should really change the ``FF_APP_KEY`` as well. It should be a random string of *exactly* 32 characters.

.. code-block:: bash

   docker run -d \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \ 
   -p 80:80 \
   -e FF_APP_ENV=local \
   -e FF_APP_KEY=S0m3R@nd0mString0f32Ch@rsEx@ct1y \
   -e FF_DB_HOST=CHANGEME \
   -e FF_DB_NAME=CHANGEME \
   -e FF_DB_USER=CHANGEME \
   -e FF_DB_PASSWORD=CHANGEME \
   jc5x/firefly-iii:latest

That should fire up a Docker container with Firefly III inside of it. If you visit it, it will say "Be right back". Continue below.

Initialize your database
~~~~~~~~~~~~~~~~~~~~~~~~

Find out what the container ID is by running 

.. code-block:: bash

   docker container ls


Then, to get it going, initialize the database like so:

.. code-block:: bash

   docker exec -it <container> php artisan migrate --seed
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

You can then visit `http://localhost <http://localhost>`_ and register a new account.

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Upgrade
~~~~~~~

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

Docker Hub with automatic updates via docker compose
----------------------------------------------------

Download compose file
~~~~~~~~~~~~~~~~~~~~~

Download the compose file located in `the Github repository <https://github.com/firefly-iii/firefly-iii/blob/master/docker-compose.yml>`_.

Edit the file
~~~~~~~~~~~~~

Modify the following variables in the docker compose file. Keep in mind that ``MYSQL_PASSWORD`` and ``FF_DB_PASSWORD`` have to be **identical**.

Also keep in mind that ``FF_APP_KEY`` must be *exactly* 32 characters long.

 * ``MYSQL_PASSWORD``
 * ``FF_DB_PASSWORD``
 * ``FF_APP_KEY``

Start the container
~~~~~~~~~~~~~~~~~~~

Run the following command:

.. code-block:: bash
   
   docker-compose -f docker-compose.yml up -d

Initialize the database
~~~~~~~~~~~~~~~~~~~~~~~

If this is the first time you're running Firefly III then you must initialize the database. Use the following commands to do so:

.. code-block:: bash

   docker-compose exec firefly_iii_app php artisan migrate --seed
   docker-compose exec firefly_iii_app php artisan firefly:upgrade-database
   docker-compose exec firefly_iii_app php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Surf to Firefly III
~~~~~~~~~~~~~~~~~~~

You can now visit Firefly III at `http://localhost <http://localhost>`_ or `http://docker-ip:port <http://docker-ip:port>`_ if it is running on a custom port.

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Upgrade
~~~~~~~

To update the container just run ``docker-compose restart firefly-app``. You can even add this command to a chrontab. Before you visit it again, upgrade the database:

.. code-block:: bash

   docker exec -it <container> php artisan migrate
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Docker Hub with automatic updates via run/pull
----------------------------------------------

Run command
~~~~~~~~~~~

Use the following run commands as a template. Change the following variables in the command you see in the block below. Keep in mind that ``MYSQL_PASSWORD`` and ``FF_DB_PASSWORD`` have to be *identical*.

Also keep in mind that ``FF_APP_KEY`` must be *exactly* 32 characters long.

 * ``MYSQL_PASSWORD``
 * ``FF_DB_PASSWORD``
 * ``FF_APP_KEY``

Then run the commands:

.. code-block:: bash

   docker run \
   --name=firefly_iii_app \
   -e MYSQL_DATABASE=firefly_iii_db \
   -e MYSQL_USER=firefly_db \
   -e MYSQL_PASSWORD=firefly_db_secret \
   -e MYSQL_RANDOM_ROOT_PASSWORD=yes \
   -v firefly_iii_db:/var/lib/mysql \
   mysql:latest

.. code-block:: bash
   
   docker run \
   --name=firefly_iii_app \
   --link=firefly_iii_db \
   -e FF_DB_HOST=firefly_iii_db \
   -e FF_DB_NAME=firefly_db \ 
   -e FF_DB_USER=firefly_db \
   -e FF_DB_PASSWORD=firefly_db_secret \ 
   -e FF_APP_KEY=S0meRandomStr1ngOf32CharsExactly \
   -e FF_APP_ENV=local \ 
   -p 80:80 \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
   jc5x/firefly-iii

Initialize the database
~~~~~~~~~~~~~~~~~~~~~~~

If this is the first time you're running Firefly III then you must initialize the database. Use the following commands to do so:

.. code-block:: bash
   
   docker-compose exec firefly_iii_app php artisan migrate --seed
   docker-compose exec firefly_iii_app php artisan firefly:upgrade-database
   docker-compose exec firefly_iii_app php artisan firefly:verify

Surf to Firefly III
~~~~~~~~~~~~~~~~~~~

You can now visit Firefly III at ``http://localhost`` or ``http://docker-ip:port`` if it is running on a custom port.

Upgrade
~~~~~~~

To update the container just run ``docker stop firefly-app && docker pull jc5x/firefly-iii && docker start firefly-app``. You can even add this command to a chrontab. Before you visit it again, upgrade the database:

.. code-block:: bash

   docker exec -it <container> php artisan migrate
   docker exec -it <container> php artisan firefly:upgrade-database
   docker exec -it <container> php artisan firefly:verify

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Docker and reverse proxies
--------------------------

In the ``.env`` file you will find a variable called ``TRUSTED_PROXIES`` which must be set to either the reverse proxy machine or simply ``**``. Set ``APP_URL`` to the URL you wish Firefly III to be on (ie. the proxy). For example:

.. code-block:: bash

   # ...
   APP_URL=https://firefly.example.com
   TRUSTED_PROXIES=**
   # ...

On the command line, this would be:

.. code-block:: bash

   -e FF_DB_HOST=mysql
   -e FF_DB_NAME=firefly
   -e FF_DB_USER=firefly
   -e FF_DB_PASSWORD=somepw
   -e FF_APP_KEY=some-secret-string
   -e FF_APP_ENV=local
   -e APP_URL=https://firefly.example.com
   -e TRUSTED_PROXIES=**

If you wish to enable SSL as well, Firefly III (or rather Laravel) respects the HTTP header `X-Forwarded-Proto`. Add this to your vhost file:

.. code-block:: bash
   
   RequestHeader set X-Forwarded-Proto "https"

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`


