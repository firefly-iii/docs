.. _faq:

===
FAQ
===

.. contents::
   :local:

General questions
-----------------

So what is this thing really?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Firefly III is a web application written in PHP 7.2 with a database behind it that can be the tool you use to manage your personal finances. For more information, please read the :ref:`full description <introduction>`.

Can I try it first?
~~~~~~~~~~~~~~~~~~~

`Yes, you can! <https://demo.firefly-iii.org/>`_.

How can I use it? I don't get it?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

You must install it yourself on webhosting of your choice, or on a webserver you have access to. The menu on the left has various options to try.


I have found a security related issue!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please :ref:`contact me asap <security>`.


I get an error during the automatic installation and upgrade?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A few errors may pop up during the automatic installation and upgrade routine:

* ``proc_close``: The ``proc_close`` method (part of PHP) is disabled in some cases due to security concerns.
* Open base dir restriction is sometimes enabled for security purposes.
* Other error messages.

These errors are not fatal for Firefly III, but they mean you must do the upgrade yourself. 

Please checkout the :ref:`installation instructions <installself>` and :ref:`upgrade instructions <upgrading>` for your particular type of installation.

.. _faqdocker:

Docker
------

*No FAQ entries yet.*

.. _faqselfhosted:

Self-hosted (VM)
----------------

I have to access Firefly III through /public/ and it gives me a warning?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This means that the Document Root of your webserver is configured wrong. You should configure your webserver in such a way that ``/`` corresponds to ``/public``. If you do not, you run the risk of exposing your database credentials, sessions and other sensitive financial data to the world.

There are several `tutorials online <https://www.digitalocean.com/community/tutorials/how-to-move-an-apache-web-root-to-a-new-location-on-ubuntu-16-04>`_ that explain how to change your document root.

I am using nginx and want to expose Firefly III under /budget/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The following snippet might help:

.. code-block:: bash

   location ^~ /firefly-iii/ {
      deny all;
   }
   
   location ^~ /budget {
      alias /var/www/firefly-iii/public;
      try_files $uri $uri/ @budget;
      
      location ~* \.php(?:$|/) {
         include snippets/fastcgi-php.conf;
         fastcgi_param SCRIPT_FILENAME $request_filename;
         fastcgi_param modHeadersAvailable true; #Avoid sending the security headers twice
         fastcgi_pass unix:/run/php/php7.2-fpm.sock;
      }
   }
   
   location @budget {
      rewrite ^/budget/(.*)$ /budget/index.php/$1 last;
   }

I want to use SQLite?
~~~~~~~~~~~~~~~~~~~~~

There is not much to it. However, be warned. SQLite support is best-effort and it's not an efficient database driver for Firefly III. I strongly advice against it. Having said that:

Open your ``.env`` file and find the lines that begin with ``DB_``. These define your database connection. Leave ``DB_CONNECTION``. Delete the rest.

.. code-block:: bash
   
   DB_CONNECTION=sqlite

Then, in order to install the database, make sure the file ``/storage/database/database.sqlite`` exists. When it does not exist, you can use this command on Linux to create it:

.. code-block:: bash
   
   touch ./storage/database/database.sqlite

Then you are ready to install the database in SQLite:

.. code-block:: bash

   php artisan migrate --seed
   php artisan firefly-iii:upgrade-database
   php artisan firefly-iii:verify

And presto!

I want to use PostgreSQL?
~~~~~~~~~~~~~~~~~~~~~~~~~

In your ``.env`` file, change the ``DB_CONNECTION`` to ``pgsql``. Update the other ``DB_*`` settings to match your database settings. The default port for PostgreSQL is 5432.

Then you are ready to install the database in PostgreSQL:

.. code-block:: bash

   php artisan migrate --seed
   php artisan firefly-iii:upgrade-database
   php artisan firefly-iii:verify

