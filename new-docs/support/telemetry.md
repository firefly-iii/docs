# Telemetry

Firefly III supports the collection and sending of usage telemetry. This means that Firefly III will try to collect info on how you use Firefly III, and send it to the developer of Firefly III. This is always **opt-in**, and is **disabled** by default. Firefly III will never collect or send financial information. Firefly III will also never collect or send financial meta-information, like sums or calculations. The collected data will never be made publicly accessible.

If enabled you can see and remove what Firefly III has collected in the Administration area of your Firefly III installation.

## What telemetry can be collected?

What Firefly III collects and sends exactly is different for each version.

### Version 5.2.6 and earlier

Collects no telemetry, even when it's enabled.

### Version 5.2.7

When enabled Firefly III version **5.2.7** can collect and submit the following telemetry:

- The number of users in your system, collected when a new user registers.  
  This gives me an idea how people use Firefly III.
- A user's preferred language and locale, collected when a new user finishes the "new user"-wizard or when a user changes their preferences.  
  This gives me an idea what to focus on when it comes to locales and translations.
- PHP and OS version, collected when upgrade or installation instructions are displayed on the console.  
  This can be important security and upgrade information
- The first time you use specific console command is collected.  
  Some commands are rarely used, others give me insight in how people use Firefly III.

The [cron job](https://docs.firefly-iii.org/advanced-installation/cron), if set up correctly, will submit these entries to [telemetry.firefly-iii.org](https://telemetry.firefly-iii.org) every week.

Of course, both the collection and the submission of telemetry data is disabled until you enable it. In other words, if you do nothing, Firefly III will collect nothing and send nothing.

## What's the UUID?

If you check your log files after the cron job is fired or the telemetry entries are submitted, you might see this:

```
local.INFO: Result of submission [200]: {"uuid":"1ebfb9f0-6c0b-11ea-9aac-274c8c0cddda"}  
```

The "uuid" is a unique random reference to your telemetry submission and can be used to debug the process. 