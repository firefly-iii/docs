======
Backup
======

If you want to make a backup of all your data, make sure you grab the following:

- The ``.env`` file in the root of your installation;
- The entire database or database file (in ``/storage/database``);
- All uploads from ``/storage/uploads``;
- Any exports from ``/storage/export``.

------
Docker
------

If you're running Firefly III in Docker, make sure you grab:

- The 3 volumes used by Firefly: "upload", "export" and "db"
- The Docker variables you've used to launch the container, and especially the ``APP_ENV``-variable.

That way you have everything you need in case of problems.

For example, to backup the database volume:

- backup with ``docker run --rm -v "firefly_iii_db:/tmp" -v "$HOME/backups/firefly:/backup" ubuntu tar -czvf /backup/firefly_db.tar /tmp``
- restore with ``docker run --rm -v "firefly_iii_db:/recover" -v "$HOME/backups/firefly:/backup" ubuntu tar -xvf /backup/firefly_db.tar -C /recover --strip 1``

A word of caution: Check that the volume exists **BEFORE** trying to back it up! If a named volume doesn't exist Docker will create an empty one, and the command will backup that empty volume - *wiping out the existing backup*.

To get a better idea of how this works, see Docker's `official documentation <https://docs.docker.com/storage/volumes/#backup-restore-or-migrate-data-volumes>`_.
