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
