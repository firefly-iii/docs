# Authentication

There are two ways to authenticate users. The settings to change these can be accessed through the `.env`-file in the root directory of your installation, or they can be changed through environment variables (Docker).

In the following instructions the environment variables are referred to in all caps, like `EXAMPLE_VARIABLE`.

!!! info 
    If an environment variable itself contains the* `=` *character, you must escape the entire value using quotes:

```bash
-e NORMAL_VAR=hello \
-e COMPLEX_VAR="dn=example" \
```

```   
NORMAL_VAR=hello
COMPLEX_VAR="dn=example"
```

## Built-in

By default Firefly III uses the "eloquent" driver that allows users to register and login locally. This is based on the user's email address.

Firefly III will allow one user to register itself after which registration will be blocked. The user who first registered is made administrator and can change the setting over at `/admin` to allow others to register.

## Remote user

Firefly III supports [RFC 3875](https://tools.ietf.org/html/rfc3875#section-4.1.10) which means your users can authenticate using the `REMOTE_USER` header. When you enable this method, an authentication proxy in front of Firefly III MUST be set up to care of the user's login and authentication. This lets you to use advanced login methods like hardware tokens, single sign-on, fingerprint readers and more. Once the authentication proxy says you're logged in, it will forward you to Firefly III.

A very popular tool that can do this [Authelia](https://www.authelia.com/docs/).

!!! warning
    When Firefly III is in `remote_user_guard` mode, it will do absolutely **NO** checks on the validity of the header or the contents. Firefly III will not ask for passwords, if won't check for MFA, nothing. All authentication is delegated to the authentication proxy and Firefly III just doesn't care anymore.

### Enable the remote user option

To enable this function set the `AUTHENTICATION_GUARD` environment variable to `remote_user_guard`.

### How it works

Once you're authenticated by the proxy Firefly III will receive the request with your user ID in the `REMOTE_USER` header. Firefly III will then log you in. There are no further checks.

So if you use this authentication method make sure there is NO way *around* the authentication proxy you've set up. Block all other access to the container or the server.

### The guard header was unexpectedly empty

As a troubleshooting step, try setting the `AUTHENTICATION_GUARD_HEADER` environment variable to `HTTP_REMOTE_USER`.  If this doesn't work, unset the `AUTHENTICATION_GUARD_HEADER` environment variable and make the change below.

Make sure that the header is forwarded to Firefly III. For example, add the following lines to `public/.htaccess`.

```
    RewriteCond %{HTTP:REMOTE_USER} .
    RewriteRule .* - [E=REMOTE_USER:%{HTTP:REMOTE_USER}]
```

This is less than optimal when you're using the Docker image but if the header is sent to your reverse proxy and not to Firefly III directly, it may be necessary to make such a change.

### Customizing remote user header

If you are able to customize your authentication system to send a header other than `REMOTE_USER` to Firefly III, then set the `AUTHENTICATION_GUARD_HEADER` environment variable to the PHP name of that header.  For example, if the custom header is `FFIII-User`, then set `AUTHENTICATION_GUARD_HEADER` to `HTTP_FFIII_USER`.  Another benefit of using a custom header is that you do not need to change the `public/.htaccess` file as mentioned above.

Firefly III uses email addresses as user identifiers. When you're using an external authentication guard that doesn't do this, Firefly III is incapable of emailing you. Messages sent to "Bill Gates" always fail.

If the user's email address is also available through a different HTTP header, then set the `AUTHENTICATION_GUARD_EMAIL` environment variable to the PHP name of that header.  For example, if the custom header is `FFIII-Email`, then set `AUTHENTICATION_GUARD_EMAIL` to `HTTP_FFIII_EMAIL`

## LDAP

To enable LDAP authentication first set `AUTHENTICATION_GUARD` to `ldap` and install the necessary packages. 

```
composer require directorytree/ldaprecord-laravel --no-install --no-scripts --no-plugins --no-progress
composer install --no-dev --no-scripts --no-plugins --no-progress
composer dump-autoload
```

If you are using Docker, the Docker image will do this automatically.

!!! warning
    The Docker image will try to download these packages from the internet. You can't stop this, nor can you offer a local alternative.

### Connection settings

Continue the configuration by changing the following settings:

* `LDAP_HOST`. A space separated list of LDAP controllers.
* `LDAP_PORT`, `LDAP_TIMEOUT`, `LDAP_SSL` and `LDAP_TLS` to fine tune the connection.

Change the `LDAP_BASE_DN` to indicate where the users can be located. If necessary, set `LDAP_USERNAME` and `LDAP_PASSWORD` to authenticate towards your LDAP server.

Users type the `LDAP_AUTH_FIELD` into the "User identifier"-box of Firefly III. This could be the "distinguishedname", the "uid" or something else entirely.

<!-- TODO iets over dubbele users en het objectguid en domain field, zie #4862 -->

Setting `ADLDAP_AUTH_FILTER` allows you to filter AD objects within the Base DN, if your configuration requires this. Example: (memberof=CN=Firefly-User)

### Finishing up and possible problems

Generally speaking, Firefly III will give you a "password not accepted" error when something goes wrong. I refer you to the log files of your LDAP server and those of Firefly III to see what went wrong. When in doubt, turn on debug mode and try again.

If you get "cannot be NULL"-errors or "field unavailable"-errors or something like that it means that the discover field, sync field or auth field is empty. Make sure you pick the right field.

### Example configuration

The following configuration will allow you to connect to Forum System's excellent [example LDAP server](http://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/). If you configure your Firefly III system, you can login with user "einstein" with password "password".

```
AUTHENTICATION_GUARD=ldap

#
# LDAP connection settings:
#
LDAP_HOST=ldap.forumsys.com
LDAP_PORT=389
LDAP_TIMEOUT=5
LDAP_SSL=false
LDAP_TLS=false

LDAP_BASE_DN="dc=example,dc=com"
LDAP_USERNAME="cn=read-only-admin,dc=example,dc=com"
LDAP_PASSWORD=password

LDAP_AUTH_FIELD=uid
```

### Example configuration for FreeIPA

The following is an example configuration for FreeIPA:

```
AUTHENTICATION_GUARD=ldap

# LDAP connection settings
LDAP_HOST=ipa.example.com
LDAP_PORT=389
LDAP_TIMEOUT=5
LDAP_BASE_DN="dc=example,dc=com"
LDAP_SSL=false
LDAP_TLS=false

LDAP_USERNAME="uid=read-only-admin,cn=users,cn=accounts,dc=example,dc=com"
LDAP_PASSWORD=password

LDAP_AUTH_FIELD=uid
```

### Example configuration for Active Directory

The following is an example configuration for Active Directory:

```
AUTHENTICATION_GUARD=ldap

# LDAP connection settings
LDAP_HOST=ldap.example.com
LDAP_PORT=389
LDAP_TIMEOUT=5
LDAP_BASE_DN="dc=example,dc=com"

LDAP_USERNAME="ldap"
LDAP_PASSWORD=password

LDAP_AUTH_FIELD=distinguishedname

```

## Two-step authentication

Two-step authentication, or two-factor authentication (2FA) asks you for an extra code to enter. This adds security, so even when you lose your password your account is still protected.

You can enable it in your profile.

![The button is shown in your list of accounts.](images/2fa-enable.png)

If you enable 2FA, you will also see eight backup codes that you should save just in case you lose access to your Authenticator app.

![The button is shown in your list of accounts.](images/2fa-codes.png)
   
To confirm your 2FA settings, submit a code from your Authenticator app twice. In your settings, you will see the upgraded status for 2FA:

![Options for 2FA.](images/2fa-reset.png)
