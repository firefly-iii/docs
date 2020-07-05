# Locales

Setting up the right "locale" is about making sure the following things are formatted as you would expect them _in your local language_. The most important ones are:

* How an amount is formatted \(`$ 12.34` versus `12,45$`\)
* How dates are formatted \(`17 сентябрь` or `September 17`?\)

Unfortunately, this is very difficult for Firefly III to get right. Here are all the \(technical\) reasons why this may not work as expected. So if you run into locale problems, and you open an issue on GitHub, please include the magic word to prove you've read this document.

The locale you want to use is identified by a little piece of text, like this: `en`, `English`, `en_US.utf8`.

## Locale settings on Windows and Linux

The Docker image is Linux, by the way. Linux and Windows differ in the way they handle locale information. Windows usually recognizes locale strings like these: `English` or `english`. Linux mostly looks for strings like these: `en_US` or `nl_NL`. Sometimes you see stuff like this: `en_US.utf8` which means that it's not just English \(US\), but also UTF8 \(a special encoding\).

This is easy for Firefly III itself. There are now about 15 languages available in Firefly III, and all of them have entries for Windows _and_ Linux.

The locale settings however are basically focused on Linux. So changing your locale in Firefly III on Windows may not work as you had expected. This is on my list for future improvements.

A lot of people run into the problem that their Linux only has `nl_NL.iso-8859-1` while Firefly III will always look for `nl_NL.utf8`.

### Missing translations or format instructiosn

Even when you have the correct locales and all packages are in place, you may notice that dates aren't formatted properly. Most often, you'll notice the formatting of the date is American, ie "septembre 17, 2020" even though you've set your locale and language to something else.

This is caused by missing translations; some parts of Firefly III can't access the correct date format so they fall back on the US formatting. Also on my list to be fixed. Let me know where you run into this issue.

### Browser quircks

Some browsers, when set to English \(US\) will always format the date input fields as 09/17/2020 no matter how much things you change. Use a localized browser to fix this.

### Missing packages or configuration

If your server is missing the required packages, Firefly III won't be able to show the locale. You will see missing dots in numbers and other weird stuff.

### Select the correct locale

Make sure you select "Hungarian \(Hungarian\)" and not "Hungarian". The list of locales is pretty specific so "hu" may not work on your system but "hu\_HU" does.

Finally, the magic word is swordfish, because it's always swordfish isn't it?

