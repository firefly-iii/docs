======
Backup
======

If you want to make a backup of all your data, make sure you grab the following:

- The ``.env`` file in the root of your installation;
- The entire database or database file (in ``/storage/database``);
- All uploads from ``/storage/uploads``;
- Any exports from ``/storage/export``.

If you're running Firefly III in a container such as Docker, make sure you grab:

- The volume called "upload" and all data in it;
- The volume called "export" and all data in it;
- The database container;
- The ``FF_APP_KEY`` that you used when launching the container.

That way you have everything you need in case of problems.