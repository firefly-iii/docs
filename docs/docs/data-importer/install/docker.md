# Docker

There are a few ways to use the Firefly III Data Importer (FIDI) and Docker. There are some *gotchas* when it comes to Docker and IP addresses, so please check out the instructions at the bottom of the page.

FIDI uses the Firefly III API. Read more about the API in [the Firefly III documentation](../../firefly-iii/api.md).

!!! warning
    You should really read the [configuration page](configure.md) first, to know which variables you need.

To run FIDI, use the following run command. How to get the the values of the variables is explained on the [configuration](configure.md) page.

```bash
docker run \
--rm \
-e FIREFLY_III_ACCESS_TOKEN=(here) \
-e FIREFLY_III_URL=(here) \
-e NORDIGEN_ID=(here) \
-e NORDIGEN_KEY=(here) \
-e SPECTRE_APP_ID=(here) \
-e SPECTRE_SECRET=(here) \
-p 8081:8080 \
fireflyiii/data-importer:latest

```

By running this script, you will start a web server on port 8081 that will allow you to use FIDI. You should append the command with your Personal Access Token and Firefly III URL. You should really read the [configuration page](configure.md) on how to get these values.

All environment variables are optional, but conventient.

### Append "-d"

Change `docker run` to `docker run -d` to make sure the image runs in the background.
