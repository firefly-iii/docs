# Configure install

There are a few pieces of configuration required for the Firefly III import tools:

1. A Personal Access Token stored in `FIREFLY_III_ACCESS_TOKEN`
2. The URL / IP address of your Firefly III instance, stored in `FIREFLY_III_URL`.
3. The asset accounts you are going to import into need to be created in Firefly III.

It depends on the service you're using which other info you need:

- **Spectre**: Your Spectre / Salt Edge App Secret (select "Service" as the type) (`SPECTRE_SECRET`) and your Spectre / Salt Edge App ID (`SPECTRE_APP_ID`).
- **Nordigen**: Your Nordigen ID and KEY as `NORDIGEN_ID` and `NORDIGEN_KEY` respectively.
- **YNAB**: Your YNAB API token (`YNAB_API_CODE`).
- **bunq**: Your bunq API token (`BUNQ_API_CODE`) and the bunq API URL (`BUNQ_API_URL`).

## Asset accounts

In Firefly III, be sure to have already created the asset accounts you want to import into. Your checking account(s) and savings account(s) must already be in place.

## Configuration location

The Firefly III URL and the Personal Access Token are stored in two environment variables, `FIREFLY_III_URL` and `FIREFLY_III_ACCESS_TOKEN` respectively. You can use the `.env` file to store them, use Docker's `-e` flag to set them or use your operating system to set these values. Check out the installation page for more information.

!!! info
    In the past, the importers used `URI` instead of `URL`.

## Personal Access Token

You can generate your own Personal Access Token on the Profile page. Login to your Firefly III instance, go to "Options" > "Profile" > "OAuth" and find "Personal Access Tokens". Create a new Personal Access Token by clicking on "Create New Token". Give it a recognizable name and press "Create".

The Personal Access Token is pretty long. Use a tool like Notepad++ or Visual Studio Code to copy-and-paste it.

## URL or IP

You need to know the IP address or website address of your own Firefly III instances. In many cases this is simply `http://localhost`, but if you're a fancy user it might be something like `https://finances.example.com` or something similar.

## Spectre / Salt Edge data

To get Spectre API data you must register an account and apply for access. This limits you to about ten banks (more than enough for most home users).

The Spectre API is a paid product by Salt Edge. It's used by many financial tools, fintechs and others in the financial space. They are kind enough to offer trials to users of Firefly III, but these are limited in time and scope. Salt Edge is a business-to-business organisation, which is reflected in their pricing: the cost of their API starts at about 500$ per month.

## YNAB data

To obtain a Personal Access Token, [sign in to your account](https://app.youneedabudget.com/settings), go to "Account Settings", scroll down and navigate to "Developer Settings" section.

### Localhost and Docker? Be careful!

If you host Firefly III on `http://localhost` and you're using Docker, beware. The YNAB importer may *not* be able to contact Firefly III. From the perspective of the YNAB importer, "localhost" is referring to the YNAB importer itself, not to Firefly III. 

Make sure you use the internal IP address of your Firefly III Docker container. You can get this IP address by using the following command:

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER
```

Instead of `CONTAINER`, use the container ID of your Firefly III installation.
