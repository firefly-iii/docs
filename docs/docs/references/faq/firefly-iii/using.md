# Using Firefly III, questions

## Attempt to read property 'user' on null

Make sure your `APP_KEY` is exactly 32 characters. Weird errors may appear otherwise.

## Firefly III can't tell the difference between `a` and `ä`

This happens because by default MySQL can't see the difference. At the moment, I cannot fix this.

## Why is the report page showing so many years of presets? It goes back to the year 0025!

This happens when you have one or more transactions imported as "25" instead of "2025". Firefly III auto-generates the list of reports for you. This list starts with the oldest transaction, and continues until the newest one.

Look at your transactions and correct the oldest one. This will fix it.

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

## Can I sort tables on amount or name?

No, sorry. This is something I hope to fix in a new layout.

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

## I get errors about missing tables, how do I fix this?

A quick check to correct this is to run the following command:

```bash
# Using Docker?
docker exec -it CONTAINERNAME php artisan migrate

# Self managed?
php artisan migrate
```

If that does not work, or it says "nothing" to migrate" but fails to repair anything, you can try the following two command(s):

```bash
# Using Docker?
docker exec -it CONTAINERNAME php artisan correction:rollback-single-migration
docker exec -it CONTAINERNAME php artisan migrate

# Self managed?
php artisan correction:rollback-single-migration
php artisan migrate
```

This will make Firefly III forget it ever tried to execute the last database change, which means it will try again. If the migration was never successfully executed you will see an error. Otherwise, Firefly III will silently skip over the migration.

You can even do this three or four times, going back a few migrations to find the issue.

If this does not work, [please see this discussion on GitHub](https://github.com/orgs/firefly-iii/discussions/11672) for a possible solution.

## I lost my 2FA token generator, or 2FA has stopped working.

If 2FA has stopped working, but it worked before, there probably is a time difference between your 2FA client (your phone) and the server that hosts Firefly III. Fix it. Then try again.

If you still wish to disable 2FA because it doesn't work, you need to edit the database. Go to the `users` table in your favorite SQL editor, find yourself in the table content and set the value of the `mfa_secret` column to NULL for your user account.

You can also run this query:

```sql
update users set mfa_secret = NULL where email = "your@email.com"
```

That should allow you to login again without having to submit a 2FA token.

If you are using Docker, you can try the following command.

```bash
docker exec -it CONTAINERNAME mariadb -ufirefly -p firefly -e 'update users set mfa_secret = NULL where email = "your@email.com"'
```

The password you need is set in your `.env` file. There is no space between `-u` and `firefly`. If your username or database names are different, make sure you replace them.


## I want the rules to do something they currently don't support.

Just so you know, the Firefly III rule engine is supposed to be basic. That's the goal of the rule engine: to support basic stuff. Although it's _technically_ possible to make the rule engine do the most amazing stuff, I don't want to make Firefly III too complicated. So there are some things the rule engine will never be able to do, even though it's something that's not difficult to program:

* Copy values from one field to another.
* Boolean logic.
* Regular expressions.
* Math

## For some reason my balance is off by one cent?

Backup your database. Then run this command:

```text 
# docker users
docker exec -it [yourcontainer] php artisan firefly-iii:force-decimal-size

# self-managed users
cd /your/firefly-iii/directory
php artisan firefly-iii:force-decimal-size
```

## I lost my password, but resetting doesn't work

There are two reasons why resetting your password may not work.

1. You signed up using a non-existent email address
2. You did not configure correct email settings.

You can correct the second situation using [the email settings](../../../how-to/firefly-iii/advanced/notifications.md).

By configuring Firefly III to save the email message to the log files (`MAIL_MAILER=log`) *and* [by enabling debug mode](../../../how-to/general/debug.md), any password reset message will be stored to your log files. You can copy/paste the reset link from the email message in the log files.

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

You have to *confirm* the change to your email address, and if you do not have the magic link from the mail message, this will not work. You can correct the second situation using [the email settings](../../../how-to/firefly-iii/advanced/notifications.md). Then you can reset everything back to normal.

If you already broke things, use the following database queries to fix it. To learn how to execute them in Docker, please read the previous question.

After you run the first query you should be able to login again. Your user ID can be found on the `/profile` page.

```sql
update users set blocked=0, blocked_code=null where email="YOUR_NEW_MAIL"

delete from preferences where name like "email_change_%" and user_id=YOUR_USER_ID;
```

## I get "Transactions for user #x are off by 0.000000..."

This may happen when importing data.

1. Make a backup of your database. 
2. Run the following command: `php artisan firefly-iii:force-decimal-size`

For Docker, you'll have to put this in front of it: `docker exec -it [container] (command here)`. The container id can be found using `docker container ls`.

## I have a rule that does not work on imported transactions

There is one [rule action](../../firefly-iii/rule-actions.md) that may not work as expected in combination with the data importer. Any rule action that responds to tags will not respond to the "custom import tag" that you can set during your import configuration. 

If you have a [rule](../../../how-to/firefly-iii/features/rules.md) that checks if a tag has a specific value, the custom import tag will be ignored. 

This is because the "custom import tag" is not present when a transaction is created by the data importer. It is added later. Since the tag is not yet there when the rule runs, it can't see it and it will be ignored. 

This is by design, and this behavior cannot be changed.

## The Host-header does not match the host in the `APP_URL` environment variable?

This happens when you run Firefly III behind a reverse proxy, and the reverse proxy does not send the correct `Host` header. This is usually not really a problem, but some security sensitive pages care about this.

Make sure that the URL you visit Firefly III at is also set in `APP_URL`. Example:

```text
APP_URL=https://firefly.example.com
```

Restart your containers (if using Docker) and try again.

## My password is not accepted

Firefly III does not accept short passwords, where short is anything less than 16 characters. If selected, Firefly III will also not accept leaked passwords.

You can opt to allow leaked passwords to be used, but you cannot use passwords less than 16 characters long.
