# FAQ: connection errors

## 401 Unauthorized

The Personal Access Token you've configured doesn't give access to this instance of Firefly III. Double check that your Personal Access Token is correct. Make sure that it starts with "ey". No spaces at the end. No newlines.

## Could not resolve host

The data importer can't find the host where your Firefly III instance is running. This is often the problem when using Docker and the devices can't reach each other.

## Your Firefly III version X is below the minimum required version Y

The error says it all, really.

## I can't get beyond the opening screen

Some setups have a bad time handling cookies, and without support for cookies the Data Importer doesn't know what you want to do. Make sure that

- You're not running the data importer in a subdirectory
- The cookie settings in the .env file are correct.

## My connection times out, even though the IP addresses are correct

This mainly applies to Docker. Make sure that both containers [are on the same network](https://old.reddit.com/r/FireflyIII/comments/fuur8o/csvimporter_connection_timeout/). Remember that Firefly III usually runs on port 8080.

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/) if you can't get it to work.

## cURL error 7: Failed to connect on port 443: Connection refused

Happens when the Firefly III Data Importer can reach Firefly III, but is actively refused. Maybe a firewall is in the way?

## Unexpected empty response from Firefly III

Depends on the logs, let me know.

## JSON Syntax Error

Depends on the logs, let me know.

### How do I handle custom SSL certificates?

If you run your own CA, check out [the options](https://github.com/firefly-iii/data-importer/blob/main/.env.example#L51) in the `.env.example` file.

## Other errors?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
