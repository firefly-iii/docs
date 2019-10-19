# Configure outgoing messages

Firefly III can send you an email for specific notable events. These includes bugs and crashes (always useful for me) but also security notifications and password resets. The configuration values for email are in the `.env`-file:

```
MAIL_DRIVER=log
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_FROM=changeme@example.com
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

The first thing you'll want to update is the `MAIL_DRIVER`. The mail driver indicates the system that is used for mailing. Firefly III supports the following mail systems: smtp, sendmail, mailgun, mandrill, sparkpost and log.

The Firefly III administration pages (located at `/admin`) contain a test button that will send a test message.

Make sure that you *always* change the `MAIL_FROM` address. If this is wrong, mail might never work!

If you use Docker, you can always set these values using environment variables.

##log

The default value will store messages in your log files instead of sending them.

## smtp

SMTP is the de-facto standard for sending email. If you want to use GMail or Outlook as mail system, set the driver to `smtp`. Make sure you change the host, port and credentials and of course, `MAIL_ENCRYPTION` must be `null`, `ssl` or `tls`, depending on your provider.

## sendmail

Uses the built-in sendmail configuration. If you choose this, you can leave the other values alone.

## mailgun

[Mailgun](https://www.mailgun.com/) is an API that can send emails. Their service allows for 10,000 free messages each month. To configure these, fill in the `MAILGUN_DOMAIN` and `MAILGUN_SECRET` values in your `.env` file. Please note that I haven't actually tested this.

## mandrill

[Mandrill](https://www.mandrill.com/) is a paid service by MailChimp. Find the `MANDRILL_SECRET` and fill it in. That should be enough to enable email over Mandrill. Please note that I haven't actually tested this. 

## sparkpost

[Sparkpost](https://www.sparkpost.com/) is another paid service. Find the `SPARKPOST_SECRET` to configure sending email over Sparkpost. Please note that I haven't actually tested this. 
