# Using Docker

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## I get 'permission denied' errors on the cache folder

Some or all pages of your Firefly III show you an error that complains about not being able to write to stuff in the `/storage/cache` directory. Ultimately, this is caused by a permissions issue.

Run the following command:

* `docker exec -it <container> php artisan cache:clear`

Or browse to the `/flush` page in your installation.

## I get 'failed to open stream: Permission denied' on log files

Some or all pages of your Firefly III show you an error that complains about not being able to write to stuff in the `/storage/logs` directory. Ultimately, this is caused by a permissions issue. Often, this is caused by cron jobs running under root, not `www-data`.

Make sure all your Docker commands run as `www-data`, also in cron jobs:

* `docker exec [container] --user www-data /usr/local/bin/php /var/www/html/artisan firefly-iii:cron`

## How do I debug a cron job on Docker?

First, enable [debug mode](other.md#how-do-i-enable-debug-mode). The next step is to open a new terminal window, and tail the logs from your Firefly III docker container:

```bash
docker logs -f CONTAINERID
```

Fire the cron job again from another terminal window, with the following command. Please note that the exact Docker command may be different for your Docker container.

```bash
docker exec --user www-data CONTAINERID /usr/local/bin/php /var/www/html/artisan firefly-iii:cron --date=2021-02-01
```

In the command you see a date. Change it to be the first day of the *current* month in the format `YYYY-MM-DD`.
