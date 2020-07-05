# API

Firefly III features a JSON API.

Please visit the [dedicated Swagger documentation](https://api-docs.firefly-iii.org/) where you can read and try the API.

To read more about Personal Access Token, check out the bottom of this page.

## Authentication

The API uses the OAuth2 workflow. You need to create OAuth2 Clients in your profile when logged in.

![Your OAuth2 Clients as they would be visible in your profile](../.gitbook/assets/api-tokens.png)

These clients have a secret \(visible in the screenshot\). The secret can be exchanged for an access token. The access token is used to access the API.

Firefly III offers the following end points that can be used in applications that support the OAuth2 workflow, such as Postman.

* `/oauth/authorize`
* `/oauth/token`

![Here is the OAuth2 screen from Postman.](../.gitbook/assets/api-postman.png)

Here you see how Postman would use the secret to get an access token. What you can build in OAuth2 is out of the scope of this document.

## Personal Access Token

Some technical background. If you application can't or won't use OAuth2 \(like the Firefly III CSV importer\) you must generate a Personal Access Token on your profile page.

Go to your profile page \(visit `/profile`\) and follow these instructions:

Click on "create new token":

![Click on &quot;create new token&quot;](../.gitbook/assets/pat-new.png)

Give your token a name you recognize:

![Give your token a name you recognize.](../.gitbook/assets/pat-name.png)

Copy the entire token. Yes, it's very long!

![Copy the entire token.](../.gitbook/assets/pat-long.png)