I see a white page and nothing else?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Check out the log files in ``storage/logs`` to see what is going on. Please open a ticker if you are not sure what to do. If the logs are empty  Firefly III cannot write to them. Make sure that the web server has write access to this directory. If the logs still remain empty, do you have a ``vendor`` directory in your Firefly III root? If not, run the Composer commands.

If the pages remain empty, make sure you have enabled the rewrite module in Apache. If you're running nginx, use this as the "location" config:

.. code-block:: bash
   
   location / {
        try_files $uri $uri/ /index.php?$query_string;
        autoindex on;
        sendfile off;
   }



I get a 404?
~~~~~~~~~~~~

If you run Apache, open the ``httpd.conf`` or ``apache2.conf`` configuration file (its location differs, but it is probably in ``/etc/apache2``).

Find the line that starts with ``<Directory /var/www>``. If you see ``/``, keep looking!

You will see the text ``AllowOverride None`` right below it. Change it to ``AllowOverride All``.

Also run the following commands:

.. code-block:: bash
   
   sudo a2enmod rewrite
   sudo service apache2 restart

That should fix it!

I get "Be right back"?
~~~~~~~~~~~~~~~~~~~~~~

Unfortunately, there is no straight answer without more information. Check out the ``/storage/logs`` directory of your Firefly III installation or check the logs of your Docker instance. The true error will be reported there. If necessary, enable `debug mode <https://github.com/firefly-iii/help/wiki/Enable-debug-logging-and-debug-mode>`_ to collect more log files.

When I login, I get "Page has expired"?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer be here

Can I use it on PHP 5.x?
~~~~~~~~~~~~~~~~~~~~~~~~

No. Most code has been written specifically for PHP 7.2 and higher.

It is very slow on my server?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Raspberry Pi's and other microcomputers are not the most speedy devices. User `ndandanov <https://github.com/ndandanov>`_ has very kindly tested what works best, and found out that `installing PHP OpCache is a very good way to speed up Firefly III <https://github.com/firefly-iii/firefly-iii/issues/1095#issuecomment-356975735>`_.

I used a default key, can I re-key the database?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you accidentally used a blank key or used a default value instead of a secure one, `ndandanov <https://github.com/ndandanov>`_ has written a few scripts that should help `you re-encrypt the database <https://github.com/ndandanov/firefly-iii-reencrypt-database>`_.

Decimal points are missing, numbers are off?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Ensure with `dpkg-reconfigure locales` that the language you want to use is installed, then reboot Apache or Nginx (webserver).

I get 'Unexpected question mark'?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Firefly III requires PHP 7.2 or higher.

I get 'BCMath' errors?
~~~~~~~~~~~~~~~~~~~~~~

You see stuff like this: 

.. code-block:: bash
   
   PHP message: PHP Fatal error: Call to undefined function 
   FireflyIII\Http\Controllers\bcscale() in
   firefly-iii/app/Http/Controllers/HomeController.php on line 76


Solution: you haven't enabled or installed the BCMath module. Install it.

I get 'intl' errors?
~~~~~~~~~~~~~~~~~~~~

Errors such as these:

.. code-block:: bash
   
   production.ERROR: exception 
   'Symfony\Component\Debug\Exception\FatalErrorException' with message
   'Call to undefined function FireflyIII\Http\Controllers\numfmt_create()'
   in firefly-iii/app/Http/Controllers/Controller.php:55

Solution: You haven't enabled or installed the Internationalization extension. If you are running FreeBSD, install ``pecl-intl``.

I get 'Error: Call to undefined function ctype_alpha()'?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This may happen when you are on a NAS4free Debian installation or similar platform. This command may help:

.. code-block:: bash
   
   pkg install php71-ctype

I get 'Error: could not open input file artisan'?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure you run the artisan commands in the ``firefly-iii`` directory.

I get 'Error: call to undefined function numfmt_create()'?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure you have installed and enabled the PHP intl extension.

