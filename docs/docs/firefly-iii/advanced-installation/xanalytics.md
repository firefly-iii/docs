# Analytics

Firefly III contains a Matomo tracking code template. It's **unused and invisible**, but you can activate it and track your own behavior on Firefly III. This is used on the demo site, and deactivated everywhere else.

You can activate this code manually. To do this, set a valid tracking code in your ``.env``-file, or launch your Docker instance with the correct environment variable.

```
# Use this in your .env file
TRACKER_SITE_ID=1
TRACKER_URL=https://example.com
```

```
# Or this when using Docker
-e TRACKER_SITE_ID=1 -e TRACKER_URL=https://example.com
```

[Matomo](https://matomo.org/) is a self-hosted analytics solution that you can install somewhere for free.

If the code isn't immediatly available after you've changed your `.env`-file or Docker configuration, make sure you clear your cache by browsing to the `/flush` URL on your Firefly III installation.
