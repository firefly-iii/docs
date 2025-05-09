# FAQ for Docker-related questions

## Where is the Dockerfile?

- [Firefly III](https://dev.azure.com/Firefly-III/_git/MainImage?path=/Dockerfile)
- [Firefly III Data Importer](https://dev.azure.com/Firefly-III/_git/ImportToolImage)
- [Firefly III shared base image \(web\)](https://dev.azure.com/Firefly-III/_git/BaseImage?path=/Dockerfile.web) and [Firefly III shared base image \(cli\)](https://dev.azure.com/Firefly-III/_git/BaseImage?path=/Dockerfile.cli)

## Which Docker tags are available?

The instructions always assume `fireflyiii/core:latest`. This is the latest stable release. Other tags are:

* `fireflyiii/core:beta`. This tag contains beta releases.
* `fireflyiii/core:alpha`. This tag contains alpha releases.
* `fireflyiii/core:develop`. Always the latest develop image. Maybe unstable.

## Can I use Docker secrets?

Yes, but keep in mind that Docker (Swarm) secrets may not work because the container does not run as root. A possible solution is outlined [in this Docker Community Forums discussion](https://forums.docker.com/t/only-root-user-has-access-to-the-secret/102774) and detailed [in this GitHub discussion](https://github.com/orgs/firefly-iii/discussions/9788).

# I get "Auth driver \[remote_user_guard\] for guard \[remote_user_guard\] is not defined"

Please make sure your `APP_KEY` is exactly 32 characters long. You can generate such a key with the following command:

```bash 
head /dev/urandom | LC_ALL=C tr -dc 'A-Za-z0-9' | head -c 32 && echo
```

## For which platforms the Firefly III Docker image built?

All Docker tags are built for `linux/amd64` and `linux/arm64`. Others, like `linux/386`, `linux/arm/v6` and `linux/arm/v7` are no longer supported, so these images will *not* work on the Raspberry Pi Zero, Raspberry Pi 1 (A+B) or Raspberry Pi Compute Module.

It is still possible to run and use Firefly III on these platforms (and other devices), but because of the maintenance and security burden that comes with supporting many platforms, I've opted not to supprt them any more.

## How do I set TLS in Firefly III or the data importer?

See [this question](install.md#how-do-i-set-tls-in-firefly-iii-or-the-data-importer).

## It keeps giving me CSP errors

Content Security Policy headers are a security feature, and usually fail when you did not set `TRUSTED_PROXIES=*`.

## All links refer to `http` so forms and charts don't work

This usually happens when you did not set `TRUSTED_PROXIES=*`.

## Which other settings are available for the Docker image?

There are many environment variables that you can set in Firefly III. Just check out the [default env file](https://raw.githubusercontent.com/firefly-iii/firefly-iii/main/.env.example) that lists them all.

## Allowed memory size of xxx bytes exhausted?

Start the container with `PHP_MEMORY_LIMIT=512M` or more.

## Can I run it under a reverse proxy from a subdirectory?

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

> `ProxyAddHeaders` is off to prevent Apache sending the X-Forward headers to Firefly III, otherwise the URLs it populates in the response will include the correct website, but not the correct path.

> Unsetting the `Accept-Encoding` header ensures that the response from Firefly III is not compressed, otherwise the `Substitute` directive won't work.

> `ProxyPass` and `ProxyPassReverse` act as you would expect, so that Firefly III will appear under the "accounts" directory.

> The `AddOutputFilterByType` and `Substitute` directives alter the pages returned from Firefly III, replacing the localhost URLs with the website's URL. Replace "..." with your website address.

Thanks to [@cartbar](https://github.com/cartbar)!

## I get 'permission denied' errors on the cache folder

This is caused by a permissions issue. Run the following command:

* `docker exec -it <container> php artisan cache:clear`

Or browse to the `/flush` page in your installation.

## I see a lot of log entries from the "Firefly III Health Checker"

This is normal. The health checker is called by Docker to see if Firefly III is still up and running.

## I get "Function not implemented: AH00141: Could not initialize random number generator"

This is an error that happens on Synology boxes with an old kernel. I'm sorry, there is nothing I can do for you.

## The database password is wrong, but I'm 100% sure it's correct

If you start the database container with a `MYSQL_PASSWORD` that you change later, it won't change in the database. Destroy the volume + container and start over. This also happens when you start Firefly III for the first time, "to see if it works", and then decide to configure a more secure password.

If this happens to you there is no easy way to fix this unless you happen to have saved the random root password that the database generated when it first started, and nobody does that. 

What you must do to fix this:

- Stop and remove all Firefly III containers: database, cron, Firefly III, the Data Importer
- Remove all related volumes: upload, db and perhaps others.
- Restart the Docker Compose file or restart your container(s).

This should regenerate everything, and use the correct passwords.

## I get 'failed to open stream: Permission denied' on log files

This is caused by a permissions issue. Often, this is caused by cron jobs running under root, not `www-data`.

All your Docker commands must run as `www-data`, also in cron jobs:

* `docker exec [container] --user www-data /usr/local/bin/php /var/www/html/artisan firefly-iii:cron`

## How do I debug a cron job on Docker?

Enable [debug mode](../../how-to/general/debug.md). Open a new terminal window, and tail the logs from your Firefly III docker container:

```bash
docker logs -f CONTAINERID
```

Fire the cron job again from another terminal window, with the following command.

```bash
docker exec --user www-data CONTAINERID /usr/local/bin/php /var/www/html/artisan firefly-iii:cron --date=2021-02-01
```

In the command you see a date. Change it to be the first day of the *current* month in the format `YYYY-MM-DD`.

## Something about Authentik?

Set the environment variable as follows:

```
AUTHENTICATION_GUARD_HEADER=HTTP_X_AUTHENTIK_EMAIL
```

For more info, see [issue #7460](https://github.com/firefly-iii/firefly-iii/issues/7460) on GitHub.
