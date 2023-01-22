# Email notifications

The data importer can email you the results of the import. This is useful for cron jobs.

In your `.env.example` file or using Docker environment variables, configure FIDI as follows:

```
ENABLE_MAIL_REPORT=true

MAIL_DESTINATION=YOUR_OWN_EMAIL@example.com

MAIL_MAILER=smtp
MAIL_HOST=example.com
MAIL_PORT=25
MAIL_ENCRYPTION=tls
MAIL_USERNAME=username
MAIL_PASSWORD=secret
MAIL_FROM_ADDRESS=noreply@example.com
```

Update the settings to match your email configuration. The first thing you'll want to update is the `MAIL_MAILER`. The mail mailer indicates the system that is used for mailing. FIDI supports the following mail systems: smtp, sendmail, mailgun, mandrill, sparkpost and log.

Make sure that you *always* change the `MAIL_FROM_ADDRESS` address. If this is wrong, mail might never work!

## log

The default value will store messages in your log files instead of sending them.

## smtp

SMTP is the de-facto standard for sending email. If you want to use GMail or Outlook as mail system, set the mailer to `smtp`. Make sure you change the host, port and credentials and of course, `MAIL_ENCRYPTION` must be `null`, `ssl` or `tls`, depending on your provider.

## sendmail

Uses the built-in sendmail configuration. If you choose this, you can leave the other values alone.

## mailgun

[Mailgun](https://www.mailgun.com/) is an API that can send emails. Their service allows for 10,000 free messages each month.

To configure these, fill in the `MAILGUN_DOMAIN`, `MAILGUN_SECRET`, and `MAILGUN_ENDPOINT`  values in your `.env` file. The `MAILGUN_DOMAIN` is the domain you've verified with Mailgun, the `MAILGUN_SECRET` is your Mailgun API key, and the `MAILGUN_ENDPOINT` is the Mailgun API endpoint, `api.mailgun.net`, if you are sending email from Mailgun's U.S. infrastructure, or `api.eu.mailgun.net`, from their EU infrastructure. Make sure `MAIL_FROM` is set to an email address that is from your Mailgun's verfied domain.

## mandrill

[Mandrill](https://www.mandrill.com/) is a paid service by MailChimp. Find the `MANDRILL_SECRET` and fill it in. That should be enough to enable email over Mandrill. Note that I haven't actually tested this.

## sparkpost

[Sparkpost](https://www.sparkpost.com/) is another paid service. Find the `SPARKPOST_SECRET` to configure sending email over Sparkpost. Note that I haven't actually tested this. 
