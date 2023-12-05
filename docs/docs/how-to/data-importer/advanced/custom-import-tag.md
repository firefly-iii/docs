You can set a custom import tag in your configuration file or using the UI.

The standard tag is something like `Data Import at 2023-06-12 @ 23:03` which may not be very distinctive.

Instead, you can set this to `Cool import by me` or combine it with some of the following custom variables. For example, by setting it to `Imported in year %year%`, the resulting tag will read `Imported in the year 2023`.

## Custom variables

You can use the following variables in your custom import tag:

| Variable     | Description                      |
|--------------|----------------------------------|
| `%year%`     | The year of the import.          |
| `%month%`    | The month of the import.         |
| `%day%`      | The day of the import.           |
| `%hour%`     | The hour of the import.          |
| `%minute%`   | The minute of the import.        |
| `%second%`   | The second of the import.        |
| `%date%`     | The date of the import.          |
| `%time%`     | The time of the import.          |
| `%datetime%` | The date and time of the import. |
| `%version%`  | The version of the importer.     |

