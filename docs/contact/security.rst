========
Security
========


Security
--------

Firefly III should be run on a TLS enabled host (``https://``) even when running locally. Please remember that this is open source software under active development, and it is in no way guaranteed to be safe or secure.

Security features
-----------------

- By default, Firefy III only supports one user registration. You can disable this in the administration;
- Most of the database is encrypted. Please note that although some parts of the database are encrypted (transaction descriptions, names, etc.) some parts are **not** (amounts, dates, some descriptions, etc). If you need more security, you must enable transparent database encryption or a comparable technology.
- Firefly III supports 2 factor authentication, check your preferences.


Security bugs?
--------------
If you find something that compromises the security of Firefly III, you
should `send me a message`_ as soon as possible. These issues will be
fixed immediately.
 
You can use my `PGP key`_ for extra security. My `GitHub commits`_ are almost always signed with this key. For more, see :ref:`contact information <contact>`.

.. _PGP key: https://keybase.io/jc5
.. _GitHub commits: https://github.com/firefly-iii/firefly-iii/commits/master
.. _send me a message: mailto:thegrumpydictator\@gmail.com