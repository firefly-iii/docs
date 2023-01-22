TODO write me


## Why can't I import duplicate transactions?

The Firefly III data importer can recognise two different types of duplicate transactions. By default, it will refuse to import both of these types.

1. Duplicate lines in your CSV files are skipped, unless you explicitly tell the data importer to import them anyway.
2. Firefly III itself will refuse to import transactions it believes already exist. You can overrule this.

Even when you delete the original transaction, importing it again will result in a duplication error. This is because many CSV files come with dummy lines, and it's very annoying to have to keep deleting those.

If you want to reimport duplicate transactions after deleting them, turn off duplicate detection or delete them from the database by hand. Firefly III v5.8.0 has a "purge"-button on your profile page that allows you to permanently remove duplicated transactions.
