# FAQ

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I can't seem to get https working with Caddy

Make sure you set `TRUSTED_PROXIES` to `**`. See also [this issue](https://github.com/firefly-iii/firefly-iii/issues/1632) on GitHub.

## I keep getting redirected to the index after editing something

If you're running Firefly III in a reverse proxy environment, please check if you have the following configuration:

```
Referrer-Policy: strict-origin 
```

If this is the case, please change it to:

```   
Referrer-Policy: same-origin
```

That should solve it.

## I'm running Internet Explorer or Edge and nothing works?

Some (older) browsers may not work with Firefly III. I have no plans to add support.

* Internet Explorer 9 or lower on Windows 7: will not work.
* Internet Explorer 10 on Windows 7: works, but modern TLS configurations may break your site (just try [the demo site](https://demo.firefly-iii.org/)).
* Internet Explorer 11 on Windows 7: works.
* Internet Explorer 11 on Windows 8.1: not tested, but should work.
* Microsoft Edge on Windows 10: will not work due to Content Security Policy header limitations.

Firefly III features very strict Content Security Policy headers that prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. However, these headers are pretty new and fancy and Edge and Internet Explorer aren't. So you might run into issues using those browsers. 

In order to make these browsers work, you *may* change the following environment variable. Edit your `.env` file, or launch your Docker instance with another `-e` added:

`DISABLE_CSP_HEADER=true`

You do this entirely at your own risk, of course.

## I lost my 2FA token generator, or 2FA has stopped working.

If 2FA has stopped working, but it worked before, there probably is a time difference between your 2FA client (your phone) and the server that hosts Firefly III. Fix it. Then try again.

If you still wish to disable 2FA because it doesn't work, you need to edit the database. Go to the `users` table in your favorite SQL editor, find yourself in the table content and set the value of the `mfa_secret` column to NULL for your user account.

You can also run this query:

```sql
update users set mfa_token = NULL where email = "your@email.com"
``` 

That should allow you to login again without having to submit a 2FA token.

## I have a question that is not in the FAQ?

Please send your question [to me by email](mailto:thegrumpydictator@gmail.com) or [open a ticket on GitHub](https://github.com/firefly-iii/firefly-iii/issues).
