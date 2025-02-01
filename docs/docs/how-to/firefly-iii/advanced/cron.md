# Cron jobs

Firefly III has several feature that will only work when the cron job is running.  Automated budgets, recurring transactions, bill warnings and up-to-data currency exchange rate information all need a working cron job to function properly.

You should read up on [budgets](../finances/budgets.md) if you want to use cron jobs for auto-budgets. There are some interesting details to know about.

## Cron authentication

To run the cron job, you must do so on the command line, or over the web. If you try to access the cron job over the web, you have to provide an access token. This token can be found on your `/profile` page under the "Command line token" header. This will prevent others from spamming your cron job URL. An alternative to this token value is the `STATIC_CRON_TOKEN` environment variable. You can set this using the `.env` file, or by setting it through Docker. A little ahead on this page the difference is explained.

If you have multiple users that use your Firefly III installation, it is only necessary for one user to set up the cron job. The cron job will run for all users. It is OK if multiple users set up multiple runs of the cron job.


## Calling a command

If you are a bit of a Linux geek you can set up a cron job easily by running `crontab -e` on the command line. Some users may have to run `sudo crontab -u www-data -e` so the correct user will be referred to.

```   
# cron job for Firefly III
0 3 * * * /usr/bin/php /var/www/html/artisan firefly-iii:cron
```

The exact path to PHP and the path to Firefly III may be different in your case.

### Extra information

In order to trigger "future" cron jobs, you can call the cron job with `--force --date=YYYY-MM-DD`. This will make Firefly III pretend it's another day. This is useful for recurring transactions. Here is an example of a cron job that is triggered every first day of the month at 3am and pretends it's the tenth day of that month.

```
# cronjob for Firefly III that changes the target date.
0 3 1 * * /usr/bin/php /var/www/html/artisan firefly-iii:cron --force --date=$(date "+\%Y-\%m-")10
```


### Systemd timer

You can use `systemd` to run the jobs on a recurring schedule similar to cron. You will need to create two files: a unit file and a timer file.

Begin by creating a new file instructing systemd what to run, `firefly-iii-cron.service`.

```ini
[Unit]
Description=Firefly III cron
Requires=httpd.service php-fpm.service postgresql.service

[Service]
Type=oneshot
ExecStart=/usr/bin/php /var/www/html/artisan firefly-iii:cron
```

You will want to change the `Requires=` line to match the services that you are actually running. In this example we are using httpd (Apache), PHP FastCGI Process Manager (FPM), and PostgreSQL. Similarly, change the path to *your* path to the PHP binary and the path to *your* Firefly III installation.

Next create a new file for the timer specification, `firefly-iii-cron.timer`.

```ini
[Unit]
Description=Firefly III cron

[Timer]
OnCalendar=daily

[Install]
WantedBy=timers.target
```

Copy these files to `/etc/systemd/system`. You must then enable (`systemctl enable firefly-iii-cron.timer`) and start (`systemctl start firefly-iii-cron.timer`) the timer. Verify the timer is registered with `systemctl --list-timers`. You may also want to run the service once manually to ensure it runs successfully: `systemctl start firefly-iii-cron.service`. You can check the results with `journalctl -u firefly-iii-cron`.

## Request a page over the web

You can also use a tool called cURL.

```
# cron job for Firefly III using cURL
0 3 * * * curl https://demo.firefly-iii.org/api/v1/cron/[token]
```

The `[token]` value can be found on your `/profile` under the "Command line token" header. This will prevent others from spamming your cron job URL. An alternative to this token value is the `STATIC_CRON_TOKEN` environment variable. You can set this using the `.env` file, or by setting it through Docker. A little ahead on this page the difference is explained.

If you have multiple users that use your Firefly III installation, it is only necessary for one user to set up the cron job. The cron job will run for all users. It is OK if multiple users set up multiple runs of the cron job. 

But, it is not necessary to configure a run of the cron job for all users. So, it does not matter which access token you use: that of any user, or the `STATIC_CRON_TOKEN`.


## Cron jobs in Docker

