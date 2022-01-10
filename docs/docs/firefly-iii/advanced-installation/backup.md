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
