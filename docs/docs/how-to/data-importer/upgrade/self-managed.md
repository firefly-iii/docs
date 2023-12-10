# Upgrade a self-managed server

The best way to upgrade is to "reinstall" the data importer using the commands from [the how-to guide](../installation/self-managed.md).

Instead of `data-importer`, use `updated-data-importer`.

This installs the tool in a new directory called `updated-data-importer`. Move over your `.env` file by copy-pasting it. For example:

```bash
cp /var/www/data-importer/.env /var/www/updated-data-importer/.env
mv /var/www/data-importer /var/www/old-data-importer
mv /var/www/updated-data-importer /var/www/data-importer
```

If necessary, use `sudo` to execute these commands, then correct the access rights with `chown`.

```bash   
sudo chown -R www-data:www-data data-importer
sudo chmod -R 775 data-importer/storage
```
