# What Firefly III isn't

Even more important than all the stuff Firefly III [can do for you](../about-firefly-iii/introduction.md) is the list of stuff it **can't** do for you. If you're looking for a personal finance tool to do this for you, you may want to consider using another tool. This is unfortunate, but the result of some architecture and design choices. My apologies in advance, if Firefly III isn't what you're looking for.

Sometimes I can't or won't implement a certain feature, or change how something works. Let me reassure you this isn't personal or something. Also keep in mind that instead of offering options for everything I want Firefly III to have [sensible defaults](https://en.wikipedia.org/wiki/Convention_over_configuration).

But remember, there is a lot of things that you *can* do with Firefly III!

### YNAB-style zero based budgeting

Basically, YNAB allows you to assign each of your coin to a "permanent" budget, that you would replenish once your salary arrives. This way, zero based budgeting is about giving all your coins a goal and leaving no coin behind. Since Firefly III is fundamentally different, it will not be possible for Firefly III to support this. If you want, you can read my opinion on [zero based budgeting](zero-based-budgeting.md).

### Stock and portfolio management

Unfortunately you won't be able to manage your stocks or portfolio with Firefly III. Use something like [Portfolio Performance](https://www.portfolio-performance.info/). The net worth you track in Firefly III would then exclude your portfolio, but you can consider creating an asset account and adding profit and losses as transactions.

### Business finances, small business accounting, payroll management

Most features in Firefly III are geared towards personal finances. You should be able to get enough information for an invoice out of the API, but other features will not be added.

### Advanced accounting and asset management

Some features from advanced programs like GNUCash don't work in Firefly III. It's hard to add "objects" to Firefly III. The monetary value of your house can't be added to your net worth (to compensate for your mortgage). If you want to do this, use [GNUCash](https://gnucash.org/) instead.

### Prediction, forecasting, future gazing

Firefly III won't support the ability to predict expenses, give you a look into the future or do financial planning. The present is hard enough to manage. Although features like recurring transactions and some smart calculations would help, I find that quickly doing some math in Excel or Google Sheets works a lot better than whatever I could come up with.

### Automated currency conversion so everything is in Euro's or dollars

It won't be possible to see multi-currency transactions or accounts in a single default currency, by using exchange rates to convert the amounts. The result will always be inaccurate because banks often have steeper rates than the market. That makes Firefly III inaccurate and I hate that. So, if you submit a transaction in multiple currencies (this is possible) Firefly III won't convert the rates for you.

I am looking for ways to make it easier to look at charts with multiple currencies, where one currency is worth a lot compared to the other one. 

### Sub-categories, sub-budgets, sub-accounts

Firefly III knows many ways to organise your data, but there are no "sublevels". Instead, most objects like piggy banks or bills can be divided in "groups" which serve a similar purpose. There are also tags to make things very fine-grained.

### Share your administration

Firefly III is a multi-user environment. But each user is strictly separated from other users. If you want to share your administration you must commit the capital sin of sharing your password. I am working on a better way to manage this however, and I ask for your patience.

### Changing the monthly cycle to another day of the month.

A month goes from the 1st to the last day of the month. You can't tell Firefly III to go from the 23rd to the 22nd of the next month.

### More complicated rules, like Boolean logic, copy/pasting values, etc

The rule engine could be a lot more complex. Things like conditional rules, if-then-else, regular expressions or variables. These are all technically possible. However, the rule engine must also be usable and easy to be introduced to. Most rule engines, even the filters in GMail, are very complex because of user demands and as a result, nobody uses them anymore.

For Firefly III, the current features of the engine will not be expanded. If you have a suggestion, please consider that your suggested trigger or action is simple.
