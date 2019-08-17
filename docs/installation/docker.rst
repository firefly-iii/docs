.. _installdocker:

======
Docker
======

.. contents::
   :local:

There are several ways of installing Firefly III using Docker, which will be detailed below. If you're new to Docker or are not sure how to use Docker please thread carefully.

Firefly III requires Linux containers running in your machine.

Straight from Docker Hub
------------------------
With these commands you create one container: the container for Firefly III itself. If you do this, you should already have a MySQL or a Postgres database running somewhere. For example, when you have one central database container for all of your docker containers. Without such a database container, Firefly III will not work.

Docker containers should only do one thing, which is why you need a separate database container.

Create some volumes
~~~~~~~~~~~~~~~~~~~

These are used to persistently store uploaded files and exported data.

.. code-block:: bash

   docker volume create firefly_iii_export
   docker volume create firefly_iii_upload

Start the container
~~~~~~~~~~~~~~~~~~~

Run this Docker command to start the Firefly III container. Make sure that you edit the environment variables to match your own database. You should really change the ``APP_KEY`` as well. It should be a random string of *exactly* 32 characters.

.. code-block:: bash

   docker run -d \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \ 
   -p 80:80 \
   -e APP_ENV=local \
   -e APP_KEY=REPLACEME \
   -e DB_HOST=CHANGEME \
   -e DB_DATABASE=CHANGEME \
   -e DB_USERNAME=CHANGEME \
   -e DB_PASSWORD=CHANGEME \
   jc5x/firefly-iii:latest

An alternative to this command is the following:

.. code-block:: bash
   
   docker run -d \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
   --env-file .env \
   -p 80:80 \
   jc5x/firefly-iii:latest

In this alternative command, you see a reference to a ``.env`` file. You can download `this file <https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example>`_ from GitHub. Save it as ``.env`` and fill it in. 

Firefly III assumes that you are running MySQL. If you use Postgres, add the following environment variable to the command: ``FF_DB_CONNECTION=pgsql``, or update the ``.env``-file. To read more about the environment variables, scroll down below.

When executed this command will fire up a Docker container with Firefly III inside of it. It may take some time to start. You can track the progress of the installation using

.. code-block:: bash
   
   docker logs -f <container>

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`.

Docker Hub with automatic updates via docker compose
----------------------------------------------------

"Docker compose" is a tool that can automatically set up and link several docker containers using just one command and a YAML configuration file. This is easier than building the containers manually.

Download compose file
~~~~~~~~~~~~~~~~~~~~~

Download the compose file located in `the Github repository <https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/docker-compose.yml>`_ and place it somewhere convenient. 

Make sure you grab the raw file, and don't copy paste from your browser. The spaces in the file are very important!

Configure docker-compose 
~~~~~~~~~~~~~~~~~~~~~~~~

To configure your Docker compose installation, get `this file <https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example>`_ from the GitHub repository and store it as ``.env`` in the directory where the ``docker-compose.yml`` file is. 

You can edit the file as you see fit, because several features in Firefly III are unlocked using the ``.env`` file.

Keep in mind that ``POSTGRES_PASSWORD`` in ``docker-compose.yml`` and ``DB_PASSWORD`` in ``.env`` have to be **identical**. ``POSTGRES_PASSWORD`` is used to initialise the database, and ``DB_PASSWORD`` is used to connect to the database. So if these variables are different, it won't run.

Also keep in mind that ``APP_KEY`` must be *exactly* 32 characters long.

A **mandatory** change is that you must change ``DB_HOST`` to ``firefly_iii_db`` for this to work.

If you are using a reverse proxy, you might want to set the ``TRUSTED_PROXIES`` variables (see :ref:`Docker and Reverse Proxies<docker-and-reverse-proxies>`).

Start the container
~~~~~~~~~~~~~~~~~~~

Run the following command:

.. code-block:: bash
   
   docker-compose -f docker-compose.yml up -d

It may take a few minutes to launch.


Surf to Firefly III
~~~~~~~~~~~~~~~~~~~

You can now visit Firefly III at `http://localhost <http://localhost>`_ or `http://docker-ip:port <http://docker-ip:port>`_ if it is running on a custom port.

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

