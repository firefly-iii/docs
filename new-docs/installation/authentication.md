# Authentication

As of Firefly III 4.7.8 there are two ways to authenticate users. The settings to change these can be accessed through the `.env`-file in the root directory of your installation, or they can be changed through environment variables (Docker).

*If an environment variable itself contains the* `=` *character, you must escape the entire value using quotes:*

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

Firefly III will allow just one user to register itself after which registration will be blocked. The user who first registered is made administrator and can change the setting over at `/admin` to allow others to register.

## Remote user

Firefly III supports [RFC 3875](https://tools.ietf.org/html/rfc3875#section-4.1.10) which means your users can authenticate using the `REMOTE_USER`. When you enable this method, an authentication proxy in front of Firefly III takes care of the user login and authentication. This allows you to use advanced login methods like hardware tokens, single sign-on, fingerprint readers and more. Once the authentication proxy says you're logged in, it will forward you to Firefly III.

A very popular tool that can do this [Authelia](https://www.authelia.com/docs/).

### Enable the remote user option

To enable this function set the `AUTHENTICATION_GUARD` environment variable to `remote_user_guard`.

### How it works

Once you're authenticated by the proxy Firefly III will receive the request with your user ID in the `REMOTE_USER` header. Firefly III will then log you in. There are no further checks.

When Firefly III is in `remote_user_guard` mode, it will do absolutely **NO** checks on the validity of the header or the contents. Firefly III will not ask for passwords, if won't check for MFA, nothing. All authentication is delegated to the authentication proxy and Firefly III just doesn't care anymore.

So if you use this authentication method make sure there is NO way *around* the authentication proxy you've set up. Block all other access to the container or the server.

## LDAP

In the following instructions I will refer to environment variables in all caps, like `EXAMPLE_VARIABLE`.

To enable LDAP authentication first set `LOGIN_PROVIDER` to `ldap`.

### Connection configuration

1. Change `ADLDAP_CONNECTION_SCHEME` to say either `OpenLDAP`, `FreeIPA`, or `ActiveDirectory`, depending on your server.
2. Set `ADLDAP_AUTO_CONNECT` to `true` or `false`. I highly recommend to leave this at `true`.

### Connection settings

Continue the configuration by changing the following settings:

* `ADLDAP_CONTROLLERS`. A space separated list of LDAP controllers.
* `ADLDAP_PORT`, `ADLDAP_TIMEOUT`, `ADLDAP_USE_SSL` and `ADLDAP_USE_TLS` to fine tune the connection. Use `ADLDAP_FOLLOW_REFFERALS` if you have multiple LDAP servers that may redirect requests.

Change the `ADLDAP_BASEDN` to indicate where the users can be located. If necessary, set `ADLDAP_ADMIN_USERNAME` and `ADLDAP_ADMIN_PASSWORD` to authenticate towards your LDAP server.

Users type the `ADLDAP_DISCOVER_FIELD` into the "User identifier"-box of Firefly III. This could be the distinguishedname, the uid or something else entirely. Firefly III will then use the `ADLDAP_AUTH_FIELD` to bind users to itself. The `ADLDAP_SYNC_FIELD` finally, will be stored in the user table of Firefly III. My strong suggestion is to keep all of these the same.

If necessary, you can set the following prefixes and suffixes so that the user's LDAP accounts are properly formatted for use with your LDAP server:

* `ADLDAP_ACCOUNT_PREFIX`
* `ADLDAP_ACCOUNT_SUFFIX`

The administrator account should have these already set in your configuration.

### Authentication settings

When you're feeling especially daring, you can change the following fields to fine tune authentication with Firefly III.

If you set `ADLDAP_PASSWORD_SYNC` to true, Firefly III will sync the user's password to its local user table. This allows users to login to Firefly III when the LDAP server is unavailable. This requires `ADLDAP_LOGIN_FALLBACK` to be `true` as well. 

### Finishing up and possible problems

Generally speaking, Firefly III will give you a "password not accepted" error when something goes wrong. I refer you to the log files of your LDAP server and those of Firefly III to see what went wrong. When in doubt, turn on debug mode and try again.

If you get "cannot be NULL"-errors or "field unavailable"-errors or something like that it means that the discover field, sync field or auth field is empty. Make sure you pick the right field.

### Example configuration

The following configuration will allow you to connect to Forum System's excellent [example LDAP server](http://www.forumsys.com/tutorials/integration-how-to/ldap/online-ldap-test-server/). If you configure your Firefly III system, you can login with user "einstein" with password "password".

```
LOGIN_PROVIDER=ldap

# LDAP connection configuration
# OpenLDAP, FreeIPA or ActiveDirectory
ADLDAP_CONNECTION_SCHEME=OpenLDAP
ADLDAP_AUTO_CONNECT=true

# LDAP connection settings
ADLDAP_CONTROLLERS=ldap.forumsys.com
ADLDAP_PORT=389
ADLDAP_TIMEOUT=5
ADLDAP_BASEDN="dc=example,dc=com"
ADLDAP_FOLLOW_REFFERALS=false
ADLDAP_USE_SSL=false
ADLDAP_USE_TLS=false

ADLDAP_ADMIN_USERNAME="cn=read-only-admin,dc=example,dc=com"
ADLDAP_ADMIN_PASSWORD=password

ADLDAP_ACCOUNT_PREFIX="uid="
ADLDAP_ACCOUNT_SUFFIX=",dc=example,dc=com"

# LDAP authentication settings.
ADLDAP_PASSWORD_SYNC=false
ADLDAP_LOGIN_FALLBACK=false

ADLDAP_DISCOVER_FIELD=uid
ADLDAP_AUTH_FIELD=uid

# Will allow SSO if your server provides an AUTH_USER field.
WINDOWS_SSO_DISCOVER=samaccountname
WINDOWS_SSO_KEY=AUTH_USER

# field to sync as local username.
ADLDAP_SYNC_FIELD=uid
```

### Example configuration for FreeIPA

The following is an example configuration for FreeIPA:

```
LOGIN_PROVIDER=ldap

# LDAP connection configuration
# OpenLDAP, FreeIPA or ActiveDirectory
ADLDAP_CONNECTION_SCHEME=FreeIPA
ADLDAP_AUTO_CONNECT=true

# LDAP connection settings
ADLDAP_CONTROLLERS=ipa.example.com
ADLDAP_PORT=389
ADLDAP_TIMEOUT=5
ADLDAP_BASEDN="dc=example,dc=com"
ADLDAP_FOLLOW_REFFERALS=false
ADLDAP_USE_SSL=false
ADLDAP_USE_TLS=false

ADLDAP_ADMIN_USERNAME="uid=read-only-admin,cn=users,cn=accounts,dc=example,dc=com"
ADLDAP_ADMIN_PASSWORD=password

ADLDAP_ACCOUNT_PREFIX="uid="
ADLDAP_ACCOUNT_SUFFIX=",cn=users,cn=accounts,dc=example,dc=com"

# LDAP authentication settings.
ADLDAP_PASSWORD_SYNC=false
ADLDAP_LOGIN_FALLBACK=false

ADLDAP_DISCOVER_FIELD=uid
ADLDAP_AUTH_FIELD=uid

# Will allow SSO if your server provides an AUTH_USER field.
WINDOWS_SSO_DISCOVER=samaccountname
WINDOWS_SSO_KEY=AUTH_USER

# field to sync as local username.
ADLDAP_SYNC_FIELD=uid
```

### Example configuration for Active Directory

The following is an example configuration for Active Directory:

```
LOGIN_PROVIDER=ldap

# LDAP connection configuration
# OpenLDAP, FreeIPA or ActiveDirectory
ADLDAP_CONNECTION_SCHEME=ActiveDirectory
ADLDAP_AUTO_CONNECT=true

# LDAP connection settings
ADLDAP_CONTROLLERS=ldap.example.com
ADLDAP_PORT=389
ADLDAP_TIMEOUT=5
ADLDAP_BASEDN="dc=example,dc=com"
ADLDAP_FOLLOW_REFFERALS=false
ADLDAP_USE_SSL=false
ADLDAP_USE_TLS=false

ADLDAP_ADMIN_USERNAME="ldap"
ADLDAP_ADMIN_PASSWORD=password

#ADLDAP_ACCOUNT_PREFIX=
#ADLDAP_ACCOUNT_SUFFIX=

# LDAP authentication settings.
ADLDAP_PASSWORD_SYNC=false
ADLDAP_LOGIN_FALLBACK=false

ADLDAP_DISCOVER_FIELD=samaccountname
ADLDAP_AUTH_FIELD=distinguishedname

# Will allow SSO if your server provides an AUTH_USER field.
WINDOWS_SSO_DISCOVER=samaccountname
WINDOWS_SSO_KEY=AUTH_USER

# field to sync as local username.
ADLDAP_SYNC_FIELD=samaccountname
```

## Two-step authentication

Two-step authentication, or two-factor authentication (2FA) asks you for an extra code to enter. This adds security, so even when you lose your password your account is still protected.

You can enable it in your profile.

![The button is shown in your list of accounts.](images/2fa-enable.png)

If you enable 2FA, you will also see eight backup codes that you should save just in case you lose access to your Authenticator app.

![The button is shown in your list of accounts.](images/2fa-codes.png)
   
To confirm your 2FA settings, submit a code from your Authenticator app twice. In your settings, you will see the upgraded status for 2FA:

![Options for 2FA.](images/2fa-reset.png)
