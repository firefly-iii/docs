# How to debug Firefly III?

If you believe you found a bug in Firefly III, or if you need help with the data importer,  you can enable debug mode. In debug mode you can see exactly what the error is. This can prove useful when trying to find the source of a bug.

## How do I enable debug mode?

### Firefly III

#### Self-managed

When you host Firefly III yourself, open your `.env` file and find these lines:

* Line that starts with `APP_DEBUG`. Change it to `APP_DEBUG=true`
* Line that starts with `APP_LOG_LEVEL`. Change it to `APP_LOG_LEVEL=debug`
* Line that starts with `LOG_CHANNEL`. Change it to `LOG_CHANNEL=stack`

Go to the map `/firefly-iii/storage/logs`. Delete all files _except_ `.gitignore`.

This will enable debug logging and debug mode.

#### Docker

When you're using Docker, restart your container with the following parameters:

```text
-e APP_DEBUG=true -e APP_LOG_LEVEL=debug -e LOG_CHANNEL=stack
```

### Data Importer

#### Self-managed

When you host the data importer yourself, open your `.env` file and find these lines:

* Line that starts with `APP_DEBUG`. Change it to `APP_DEBUG=true`
* Line that starts with `LOG_LEVEL`. Change it to `LOG_LEVEL=debug` if not already so
* Line that starts with `LOG_CHANNEL`. Change it to `LOG_CHANNEL=stack`

Go to the map `/data-importer/storage/logs`. Delete all files _except_ `.gitignore`.

This will enable debug logging and debug mode.

#### Docker

When you're using Docker, restart your container with the following parameters:

```text
-e APP_DEBUG=true -e LOG_LEVEL=debug -e LOG_CHANNEL=stack
```

This will enable debug logging and debug mode.

## Where do I find the logs?

### Self-managed

Check the folder `storage/logs` for a daily stream of log files.

### Docker

Run the following command to "tail" the logs and see what's happening:

```bash
docker container logs -f CONTAINER
```

The `CONTAINER` variable can be different for everybody, but in a lot of cases it's either `firefly-iii-app-1` or `data-importer-app-1`.

## How can I safely submit debug information?

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
