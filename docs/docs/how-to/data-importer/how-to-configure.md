# How to configure the data importer

The Data Importer communicates with Firefly III over the [API](../../references/firefly-iii/api/index.md). 

On this page you will read how to:

1. Configure access to the Firefly III API.
2. Configure GoCardless (optional)
3. Configure Spectre (optional)

Please also refer to the following guides.

- [How to install the data importer using Docker](installation/docker.md)
- [How to install the data importer on your own server](installation/self-managed.md)
- [General introduction to the data importer](../../explanation/data-importer/about/introduction.md)
- [Explanation about GoCardless and Salt Edge Spectre](../../explanation/data-importer/about/gocardless-salt-edge.md)
- [How to get a personal access token](../../how-to/firefly-iii/features/api.md)

## Access to Firefly III

First, you must tell the data importer where to reach Firefly III.

Firefly III can be reached over two URLs at the same time. In most cases this URL is always the same. For Docker installations, these URLs are often different.

The `FIREFLY_III_URL` is the URL that the data importer uses to reach Firefly III. The `VANITY_URL` is the URL that you use to reach Firefly III.

In case of Docker installations, the `FIREFLY_III_URL` is an "internal" URL, often in the form you see below, `http://app:8080`. Because you cannot browse to that URL, there is a second variable, the `VANITY_URL`, which is the URL you use to reach Firefly III. Most often, this is `http://localhost`.

If you are not using Docker, both URLs are the same and you can safely set `FIREFLY_III_URL` only.

| Environment variable | Probable value when Docker | Probable value when not Docker |
|----------------------|----------------------------|--------------------------------|
| `FIREFLY_III_URL`    | `http://app:8080`          | `https://localhost`            |
| `FIREFLY_III_URL`    | `http://172.16.2.2:8080`   | `http://myserver.lan`          |
| `VANITY_URL`         | `http://localhost`         | `http://localhost`             |

If you use Docker, remember that the `FIREFLY_III_URL` is a reference to Firefly III from inside the data importer container. Therefore, in most cases, the URL is `http://app:8080`, as you can see in the examples above. This happens because Docker containers can use the container name to refer to each other.

If you do not use Docker, the `FIREFLY_III_URL` is probably your localhost or the location of your existing Firefly III installation.

The `VANITY_URL` is rarely used outside of Docker containers. It contains the URL of Firefly III as you see it in your address bar. This is often not the same as the `FIREFLY_III_URL`.

The `FIREFLY_III_URL` is optional. If you don't set it, the data importer will ask for the URL. If you do not set it, the `VANITY_URL` will be ignored.

!!! warning "Docker and 127.0.0.1"
    Docker cannot connect to a Firefly III installation using `http://localhost` or `http://127.0.0.1` because this address refers to the Docker container itself, and not Firefly III.

## Authenticate to Firefly III

Second, to authenticate with Firefly III you must set ONE of the following variables:

1. Set a [Personal Access Token](../firefly-iii/features/api.md) in the `FIREFLY_III_ACCESS_TOKEN` environment variable.
2. OR set a [Client ID](../firefly-iii/features/api.md) in the `FIREFLY_III_CLIENT_ID` environment variable.

You can get these variables by reading [how to talk to the API](../firefly-iii/features/api.md).

!!! note "Authelia and other tools"
    Firefly III combined with [external identity providers](../../how-to/firefly-iii/advanced/authentication.md) such as Authelia can only handle Personal Access Tokens.

These variables are mutually exclusive. If you set both, the data importer will use the Personal Access Token. If you set neither, the data importer will ask for the client ID.

## Configure GoCardless

If you wish to use GoCardless, please [read about GoCardless](../../explanation/data-importer/about/gocardless-salt-edge.md) first. Then, set the following variables. This is necessary if you wish to connect to your bank through GoCardless.

* `NORDIGEN_ID` is your GoCardless Client ID
* `NORDIGEN_KEY` is your GoCardless Client Secret
* If you set `NORDIGEN_SANDBOX` to `true` the data importer will only connect to the GoCardless sandbox.

If you do not set these, the data importer will ask for them.

## Configure Spectre

Third, optionally, if you wish to use Spectre, please [read about Spectre](../../explanation/data-importer/about/gocardless-salt-edge.md) first. Then, set the following variables. This is necessary if you wish to connect to your bank through Spectre.

* `SPECTRE_APP_ID` is your Spectre / Salt Edge Client ID
* `SPECTRE_SECRET` is your Spectre / Salt Edge Client secret

If you do not set these, the data importer will ask for them.

## Where to set the configuration?

All the configuration values mentioned on this page are stored in environment variables:

* `FIREFLY_III_URL`
* `FIREFLY_III_ACCESS_TOKEN`
* `FIREFLY_III_CLIENT_ID`
* `NORDIGEN_ID` and `NORDIGEN_KEY` (for GoCardless)
* `SPECTRE_APP_ID` and `SPECTRE_SECRET`

You can use the `.env` file to store them, use Docker's `-e` flag to set them or use your operating system to set these values. This depends on your installation method, [Docker](installation/docker.md) or [self-managed](installation/self-managed.md).

!!! important "Cookie warning"
    You may need to clear your cookies, browse to `/flush` or press \[Reauthenticate\] after changing these values.
