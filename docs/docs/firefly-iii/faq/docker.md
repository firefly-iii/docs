# Using Docker

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## Where is the Dockerfile?

The Dockerfile is not part of the Firefly III repository. Rather, it's kept in a [separate repository](https://dev.azure.com/Firefly-III/_git/MainImage) on Azure. The Firefly III image is built there as well.

## Can I run it under a reverse proxy from a subdirectory?

- Can I host it under a subfolder in a reverse-proxy?

Yes. For the standard Docker image, follow [these instructions on GitHub](https://github.com/firefly-iii/firefly-iii/discussions/4892)

> Installed a standalone Apache server, to act as an TLS-terminator.

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/html

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined

        ServerName ...
        SSLCertificateFile /etc/letsencrypt/live/.../fullchain.pem
        SSLCertificateKeyFile /etc/letsencrypt/live/.../privkey.pem
        Include /etc/letsencrypt/options-ssl-apache.conf

        <Location /accounts>
            ProxyAddHeaders Off
            RequestHeader unset Accept-Encoding
            ProxyPass http://localhost:8087
            ProxyPassReverse http://localhost:8087
            AddOutputFilterByType SUBSTITUTE text/html
            Substitute "s|http://localhost:8087/|https://.../accounts/|i"
        </Location>
</VirtualHost>
</IfModule>
```

> `ProxyAddHeaders` is off to prevent Apache sending the X-Forward headers to Firefly III, otherwise the URL's it populates in the response will include the correct website, but not the correct path.

> Unsetting the `Accept-Encoding` header ensures that the response from Firefly III is not compressed, otherwise the `Substitute` directive won't work.

> `ProxyPass` and `ProxyPassReverse` act as you would expect, so that Firefly III will appear under the "accounts" directory.

> The `AddOutputFilterByType` and `Substitute` directives alter the pages returned from Firefly III, replacing the localhost URL's with the website's URL. Replace "..." with your website address.

Thanks to [@cartbar](https://github.com/cartbar)!

## I get 'permission denied' errors on the cache folder

Some or all pages of your Firefly III show you an error that complains about not being able to write to stuff in the `/storage/cache` directory. Ultimately, this is caused by a permissions issue.

Run the following command:

* `docker exec -it <container> php artisan cache:clear`

Or browse to the `/flush` page in your installation.

## The database password is wrong, but I'm 100% sure it's correct

If you start the database container with a `MYSQL_PASSWORD` that you change later, it won't actually change in the database. So destroy the volume + container and start over.

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
