# Configure outgoing messages

Firefly III can send notifications for specific events. Check out `/admin` and  `/preferences` for a set of notifications
you can receive.

## Slack

Firefly III can send notifications to a Slack channel. Administrators can set an "Incoming Webhook URL" under `/admin`. Users can set  an "Incoming Webhook URL" under `/preferences`.

!!! info 
    If you are the only user of your Firefly III instance, you must set (the same) webhook in both locations.

## Email

The configuration values for these are in the `.env`-file:

```
MAIL_MAILER=log
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_FROM=changeme@example.com
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

The first thing you'll want to update is the `MAIL_MAILER`. The mail mailer indicates the system that is used for mailing. Firefly III supports the following mail systems: smtp, sendmail, mailgun, mandrill, sparkpost and log.

The Firefly III administration pages (located at `/admin`) contain a test button that will send a test message.

Make sure that you *always* change the `MAIL_FROM` address. If this is wrong, mail might never work!

If you use Docker, you can always set these values using environment variables.

### log

The default value will store messages in your log files instead of sending them. `APP_LOG_LEVEL` must be set to `debug` for the messages to appear.

### smtp

SMTP is the de-facto standard for sending email. If you want to use GMail or Outlook as mail system, set the mailer to `smtp`. Make sure you change the host, port and credentials and of course, `MAIL_ENCRYPTION` must be `null`, `ssl` or `tls`, depending on your provider.

### sendmail

Uses the built-in sendmail configuration. If you choose this, you can leave the other values alone.

### mailgun

[Mailgun](https://www.mailgun.com/) is an API that can send emails. Their service allows for 10,000 free messages each month. 

To configure these, fill in the `MAILGUN_DOMAIN`, `MAILGUN_SECRET`, and `MAILGUN_ENDPOINT`  values in your `.env` file. The `MAILGUN_DOMAIN` is the domain you've verified with Mailgun, the `MAILGUN_SECRET` is your Mailgun API key, and the `MAILGUN_ENDPOINT` is the Mailgun API endpoint, `api.mailgun.net`, if you are sending email from Mailgun's U.S. infrastructure, or `api.eu.mailgun.net`, from their EU infrastructure. Make sure `MAIL_FROM` is set to an email address that is from your Mailgun's verfied domain.

### mandrill

[Mandrill](https://www.mandrill.com/) is a paid service by MailChimp. Find the `MANDRILL_SECRET` and fill it in. That should be enough to enable email over Mandrill. Note that I haven't actually tested this. 

### sparkpost

[Sparkpost](https://www.sparkpost.com/) is another paid service. Find the `SPARKPOST_SECRET` to configure sending email over Sparkpost. Note that I haven't actually tested this. 
