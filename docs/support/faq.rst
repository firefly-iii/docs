.. _faq:

===
FAQ
===

.. contents::
   :local:

General questions
-----------------



### Can I try it first?

[Yes, you can!](https://demo.firefly-iii.org/)

### How can I use it? I don't get it

You must install it yourself on webhosting of your choice, or on a webserver you have access to. The [installation guide](/installation-guide/) can help you.

### I have another question!

Please [open a ticket on Github](https://github.com/firefly-iii/firefly-iii).


### Can I use it on PHP 5.x?

No. Most code has been written specifically for PHP 7.1 and higher.

### It is very slow on my server

Raspberry Pi's and other microcomputers are not the most speedy devices. User [@ndandanov](https://github.com/ndandanov) has very kindly tested what works best, and found out that [installing PHP OpCache is a very good way to speed up Firefly III](https://github.com/firefly-iii/firefly-iii/issues/1095#issuecomment-356975735).

### I used a default key, can I re-key the databae?

If you accidentally used a blank key or used a default value instead of a secure one, [@ndandanov](https://github.com/ndandanov) has written a few scripts that should help [you re-encrypt the database](https://github.com/ndandanov/firefly-iii-reencrypt-database).

### Can I use SQLite, instead of MySQL?

Yes. When you are using sqlite, the following parameters are enough to get it working (the `.env` file):

```
DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USERNAME=homestead
DB_PASSWORD=
```

Even the host and port are technically not necessary. To get it to work, the following file must exist: `/storage/database/database.sqlite`.

You can create this file by simply running:

```
touch ./storage/database/database.sqlite
```

From your Firefly III directory.

Then, you can initialise your database by running:

```
php artisan migrate:refresh --seed
```

### Decimal points are missing, numbers are off, stuff like that

Ensure with `dpkg-reconfigure locales` that the language you want to use is installed, then reboot Apache or Nginx (webserver).

In order to make the demo site work (it's an Ubuntu server) I run these commands:

* `sudo apt-get install -y language-pack-en-base`
* `sudo apt-get install -y language-pack-nl-base`
* `sudo apt-get install -y language-pack-de-base`
* `sudo apt-get install -y language-pack-pt-base`

That should take care of most issues.

### 404 when trying to visit login page or other pages.

1. Run `sudo a2enmod rewrite`. Restart Apache.
2. Check if the database credentials in de `.env` file are correct.
3. Open your Apache config file. Find `<Directory /var/www>` (or similar). Change `AllowOverride None` to `AllowOverride All`. Restart Apache.

### 500 errors, logs are empty

If the logs are empty (``storage/logs``) Firefly can't write to them. See above for the commands. If the logs still remain empty, do you have a the ``vendor`` in your Firefly root? If not, run the Composer commands.

### Unexpected question mark

```
PHP Parse error:  syntax error, unexpected '?' in 
app/Support/Twig/General.php on line 103
```

Firefly III requires PHP 7.1 or higher.

### BCMath

```
PHP message: PHP Fatal error: Call to undefined function 
FireflyIII\Http\Controllers\bcscale() in
firefly-iii/app/Http/Controllers/HomeController.php on line 76
```

Solution: you haven't enabled or installed the BCMath module.

### intl

Errors such as these:

```
production.ERROR: exception 
'Symfony\Component\Debug\Exception\FatalErrorException' with message
'Call to undefined function FireflyIII\Http\Controllers\numfmt_create()'
in firefly-iii/app/Http/Controllers/Controller.php:55
```

Solution: You haven't enabled or installed the Internationalization extension.

If you are running FreeBSD, install ``pecl-intl``.

### I get weird Javascript errors

If you have installed the javascript-common package, please remove it. It overrides your Apache configuration and breaks Firefly III.

### Error: Call to undefined function ctype_alpha()

This may happen when you are on a NAS4free Debian installation or similar platform. This command may help:

```
pkg install php71-ctype
```

### Error: could not open input file artisan

Make sure you run the artisan commands in the `firefly-iii` directory.

### Error: call to undefined function numfmt_create()

Make sure you have installed and enabled the PHP intl extension.

### I have another question!

Please [open a ticket on Github](https://github.com/firefly-iii/firefly-iii).
### So what is this thing really?

Firefly III is a web application written in PHP 7.1 with a database behind it that can be the tool you use to manage your personal finances. For more information, please read the [full description]({{ 'about-general.html' | absolute_url }}).

### How can I use it?

You must install it yourself on webhosting of your choice, or on a webserver you have access to. The [installation guide]({{ 'using-installing.html' | absolute_url }}) can help you.

### Can I try it first?

[Yes, you can!](https://demo.firefly-iii.org/)

### I have found a security related issue

Please [contact me asap]({{ 'contributing-security.html' | absolute_url }}).

### I have another question!

Please [open a ticket on Github](https://github.com/firefly-iii/firefly-iii).






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

I want to use SQLite
~~~~~~~~~~~~~~~~~~~~

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
~~~~~~~~~~~~~~~~~~~~~~~~

In your ``.env`` file, change the ``DB_CONNECTION`` to ``pgsql``. Update the other ``DB_*`` settings to match your database settings. The default port for PostgreSQL is 5432.

Then you are ready to install the database in PostgreSQL:

.. code-block:: bash

   php artisan migrate --seed
   php artisan firefly:upgrade-database
   php artisan firefly:verify

I see a white page and nothing else
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer be here.

I get a 404
~~~~~~~~~~~

If you run Apache, open the ``httpd.conf`` or ``apache2.conf`` configuration file (its location differs, but it is probably in ``/etc/apache2``).

Find the line that starts with ``<Directory /var/www>``. If you see ``/``, keep looking!

You will see the text ``AllowOverride None`` right below it. Change it to ``AllowOverride All``.

Also run the following commands:

.. code-block:: bash
   
   sudo a2enmod rewrite
   sudo service apache2 restart

That should fix it!

I get "Be right back"
~~~~~~~~~~~~~~~~~~~~~

Answer be here.

When I login, I get "Page has expired"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Answer be here

I have a question that is not in the FAQ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please send your question `to me by email <mailto:thegrumpydictator@gmail.com>`_ or `open a ticket on GitHub <https://github.com/firefly-iii/firefly-iii/issues>`_.

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

Other questions
---------------

I have a question that is not in the FAQ?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Please send your question `to me by email <mailto:thegrumpydictator@gmail.com>`_ or `open a ticket on GitHub <https://github.com/firefly-iii/firefly-iii/issues>`_.