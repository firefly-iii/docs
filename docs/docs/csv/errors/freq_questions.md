# Frequently Asked Questions

## How do I handle custom SSL certificates?

If you run your own CA, check out [the options](https://github.com/firefly-iii/csv-importer/blob/main/.env.example#L51) in the `.env.example` file.

## How do I start over or reset the importer?

Browse to `/flush` on your CSV importer. This will reset it. There is also a button.

## My connection times out, even though the IP addresses are correct

This applies to Docker. Make sure that both containers [are on the same network](https://old.reddit.com/r/FireflyIII/comments/fuur8o/csvimporter_connection_timeout/). Remember that Firefly III runs on port 8080.

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).

## Why can't I import duplicate transactions?

The Firefly III CSV importer can recognise two different types of duplicate transactions. By default it will refuse to import both of them.

1. Duplicate lines in your CSV files are skipped, unless you explicitely tel the CSV importer to include them.
2. Firefly III itself will refuse to import transactions it believes already exist. You can overrule this.

## Why isn't the CSV importer built into Firefly III?

Fun fact: the CSV importer used to be built straight into Firefly III. But as it turns out, this is a hassle. For each error in the CSV importer I needed to release a new version of the whole tool. There was a lot of duplicated code and a lot of "glue" to tie it all together. At one point, the code of Firefly III contained six different ways to create a transaction.

So I turned the CSV importer into a separate tool. That allows me to keep track of two different tools with two different development requirements, and I was able to clean up a lot of code in the process.

## Why isn't this a plugin, like Wordpress?

A Wordpress-like plugin system is the last thing I'm going to build. It's just not interesting to do, and it adds a whole layer of complexities to Firefly III. After all, a plugin needs a framework to land in. For the CSV importer to be a plugin, I would first have to build it so Firefly III supports plugins. And then the CSV importer would be the only plugin. Like no. Not going to happen.

Also, Wordpress is a backdoor with blog functionality *because* of its plugin system and I'm not going to do anything that makes Firefly III less secure.

The API is a plugin system of sorts.

## How can I automate this?

The easiest way to automate imports is by using [the command line option to automatically import files](../usage/command_line.md). You'll need to do some tinkering to get the files in the right place. That's your homework.