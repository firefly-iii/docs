# Frequently Asked Questions

Questions about the Firefly III Data Importer (**FIDI**)

## Can the data importer sync with my bank?

Yes. The data importer uses Spectre and Nordigen to connect to over 6000 banks. Please see the [configuration page](../install/configure.md) for more details and read up on [Nordigen and Salt Edge / Spectre](../install/nordigen-spectre.md).

There is also a [Firefly III API](../../firefly-iii/api.md) that you can connect to \[YOUR BANK HERE\], if you are clever enough to build something in your favorite programming language.

## I want to auto-import transactions from \[my bank\] out of the box!

You can use the [command line](../usage/command_line.md) or the [POST command](../usage/post.md) to automate your import. 

## I get an error about openssl\_pkey\_export?

It means your machine has no proper configuration file for OpenSSL, or it cannot be found. Please check out [this GitHub issue](https://github.com/firefly-iii/firefly-iii/issues/1384) for tips and tricks.

## How do I handle custom SSL certificates?

If you run your own CA, check out [the options](https://github.com/firefly-iii/data-importer/blob/main/.env.example#L51) in the `.env.example` file.

## How do I start over or reset the importer?

Browse to the `/flush`-URL on the data importer to reset it. There is also a button you can use on every page.

## My connection times out, even though the IP addresses are correct

This mainly applies to Docker. Make sure that both containers [are on the same network](https://old.reddit.com/r/FireflyIII/comments/fuur8o/csvimporter_connection_timeout/). Remember that Firefly III usually runs on port 8080.

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/) if you can't get it to work.

## Why can't I import duplicate transactions?

The Firefly III data importer can recognise two different types of duplicate transactions. By default, it will refuse to import both of these types.

1. Duplicate lines in your CSV files are skipped, unless you explicitly tell the data importer to import them anyway.
2. Firefly III itself will refuse to import transactions it believes already exist. You can overrule this.

Even when you delete the original transaction, importing it again will result in a duplication error. This is because many CSV files come with dummy lines, and it's very annoying to have to keep deleting those.

If you want to reimport duplicate transactions after deleting them, turn off duplicate detection or delete them from the database by hand.

## Why isn't the data importer built into Firefly III?

I turned the data importer into a separate tool. It allows me to keep track of two different tools with different development requirements.

## Why isn't this a plugin, like WordPress?

It adds a whole layer of complexities to Firefly III. A plugin needs a framework to land in. For the data importer to be a plugin, I would first have to build it so Firefly III supports plugins. And then the data importer would be the only plugin.

The [API](../../firefly-iii/api.md) is a plugin system of sorts.

## How can I automate this?

The easiest way to automate imports is by using [the command line option to automatically import files](../usage/command_line.md).

