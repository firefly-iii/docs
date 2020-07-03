# Hosted by 3rd parties

There are several third parties where you can run a Firefly III instance. Keep in mind that there's no such thing as a "free lunch", and these options are either paid or severely limited (very slow or can't handle many transactions).

## Heroku

Firefly III supports [Heroku](https://heroku.com/). You can [deploy Firefly III in Heroku](https://heroku.com/deploy?template=https://github.com/firefly-iii/firefly-iii/tree/main) after you register for a (free) account.

### Considerations when using Heroku

Heroku uses what is called an "ephemeral file system" and it will not be able to store attachments. They will be deleted [every day](https://devcenter.heroku.com/articles/dynos#automatic-dyno-restarts). Don't use Firefly III on Heroku in combination with sensitive or rare file attachments.

The free-tier database can hold a maximum of 10,000 rows, which is about one year's worth of transactions.

## Softaculous

Firefly III is featured in [Softaculous](https://softaculous.com/). If your (hosting) server provides packages using Softaculous, Firefly III will be available as a package there. They even made a special [demo site](http://www.softaculous.com/softaculous/apps/others/Firefly_III).

## AMPPS

Firefly III is featured in [AMPPS](https://www.ampps.com/). You can download AMPPS for Windows, Linux and Mac and Firefly III will be available as a package there.

## Cloudron

Firefly III is featured in [Cloudron](https://cloudron.io/). You can install a Cloudron server instance and Firefly III will be available in the [App Store](https://cloudron.io/store/org.fireflyiii.cloudronapp.html).

