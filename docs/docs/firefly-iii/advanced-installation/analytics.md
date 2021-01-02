# Analytics

Firefly III contains Google Analytics tracking code. It's **unused and invisible**, but you can activate it and track your own behavior on Firefly III. This is used on the demo site, and deactivated everywhere else.

You can activate this code manually. To do this, set a valid tracking code in your ``.env``-file, or launch your Docker instance with the correct environment variable.

```
# Use this in your .env file
ANALYTICS_ID=UA-xxxxxxxxx-xx
```

```
# Or this when using Docker
-e ANALYTICS_ID=UA-xxxxxxxxx-xx
```

[Google Analytics](https://analytics.google.com/analytics/web) can provide you with a tracking ID for free. Keep in mind that this sends your surfing behavior over to Google.

If the code isn't immediatly available after you've changed your `.env`-file or Docker configuration, make sure you clear your cache by browsing to the `/flush` URL on your Firefly III installation.
