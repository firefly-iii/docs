# Separate tool

## Why isn't the data importer built into Firefly III?

I turned the data importer into a separate tool. It allows me to keep track of two different tools with different development requirements.

## Why isn't this a plugin, like WordPress?

It adds a whole layer of complexities to Firefly III. A plugin needs a framework to land in. For the data importer to be a plugin, I would first have to build it so Firefly III supports plugins. And then the data importer would be the only plugin.

The [API](../../references/firefly-iii/api/index.md) is a plugin system of sorts.
