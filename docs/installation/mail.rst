.. _configuremail:

===========================
Configure outgoing messages
===========================

Firefly III can send you an email for specific notable events. These includes bugs and crashes (always useful for me) but also security notifications and password resets. The configuration values for email are in the ``.env``-file:

.. code-block:: bash

   MAIL_DRIVER=log
   MAIL_HOST=smtp.mailtrap.io
   MAIL_PORT=2525
   MAIL_FROM=changeme@example.com
   MAIL_USERNAME=null
   MAIL_PASSWORD=null
   MAIL_ENCRYPTION=null

The first thing you'll want to update is the ``MAIL_DRIVER``. The mail driver indicates the system that is used for mailing. Firefly III supports the following mail systems: smtp, sendmail, mailgun, mandrill, ses, sparkpost, log, array.

The Firefly III administration pages (located at ``/admin``) contain a test button that will send a test message.

Make sure that you *always* change the ``MAIL_FROM`` address. If this is wrong, mail might never work!

smtp
----

SMTP is the de-facto standard for sending email. If you want to use GMail or Outlook as mail system, set the driver to ``stmp``. Make sure you change the host, port and credentials and of course, ``MAIL_ENCRYPTION`` must be ``null``, ``ssl`` or ``tls``, depending on your provider.

sendmail
--------

Uses the built-in sendmail configuration. If you choose this, you can leave the other values alone.

mailgun
-------

Mailgun is an API that can send email. Their service allows for 10,000 free messages each month. To configure these, fill in the ``MAILGUN_DOMAIN`` and ``MAILGUN_SECRET`` values in your ``.env`` file.

mandrill

ses


sparkpost

log


array