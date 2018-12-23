.. _api_introduction:

============
Introduction
============

Firefly III features a JSON API. This API is still in **beta**, and may work in unexpected or undocumented ways.

Please visit the `dedicated Swagger documentation <https://api-docs.firefly-iii.org/>`_ where you can read and try the API.

Authentication
--------------

The API uses the OAuth2 workflow. You need to create OAuth2 Clients in your profile when logged in.

.. figure:: https://firefly-iii.org/static/docs/4.7.5/api-tokens.png
   :alt: Your OAuth2 Clients as they would be visible in your profile
   
   Your OAuth2 Clients as they would be visible in your profile

These clients have a secret (visible in the screenshot). The secret can be exchanged for an access token. The access token is used to access the API.

Firefly III offers the following end points that can be used in applications that support the OAuth2 workflow, such as Postman.

- ``/oauth/authorize``
- ``/oauth/token``

.. figure:: https://firefly-iii.org/static/docs/4.7.5/api-postman.png
   :alt: Here is the OAuth2 screen from Postman.
   
   Here is the OAuth2 screen from Postman.

Here you see how Postman would use the secret to get an access token. What you can build in OAuth2 is out of the scope of this document.
