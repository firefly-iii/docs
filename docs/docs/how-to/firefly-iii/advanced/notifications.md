# How to set up notifications and emails

Firefly III can send notifications for specific events. Check out `/admin` and  `/preferences` for a set of notifications
you can receive.

## Email

The Firefly III administration pages (located at `/admin`) contain a test button that will send a test email message.

The configuration values for email are in the `.env`-file.

```
MAIL_MAILER=log
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_FROM=changeme@example.com
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

*Always* change the `MAIL_FROM` address. If this is wrong, mail might never work.

The `MAIL_MAILER`-setting indicates the system that is used for mailing. Firefly III supports the following mail systems: smtp, sendmail, mailgun, mandrill, sparkpost and log. Here is an explanation about each MAIL_MAILER option:

### `log`

The default value will store messages in your log files instead of sending them. `APP_LOG_LEVEL` must be set to `debug` for the messages to appear.

### `smtp`

SMTP is the de-facto standard for sending email. If you want to use GMail or Outlook as mail system, set the mailer to `smtp`. Change the host, port and credentials. `MAIL_ENCRYPTION` must be `null`, `ssl` or `tls`, depending on your provider.

### `sendmail`

Uses the built-in sendmail configuration. If you choose this, you can leave the other values alone.

### `mailgun`

[Mailgun](https://www.mailgun.com/) is an API that can send emails. Their 30-day free trial service allows for 5,000 free messages.

To configure these, fill in the `MAILGUN_DOMAIN`, `MAILGUN_SECRET`, and `MAILGUN_ENDPOINT`  values in your `.env` file. The `MAILGUN_DOMAIN` is the domain you've verified with Mailgun, the `MAILGUN_SECRET` is your Mailgun API key, and the `MAILGUN_ENDPOINT` is the Mailgun API endpoint, `api.mailgun.net`, if you are sending email from Mailgun's U.S. infrastructure, or `api.eu.mailgun.net`, from their EU infrastructure. `MAIL_FROM` must be set to an email address that is from your Mailgun's verified domain.

### `sparkpost`

[Sparkpost](https://www.sparkpost.com/) is another paid service. Find the `SPARKPOST_SECRET` to configure sending email over Sparkpost. Note that I haven't actually tested this. 

## Slack

Firefly III can also send notifications to a Slack channel. Administrators can set an "Incoming Webhook URL" under `/admin`. Users can set  an "Incoming Webhook URL" under `/preferences`.

To create a Slack Webhook URL, you have to go "Setting and Administration" of the workspace in which you want to receive notifications. Click "Configure Apps", then "Build" in the top-right corner. Click "Create New App", and select "From Scratch". Give the app a nice name and select a workspace.

Finally, click "Incoming Webhooks" and activate the feature. At the bottom of the page you can then create a new webhook. Select the channel in which you want the app (and by extension, Firefly III) to post. The URL you receive is the URL required for Firefly III. It starts with `https://hooks.slack.com/services`.

!!! info
    If you are the only user of your Firefly III instance, you must set (the same) Webhook URL in both locations (administration AND preferences).

## Discord and Mattermost

Firefly III can also send the notifications to a Discord or Mattermost channel. Channel admins can create a webhook in a Discord-channel, which you can use wherever you see a Slack URL. Similarly, Mattermost users can create a webhook in a Mattermost-channel.

When you use the Discord/Mattermost webhook URL, you must add `/slack` to the end of the URL. So if your Discord webhook URL is `https://discord.com/api/webhooks/123456789/ABCdefgh`, you must use `https://discord.com/api/webhooks/123456789/ABCdefgh/slack` in Firefly III. The same applies to Mattermost URLs.

!!! info
    If you are the only user of your Firefly III instance, you must set (the same) Webhook URL in both locations (administration AND preferences).

## Webhooks and ... webhooks?

Firefly III also supports [webhooks](../features/webhooks.md) which will make Firefly III send out transaction events to the outside world. This is not the same as the Discord/Slack URL you've seen previously that also mention "hooks" and "webhooks". It's all called webhooks. 

To make it a little easier to understand, here are some pointers:

- When you are on the `/preferences`- or `/admin`-page you must use the Discord or Slack URL
- When you are any `/webhooks/*`-page, DO NOT use the Discord or Slack URL
