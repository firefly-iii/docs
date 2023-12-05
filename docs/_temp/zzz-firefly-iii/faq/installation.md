# Installing and upgrading

## I get an error during the automatic installation and upgrade?

* `proc_close`: The `proc_close` method (part of PHP) is disabled in some cases due to security concerns.
* Open base dir restriction is sometimes enabled for security purposes.
* Other error messages.

These errors are not fatal for Firefly III, but they mean you must do the upgrade yourself.

Please check out the installation instructions and upgrade instructions for your particular type of installation.

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

If you run some kind of reverse proxy manager, probably the most important instruction in the code block is this one:

```
proxy_set_header X-Forwarded-Proto $scheme;
```

This line instructs your forward proxy to tell Firefly III to use "https" instead of "http". Whatever software you use, if you can get it to include this header, it will probably start working.