Docker Hub with automatic updates via run/pull
----------------------------------------------

This will let you manually start the two docker containers you need to run Firefly III. One is for the database, the second is for the app itself.

Create some volumes
~~~~~~~~~~~~~~~~~~~

These are used to persistently store uploaded files and exported data.

.. code-block:: bash

   docker volume create firefly_iii_export
   docker volume create firefly_iii_upload
   docker volume create firefly_iii_db

Run command
~~~~~~~~~~~

Use the following run commands as a template.

Change the following variables in the commands you see in the block below. This is not mandatory but highly recommended.

 * ``POSTGRES_PASSWORD`` must be changed to a suitable database password of your choice.
 * ``DB_PASSWORD`` must be equal to this password.
 * ``APP_KEY``

Keep in mind that ``POSTGRES_PASSWORD`` and ``DB_PASSWORD`` have to be *identical*. ``POSTGRES_PASSWORD`` is used to initialise the database, and ``DB_PASSWORD`` is used to connect to the database. So if these variables are different, it won't run.

Also keep in mind that ``APP_KEY`` must be *exactly* 32 characters long.

Additionally, Postgres uses the username as the database name.

Then run the commands you see here.

To start the database:

.. code-block:: bash

   docker run -d \
   --name=firefly_iii_db \
   -e POSTGRES_PASSWORD=firefly \
   -e POSTGRES_USER=firefly \
   -v firefly_iii_db:/var/lib/postgresql/data \
   postgres:10

Then, to start Firefly III itself:

.. code-block:: bash
   
   docker run -d \
   --name=firefly_iii_app \
   --link=firefly_iii_db \
   -e DB_HOST=firefly_iii_db \
   -e DB_CONNECTION=pgsql \
   -e DB_DATABASE=firefly \
   -e DB_USERNAME=firefly \
   -e DB_PASSWORD=firefly \
   -e APP_KEY=S0meRandomStr1ngOf32CharsExactly \
   -e APP_ENV=local \
   -p 80:80 \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
   jc5x/firefly-iii:latest

An alternative command can be used as well. Like the examples in the sections above, you can use `this file <https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example>`_ filled with environment variables instead of the long command line thing.

.. code-block:: bash
   
   docker run -d \
   --name=firefly_iii_app \
   --link=firefly_iii_db \
   --env-file .env \
   -p 80:80 \
   -v firefly_iii_export:/var/www/firefly-iii/storage/export \
   -v firefly_iii_upload:/var/www/firefly-iii/storage/upload \
   jc5x/firefly-iii:latest


Surf to Firefly III
~~~~~~~~~~~~~~~~~~~

You can now visit Firefly III at ``http://localhost`` or ``http://docker-ip:port`` if it is running on a custom port.

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`

.. _docker-and-reverse-proxies:

Docker and reverse proxies
--------------------------

In the ``.env`` file you will find a variable called ``TRUSTED_PROXIES`` which must be set to either the reverse proxy machine or simply ``**``. For example:

.. code-block:: bash

   # ...
   TRUSTED_PROXIES=**
   # ...

On the command line, this would be:

.. code-block:: bash

   -e DB_HOST=mysql \
   -e DB_DATABASE=firefly \
   -e DB_USERNAME=firefly \
   -e APP_ENV=local \
   # ....
   -e TRUSTED_PROXIES=** \

If you wish to enable SSL as well, Firefly III (or rather Laravel) respects the HTTP header `X-Forwarded-Proto`. Add this to your vhost file:

.. code-block:: bash
   
   RequestHeader set X-Forwarded-Proto "https" 
   
If you are using Nginx add the following to your location block:

.. code-block:: bash

   proxy_set_header X-Forwarded-Proto $scheme;

If you're having trouble with (parts of) this step, please check out the :ref:`Docker FAQ <faqdocker>`


Supported Docker environment variables
--------------------------------------
There are many environment variables that you can set in Firefly III. Just check out the `example ENV file <https://raw.githubusercontent.com/firefly-iii/firefly-iii/master/.env.example>`_ that lists them all.

Each value can be used on the command line, or with the ``--env-file .env \`` argument you saw before.
