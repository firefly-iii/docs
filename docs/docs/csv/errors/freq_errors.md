# Frequently seen issues

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/) if your problem isn't listed here.

## cURL error 7: Failed to connect on port 443: Connection refused

Happens when the CSV importer can reach Firefly III, but is actively refused. Maybe a firewall is in the way?

## Internal Server Error

This is a very generic error. Can you get some logs and dive into the issue?

## Response header name contains invalid characters, aborting request

Happens to some Apache servers when they are not configured correctly. Set `LOG_LEVEL=emergency`.

## No matching DirectoryIndex

Make sure Apache looks for public/index.php

## Unexpected empty response from Firefly III

Depends on the logs, let me know.

## JSON Syntax Error

Depends on the logs, let me know.