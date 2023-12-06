## I get "Function not implemented: AH00141: Could not initialize random number generator"

This is an error that happens on Synology boxes with an old kernel. I'm sorry, there is nothing I can do for you.

## How do I configure a reverse proxy in Docker?

To run the data importer behind a reverse proxy, make sure you set the `TRUSTED_PROXIES` environment variable to either `*` or the IP address of your reverse proxy.

## I can't get beyond the opening screen

Some setups have a bad time handling cookies, and without support for cookies the Data Importer doesn't know what you want to do. Make sure that

- You don't run the data importer in a subdirectory
- The cookie settings in the .env file are correct.
  =======

## 502 Bad Gateway errors

When Firefly III responds with a token, the resulting header may be too long for your reverse proxy.
These lines prevent that the proxy buffer size is too small. Put it in the `server` block of your nginx server.

```
server {
    ...
    proxy_buffer_size       128k;
    proxy_buffers           4 256k;
    proxy_busy_buffers_size 256k;
}
```

If that doesn't help, try:

```
server {
    ...
    fastcgi_buffers  16 16k;
    fastcgi_buffer_size  32k;
    
}
```

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

## Response header name contains invalid characters, aborting request

Happens to some Apache servers when they are not configured correctly. Set `LOG_LEVEL=emergency`.


## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.
