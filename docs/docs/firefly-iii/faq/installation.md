# Installing and upgrading

TODO clean me up

## I get an error during the automatic installation and upgrade?

A few errors may pop up during the automatic installation and upgrade routine:

* `proc_close`: The `proc_close` method (part of PHP) is disabled in some cases due to security concerns.
* Open base dir restriction is sometimes enabled for security purposes.
* Other error messages.

These errors are not fatal for Firefly III, but they mean you must do the upgrade yourself.

Please checkout the installation instructions and upgrade instructions for your particular type of installation.

## I get syntax errors or other problems when opening Firefly III?

You're probably not running the correct version of PHP, or your Apache / nginx server is not correctly configured for the right PHP version. At the moment, you need **PHP %PHPVERSION**.

Errors you can expect to see if you're not running **PHP %PHPVERSION**:

1. `Syntax error, unexpected )`

You can verify which version of PHP your web server is using by making a file called `phpinfo.php` and browse to it through your webserver:

```php
<?php
phpinfo();
```

That should tell you what you need to know. You can find update and upgrade instructions online for your web server.

