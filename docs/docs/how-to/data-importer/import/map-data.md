# How to map data

If you import data, you can "map" the data found to data already present in Firefly III. You can use this to map account names in the CSV or camt.053 file to account names already in Firefly III. If you do not map data, the Data Importer will use the data "as is". This may lead to messy imports.

## Example mapping

If you import data into Firefly III, you may notice that most banks aren't particularly "clean" when it comes to account names. Check out this example:

![Weird opposing account names.](../../../images/how-to/data-importer/import/difficult1.png)

In this example, taken from a Dutch Rabobank CSV file, you'll see various weird things:

- One restaurant with two different names.
- Several shops with their location in the name.
- Date information in the name.

To fix this, Firefly III supports a process called "mapping" where you can link values like these to one unified shop entry. This example will make it pretty clear. It is taken directly from the data importer:

![Mapping names to one account.](../../../images/how-to/data-importer/import/map.png)

You can map account names, currency names, categories and many other fields to values already present in your Firefly III database. This will greatly smooth out the import process.
