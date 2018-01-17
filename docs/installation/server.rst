Self-hosted server
------------------
This guide focuses on the installation of `Firefly III <https://github.com/firefly-iii/firefly-iii>`_ only. The guide is just three steps! Check out the FAQ when things are not working.

There are also instructions for Docker and third party hosters such as Sandstorm.

Prerequisites
~~~~~~~~~~~~~
You need a working LAMP, LEMP or WAMP stack. If you don't have one, search the web to find out how to get one. Make sure you're running PHP 7.1. There are many tutorials that will help you install one. For example:

1. `A guide to install a LAMP stack <https://www.digitalocean.com/community/tutorials/how-to-install-linux-apache-mysql-php-lamp-stack-on-ubuntu>`_
2. `A guide to update to PHP 7.1 <https://www.digitalocean.com/community/questions/how-do-i-update-my-lamp-stack-to-php7>`_
3. `A guide to install PHP7.1 on a Raspberry Pi <https://raspberrypi.stackexchange.com/questions/70388/how-to-install-php-7-1>`_

If you wish to use another database such as SQLite or Postgres, please check out the FAQ.

Preparing your server
~~~~~~~~~~~~~~~~~~~~~

**Extra packages**

Install the following PHP modules:

* PHP BCMath Arbitrary Precision Mathematics
* PHP Internationalization extension
* PHP MBstring
* PHP Curl
* PHP Zip
* PHP GD

You can search the web to find out how to install these modules. Some may be installed already depending on your system.

**Installing composer**

If you have sudo rights (try ``sudo ls``) you can install composer using the following command:

.. code-block:: bash

   curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer

Verify the installation of composer using the following command.

.. code-block:: bash

   composer -v

If you have no sudo rights, you can simply `download composer <https://getcomposer.org/download/>`_ with the instructions under the header "manual download". Use ``php composer.phar`` instead of ``composer``.

This concludes the server preparations!

Installing Firefly III
~~~~~~~~~~~~~~~~~~~~~~

**Main command**

Browse to ``/var/www`` which is probably the directory where your web server is configured to find its files.

Enter the following command. 

.. code-block:: bash

   composer create-project grumpydictator/firefly-iii --no-dev --prefer-dist firefly-iii <latest>


You should replace ``<latest>`` with the latest version, which you can find on the `Github release list <https://github.com/firefly-iii/firefly-iii/releases>`_.

If this gives an error because of access rights, prepend the command with ``sudo``. We'll fix the access rights later.

**Configuration**

In the ``firefly-iii`` directory you will find a `.env` file. Open this file using your favorite editor. There are instructions what to do in this file.

**Initialize the database**

This step is very important, because Firefly III needs a database to work with and it will tell you whether or not your configuration is correct. Run the following command in the Firefly III directory.

.. code-block:: bash
   
   php artisan migrate:refresh --seed

Now you should be able to visit `http://localhost/firefly-iii/ <http://localhost/firefly-iii/public>`_ and see Firefly III.

Accessing Firefly III
~~~~~~~~~~~~~~~~~~~~~

**Browsing to site**

Browsing to the site should be easy. You should see a login screen.

**Registering an account**

You cannot login yet. Click on "Register a new account" and fill in the form.

**Your first accounts**

You will be logged in automatically. Follow the instructions and you are done!

----

Any questions or things not working? Check out the FAQ.