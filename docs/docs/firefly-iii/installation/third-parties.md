# Hosted by 3rd parties

There are several third parties where you can run a Firefly III instance.

## Synology

Mariushosting.com wrote [an excellent guide](https://mariushosting.com/how-to-install-firefly-iii-on-your-synology-nas/) on how to host Firefly III on your Synology NAS.

## Heroku

Firefly III supports [Heroku](https://heroku.com/). You can [deploy Firefly III in Heroku](https://heroku.com/deploy?template=https://github.com/firefly-iii/firefly-iii/tree/main) after you register for an account.

### Considerations when using Heroku

Heroku uses what is called an "ephemeral file system" and it will not be able to store attachments. They will be deleted [every day](https://devcenter.heroku.com/articles/dynos#automatic-dyno-restarts). Don't use Firefly III on Heroku in combination with sensitive or rare file attachments.

## Softaculous

!!! warning
    Your hosting provider may not be compatible with Firefly III, even when it's listed in your Softaculous application list. I cannot support you with this.

Firefly III is featured in [Softaculous](https://softaculous.com/). If your (hosting) server provides packages using Softaculous, Firefly III will be available as a package there. They even made a special [demo site](http://www.softaculous.com/softaculous/apps/others/Firefly_III).
