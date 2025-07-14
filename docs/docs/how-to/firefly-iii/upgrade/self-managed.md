# Upgrade a self-managed server

Firefly III can upgrade itself from very old versions, even back from 4.7.x. In some cases the upgrade process is destructive. It will remove transactions, delete accounts or clean up data.

!!! warning
    Always make a backup of your database and `storage` before you upgrade, especially when you upgrade major versions.

## Created using composer "create-project"

The best way to upgrade is to use the "Straight from GitHub" instructions below. In recent times, the deployment of Firefly III has changed and the "create-project" method is no longer recommended. 

## Straight from GitHub

!!! warning "Upgrading by pulling the remote repository"
    It's no longer possible to upgrade Firefly III by pulling the code from the `main` or `develop` branch of the repository. Generated (JS) code and other dependencies are not in the repository, so your upgraded installation may not work as expected.

%FFVERSION is the [latest version](https://version.firefly-iii.org/).

- [Download the latest release as a `zip` file](https://github.com/firefly-iii/firefly-iii/releases/download/%FFVERSION/FireflyIII-%FFVERSION.zip) from GitHub.
- [Download the latest release as a `tar.gz` file](https://github.com/firefly-iii/firefly-iii/releases/download/%FFVERSION/FireflyIII-%FFVERSION.tar.gz) from GitHub.

It is up to you, if you prefer the `tar.gz` file or the `zip` file.

### Validate the downloaded archive

Optionally, you can validate and test the integrity of your download by also downloading the SHA256 checksum file.

- [SHA256 checksum file of the `zip` file](https://github.com/firefly-iii/firefly-iii/releases/download/%FFVERSION/FireflyIII-%FFVERSION.zip.sha256).
- [SHA256 checksum file of the `tar.gz` file](https://github.com/firefly-iii/firefly-iii/releases/download/%FFVERSION/FireflyIII-%FFVERSION.tar.gz.sha256).

With this SHA256 checksum file, you can verify the integrity of the download by running the following command:

```bash
# Should return: "FireflyIII-%FFVERSION.zip: OK"
sha256sum -c FireflyIII-%FFVERSION.zip.sha256
sha256sum -c FireflyIII-%FFVERSION.tar.gz.sha256

# alternative command:
shasum -a 256 -c FireflyIII-%FFVERSION.zip.sha256
shasum -a 256 -c FireflyIII-%FFVERSION.tar.gz.sha256
```

### Move the old installation

Move the old installation to a temporary directory, ie `firefly-iii-old`. Example commands:

```bash 
# moves the entire installation to a backup directory.
# this also serves as an impromptu backup of your installation
mv /var/www/firefly-iii /var/www/firefly-iii-old
```

### Extract the archive

Extract the archive with the new release wherever you had installed Firefly III. In this example, it is `/var/www/firefly-iii`, but it could be anywhere. To do this over the command line, use the following command:

```bash
# The destination directory can be changed, of course.
mkdir /var/www/firefly-iii
unzip -o FireflyIII-%FFVERSION.zip -x "storage/*" -d /var/www/firefly-iii

# a tar.gz alternative:
mkdir /var/www/firefly-iii
tar -xvf FireflyIII-%FFVERSION.tar.gz -C /var/www/firefly-iii --exclude='storage'
```

Use `sudo` if necessary, but if you do, make sure that you set the ownership of the `/var/www/firefly-iii` directory to `www-data` again:

```bash
# The destination directory can be changed, of course.
sudo chown -R www-data:www-data /var/www/firefly-iii
sudo chmod -R 775 /var/www/firefly-iii/storage
```

### Exclude the storage directory

When unpacking, make sure you do not overwrite the storage directory. That's why the `-x "storage/*"` and `--exclude='storage'` part is important. It prevents the default storage directory from being extracted. You will overwrite it anyway from the old installation directory.

### Copy over files from the old version

Copy the `.env` file and the entire `storage` folder from the old installation to the new one. Example commands:

```bash
# copy the .env file
cp /var/www/firefly-iii-old/.env /var/www/firefly-iii/.env

# copy the storage directory
cp -r /var/www/firefly-iii-old/storage /var/www/firefly-iii
```

### Run upgrade commands

Run the following commands to upgrade the database and the application:

```bash
php artisan migrate --seed
php artisan cache:clear
php artisan view:clear
php artisan firefly-iii:upgrade-database
php artisan firefly-iii:laravel-passport-keys
```

# 🔄 Firefly III Upgrade Script

A bash script to **automate the upgrade process** of [Firefly III](https://firefly-iii.org/), with logging, rollback protection, and interactive or automatic execution.
Just put this file in the root of yout webserver. 
For example, on the folder htdocs assuming that you have your firefly instalation under htdocs/firefly-iii

---

## 📦 Features

- ✅ Download a specific Firefly III version from GitHub
- 📂 Backup current installation (`your-dir` → `your-dir-old`)
- 📤 Extract new version while preserving `.env` and `storage/`
- 🧼 Automatically clean up ZIP files after upgrade
- 🛠️ Run Laravel upgrade commands
- 🧾 Logs everything to a timestamped `.log` file
- 🔁 **Automatic rollback** if validation fails

---

## 🚀 Usage

### 🔧 Preparation

1. Backup your **database** (e.g. via phpMyAdmin)
2. Ensure PHP is installed:
   ```bash
   php -v
   ```
3. Make the script executable:
   ```bash
   chmod +x upgrade-firefly.sh
   ```

---

### ✅ Run the Script

#### 🔹 Auto Mode (non-interactive)

```bash
./upgrade-firefly.sh --auto v6.2.20 firefly-iii
```

- `v6.2.20`: new Firefly III version
- `firefly-iii`: name of your current installation directory

#### 🔹 Interactive Mode (prompt-based)

```bash
./upgrade-firefly.sh
```

The script will ask for:
- The new version to install
- The name of the current Firefly III directory

---

## 📄 Logging

Each run creates a log file like:

```
upgrade-firefly-2025-07-13_11-02.log
```

It contains a full trace of the process: commands, output, errors, duration.

---

## 🔄 Automatic Rollback

If critical files (e.g. `artisan`, `vendor/`, `bootstrap/`) are missing after extraction:
- The new folder is deleted
- The previous backup is restored
- Error is logged, and the process is aborted safely

---

```bash
#!/bin/bash

# === Auto mode if --auto argument is passed ===
AUTO_MODE=false
if [[ "$1" == "--auto" ]]; then
    AUTO_MODE=true
    shift
fi

# === Start log ===
START_TIME=$(date +%s)
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")
LOGFILE="upgrade-firefly-${TIMESTAMP}.log"
exec > >(tee -a "$LOGFILE") 2>&1

echo "=== Firefly III Upgrade Started @ $(date) ==="
echo "Log: $LOGFILE"
echo

# === Get inputs ===
if [ "$AUTO_MODE" = true ]; then
    NEW_VERSION="$1"
    INSTALL_DIR="$2"
    if [ -z "$NEW_VERSION" ] || [ -z "$INSTALL_DIR" ]; then
        echo "❌ In auto mode, you must provide: version and directory"
        echo "   Example: ./upgrade-firefly.sh --auto v6.2.20 firefly-iii"
        exit 1
    fi
else
    echo "⚠️  WARNING: Make sure you've backed up the database using phpMyAdmin before continuing."
    read -p "Press Enter to continue..."
    read -p "Enter the new Firefly III version (e.g. v6.2.20): " NEW_VERSION
    read -p "Enter the name of the current installation directory (e.g. firefly-iii): " INSTALL_DIR
fi

ZIP_FILE="FireflyIII-${NEW_VERSION}.zip"
DOWNLOAD_URL="https://github.com/firefly-iii/firefly-iii/releases/download/${NEW_VERSION}/${ZIP_FILE}"
BACKUP_DIR="${INSTALL_DIR}-old"
NEW_DIR="${INSTALL_DIR}"

# === Check required commands ===
if ! command -v php &>/dev/null; then
    echo "❌ Error: 'php' is not installed or not in the PATH."
    exit 1
fi

# === Check if the directory exists ===
if [ ! -d "$INSTALL_DIR" ]; then
    echo "❌ Error: directory '$INSTALL_DIR' does not exist."
    exit 1
fi

# === Download zip file ===
echo "→ Downloading ${ZIP_FILE}..."
curl -L -o "$ZIP_FILE" "$DOWNLOAD_URL"
if [ $? -ne 0 ]; then
    echo "❌ Error downloading the file!"
    exit 1
fi

# === Backup current installation ===
echo "→ Moving '${INSTALL_DIR}' to '${BACKUP_DIR}'..."
mv "$INSTALL_DIR" "$BACKUP_DIR"

# === Extract new version ===
echo "→ Extracting new version to '${NEW_DIR}'..."
mkdir "$NEW_DIR"
unzip -o "$ZIP_FILE" -x "storage/*" -d "$NEW_DIR"

# === Validate extracted structure ===
MISSING_ITEMS=()
[ -f "${NEW_DIR}/artisan" ]    || MISSING_ITEMS+=("artisan")
[ -d "${NEW_DIR}/bootstrap" ]  || MISSING_ITEMS+=("bootstrap/")
[ -d "${NEW_DIR}/vendor" ]     || MISSING_ITEMS+=("vendor/")

if [ ${#MISSING_ITEMS[@]} -ne 0 ]; then
    echo "❌ The new installation in '${NEW_DIR}' is incomplete. Missing:"
    for item in "${MISSING_ITEMS[@]}"; do
        echo "   - $item"
    done

    echo "🛠️  Performing rollback..."
    if [ -d "$NEW_DIR" ]; then
        rm -rf "$NEW_DIR"
        echo "→ Directory '${NEW_DIR}' removed."
    fi
    if [ -d "$BACKUP_DIR" ]; then
        mv "$BACKUP_DIR" "$NEW_DIR"
        echo "→ Directory '${BACKUP_DIR}' restored as '${NEW_DIR}'."
    else
        echo "⚠️  Backup '${BACKUP_DIR}' not found!"
    fi

    echo "❌ Rollback completed. Upgrade cancelled."
    exit 1
fi

# === Copy .env and storage ===
echo "→ Copying .env and storage from previous installation..."
sudo cp "${BACKUP_DIR}/.env" "${NEW_DIR}/.env"
sudo cp -r "${BACKUP_DIR}/storage" "${NEW_DIR}/storage"

# === Set correct permissions ===
echo "→ Setting permissions..."
sudo chown -R www-data:www-data "$NEW_DIR"
sudo chmod -R 775 "$NEW_DIR/storage"

# === Run Laravel upgrade commands ===
echo "→ Running Laravel upgrade commands..."
cd "$NEW_DIR" || exit
php artisan migrate --seed
php artisan cache:clear
php artisan view:clear
php artisan firefly-iii:upgrade-database
php artisan firefly-iii:laravel-passport-keys

# === Cleanup zip file ===
echo "→ Removing zip file '${ZIP_FILE}'..."
rm "../${ZIP_FILE}" 2>/dev/null || rm "${ZIP_FILE}"

# === Show duration ===
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))
MIN=$((DURATION / 60))
SEC=$((DURATION % 60))

echo
echo "✅ Upgrade to ${NEW_VERSION} completed successfully!"
echo "📄 Log saved to: $LOGFILE"
echo "⏱️  Total duration: ${MIN}m ${SEC}s"
```
