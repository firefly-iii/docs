.. _api_introduction:

============
Introduction
============

Firefly III is currently being fitted with an API. You're currently viewing the documentation for Firefly III version 4.7.1, in which the API is at version 0.1. This API is very much in **beta** and may work in unexpected or undocumented ways.

Authentication
--------------

The API uses OAuth2 tokens. You can create them in your profile when logged in.

OAuth2 end points are:

- ``/oauth/authorize``
- ``/oauth/token``



Data formatting
---------------
The following pages will tell you about all the end points and how they work. As a convention all data is presented using the `JSON API <http://jsonapi.org/>`_ standard. A notable exception is the "about" end-point which presents its data slightly differently.

When you submit a request (POST or PUT) with dates in them, format them as ``YYYY-MM-DD``.

The "about"-end point uses a simple key-value system grouped under the data key. Here's an example.


.. code-block:: json
   
   {
       "data": {
           "version": "4.7.1",
           "api_version": "0.1",
           "php_version": "7.1.13-1+ubuntu14.04.1+deb.sury.org+1",
           "os": "Linux vagrant-ubuntu-trusty-64 3.13.0-141-generic # 190-Ubuntu SMP Fri Jan 19 12:52:38 UTC 2018 x86_64",
           "driver": "mysql"
       }
   }

Errors
------

System errors are represented using the following notation. All errors are in English, regardless of the user's preferred language.

.. code-block:: json
   
   {
       "message": "Error message is here",
       "exception": "ErrorException",
       "line": 190,
       "file": "/firefly-iii/some-file.php",
       "trace": []
   }


Of course, when debug is *disabled* this error will not be very descriptive:

.. code-block:: json
   
   {
       "message": "Internal Firefly III Exception. See log files.",
       "exception": "FireflyIII\\Exceptions\\FireflyException"
   }


Validation errors (when submitting data) are formatted using the following notation. All errors are in English, regardless of the user's preferred language.

.. code-block:: json
   
   {
       "message": "The given data was invalid.",
       "errors": {
           "name": [
               "The name field is required."
           ],
           "currency_id": [
               "The currency id field is required when currency code is not present."
           ],
           "currency_code": [
               "The currency code field is required when currency id is not present."
           ],
           "active": [
               "The active field is required."
           ],
           "type": [
               "The type field is required."
           ]
       }
   }


Information about the end points can be found in their respective pages (to the left in the index).
