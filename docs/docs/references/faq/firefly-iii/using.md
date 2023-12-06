## Auto complete is case-sensitive?

This happens when the underlying database is Postgres, which is case-sensitive by default. You may run into this when searching for `FLO` doesn't yield `flower`.

There's not much I can do about this. When the auto-complete searches in your database for entries, it may do so in a case-sensitive manner.

The good news is that once the search is over, the result is cached by your browser. These cached entries will be searched for in a case-**in**sensitive manner.

## Firefly III can't tell the difference between `a` and `ä`

This happens because by default MySQL can't see the difference. At the moment, I cannot fix this.


## I keep getting redirected to the index after editing something

If you're running Firefly III in a reverse proxy environment, please check if you have the following configuration:

```text
Referrer-Policy: strict-origin
```

If this is the case, please change it to:

```text
Referrer-Policy: same-origin
```

That should solve it.

## Why is the minimum password length 16 characters?

The minimum password length can't be changed. [NIST](https://pages.nist.gov/800-63-3/sp800-63b.html) recommendations prevail.

## I'm running Internet Explorer or Edge and nothing works?

Some (older) browsers may not work with Firefly III. I have no plans to add support.

* Internet Explorer 9 or lower on Windows 7: will not work.
* Internet Explorer 10 on Windows 7: works, but modern TLS configurations may break your site (just try [the demo site](https://demo.firefly-iii.org/?mtm_campaign=documentation&mtm_kwd=demo-other)).
* Internet Explorer 11 on Windows 7: works.
* Internet Explorer 11 on Windows 8.1: not tested, but should work.
* Microsoft Edge on Windows 10: will not work due to Content Security Policy header limitations.

Firefly III features very strict Content Security Policy headers that prevent [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks. However, these headers are pretty new and fancy and Edge and Internet Explorer aren't. So you might run into issues using those browsers.

In order to make these browsers work, you _may_ change the following environment variable. Edit your `.env` file, or launch your Docker instance with another `-e` added:

`DISABLE_CSP_HEADER=true`

You do this entirely at your own risk, of course.


## I lost my 2FA token generator, or 2FA has stopped working.

If 2FA has stopped working, but it worked before, there probably is a time difference between your 2FA client (your phone) and the server that hosts Firefly III. Fix it. Then try again.

If you still wish to disable 2FA because it doesn't work, you need to edit the database. Go to the `users` table in your favorite SQL editor, find yourself in the table content and set the value of the `mfa_secret` column to NULL for your user account.

You can also run this query:

```sql
update users set mfa_secret = NULL where email = "your@email.com"
```

That should allow you to login again without having to submit a 2FA token.


## I want the rules to do something they currently don't support.

Just so you know, the Firefly III rule engine is supposed to be basic. That's the goal of the rule engine: to support basic stuff. Although it's _technically_ possible to make the rule engine do the most amazing stuff, I don't want to make Firefly III too complicated. So there are some things the rule engine will never be able to do, even though it's something that's not difficult to program:

* Copy values from one field to another.
* Boolean logic.
* Regular expressions.
* Math

## I lost my password, but resetting doesn't work

There are two reasons why resetting your password may not work.

1. You signed up using a non-existent email address
2. You did not configure correct email settings.

You can correct the second situation using [the email settings](../advanced-installation/email.md).

By configuring Firefly III to save the email message to the log files (`MAIL_MAILER=log`) *and* [by enabling debug mode](other.md#how-do-i-enable-debug-mode), any password reset message will be stored to your log files. You can copy/paste the reset link from the email message in the log files.

If the reset link can no longer be sent, you will have to enter your database to delete all entries from the `password_resets`-table.

An example of how to do this:

```bash
docker exec -i CONTAINER sh -c 'exec echo "DELETE FROM password_resets;" | mariadb -u"DB_USERNAME" -p"DB_PASSWORD"'
```

```sql
DELETE FROM password_resets;

```

## I changed my email address, and now I can't log in?

There are two reasons why changing your email address may not work.

1. You signed up using a non-existent email address
2. You did not configure correct email settings.

You have to *confirm* the change to your email address, and if you do not have the magic link from the mail message, this will not work. You can correct the second situation using [the email settings](../advanced-installation/email.md). Then you can reset everything back to normal.

If you already broke things, use the following database queries to fix it. To learn how to execute them in Docker, please read the previous question.

After you run the first query you should be able to login again. Your user ID can be found on the `/profile` page.

```sql
update users set blocked=0, blocked_code=null where email="YOUR_NEW_MAIL"

delete from preferences where name like "email_change_%" and user_id=YOUR_USER_ID;
```
