# Uploading files

!!! warning
    The Firefly III CSV importer is due to be replaced by the universal [Data Importer](https://docs.firefly-iii.org/data-importer/). Please migrate at your earliest convenience.

On this page you'll find instructions on how to upload files into the CSV importer.

![Upload files.](./images/upload.png)

## About the CSV file

Always upload the CSV file from your bank. If the file contains any lines before the data starts, you must remove them manually. Make sure the file is encoded in UTF-8. Use a tool like Sublime Text or Notepad++ to convert the file if necessary. 

## About the configuration file

Configuration files contain instructions for the CSV processing. You can find a lot of common config files in the [configuration file repository](https://github.com/firefly-iii/import-configurations).

If you want to know more about how the JSON file works, check out [this help page about the JSON configuration file](../help/json.md).

## Pre-uploaded configuration files

It's possible to upload configuration files to a special directory so these files are easily accessible. [Would you like to know more?](../help/config.md)

## Common problems and errors

### UTF-8 encoding.

Make sure the file is UTF-8 encoded. Because it's hard for PHP to detect this properly and guarantee a hassle-free conversion, you must do any conversion to UTF-8 yourself.

### Extra lines

No extra text may be present before or after the data. This is bad form. A CSV file is for computers to read, not for humans. The CSV importer has no feature to remove a number of lines from the start of the file.