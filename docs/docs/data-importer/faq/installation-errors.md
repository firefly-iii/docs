# FAQ: Installation errors

## I changed my configuration, but I still get the old values?

- I fixed an error, but I'm still "Unauthenticated"
- The data importer doesn't recognize my new access token

The data importer stores some settings in cookies. They persist even when you restart the Docker container or reboot.

1. Clear your cookies
2. Press "\[Reauthenticate\]"
3. Browse to `/flush` on your installation

Any of these options should work.

## 502 Bad Gateway errors

When Firefly III responds with a token, the resulting header may be too long for your reverse proxy. Add this to the configuration:

```
proxy_buffer_size       128k;
proxy_buffers           4 256k;
proxy_busy_buffers_size 256k;
```

Increase the buffer size of the server as well.

## I get page load errors because the protocols don't match

* "It only loads over http and not https!"
* "Why doesn't the data importer support HTTPS?"
* "How can I rewrite URLs to https?"

You may see something like "The page at X was loaded over https, but requested insecure script X". This happens when your reverse proxy isn't configured correctly. For nginx:

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

## Internal Server Error

This is a very generic error. Can you get some logs and dive into the issue?


## Response header name contains invalid characters, aborting request

Happens to some Apache servers when they are not configured correctly. Set `LOG_LEVEL=emergency`.


## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.

## No matching DirectoryIndex

Validate Apache looks for public/index.php

## Other errors?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
