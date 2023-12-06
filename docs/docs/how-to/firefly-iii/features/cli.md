(TODO write me)

See also list of commands

## Execute a command

### Docker

Run the following command on your command line, and replace COMMAND:COMMAND with the actual command from the list below.

```bash
docker exec -it $(docker container ls -a -f name=firefly --format="{{.ID}}") php artisan COMMAND:COMMAND
```

If this doesn't work, replace the `$(..)` part with your actual Docker container ID:

```bash
docker exec -it abcde php artisan COMMAND:COMMAND
```

### Self-hosted

Run:

```bash
cd /var/www/html/firefly-iii
php artisan COMMAND:COMMAND
```

### Third-party

Most third party systems like Heroku don't allow you to do this.
