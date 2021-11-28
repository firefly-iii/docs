# Premade config files

!!! warning
    The Firefly III CSV importer is due to be replaced by the universal [Data Importer](https://docs.firefly-iii.org/data-importer/). Please migrate at your earliest convenience.

You can store pre-made configuration files in the CSV importer so you don't have to upload stuff all the time.

- Store the files in `storage/configurations`
- Mount the `/var/www/html/storage/configurations` directory in Docker somewhere local, and store them.
- Change the `JSON_CONFIGURATION_DIR` to any custom directory (mount it if you want to), and place them there.

With Docker:

```
docker run [..] -v /home/user/configurations:/configurations [..] -e JSON_CONFIGURATION_DIR=/configurations
```

This will show a dropdown with your JSON files ready to be selected:

![Selecting pre-configured JSON files](../usage/images/preselect.png)
