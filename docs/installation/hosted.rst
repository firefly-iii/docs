.. _installthird:

=======================
Hosted by third parties
=======================

There are several third parties where you can run a Firefly III instance. Keep in mind do that there's no such thing as a "free lunch", and these options are either paid or severly limited (is very slow or can't handle many transactions).

.. _installsandstorm:

Sandstorm.io
------------

Firefly III supports `Sandstorm.io <https://sandstorm.io/>`_. You can find Firefly III in Sandstorm.io by going to the `Sandstorm.io App Market <https://apps.sandstorm.io/app/uws252ya9mep4t77tevn85333xzsgrpgth8q4y1rhknn1hammw70>`_. Please keep in mind that you need a paid Sandstorm account to be able to run Firefly III, or you must download Sandstorm locally and run it from there.

.. _installheroku:

Heroku
------

Firefly III supports `Heroku <https://heroku.com/>`_. You can `deploy Firefly III in Heroku <https://heroku.com/deploy?template=https://github.com/firefly-iii/firefly-iii/tree/master>`_ after you register for a (free) account.

Considerations when using heroku
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Heroku uses what is called an "ephemeral file system" and it will not be able to store attachments. They will be deleted after some time. Don't use Firefly III on Heroku in combination with sensitive or rare file attachments.

The free-tier database can hold a maximum of 10,000 rows, which is about one year's worth of transactions.

Softaculous
-----------

Firefly III is featured in `Softaculous <https://softaculous.com/>`_. If your (hosting) server provides packages using Softaculous, Firefly III will be available as a package there. They even made a special `demo site <http://www.softaculous.com/softaculous/apps/others/Firefly_III>`_.

AMPPS
-----

Firefly III is featured in `AMPPS <https://www.ampps.com/>`_. You can download AMPPS for Windows, Linux and Mac and Firefly III will be available as a package there.

YunoHost
--------

Anmol Sharma has made a package for Firefly III on YunoHost. `You can install it from the YunoHost website <https://install-app.yunohost.org/?app=firefly-iii>`_.