# General questions

## Is the data importer multi-user?

Yes. It borrows login information from Firefly III using OAuth. To make sure it redirects to Firefly III, where you can log in, **do not** set the `FIREFLY_III_ACCESS_TOKEN` in the data importer environment variables. Use only the `FIREFLY_III_URL` variable. This way, each user must authenticate to the data importer.

Some features are not available when you set up a multi-user data importer: you cannot use the POST import function, and you can't import over the command line.

If you use Firefly III with "remote user authentication" (for example Authelia) the data importer can only use personal access tokens. That means that it cannot be made multi-user.

In such cases, you must set up multiple data importers, one for each user.
