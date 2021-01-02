# Personal Access Token errors

If you configure the CSV importer to use Personal Access Tokens, and you've added your Personal Access Token to the CSV Importer, you can run into several errors that maybe difficult to diagnose. Here are some common ones:

First, always remember:

- Do not use the "command line token". That's the wrong one.
- Do not use the "APP_KEY". That's the wrong one.

## 401 Unauthorized

The Personal Access Token you've configured doesn't give access to this instance of Firefly III. Double check that your Personal Access Token is correct. Make sure that it starts with "ey". No spaces at the end. No newlines.

## Could not resolve host

The CSV importer can't find the host where your Firefly III instance is running. This is often the problem when using Docker and the devices can't reach eachother.

## Your Firefly III version X is below the minimum required version Y

The error says it all, really.

## 500 Internal Server Error

Something is seriously wrong with your installation. Fix that first.

## Other errors?

Please open a ticket [on GitHub](https://github.com/firefly-iii/firefly-iii/).