# Configure installation

The CSV importer communicates with Firefly III over the [API](https://docs.firefly-iii.org/api/api). You can supply the CSV importer with a few pieces of information to make it easy to connect to your Firefly III.

None of the following is mandatory, it will work if you don't do this beforehand.

!!! info 
    How to set `ALL_CAPS` variables is explained on the bottom of the page.

## Firefly III URL

You must tell the CSV importer where to reach Firefly III. This is set in the `FIREFLY_III_URL` environment variable. 

### Vanity URL

For Docker, you may be able to your the internal IP address of Firefly III, instead of its public address. But if normal users can't reach this URL, you must also set the `VANITY_URL`. Here is an example:

* `FIREFLY_III_URL=http://172.16.2.2:8080` (internal Docker URL)
* `VANITY_URL=https://money.bill-gates.com` (public or local URL)

## Client ID or Personal Access Token

!!! info
    How to get a Personal Access Token or a Client ID is explained below.

In order to get data from the Firefly III API, you need to be authenticated. There are two options to do so:

1. Set a Client ID in the `FIREFLY_III_CLIENT_ID` environment variable.
2. Set a Personal Access Token in the `FIREFLY_III_ACCESS_TOKEN` environment variable.

The Client ID is used when you wish to re-authenticate to Firefly III (almost) every time you use the CSV importer. This can be useful when you want to secure access to the CSV importer. The CSV importer itself has no authentication in front of it.

Use the Personal Access Token when you trust the installation of the CSV importer can't be reached by other users.

### No Client ID or Personal Access Token

When you set neither a Client ID nor a Personal Access Token, you must enter a client ID every time you run the CSV importer. This can be useful when multiple people wish to use the same CSV importer (on the same Firefly III instance).

### No Firefly III URL

When you don't set the Firefly III URL, people must always submit the Firefly III installation they wish to connect to, together with a Client ID. This can be useful when you want the CSV importer to serve multiple instances of Firefly III

## Access

If you set both the Client ID and the Firefly III URL, the CSV importer will work for you alone but a fresh confirmation is required each time you open the CSV importer. If you only set the Firefly III URL, everybody with a valid Client ID can use the CSV importer on the specified URL. If you set nothing, each user must submit the Client ID and the Firefly III URL themselves.

## Configuration location

The configuration values are stored in environment variables:

* `FIREFLY_III_URL`
* `FIREFLY_III_ACCESS_TOKEN`
* `FIREFLY_III_CLIENT_ID`

You can use the `.env` file to store them, use Docker's `-e` flag to set them or use your operating system to set these values. 

Remember, you can skip all three if you want to.

## Personal Access Token + Firefly III URL

You can generate your own Personal Access Token on the Profile page. Login to your Firefly III instance, go to "Options" > "Profile" and find the "Personal Access Tokens" at the bottom of the page. Create a new Personal Access Token by clicking on "Create New Token". Give it a recognizable name and press "Create".

The Personal Access Token is pretty long. Use a tool like Notepad++ or Visual Studio Code to copy-and-paste it.

After setting the Personal Access Token and the Firefly III URL, the CSV importer needs no further configuration when you use this option.

![Click the right button.](images/pat1.png)

![Give the personal access token a name.](images/pat2.png)

![Copy and paste the token for use in the importer.](images/pat3.png)

![Authentication is reported.](images/pat4.png)

## Client ID + Firefly III URL

You can generate your own client ID on your Profile page (under OAuth). This is the ID you need when you want to share the CSV importer with multiple people, or when you want to allow others to use the same instance of the CSV importer.

Make sure you uncheck the "confidential" checkbox. 

It is **very important** that the callback URL is correct. The callback is the following:

```
http://[CSV IMPORTER]/callback
```

Some common examples include:

* [http://172.16.0.2/callback](http://172.16.0.2/callback) (172.16 is a common IP range for Docker hosts)
* [https://csv-importer.home/callback](https://csv-importer.home/callback) (Some users have fancy local addresses. Notice the TLS)
* [http://10.0.0.15/callback](http://10.0.0.15/callback) (10.0.0.x is often used when using Vagrant)

But ALWAYS add `/callback` or you'll run into weird errors later.

![This is the correct client ID](images/cid1.png)

![Fill in the details correctly](images/cid2.png)

## Client ID with URL

When configuring the CSV importer, you can use both the Client ID and your Firefly III URL to configure the CSV importer.

```
FIREFLY_III_URL=http://firefly.example.com
FIREFLY_III_CLIENT_ID=11

-e FIREFLY_III_URL=http://firefly.example.com -e FIREFLY_III_CLIENT_ID=11
```

![Fixed client ID and fixed Firefly III URL](images/config1.png)

## Client ID without URL

But you can also choose to omit the Client ID for flexibility (multi user):

```
FIREFLY_III_URL=http://firefly.example.com

-e FIREFLY_III_URL=http://firefly.example.com
```

![Flexible client ID and fixed Firefly III URL](images/config2.png)

## No URL and no Client ID

Finally, you can also decide to set up the CSV importer with *no* details at all. This will force the user to submit a valid Firefly III URL and a valid Client ID.

![User submitted client ID and URL.](images/config3.png)


## URL or IP

You need to know the IP address or website address of your own Firefly III instances. In many cases this is simply `http://localhost`, but if you're a fancy user it might be something like `https://finances.example.com` or something similar.

You should know this when generating the token (see above).

### Localhost and Docker? Be careful!

If you host Firefly III on `http://localhost` and you're using Docker, beware. The CSV Importer may *not* be able to contact Firefly III. From the perspective of the CSV importer, "localhost" is referring to the CSV importer itself, not to Firefly III. 

Make sure you use the internal IP address of your Firefly III Docker container. You can get this IP address by using the following command:

```
docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' CONTAINER
```

Instead of `CONTAINER`, use the container ID of your Firefly III installation.
