# General questions

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## What is Firefly III?

Firefly III is a self-hosted manager for your personal finances. It's written in PHP 7.4. It's opinionated, which means it follows the mantra that I, the developer like.

## Can I try it?

Yes, there is [a demo site](https://demo.firefly-iii.org/) where you can play with a sample administration.

## Is it multi-user?

Yes. For security reasons Firefly III opens up the registration form only for the first user, but anybody can register an account if you enable this under **Administration** &gt; **Configuration**. Keep in mind that you won't be able to _share_ your administration.

## I found a bug, what do I do?

You can contact me [through GitHub](https://github.com/firefly-iii/firefly-iii/) by opening an issue, or use the details found on [the contact page](https://docs.firefly-iii.org/contact/contact).

## Will Firefly III support PSD2?

* Will Firefly III have PSD2 integration?
* Will Firefly III will be compliant with PSD2?

Unfortunately, there is no such thing as "PSD2 integration" or "compliancy". The integration that exists in the real world isn't really feasible for Firefly III.

Firstly, the PSD2 regulation tells banks that they should open their API's to authorized third parties. These authorized third parties must be registered at national financial institutes like "De Nederlandse Bank" (for the Netherlands). Such a registration is of course, impossible for Firefly III.

Each user would have to register their own Firefly III installation separately at the DNB. Keep in mind that this process is expensive. After this registration each bank must authorize you separately. To authorize yourself you will need an EDIAS compliant PSD2 digital certificate which can cost up to EUR 2000,- without tax.

It would cost a lot of time and money to get registered and get the right digital certificates. And even then, these banks have manual processes to allow new API customers and there's no guarantee Firefly III would even make the cut.

So just getting registered in the context of the PSD2 is impossible for Firefly III.

Secondly. Even if Firefly III was a hosted service (it's not) and it could be registered (it can't be), there is still another problem: the PSD2 doesn't tell banks **how** to open up their API's. Each bank has their own API with its own authenthication flow, API endpoints, data-formats and queries. Literally no bank has the same API. So even if we could register Firefly III at the DBN (we can't) and we could get a PSD2 compliant certificate (we can't), and get access to the API's (we won't) we would still have to develop separate applications for each single bank.

For applications and actual end users like Firefly III and the users that use it, the PSD2 regulation doesn't add any value at all, unfortunately.

## I want something in Firefly III, what do I do?

What you want may already be possible, so read the documentation carefully. If not, read [this page](general.md) and then contact me through [GitHub](https://github.com/firefly-iii/firefly-iii/) or email, using the details found on [the contact page](https://docs.firefly-iii.org/contact/contact).

## I want to help, what do I do?

If you want to help with the translations, please check out [our CrowdIn project](https://crowdin.com/project/firefly-iii) (or [this one](https://crowdin.com/project/firefly-iii-help) for the help pages). If you're missing your language, then contact me through [GitHub](https://github.com/firefly-iii/firefly-iii/) or email, using the details found on [the contact page](https://docs.firefly-iii.org/contact/contact)

If you want to help with the development of Firefly III, please come find me! I have a strong opinion on what the code should look like and how things should work. I welcome all support, and I look forward to any suggestions you may have.

## I have found a security related issue, what do I do?

Please contact me using the details found in [the security policy](https://github.com/firefly-iii/firefly-iii/security/policy).