I run SELinux and I don't want to disable it. Now what?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Reddit user  `bousquetfrederic <https://www.reddit.com/user/bousquetfrederic>`_ shares `their solution <https://www.reddit.com/r/FireflyIII/comments/84bf0p/selinux_vs_fireflyiii/>`_:

.. code-block:: bash
   
   sudo semanage fcontext -a -t httpd_sys_rw_content_t "/path/to/firefly-iii/storage(/.*)?"
   sudo restorecon -R /path/to/firefly-iii/storage


I am trying to upgrade but I get "Foreign key constraint is incorrectly formed"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This could happen when you upgrade a Firefly III installation with MySQL. The cause is that the tables used by Firefly III are stored under the "MyISAM" engine while Firefly III assumes these are stored using the "InnoDB" engine. To fix this, use a program like Sequel Pro or phpMyAdmin and change the engine of all your Firefly III tables to "InnoDB", *before* you try to upgrade.


.. _faqthirdparty:

Third-party hosted
------------------

*No FAQ entries yet.*

.. _faqimport:

Importing data
--------------

I'm getting prompted by Salt Edge to request test access. Am I doing it wrong?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

`Salt Edge <https://www.saltedge.com/>`_ doesn't just let you import data. Once you have created an account and set up Firefly III to import data from their systems you can only import test data at first. You'll have `to contact them <https://www.saltedge.com/test_access>`_ to get your account upgraded.

This is a bit annoying, having to jump through hoops to get Salt Edge access, but it's the best I can do. Since Firefly III is open source software I cannot share my secret keys. They would be out on the street. So, each user has to get their own access to Salt Edge.

Why can't I import data from [insert bank here]?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There are several reasons why you might not be able to import data from [insert bank here], except when you use the CSV import option. 

Unfortunately, I don't have the resources to build import-code for all of the banks that are out there. Most countries have between 10 and 30 consumer banks and it's barely doable to maintain just a few. I do have the wish to support many banks, but I must do so through other services.

Most banks don't actually offer secure methods to download transactions. Mint.com and other cloud-based tools will ask for your bank username and password. I would not want to build such import routines.

I get an error about openssl_pkey_export?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out `this GitHub issue <https://github.com/firefly-iii/firefly-iii/issues/1384>`_ for tips and tricks.

Why can't I import duplicate transactions?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Firefly III can recognise two different types of duplicate transactions. It will refuse to either of them.

When you import from a certain source and a specific expense is an exact duplicate of an earlier imported expense, Firefly III will refuse to import the transaction. An exact duplicate transaction is a transaction where *every* field is equal to another transaction. For example, if you import the same CSV file twice, or when you import from Spectre but you reset your settings in the meantime. 

You can only import such transactions if you add unique data, such as another column that identifies the actual transaction (an ID or something). Make sure you map this column to the "external ID"-field.

Firefly III can also recognise duplicate transfers over different files.

If you delete the transaction, Firefly III will *still* not import the transaction. This is by design. A lot of users have banks that insert dummy lines into their CSV files. Once deleted, these lines must stay deleted, even when you import them again. So if you are testing your import, please be ready to remove lines from the database.


Other questions
---------------

I can't seem to get https working with Caddy
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Make sure you set ``TRUSTED_PROXIES`` to ``**``. See also `this issue <https://github.com/firefly-iii/firefly-iii/issues/1632>`_ on GitHub.

I keep getting redirected to the index after editing something
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If you're running Firefly III in a reverse proxy environment, please check if you have the following configuration:

.. code-block:: bash
   
   Referrer-Policy: strict-origin 


If this is the case, please change it to:

.. code-block:: bash
   
   Referrer-Policy: same-origin

That should solve it.

I have a question that is not in the FAQ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please send your question `to me by email <mailto:thegrumpydictator@gmail.com>`_ or `open a ticket on GitHub <https://github.com/firefly-iii/firefly-iii/issues>`_.
