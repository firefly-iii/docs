# General Firefly III questions

## Is it multi-user?

Yes. For security reasons Firefly III opens up the registration form only for the first user. See also [how to make Firefly III multi-user](../../../how-to/firefly-iii/features/multi-user.md). Keep in mind that you won't be able to _share_ your administration. This is a work in progress.

## Can I share one administration with multiple users?

Unfortunately not. Each administration is tightly locked to a single user. If you want to share your financial administration with your partner or somebody else, you must share the username and password with them.

## How does it compare to YNAB, Mint, GNUCash, Excel?

This is a fairly complicated question, but here are some key differences that you should know about.

- Firefly III is self-hosted and geared towards tech-savvy users. You must install it yourself and run it on your own server. This is a huge difference with other financial tools.
- Importing data from your bank and doing this automatically is not that easy with Firefly III. See also [how to import data](../../../how-to/data-importer/import/csv.md) for more information.
- GNUCash has way more "accounting" features, like mutual funds and stock and equity.
- Most online tools like YNAB and Mint have another "style" of budgeting money. See for more info, below.
- There is no desktop app for Firefly III, it's all web based.

## Why is Firefly III not based on "zero-sum budgeting"?

In many budgeting tools you assign every coin to a budget until all your money is budgeted. When I started Firefly III zero-sum budgeting didn't really exist as a concept, at least not that I remember.

The only effective difference with YNAB (and other tools) is that you *don't need to budget all the way to zero*. What you do is, you set a monthly amount that you want to budget (aka spend), like € 1000. You shape a few budgets around that amount, and you start the month with € 1000 on your bank account and like 4 budgets to spend it in. Now you have a monthly financial routine around 1000. You can now shape your budgets and try to spend even less. If you have € 2000 on your savings account you know you can go without a job for two months.

Any income you get over the month you put in your savings account directly, it doesn't need to reside on your bank account: it would only muddle your € 1000. If you want to create specific saving targets for the money in your savings account you use [piggy banks](../../../explanation/financial-concepts/piggy-banks.md).

Two differences between zero-sum budgeting and Firefly III:

- You don't need to budget all the money.
- You separate the income from the budgeting and spending process

When I built Firefly III I was over 5K in debt and this helped me pay it off in less than a year: a monthly budget routine separated from my income, fixed amounts at the start of each month, all income to the savings account. Firefly III is geared towards predetermining your budgets, allocating funds to those budgets *only* and then spend it.

See [personal finances](../../../explanation/firefly-iii/background/personal-finances.md) for more information.

## Will you add AI to Firefly III?

The short answer is no. The long answer is also no. 

I've been playing around with AI and Firefly III extensively. Due to the hallucinatory nature of large language models it's absolutely impossible to get this to work reliably and accurately. Which are the two things I want Firefly III to be. 

I see of course the added value of trying to categorize transactions based on the data they contain. But this involves either sending your data to the cloud or running a model locally. The first option will not be added to Firefly III, and the second option is not feasible for many people.

Also, it would be nice to formulate [custom rules](../../../how-to/firefly-iii/features/rules.md) in natural language, but the hard work of parsing the language into a set of database entries that Firefly III can handle still comes to the developer. Unless of course, I accept that the system may hallucinate and do something else entirely. I've also been playing with this it seems very difficult to get AI to build complex rules, which is the only thing you would want to use it for in the first place.

Similarly, it is not impossible to get an AI to generate the search query you need based on your natural language input. But I don't need to add something to Firefly III to do that: you can build that using any AI tool yourself. 

