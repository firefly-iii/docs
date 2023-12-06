# Self-managed hosting tools

There are lots of self-managed hosting tools on the market. They offer 1-click installation of apps and services.

!!! warning "These tools are unsupported"
I can't always offer support for these platforms. There are a lot of them. Feel free to start a [discussion](https://github.com/orgs/firefly-iii/discussions), but you may have to do some exploration to get your issue resolved.

## AMPPS

Firefly III is featured in [AMPPS](https://www.ampps.com/). You can download AMPPS for Windows, Linux and Mac and Firefly III will be available as a package there.

## Cloudron

Firefly III is featured in [Cloudron](https://cloudron.io/). You can install a Cloudron server instance and Firefly III will be available in the [App Store](https://cloudron.io/store/org.fireflyiii.cloudronapp.html).

## Umbrel

Firefly III is featured in the [Umbrel app store](https://umbrel.com/).

## Unraid

There are [templates](https://forums.unraid.net/topic/124146-support-smartphonelover-firefly-iii-data-importer/) for Firefly III and the Data Importer.

## Yunohost

Firefly III is featured on [Yunohost](https://yunohost.org/#/app_firefly-iii).


# Hosted by 3rd parties

There are several third parties where you can run a Firefly III instance.

## Synology

Mariushosting.com wrote [an excellent guide](https://mariushosting.com/how-to-install-firefly-iii-on-your-synology-nas/) on how to host Firefly III on your Synology NAS.

## Heroku

Firefly III supports [Heroku](https://heroku.com/). You can [deploy Firefly III in Heroku](https://heroku.com/deploy?template=https://github.com/firefly-iii/firefly-iii/tree/main) after you register for an account.

> As of version [v6.0.17](https://github.com/firefly-iii/firefly-iii/releases/tag/v6.0.16), support for Heroku has been removed

### Considerations when using Heroku

Heroku uses what is called an "ephemeral file system" and it will not be able to store attachments. They will be deleted [every day](https://devcenter.heroku.com/articles/dynos#automatic-dyno-restarts). Don't use Firefly III on Heroku in combination with sensitive or rare file attachments.

## Softaculous

!!! warning
Your hosting provider may not be compatible with Firefly III, even when it's listed in your Softaculous application list. I cannot support you with this.

Firefly III is featured in [Softaculous](https://softaculous.com/). If your (hosting) server provides packages using Softaculous, Firefly III will be available as a package there. They even made a special [demo site](http://www.softaculous.com/softaculous/apps/others/Firefly_III).


# Third-party tools

There are a lot of interesting tools and apps built around the [Firefly III API](../api/index.md). Here's a list, in no particular order. Is your (favorite) tool not on the list? Submit a PR!

Be sure to also check out [the list of import tools](../importing-data/index.md#other-import-tools).


## Reporting

### Prometheus Exporter

Alejandro built a Prometheus exporter for Firefly III.

- [Credits](https://github.com/kinduff)
- [Repository](https://github.com/kinduff/firefly_iii_exporter)

### Summary emails

David built a tool to send you a monthly overview of your expenses by category.

- [Credits](https://github.com/davidschlachter)
- [Website and documentation](https://github.com/davidschlachter/firefly-iii-email-summary)

## Mobile applications

### Waterfly III

Waterfly III is an android app created by @dreautall that connects to your Firefly III installation.

- [Credits](https://github.com/dreautall)
- [Website and documentation](https://github.com/dreautall/waterfly-iii)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.dreautall.waterflyiii)

### Firefly Personal Finance

Firefly Personal Finance is an android app created by @mconway that connects to your Firefly III installation.

!!! warning
The further development of this tool stopped in January 2020. It may no longer work as expected.

- [Credits](https://github.com/mconway)
- [Website and documentation](https://github.com/mconway/firefly-app/)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.zerobyte.firefly)

### Photuris III

Photuris III is an android app created by @emansih that connects to your Firefly III installation.

- [Credits](https://github.com/emansih)
- [Website and documentation](https://github.com/emansih/FireflyMobile)
- [Google Play Store](https://play.google.com/store/apps/details?id=xyz.hisname.fireflyiii)
- [F-Droid store](https://f-droid.org/packages/xyz.hisname.fireflyiii/)

### OCR Firefly Mobile

OCR Firefly Mobile is a little tool to help you enter transactions into the mobile app automatically.

- [Credits](https://github.com/luifermoron)
- [Website](https://github.com/luifermoron/ocrFireflyMobile)
- [Google Play Store](https://play.google.com/store/apps/details?id=com.opensource.autofill)

### Abacus App

Abacus is a mobile app created by @victorbalssa that allows you to use your Firefly III instance from your mobile.

- [Credits](https://github.com/victorbalssa)
- [GitHub](https://github.com/victorbalssa/abacus)
- [App Store](https://apps.apple.com/us/app/1627093491)
- [Google Play Store](https://play.google.com/store/apps/details?id=abacus.fireflyiii.android.app)

### Lychnos

Lychnos is a simple web front-end for Firefly III made by @davidschlachter, built around annual budgets for categories. Supports creating and viewing transactions alongside its budgeting features.

- [Credits](https://github.com/davidschlachter)
- [Website and documentation](https://github.com/davidschlachter/lychnos)

## Bots and tools

### Firefly III CLI

Firefly III Command Line Interface is a tool made by @afonsoc12 that allows you to interact with Firefly III over the command line.

- [Credits](https://github.com/afonsoc12)
- [Website and documentation](https://github.com/afonsoc12/firefly-cli)

### PHP API library

The PHP API library is a library developed by StanSoft.BG Ltd that allows you to easily authenticate to Firefly III over OAuth2.0 and use the API in your own app.

- [Credits](https://github.com/StanSoftBG)
- [Website](https://github.com/StanSoftBG/oauth2-firefly-iii)

### AI Categorizer

Firefly III AI Categorizer is a tool developed by @bahuma20 that allows you to automatically categorize your expenses for free by using OpenAI.

- [Credits](https://github.com/bahuma20)
- [Website](https://github.com/bahuma20/firefly-iii-ai-categorize)

### Telegram bot for Firefly III

The Telegram bot for Firefly III can create transactions through Telegram.

- [Credits](https://github.com/cyxou)
- [Website](https://github.com/cyxou/firefly-iii-telegram-bot)

### Firefly Bot

The Firefly Bot can create transactions through Telegram.

- [Credits](https://github.com/vjFaLk)
- [Website](https://github.com/vjFaLk/firefly-bot)

### iOS Shortcut

iOS Shortcut to create transactions in Firefly III.

- [Credits](https://github.com/dimarei)
- [Website](https://github.com/dimarei/firefly-ios-shortcuts)

### FFIIITC

FFIIITC is a tool that allows you to automatically categorize your transactions using ML and Naive Bayes classifier.

- [Credits](https://github.com/akopulko)
- [Website](https://github.com/akopulko/ffiiitc)

## Import tools

All import related tools are listed [on the page on importing data](../importing-data/index.md).

## Other tools

Other tools developed by the developer of Firefly III are listed on the [other tools](../../other-tools/index.md) page.
