.. _api_introduction:

============
Introduction
============

Firefly III is currently being fitted with an API. You're currently viewing the documentation for Firefly III version 4.7.1, in which the API is at version 0.1. This API is very much in **beta** and may work in unexpected or undocumented ways.

Data formatting
---------------
The following pages will tell you about all the end points and how they work. As a convention all data is presented using the `JSON API <http://jsonapi.org/>`_ standard. A notable exception is the "system" end-point which presents its data slightly differently.

The "system"-end point uses a simple key-value system grouped under the data key. Here's an example.

(todo)

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

Of course, when debug is *disabled* this error will be not be very descriptive:

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


