# Errors

Once you've added your Personal Access Token and other tokens to the Importer, you can run into several errors that maybe difficult to diagnose. Here are some common ones:

## Common errors

### 401 Unauthorized

The token you've configured doesn't give access to this instance of Firefly III.

### Could not resolve host

The importer can't find the host where your Firefly III instance is running.

### Your Firefly III version X is below the minimum required version Y

The error says it all, really.

## Spectre importers

### User credentials are incorrect. Incorrect API key or IP address.

This is a Spectre / Salt Edge related error, and it means that either the API key is not valid (anymore) or the IP address you're connecting from isn't correct for this API key. To fix it, get a new API key or make sure you can use the API key from *all* IP addresses.

###  AppsRestricted: Not available for apps.

You have created an app key, not a service key. Go back to Spectre and make sure you select **service key**, not app key.

## Bunq errors

### User credentials are incorrect. Incorrect API key or IP address.

This is a bunq related error, and it means that either the API key is not valid (anymore) or the IP address you're connecting from isn't correct for this API key. To fix it, get a new API key or make sure you can use the API key from *all* IP addresses.

## Other errors?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).
