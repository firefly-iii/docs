## How can I safely submit debug information?

(TODO clean up this page)

A lot of data files contain private information. You should **never** share these files on GitHub. They are very hard to remove.

!!! warning "Uploading files to GitHub"
    Do not upload CSV files or CAMT.053 to GitHub directly without censoring them first.

Upload as few lines or blocks of data as is necessary to reproduce the error. Removing private information from the remaining data consists of (your choice):

- Replace names with fake names;
- Replace IBANs with [fake IBANs](https://fakeiban.org/);
- Replace amounts with fake amounts

!!! note "Consistency is important"
Try to remove as little data as you dare. Try to replace data consistently, always replacing IBAN "ABC" for the same (fake) IBAN for example.

You may always send your data file to me personally at [james@firefly-iii.org](mailto:james@firefly-iii.org). That leaks your personal data to a single person at least. I cannot guarantee nobody will ever hack me, but your files will be removed once the issue is closed.


### How can I debug the data importer?

A few steps can be followed to make it easier to see what the data importer is doing:

1. Trace the Docker logs with `docker logs -f [container_id]`, where `[container_id]` is the ID of the container.
2. Go to `/storage/logs` and `tail -f` the log files that you see there.

The exact same instructions work for Firefly III as well.


## How do I enable debug mode?

In debug mode you can see exactly what the error is. This can prove useful when trying to find the source of a bug.

When you host Firefly III yourself, open your `.env` file and find these lines:

* Line that starts with `APP_DEBUG`. Change it to `APP_DEBUG=true`
* Line that starts with `APP_LOG_LEVEL`. Change it to `APP_LOG_LEVEL=debug`

Go to the map `/firefly-iii/storage/logs`. Delete all files _except_ `.gitignore`.

This will enable debug logging and debug mode.

When you're using Docker, restart your container with the following parameters:

```text
-e APP_DEBUG=true -e APP_LOG_LEVEL=debug
```

For the Data Importer the correct variable is `LOG_LEVEL`.
