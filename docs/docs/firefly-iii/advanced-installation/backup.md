# Backup

Firefly III does not come with a built-in backup routine. Using your native OS tools is way more useful and faster. 

!!! warning
    The export function of Firefly III is *not* a backup mechanism


## Self-hosted backup

Make sure you grab the following and store it somewhere safe:

- The `.env` file in the root of your installation or the _exact_ command you've used to launch Firefly III.
- The entire database or database file (in `/storage/database`);
- All uploads from `/storage/upload`;

The database can be exported using tools like phpMyAdmin or pgAdmin.

## Docker

If you're running Firefly III in Docker, backup the following:

- The Docker variables you've used to launch the container (s), and especially the `APP_KEY`-variable.
- Any secrets you have used (database passwords).
- The two volumes used by Firefly III: "upload" and "db"

That way you have everything you need in case of problems.

### Manual backup using Docker

To backup the database volume, you could run something like this.

Backup with the following command:

```bash
docker run --rm -v "firefly_iii_db:/tmp" -v "$HOME/backups/firefly:/backup" ubuntu tar -czvf /backup/firefly_db.tar /tmp
```

And restore with:

```bash
docker run --rm -v "firefly_iii_db:/recover" -v "$HOME/backups/firefly:/backup" ubuntu tar -xvf /backup/firefly_db.tar -C /recover --strip 1
```

A word of caution: Check that the volume exists **before** trying to back it up. If a named volume doesn't exist Docker will create an empty one, and the command will backup that empty volume. This *wipes out the existing backup*.

To get a better idea of how this works, see Docker's [official documentation](https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes).

### Automated backup using Docker

See [GitHub issue #4270](https://github.com/firefly-iii/firefly-iii/issues/4270) for some hints.

### Automated backup using bash script & crontab

If you installed Firefly III with docker-compose, this script will backup the database, upload volume, env, and yaml docker files.
It will also backup the configuration of FIDI if you installed it with the same docker-compose.

To setup copy the [Firefly III bafirefly-iii/docsckuper](https://gist.github.com/dawid-czarnecki/8fa3420531f88b2b2631250854e23381) to the same location where your docker-compose.yml and .env files are
Then add something like this to your crontab:
```bash
1 01 * * * bash /home/myname/backuper.sh backup /home/backup/\$(date '+%F').tar
```

With the same script you can also restore the the configuration and the databse. Just run:
```bash
bash /home/myname/backuper.sh restore /home/backup/firefly-2022-01-01.tar
```
