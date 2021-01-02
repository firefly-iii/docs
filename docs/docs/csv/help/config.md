# Premade config files

You can store pre-made configuration files in the CSV importer so you don't have to upload stuff all the time.

- Store the files in `storage/configurations`
- Mount the `/var/www/html/storage/configurations` directory in Docker somewhere local, and store them.
- Change the `JSON_CONFIGURATION_DIR` to any custom directory (mount it if you want to), and place them there.
