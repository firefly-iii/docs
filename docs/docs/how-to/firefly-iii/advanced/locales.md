# Locales

Setting up the right "locale" is about:

- How an amount is formatted (`$ 12.34` versus `12,45$`)
- How dates are formatted (`17 сентябрь` or `September 17`?)

The locale you want to use is identified by a little piece of text, like this: `en`, `English`, `en_US.utf8`.

In order to make the demo site work (it’s an Ubuntu server) I run these commands:

```text
sudo apt-get install -y language-pack-nl-base
sudo locale-gen
```

You can see which locales your system has by running

```text
locale -a
```

Depending on your language, a specific list of locales is tried by Firefly III. They can be found on [GitHub](https://github.com/firefly-iii/firefly-iii/tree/main/resources/lang). Open the directory of your language, then open `config.php` and look for the line `locale`.

## Locale settings on Windows and Linux

Windows usually recognizes locale strings like these: `English` or `english`. Linux mostly looks for strings like these: `en_US` or `nl_NL`. Sometimes you see stuff like this: `en_US.utf8` which means that it's not just English (US), but also UTF8 (a special encoding).

So changing your locale in Firefly III on Windows may not work as you had expected. This is on my list for future improvements.

Keep in mind some Linux installations only have `nl_NL.iso-8859-1` while Firefly III will always look for `nl_NL.utf8`.

### Missing translations or format instructions

You'll notice the formatting of the date is American, ie `septembre 17, 2020` even though you've set your locale and language to something else.

This is caused by missing translations. Let me know where you run into this issue.

### Browsers

When set to English (US) browsers will always format the date input fields as `09/17/2020`. Use a localized browser to fix this.

### Missing packages or configuration

If your server is missing the required packages, Firefly III won't be able to show the locale. You will see missing dots in numbers and other weird stuff.

### Select the correct locale

Select "Hungarian (Hungarian)" and not "Hungarian". The list of locales is pretty specific so "hu" may not work on your system but "hu_HU" does.
