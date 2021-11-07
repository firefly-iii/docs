# General questions

People often have the same type of questions. Please find them below. If you open an issue that refers to one of these questions, your issue may be closed.

Please refer to the index on your right.

## What is Firefly III?

Firefly III is a self-hosted manager for your personal finances. It's written in PHP. It's opinionated, which means it follows the mantras that I, the developer like.

## Can I try it?

Yes, there is [a demo site](https://demo.firefly-iii.org/) where you can play with a sample administration.

## Is it multi-user?

Yes. For security reasons Firefly III opens up the registration form only for the first user, but anybody can register an account if you enable this under **Administration** &gt; **Configuration**. Keep in mind that you won't be able to _share_ your administration. This is a work in progress.

## How does it compare to YNAB, Mint, GNUCash, Excel?

This is a fairly complicated question, but here are some key differences that you should know about.

- Firefly III is self-hosted and geared towards tech-savvy users. You must install it yourself and run it on your own server. This is a huge difference with other financial tools.
- Importing data from your bank and doing this automatically is not that easy with Firefly III. See also [importing data](../importing-data/introduction.md) for more information.
- GNUCash has way more "accounting" features, like mutual funds and stock and equity.
- Most online tools like YNAB and Mint have a another "style" of budgeting money. See for more info, below.
- There is no desktop app for Firefly III, it's all web based.

## Why is Firefly III not based on "zero sum budgeting"?

In many budgeting tools you assign every coin to a budget until all your money is budgeted. When I started Firefly III zero-sum budgeting didn't really exist as a concept, at least not that I remember.

The only effective difference with YNAB (and other tools) is that you *don't need to budget all the way to zero*. What you do is, you set a monthly amount that you want to budget (aka spend), like € 1000. You shape a few budgets around that amount, and you start the month with € 1000 on your bank account and like 4 budgets to spend it in. Now you have a monthly financial routine around 1000,-. You can now shape your budgets and try to spend even less. If you have € 2000 on your savings account you know you can go without a job for two months.

Any income you get over the month you put in your savings account directly, it doesn't need to reside on your bank account: it would only muddle your € 1000. If you want to create specific saving targets for the money in your savings account you use [piggy banks](../advanced-concepts/piggies.md).

Two differences between zero sum budgeting and Firefly III:

- You don't need to budget all the money.
- You separate the income from the budgeting and spending process

When I built Firefly III I was over 5K in debt and this helped me pay it off in less than a year: a monthly budget routine separated from my income, fixed amounts at the start of each month, all income to the savings account. Firefly III is geared towards predetermining your budgets, allocating funds to those budgets *only* and then spend it.

See [personal finances](../about-firefly-iii/personal-finances.md) for more information.

## I found a bug, what do I do?

You can contact me [through GitHub](https://github.com/firefly-iii/firefly-iii/) by opening an issue, or use the details found on [the contact page](../other-pages/contact.md).

## Will Firefly III support PSD2?

* Will Firefly III have PSD2 integration?
* Will Firefly III will be compliant with PSD2?

Unfortunately, there is no such thing as "PSD2 integration" or "compliancy". The integration that exists in the real world isn't really feasible for Firefly III.

Firstly, the PSD2 regulation tells banks that they should open their API's to authorized third parties. These authorized third parties must be registered at national financial institutes like "De Nederlandse Bank" (for the Netherlands). Such a registration is of course, impossible for Firefly III.

Each user would have to register their own Firefly III installation separately at the DNB. Keep in mind that this process is expensive. After this registration each bank must authorize you separately. To authorize yourself you will need an EDIAS compliant PSD2 digital certificate which can cost up to EUR 2000,- without tax.

It would cost a lot of time and money to get registered and get the right digital certificates. And even then, these banks have manual processes to allow new API customers and there's no guarantee Firefly III would even make the cut.

So just getting registered in the context of the PSD2 is impossible for Firefly III.

Secondly. Even if Firefly III was a hosted service (it's not) and it could be registered (it can't be), there is still another problem: the PSD2 doesn't tell banks **how** to open up their API's. Each bank has their own API with its own authenthication flow, API endpoints, data-formats and queries. Literally no bank has the same API. So even if we could register Firefly III at the DBN (we can't) and we could get a PSD2 compliant certificate (we can't), and use the API's (we can't) we would still have to develop separate applications for each single bank.

For applications and actual end users like Firefly III and the users that use it, the PSD2 regulation doesn't add any value at all, unfortunately.

## Firefly III should be a business!

* Why is there not a cloud version of Firefly III?
* Can I just pay you to host Firefly III for me?
* Where is Firefly III-as-a-Service?

I made Firefly III open source under the AGPL. Making Firefly III open source under the AGPL means that any change or addition to Firefly III must be open sourced under the AGPL as well. And for Firefly III to be business ready it needs a few changes. Those changes will allow anybody to host Firefly III for other people (as a service).

* Firefly III as it is right now requires strict database controls or something auditable outside of Firefly III, because any database administrator can see everybody's administrations. There are no controls in Firefly III against insider threat. That alone makes it totally unworthy of being used in a "hosted"-fashion.
* There is nothing in place to do proper user management, except some half-finished admin pages I built for the demo site 3 years ago. These pages are a part of Firefly III, so if Firefly III breaks so does your user admin.
* More security and scrutiny is required to make sure the tool is bug-free and hassle-free. It's pretty easy to lock yourself out, for example.
* There is no payment module or anything; you'd have to develop something on the side.
* The development pace is too high to offer a stable product. I like to tinker and I break stuff all the time. My users accept this, if begrudgingly. But if they pay AND it breaks? No dice.
* I built Firefly III specifically because self-hosting is the only way to guarantee your data is (fairly) safe. At least, out of the hands of nefarious corporations. So hosting a public instance for everybody to use is kind of exactly against that idea.

If you want to, feel free to host Firefly III yourself and sell user accounts. If it's you and a few friends, all the better. You can keep it low key without needing strict privacy policies or payment services. If there's a kickback for me all the better ;). But make it larger, and I fear you run into the situation where you have to build a second system next to Firefly III to manage users, manage payments, etc etc. And the parts in Firefly III that you change must be open sourced. 

This excludes all the (legal) work you'll need to have in place to manage other people's finances hassle-free. 

Personally, right now I'm just not interested in turning this into a business. I'm as happy I can be with the way things are right now. Thank you.

## I want something in Firefly III, what do I do?

What you want may already be possible, so read the documentation carefully. If not, contact me through [GitHub](https://github.com/firefly-iii/firefly-iii/) or email, using the details found on [the contact page](../other-pages/contact.md).

## I want to help, what do I do?

If you want to help with the translations, please check out [our CrowdIn project](https://crowdin.com/project/firefly-iii). If you're missing your language, then contact me through [GitHub](https://github.com/firefly-iii/firefly-iii/) or email, using the details found on [the contact page](../other-pages/contact.md).

If you want to help with the development of Firefly III, please come find me! I have a strong opinion on what the code should look like and how things should work. I welcome all support, and I look forward to any suggestions you may have.

## I have found a security related issue, what do I do?

Please contact me using the details found in [the security policy](https://github.com/firefly-iii/firefly-iii/security/policy).

