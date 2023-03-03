# Self-hosted installation

## Introduction

In order to run the data importer you need a working LAMP, LEMP or WAMP-stack running PHP %PHPVERSION and access to the command line. Here are some Google queries to help you.

1. [Install a LAMP stack with PHP %PHPVERSION](https://www.google.com/search?q=lamp+stack+php+%PHPVERSION)
2. [Upgrade Ubuntu PHP %PHPVERSION](https://www.google.com/search?q=upgrade+ubuntu+php+%PHPVERSION)
3. [PHP %PHPVERSION raspberry pi](https://www.google.nl/search?q=PHP+%PHPVERSION+raspberry+pi)

Also remember these Gists, which may help in case you run into issues:

1. [Firefly-III CSV-Importer Ubuntu 20.04 Proxmox Installation Guide](https://gist.github.com/Engr-AllanG/e87f827092e3a6b876b912cd897428ae). Remember to change 'CSV' to 'data' where necessary.

!!! warning
    The data importer will not work properly when installed or accessed through a subdirectory on your web server. If you run the data importer from `/fidi`, `/importer` or a similar subdirectory your mileage may vary and I can't support you.

## Installation instructions

### Preparing your server

### Install extra packages

Install the following PHP modules:

* PHP BCMath Arbitrary Precision Mathematics
* PHP JSON

### Install composer

You need to [install composer](https://getcomposer.org/doc/00-intro.md) or [download composer](https://getcomposer.org/download/).

## Installing the data importer

### Main command

The assumption is that you will install the data importer in `/var/www`. Go to the installation directory.

```bash
cd /var/www && \
composer create-project firefly-iii/data-importer \
    --no-dev --prefer-dist data-importer %IMPORTERVERSION
```

If this gives an error because of access rights, you can be lazy. Use `sudo`. Then, fix the access rights:

```bash   
sudo chown -R www-data:www-data data-importer
sudo chmod -R 775 data-importer/storage
```

### Configuration

In the `data-importer` directory you will find a `.env` file. There are instructions what to do in this file. If you can't find this file, copy `.env.example` into `.env`.

## Reverse proxies

To run the data importer behind a reverse proxy, set the `TRUSTED_PROXIES` environment variable to either `*` or the IP address of your reverse proxy.

### TLS

To enable TLS in the data importer, your reverse proxy must be configured correctly. Here is some code for nginx:

```
proxy_set_header X-Forwarded-Host $host;
proxy_set_header X-Forwarded-Server $host;
proxy_set_header X-Forwarded-Proto $scheme;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
proxy_set_header Host $host;
client_max_body_size 64M;
proxy_read_timeout 300s;
```

## Accessing the data importer

You can access the data importer at [http://localhost/](http://localhost/). If this URL is taken by Firefly III already, validate your server configuration accepts both. This is called a "virtual host", and out of the scope of this installation guide.

![Opening screen of the data importer.](images/opening.png)

!!! question "Need help?"
    If something did not go as expected, please browse to **[the FAQ](../faq/index.md)** or the **[Support](../support/index.md)** pages.
