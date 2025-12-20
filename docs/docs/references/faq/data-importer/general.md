# General Data Importer questions

## I am getting a "500"-error, and I don't know what it is!

Sorry about that. You'll have to consult the data importer log files. Please look at [the debug instructions](../../../how-to/general/debug.md) for the data importer. The log files will show you what the error is. With that information, you can come [find us for some support](../../../explanation/support.md), so we can fix it together.

## I am being redirected to `http://app` and it doesn't work?

Make sure you set the environment variable `VANITY_URL` and make sure it points to your Firefly III installation. You can leave the `FIREFLY_III_URL` to `http://app:8080` as it is supposed to, but make sure that `VANITY_URL` is set to your actual Firefly III URL.

Press \[Start over\] in the data importer after you've changed the environment variable.

## I am being redirected to `http://localhost` and it doesn't work?

Make sure you set the environment variable `VANITY_URL` and make sure it points to your Firefly III installation. You can leave the `FIREFLY_III_URL` to `http://app:8080` as it is supposed to, but make sure that `VANITY_URL` is set to your actual Firefly III URL.

Press \[Start over\] in the data importer after you've changed the environment variable.

## I have another question?

Come [find us for some support](../../../explanation/support.md), so we can add your question!