The Docker image does *not* support cron jobs, but the Docker Compose file includes a cron job container. You can see it in [the online docker compose file](https://github.com/firefly-iii/docker/blob/main/docker-compose.yml).

### Static cron token

The web address for the cron job is protected by a token. You can find this token on the `/profile` page under "Command line token". This token is dynamic, and is generated separately for each user.

When you use Docker, this can be difficult to configure. So, you can set the `STATIC_CRON_TOKEN` to a string of **exactly** 32 characters. This will also be accepted as cron token.

For example, use `-e STATIC_CRON_TOKEN=klI0JEC7TkDisfFuyjbRsIqATxmH5qRW` or change your `.env` file to include a generated token.

So there are two kinds of tokens you can use:

1. The personal token from your `/profile` page
2. A self-generated 32-character token, that you have added to `.env`

Either way, the following instructions apply to Docker.

### Docker compose

This is already present in the default Docker compose file.

```
cron:
  image: alpine
  command: sh -c "echo \"0 3 * * * wget -qO- http://app:8080/api/v1/cron/[TOKEN]\" | crontab - && crond -f -L /dev/stdout"
```

The `[token]` value can be found on your `/profile` under the "Command line token" header. Earlier on this page, you can read on the static token as well.

If you have used the expanded Docker compose file or if you have added the cron container yourself, (re)start your stack. The cron job will run automatically. You can see the cron container if you do something like `docker container ls`:

![Show relevant containers](../../../images/how-to/firefly-iii/advanced/container-list.png)

You can see the logs of the cron container by running `docker logs [container-id]`. Take the exact ID from the previous command.

(TODO screenshot)

In the logs you can see the cron job once it has run.

### From outside the container (http)

If you do not use the cron container, you can call your local container over the (local) network to execute the cron job. Check out the preceding documentation, it's no different.

```
# cron job for Firefly III using cURL
0 3 * * * curl http://127.0.0.1:8080/api/v1/cron/klI0JEC7TkDisfFuyjbRsIqATxmH5qRW
```

### From outside the container (cli)

You can also talk to the container directly. The command would be something like this:

```
# cron job for Firefly III using Docker itself
0 3 * * * docker exec $(docker container ls -a -f name=firefly --format="{{.ID}}") /usr/local/bin/php /var/www/html/artisan firefly-iii:cron
```

### Run an image that calls the cron job

This is a very fancy solution. It's basically the same solution as the previously mentioned docker compose file expansion, but this time we do it manually. Run the following command:

```
docker create --name=FireflyIII-Cronjob alpine \
    sh -c "echo \"0 3 * * * wget -qO- https://demo.firefly-iii.org/api/v1/cron/[TOKEN]\" | crontab - && crond -f -L /dev/stdout"
```

The `[token]` value can be found on your `/profile` under the "Command line token" header. Earlier on this page, you can read on the static token as well.

If you do not know the Firefly III URL, you can also use the Docker IP address.

## IFTTT

You can always use [If This, Then That (IFTTT)](https://ifttt.com). This will only work if your Firefly III installation can be reached from the internet. Here's what you do.

Login to IFTTT (or register a new account) and create a new applet:

![Make a new applet](../../../images/how-to/firefly-iii/advanced/ifttt-applet.png)

You will get this screen. Select "This":

![Select "This"](../../../images/how-to/firefly-iii/advanced/ifttt-this.png)

Select "Date and Time":

![Select "Date and time"](../../../images/how-to/firefly-iii/advanced/ifttt-dt.png)

Select "Every day at":

![Select "Every day at"](../../../images/how-to/firefly-iii/advanced/ifttt-eda.png)

Set the time to 3AM:

![Time to 3AM](../../../images/how-to/firefly-iii/advanced/ifttt-3am.png)

Click on "That":

![Click on "That"](../../../images/how-to/firefly-iii/advanced/ifttt-that.png)

Use the search bar to search for "Webhooks".

![Search for "Webhooks"](../../../images/how-to/firefly-iii/advanced/ifttt-webhooks.png)

Click on "make a web request"

![Click on "make a web request"](../../../images/how-to/firefly-iii/advanced/ifttt-request.png)

Enter the URL in the following format. Keep in mind that the image shows the WRONG URL. Sorry about that.

`https://your-firefly-installation.com/api/v1/cron/[token]`

The `[token]` value can be found on your `/profile` under the "Command line token" header. This will prevent others from spamming your cron job URL. An alternative to this token value is the `STATIC_CRON_TOKEN` environment variable. You can set this using the `.env` file, or by setting it through Docker. A little ahead on this page the difference is explained.

![The result of setting up IFTTT](../../../images/how-to/firefly-iii/advanced/ifttt-result.png)

Press Finish to finish up. You can change the title of the IFTTT applet into something more descriptive, if you want to.

![Finished up](../../../images/how-to/firefly-iii/advanced/ifttt-finish.png)

You will see a final overview

![Overview](../../../images/how-to/firefly-iii/advanced/ifttt-overview.png)

Press Finish, and you're done!
