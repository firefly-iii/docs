# FAQ

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I came over from YNAB, I don't get it?

YNAB and Firefly III have a totally different way of working. Please read carefully.

First of all, YNAB works the wrong way around by budgeting the money that comes in instead of the money that goes out. Weird right? They expect you to think of a budget for every coin tossed to you instead of budgeting what you expect to spend like a normal person.

YNAB expects you to put your money into budgets based on whatever money comes in. But that's not how money works.

Firefly III works the right way around. At the start of the month, you decide what you want to spend. 1000,-? 1500,-? Whatever you want! That money is divided over budgets and spent over a monthly period (or whatever period you want).

If everything is OK, your budget should at least match what you earn. So that's easy. But if everything is *better* then OK, you budget **less** than you make and you **save** the rest. You can use the rest of the money to fill piggy banks or donate to me (kidding ;)).

You can read more about this concept on the page about [the grand theory](https://docs.firefly-iii.org/about-firefly-iii/grand-theory). 

## How do I enable debug mode?

In debug mode you can see exactly what the error is. This can prove useful when trying to find the source of a bug.

When you host Firefly III yourself, open your `.env` file and find these lines:

* Line that starts with `APP_DEBUG`. Change it to `APP_DEBUG=true`
* Line that starts with `APP_LOG_LEVEL`. Change it to `APP_LOG_LEVEL=debug`

Go to the map `/firefly-iii/storage/logs`. Delete all files _except_ `.gitignore`.

This will enable debug logging and debug mode.

When you're using Docker, restart your container with the following parameters:

```
-e APP_DEBUG=true -e APP_LOG_LEVEL=debug
```

## I can't seem to get https working with Caddy

Make sure you set `TRUSTED_PROXIES` to `**`. See also [this issue](https://github.com/firefly-iii/firefly-iii/issues/1632) on GitHub.

## Auto complete is case sensitive?

This happens when the underlying database is Postgres, which is case sensitive by default. You may run into this when searching for `FLO` doesn't yield `flower`.

There's not much i can do about this. When the auto-complete searches in your database for entries, it may do so in a case-sensitive manner.

The good news is that once the search is over, the result is cached by your browser. These cached entries will be searched for in a case-**in**sensitive manner. 

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

Please send your question [to me by email](mailto:james@firefly-iii.org) or [open a ticket on GitHub](https://github.com/firefly-iii/firefly-iii/issues).
