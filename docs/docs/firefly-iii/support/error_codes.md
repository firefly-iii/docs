# Error codes

In an effort to make Firefly III more consistent and easier to work with, most (not all) exceptions now carry an "error code", that will point you to this very page. On this page you will find tips, tricks and ideas to fix the error you ran into.

Just check out the list below, Control-F your error code and get it fixed!

## API error codes

All API error codes start with 2, and are separated from a human readable explanation by a colon. Like this: `200002: The file you want to download is empty`.

**200000**

While trying to download a file. For this ID no file has been uploaded (yet). Use the [upload attachment](https://api-docs.firefly-iii.org/#/attachments/uploadAttachment) endpoint to upload a file first.

**200002**

The file you're trying to download is empty (zero bytes). [Delete the original attachment](https://api-docs.firefly-iii.org/#/attachments/deleteAttachment) and try again.

**200003**

The file you're trying to download doesn't exist anymore. Possibly the local storage is corrupted. [Delete the original attachment](https://api-docs.firefly-iii.org/#/attachments/deleteAttachment) and try again.

**200004**

This budget does not exist. Perhaps it was deleted? Try viewing the budget in Firefly III itself instead of over the API.

**200005**

You have no permission to use this function because you don't have the "owner"-role.

**200006**

The currency is still in use in your Firefly III installation, and can't be deleted. Make sure no accounts, budgets or other items use this currency.

**200007**

The source currency for this exchange rate operation doesn't exist in your installation. Perhaps you made a typo?

**200008**

The destination currency for this exchange rate operation doesn't exist in your installation. Perhaps you made a typo?

**200020**

This link type can't be edited or deleted. It's part of Firefly III's default link types.

**200022**

The cron job could not be fired. Check the log files to get the details.

**200023**

There are no rules in this rule group. Perhaps you haven't created any yet?

**200024**

Firefly III couldn't find one of the transactions you're trying to link. Perhaps one of them was deleted?

**200025**

You can't delete other users but yourself, unless you have the owner role.

**200026**

You can't delete the fallback currency. It's required by the system.

**200027**

A budget limit already exists with this date range and currency.

### Firefly III error codes

These start with 3.

### Generic error codes

API and Firefly III alike start with 4.

**400000**

The bill you're trying to store could not be saved due to a database exception. Check the logs to find out what happened exactly.

**400002**

The budget you're trying to store could not be saved due to a database exception. Check the logs to find out what happened exactly.

**400003**

The category you're trying to store could not be saved due to a database exception. Check the logs to find out what happened exactly.

**400004**

The currency you're trying to store could not be saved due to a database exception. Check the logs to find out what happened exactly.

**400005**

The piggy bank you're trying to store could not be saved due to a database exception. Check the logs to find out what happened exactly.

