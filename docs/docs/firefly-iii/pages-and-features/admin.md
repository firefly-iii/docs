# Administration

The administration section of Firefly III has you some advanced settings for Firefly III. On the whole the administration isn't very advanced but there might be tools that are useful to you.

* There are some global settings you can change.
* You can manage the translation links that are available.
* You can configure how Firefly III checks for updates.
* You can make Firefly III send a test message.
* You can change the telemetry settings.
* The user administration allows you to manage the users in your Firefly III installation, if more people than just yourself use this installation.

## Settings

The options are explained, so it should be easy to understand what they do. Please do not enable the "demo website" function. This might break your installation.

## Telemetry

Firefly III can collect telemetry. This is opt-in, naturally. Learn more about this feature on the [telemetry page](/firefly-iii/support/telemetry).

## Transaction links

Firefly III has some default links, but you can always add more. Links are described with three properties:

* The description. This is obvious.
* Inward description. This describes how transaction A is influenced by B. Imagine transaction B "flying in" and changing transaction A somehow.
* Outward description. This describes how transaction B is influencing A. Like the previous example, but in reverse.

You can create as many transaction links as you want, but they must be unique.

Links that you have created yourself can be deleted. If you do not want to lose the connections between these transactions, you can migrate the transactions to a different type of transaction link.

## User management

Please don't delete yourself.