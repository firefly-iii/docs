# Telemetry

Firefly III supports the collection and sending of usage telemetry. This means that Firefly III will try to collect info on how you use Firefly III, and send it to the developer of Firefly III. This is always **opt-in**, and is **disabled** by default. Firefly III will never collect or send financial information. Firefly III will also never collect or send financial meta-information, like sums or calculations. The collected data will never be made publicly accessible.

If enabled you can see and remove what Firefly III has collected in the Administration area of your Firefly III installation.

## What telemetry is collected?

What Firefly III collects and sends exactly is different for each version.

### Version 5.2.6 and earlier

Collects no telemetry, even when it's enabled.

## What's the UUID?

If you check your log files after the cron job is fired or the telemetry entries are submitted, you might see this:

```
local.INFO: Result of submission [200]: {"uuid":"1ebfb9f0-6c0b-11ea-9aac-274c8c0cddda"}  
```

The "uuid" is a unique random reference to your telemetry submission and can be used to debug the process. 