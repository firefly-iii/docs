# Translating Firefly III

First of all, thank you for taking the time to help get Firefly III translated in as many languages as possible. Translation work is tedious and concentrated work, and I appreciate all your efforts.

At the moment, Firefly III has about 30 target languages with about 12 enabled. To make translating Firefly III as easy as possible I wrote this little guide to get you started.

## Target language

Make sure the language you want to translate in is listed [on this page](https://crowdin.com/project/firefly-iii). If not, [send me a message](https://docs.firefly-iii.org/contact/contact).

If you contact me, make sure you tell me what your language is called _in your language_. For example, Dutch in Dutch is `Nederlands`.

## Things to pay attention to

Some things you'll need to know when translating text:

* I try to make Firefly III user friendly. Whenever possible skip formal language constructs.

## Translate online

Crowdin has a pretty fancy user interface for translating Firefly III texts. This works pretty well for most people but you lack context: you don't know where your text is going to end up. But this works for most text.

## Translate offline

You can hack your installation of Firefly III to make it show your language, even if it's not officially enabled yet.

### Enable the language

First, open `app/config/firefly.php` in your favorite text editor and search for the languages configuration. You should see a bunch of languages listed in a row:

![Enabled languages](../.gitbook/assets/enabled%20%281%29.png)

Below that, a list of languages that are not enabled yet. Each line is preceded by `//`.

![Disabled languages](../.gitbook/assets/disabled%20%281%29.png)

Remove the `//` to enable the language of your choice.

![Klingon can now be translated](../.gitbook/assets/enabled_single%20%281%29.png)

You can now select this language in your settings.

![Klingon can now be translated](../.gitbook/assets/enabled_select%20%281%29.png)

### Download the right files

Everything in Firefly III will still be in English. You need to download a zip file with the correct files in them, and place it in your Firefly III installation directory.

Go to [Crowdin](https://crowdin.com/project/firefly-iii), select your language and download a zip file of your language.

![Download zip file](../.gitbook/assets/download_file%20%281%29.png)

In the zip file, you'll find a directory called `resources/lang/xx_XX` where `xx_XX` is your language code. The PHP files you find in that directory inside the zip file must be extracted to `firefly-iii/resources/lang/xx_XX`. Change `xx_XX`, of course.

![Zip file structure](../.gitbook/assets/zip_structure%20%281%29.png)

Once the files are in place, you can start editing them directly. If you refresh your instance of Firefly III, the text should be translated instantly.

![The very first translation](../.gitbook/assets/first_translation%20%281%29.png)

![The result in Firefly III](../.gitbook/assets/result%20%281%29.png)

Once you're done with a file, send the file [to me](https://docs.firefly-iii.org/contact/contact) so I can upload the results to Crowdin.

