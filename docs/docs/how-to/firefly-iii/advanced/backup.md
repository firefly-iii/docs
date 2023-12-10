# How to make a backup

Firefly III does not come with a built-in backup routine. Using your native OS tools is way more useful and faster. 

!!! warning "Do not use the export function as a backup mechanism"
    The export function of Firefly III is *not* a backup mechanism

## Self-managed installation backup

Grab the following and store it somewhere safe:

- The `.env` file in the root of your installation or the _exact_ command you've used to launch Firefly III.
- The entire database, or the database file (in `/storage/database`);
- All uploads from `/storage/upload`;

The database can be exported using tools like phpMyAdmin or pgAdmin.

After you made a backup this way, the *first* thing you must do is restore it, to make sure it actually worked.

## Docker

If you're running Firefly III in Docker, back up the following:

- The Docker variables you've used to launch the container (s), and especially the `APP_KEY`-variable.
- Any secrets you have used (database passwords).
- The two volumes used by Firefly III: "upload" and "db"

That way you have everything you need in case of problems.

After you made a backup this way, the *first* thing you must do is restore it, to make sure it actually worked.

### Manual backup using Docker

To back up the database volume, you could run something like this.

Back up with the following command:

```bash
docker run --rm -v "firefly_iii_db:/tmp" \
    -v "$HOME/backups/firefly:/backup" \
    ubuntu tar -czvf /backup/firefly_db.tar /tmp
```

And restore with:

```bash
docker run --rm -v "firefly_iii_db:/recover" \
    -v "$HOME/backups/firefly:/backup" \
    ubuntu tar -xvf /backup/firefly_db.tar -C /recover --strip 1
```

!!! warning 
    Check that the volume exists **before** trying to back it up. If a named volume doesn't exist Docker will create an empty one, and the command will backup that empty volume. This *wipes out the existing backup*.

    To get a better idea of how this works, see Docker's [official documentation](https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes).

After you made a backup this way, the *first* thing you must do is restore it, to make sure it actually worked.


### Automated backup using Docker

See [GitHub issue #4270](https://github.com/firefly-iii/firefly-iii/issues/4270) for some hints.

### Automated backup using a bash script and crontab

An installation of Firefly III installed using `docker compose` can be backed up using this script provided by GitHub user [@dawid-czarnecki](https://github.com/dawid-czarnecki). The script will back up the database, capture the Docker volumes, `.env`-file, and relevant Docker files. It will also back up the configuration of the [Firefly III Data Importer](../../data-importer/installation/docker.md) if you installed it with the same `docker-compose`-file.

Download the [firefly-iii-backuper.sh](https://gist.github.com/dawid-czarnecki/8fa3420531f88b2b2631250854e23381)-script and put it in the same location where your `docker-compose.yml` and `.env` files are located.

Create a cron job that will run regularly, like so. This will create the necessary backups in the `.tar` file, named after the current date.

```bash
1 01 * * * bash /home/myname/backuper.sh backup /home/backup/$(date '+%F').tar
```

The same script can also restore the Docker configuration and the database, getting you up and running again. You can run this on the command line:


```bash
bash /home/myname/backuper.sh restore /home/backup/firefly-2022-01-01.tar
```

After you made a backup this way, the *first* thing you must do is restore it, to make sure it actually worked.
