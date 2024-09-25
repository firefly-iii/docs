# Upgrade a self-managed server

## Created using composer "create-project"

The best way to upgrade is to use the "Straight from GitHub" instructions below. In recent times, the deployment of the Firefly III Data Importer has changed and the "create-project" method is no longer recommended.

## Straight from GitHub

!!! warning "Upgrading by pulling the remote repository"
    It's no longer possible to upgrade the data importer by pulling the code from the `main` or `develop` branch of the repository. Generated (JS) code and other dependencies are not in the repository, so your upgraded installation may not work as expected.

v%IMPORTERVERSION is the [latest version](https://version.firefly-iii.org/).

- [Download the latest release as a `zip` file](https://github.com/firefly-iii/data-importer/releases/download/v%IMPORTERVERSION/DataImporter-v%IMPORTERVERSION.zip) from GitHub.
- [Download the latest release as a `tar.gz` file](https://github.com/firefly-iii/data-importer/releases/download/v%IMPORTERVERSION/DataImporter-v%IMPORTERVERSION.tar.gz) from GitHub.

It is up to you, if you prefer the `tar.gz` file or the `zip` file.

### Validate the downloaded archive

Optionally, you can validate and test the integrity of your download by also downloading the SHA256 checksum file.

- [SHA256 checksum file of the `zip` file](https://github.com/firefly-iii/data-importer/releases/download/v%IMPORTERVERSION/DataImporter-v%IMPORTERVERSION.zip.sha256).
- [SHA256 checksum file of the `tar.gz` file](https://github.com/firefly-iii/data-importer/releases/download/v%IMPORTERVERSION/DataImporter-v%IMPORTERVERSION.tar.gz.sha256).

With this SHA256 checksum file, you can verify the integrity of the download by running the following command:

```bash
# Should return: "DataImporter-v%IMPORTERVERSION.zip: OK"
sha256sum -c DataImporter-v%IMPORTERVERSION.zip.sha256
sha256sum -c DataImporter-v%IMPORTERVERSION.tar.gz.sha256

# alternative command:
shasum -a 256 -c DataImporter-v%IMPORTERVERSION.zip.sha256
shasum -a 256 -c DataImporter-v%IMPORTERVERSION.tar.gz.sha256
```

### Move the old installation

Move the old installation to a temporary directory, ie `data-importer-old`. Example commands:

```bash 
# moves the entire installation to a backup directory.
# this also serves as an impromptu backup of your installation
mv /var/www/data-importer /var/www/data-importer-old
```

### Extract the archive

Extract the archive with the new release wherever you had installed the Firefly III data importer. In this example, it is `/var/www/data-importer`, but it could be anywhere. To do this over the command line, use the following command:

```bash
# The destination directory can be changed, of course.
unzip -o DataImporter-v%IMPORTERVERSION.zip -x "storage/*" -d /var/www/data-importer

# a tar.gz alternative:
tar -xvf FireflyIII-v%IMPORTERVERSION.tar.gz -C /var/www/data-importer --exclude='storage'
```

Use `sudo` if necessary, but if you do, make sure that you set the ownership of the `/var/www/data-importer` directory to `www-data` again:

```bash
# The destination directory can be changed, of course.
sudo chown -R www-data:www-data /var/www/data-importer
sudo chmod -R 775 /var/www/data-importer/storage
```

### Exclude the storage directory

When unpacking, make sure you do not overwrite the storage directory. That's why the `-x "storage/*"` and `--exclude='storage'` part is important. It prevents the default storage directory from being extracted. You will overwrite it anyway from the old installation directory.

### Copy over files from the old version

Copy the `.env` file and the entire `storage` folder from the old installation to the new one. Example commands:

```bash
# copy the .env file
cp /var/www/data-importer-old/.env /var/www/data-importer/.env

# copy the storage directory
cp -r /var/www/data-importer-old/storage /var/www/data-importer
```

### Run upgrade commands

Run the following commands to upgrade the database and the application:

```bash
php artisan cache:clear
php artisan view:clear
```

And you're done!
