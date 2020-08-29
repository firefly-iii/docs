# Telemetry

Firefly III supports the optional collection and sending of usage telemetry. This means that Firefly III could try to collect info on how you use Firefly III, and send it to the developer of Firefly III. This is always **opt-in**, and is **disabled** by default. Firefly III will never collect or send financial information. Firefly III will also never collect or send financial meta-information, like sums or calculations. The collected data will never be made publicly accessible.

If enabled you can see and remove what Firefly III has collected in the Administration area of your Firefly III installation.

## How do I enable telemetry?

If you want Firefly III to collect and submit telemetry data, you must set the `SEND_TELEMETRY` environment variable to `true`. Telemetry will then be collected for all users. Make sure you notify other users that this is happening.

You can change the environment variable by editing your `.env` file. If the variable is not in the file, just add it like so: `SEND_TELEMETRY=true`.

If you're using Docker, you can do this by adding the telemetry environment variable to your docker run command: `-e SEND_TELEMETRY=true`. You could also expand your Docker Compose file, if it contains environment variables.

## How do I disable telemetry?

Telemetry collection and submission is disabled by default. If you have enabled it before and want to disable it now, use `SEND_TELEMETRY=false` or remove the variable entirely.

## Can I see the status of the telemetry collection in Firefly III?

There is a page under Administration, Telemetry (`/admin/telemetry`) that shows you the status of the telemetry collection.

## Can I see the collected telemetry and influence it?

If telemetry is collected, there is a page under Administration, Telemetry (`/admin/telemetry/view`) that shows you how many records have been collected. You can view all records, but they are read-only. There are several options to manage the telemetry data.

* You can submit the data, not having to wait on the cron job.
* You can delete all records.
* You can delete all submitted records.

## What are types of data that can be collected?

* "Feature flag". This tells me the value of a specific "flag". A flag could be the number of users, the PHP version, etc. See the overview below for more information.
* "Recurring". Recurring telemetry values store a specific value ever _x_ days. This type of telemetry is currently not used however.

## What telemetry can be collected?

What Firefly III collects and sends exactly is different for each version.

### Version 5.2.6 and earlier

Collects no telemetry, even when it's enabled.

### Version 5.2.7

See version 5.3.0.

### Version 5.2.8

See version 5.3.0.

### Version 5.3.0

Also applies to versions: 5.2.7, 5.2.8, 5.3.1, 5.3.2 and 5.3.3.

When enabled Firefly III version **5.3.0** can collect and submit the following telemetry. This is optional and disabled by default (see the top of this page):

* The number of users in your system, collected when a new user registers.  

  This gives me an idea how people use Firefly III.

* A user's preferred language and locale, collected when a new user finishes the "new user"-wizard or when a user changes their preferences.  

  This gives me an idea what to focus on when it comes to locales and translations.

* PHP and OS version, and the type of database, collected when upgrade or installation instructions are displayed on the console.  

  This can be important security and upgrade information

* The first time you use specific console command is collected.  

  Some commands are rarely used, others give me insight in how people use Firefly III.

### Version 5.4.0

When enabled Firefly III version **5.4.0** can collect and submit the following telemetry, on top of what is collected in previous versions:

* If you allow Firefly III to check for updates and which channel.
* Which search operators you use. Firefly III collects the operators only, not the actual search query.

---


The [cron job](https://docs.firefly-iii.org/advanced-installation/cron), if set up correctly, will submit these entries to [telemetry.firefly-iii.org](https://telemetry.firefly-iii.org) every week. This will only happen when telemetry is enabled.

Both the collection and the submission of telemetry data is disabled until you enable it. In other words, if you do nothing, Firefly III will collect nothing and send nothing.

## What's the UUID?

If you check your log files after the cron job is fired or the telemetry entries are submitted, you might see this:

```text
local.INFO: Result of submission [200]: {"uuid":"1ebfb9f0-6c0b-11ea-9aac-274c8c0cddda"}
```

The "uuid" is a unique random reference to your telemetry submission and can be used to debug the process.

