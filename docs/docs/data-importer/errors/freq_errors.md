# Frequently seen issues

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/) if your problem isn't listed here.

## How do I configure a reverse proxy in Docker?

To run FIDI behind a reverse proxy, make sure you set the `TRUSTED_PROXIES` environment variable to either `*` or the IP address of your reverse proxy.

## I can't get beyond the opening screen

Some setups have a bad time handling cookies, and without support for cookies the Data Importer doesn't know what you want to do. Make sure that

- You don't run FIDI in a sub-directory
- The cookie settings in the .env file are correct.

## I changed my configuration, but I still get the old values?

- I fixed an error, but I'm still "Unauthenticated"
- FIDI doesn't recognize my new access token

FIDI stores some settings in cookies. They persist even when you restart the Docker container or reboot.

1. Clear your cookies
2. Press "\[Reauthenticate\]"
3. Browse to `/flush` on your FIDI installation

Any of these options should work.

## My connection times out, even though the IP addresses are correct

This mainly applies to Docker. Make sure that both containers [are on the same network](https://old.reddit.com/r/FireflyIII/comments/fuur8o/csvimporter_connection_timeout/). Remember that Firefly III usually runs on port 8080.

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/) if you can't get it to work.

## 502 Bad Gateway errors

When Firefly III responds with a token, the resulting header may be too long for your reverse proxy.
These lines prevent that the proxy buffer size is too small. Put it in the `server` block of your nginx server.

```
proxy_buffer_size       128k;
proxy_buffers           4 256k;
proxy_busy_buffers_size 256k;
```

Make sure you also increase the buffer size of the server as well.

## I get page load errors because the protocols don't match

* "It only loads over http and not https!"
* "Why doesn't the data importer support HTTPS?"
* "How can I rewrite URLs to https?"

You may see something like "The page at X was loaded over https, but requested insecure script X". This happens when your reverse proxy isn't configured correctly. For nginx, make sure you do something like this:

```
location / {
	proxy_set_header X-Forwarded-Host $host;
	proxy_set_header X-Forwarded-Server $host;
	proxy_set_header X-Forwarded-Proto $scheme;
	proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	proxy_set_header Host $host;

	# pass to Docker container
	proxy_pass http://127.0.0.1:10011$uri$is_args$args;
}
```

## cURL error 7: Failed to connect on port 443: Connection refused

Happens when the Firefly III Data Importer (**FIDI**) can reach Firefly III, but is actively refused. Maybe a firewall is in the way?

## Internal Server Error

This is a very generic error. Can you get some logs and dive into the issue?

## Response header name contains invalid characters, aborting request

Happens to some Apache servers when they are not configured correctly. Set `LOG_LEVEL=emergency`.

## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.

## No matching DirectoryIndex

Make sure Apache looks for public/index.php

## Unexpected empty response from Firefly III

Depends on the logs, let me know.

## JSON Syntax Error

Depends on the logs, let me know.