Predicting financial records is notoriously difficult. Firefly III used to have a prediction engine, but it requires financial data (which LLMs can't use anyway) and more meta-data, which Firefly III does not save. Incidental expenses and holiday trips will always mess up the predictions, and there is a lot of data needed to get a feel for somebody's "life rhythm". AI's can't predict any better than a human can if the data is not there.

Apart from the death/hype spiral that AI is in right now, I do not believe that feeding Firefly III data into a large language model will add quality to the system. It will only add complexity and confusion.

Of course, you can still do this yourself. The Firefly III [API](../../../how-to/firefly-iii/features/api.md) and [webhooks](../../../how-to/firefly-iii/features/webhooks.md) feature allow you to feed anything into anything, and get results back. It should not be hard to add a suggestion engine to Firefly III by simply using a webhook to feed you the suggestions back.

## Why does Firefly III not support accounting feature X?

* Why isn't Firefly III correct, when it comes to expense accounts, revenues and other monetary concepts?
* Why do you say you support double-entry accounting, when technically you don't?

The Firefly III financial concepts such as accounts, transactions and what-not are based on what the developer thought was good financial practice when they built Firefly III. It's not entirely (or at all) based on what you would learn in accounting school. The developer is not an accountant, although he kind of pretends to be one. But many things an accountant would expect or find reasonable, may not work or may not be present in Firefly III.

On [GitHub](https://github.com/firefly-iii/firefly-iii/issues) there have been several discussions on this topic. It's important to know, before you start another one, that the core concepts and possibilities within Firefly III will not change. This includes those weird concepts that make it difficult to manage returns and refunds. "It's not a bug, it's a feature." The developer of Firefly III is well aware of the idiosyncrasies of the system, and pointing them out will not really change their mind. Sorry.

Right now, Firefly III has a lot of history and a lot of work yet to be done to make it ready for the future. Although better support for some common accountancy concepts is one of them, it is not particularly high on the list. Especially since this would also break the fundamental concepts of Firefly III as they are right now, even if they are wrong.

Since this is open source software however, you are in luck. If you feel there is room for "Firefly III - The Accountant Edition", feel free [to fork the project and build it](https://github.com/firefly-iii/firefly-iii/fork). The developer will happily link to your project from the Firefly III website and documentation. 

See [personal finances](../../../explanation/firefly-iii/background/personal-finances.md) for more information.

## When will you release version (the next version)?

As a rule, I do not comment on the release date of future version. I do this for free in my spare time, so it is difficult to predict when the next version will be released. I do have a [roadmap](https://roadmap.firefly-iii.org), that you can use to guesstimate when the next release will be out.

On the roadmap, find either Firefly III or the data importer. For the next patch, minor or major version, see if the GitHub tickets that you see (bugs, enhancements or features) are tagged with "fixed". If there are many, a new release is probably coming soon.

It is also common that a new release is followed by several smaller releases, to fix issues.

## Will Firefly III support PSD2?

* Will Firefly III have PSD2 integration?
* Will Firefly III will be compliant with PSD2?

Unfortunately, there is no such thing as "PSD2 integration" or "PSD2 compliance". The integration that exists in the real world isn't really feasible for Firefly III.

Firstly, the PSD2 regulation tells banks that they should open their APIs to authorized third parties. These authorized third parties must be registered at national financial institutes like "De Nederlandse Bank" (for the Netherlands). Such a registration is of course, impossible for Firefly III.

Each user would have to register their own Firefly III installation separately at the DNB. Keep in mind that this process is expensive. After this registration each bank must authorize you separately. To authorize yourself you will need an EDIAS compliant PSD2 digital certificate which can cost up to EUR 2000 without tax.

It would cost a lot of time and money to get registered and get the right digital certificates. And even then, these banks have manual processes to allow new API customers and there's no guarantee Firefly III would even make the cut.

So just getting registered in the context of the PSD2 is impossible for Firefly III.

Secondly. Even if Firefly III was a hosted service (it's not) and it could be registered (it can't be), there is still another problem: the PSD2 doesn't tell banks **how** to open up their APIs. Each bank has their own API with its own authentication flow, API endpoints, data-formats and queries. Literally no bank has the same API. So even if we could register Firefly III at the DBN (we can't) and we could get a PSD2 compliant certificate (we can't), and use the APIs (we can't) we would still have to develop separate applications for each single bank.

For applications and actual end users like Firefly III and the users that use it, the PSD2 regulation doesn't add any value at all, unfortunately.

## Firefly III should be a business!

* Why is there not a cloud version of Firefly III?
* Can I just pay you to host Firefly III for me?
* Where is Firefly III-as-a-Service?

I made Firefly III open source under the AGPL. Making Firefly III open source under the AGPL means that any change or addition to Firefly III must be open sourced under the AGPL as well. And for Firefly III to be business ready it needs a few changes. Those changes will allow anybody to host Firefly III for other people (as a service).

* Firefly III as it is right now requires strict database controls or something auditable outside of Firefly III, because any database administrator can see everybody's administrations. There are no controls in Firefly III against insider threat. That alone makes it totally unworthy of being used in a "hosted"-fashion.
* There is nothing in place to do proper user management, except some half-finished admin pages I built for the demo site 3 years ago. These pages are a part of Firefly III, so if Firefly III breaks so does your user admin.
* More security and scrutiny is required to ensure the tool is bug-free and hassle-free. It's pretty easy to lock yourself out, for example.
* There is no payment module or anything; you'd have to develop something on the side.
* The development pace is too high to offer a stable product. I like to tinker and I break stuff all the time. My users accept this, if begrudgingly. But if they pay AND it breaks? No dice.
* I built Firefly III specifically because self-hosting is the only way to guarantee your data is (fairly) safe. At least, out of the hands of nefarious corporations. So hosting a public instance for everybody to use is kind of exactly against that idea.

If you want to, feel free to host Firefly III yourself and sell user accounts. If it's you and a few friends, all the better. You can keep it low-key without needing strict privacy policies or payment services. If there's a kickback for me all the better ;). But make it larger, and I fear you run into the situation where you have to build a second system next to Firefly III to manage users, manage payments, etc. And the parts in Firefly III that you change must be open sourced.

This excludes all the (legal) work you'll need to have in place to manage other people's finances hassle-free.

Personally, right now I'm just not interested in turning this into a business. I'm as happy I can be with the way things are right now. Thank you.

