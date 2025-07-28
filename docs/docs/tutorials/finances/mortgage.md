# Manage your mortgage

There are multiple ways to manage your mortgage in Firefly III. The method illustrated on this page focuses on ensuring that all transactions are part of a budget, and categorized.

## Create a mortgage account

Your mortgage loans should be created as a liability account. You can do that on the Liabilities page. For more information, see [how to manage liabilities](../../how-to/firefly-iii/finances/liabilities.md).

!!! tip
    At this point it's optional but smart to buy a house to pay a mortgage on.

## Paying your mortgage

You can pay off your mortgage in several ways. Here are the most used ones.

### A mortgage payment which is entirely interest
To manage a mortgage payment that is entirely interest, you have three options. 

1. Create a withdrawal from an asset account to your bank's expense account. This is useful when you pay the interest entirely out of your own pocket. The transaction will not be recorded under your mortgage but the amount due of your mortgage will also not decrease (or increase).
2. Send the interest payment as a withdrawal from your asset account to your mortgage, and then create a second withdrawal from your mortgage to the bank. The difference with the previous method is that the transaction is *also* recorded under your mortgage account.
3. Send the interest payment as a withdrawal directly from your mortgage to your bank. This essentially results in a higher "amount due", but you can always correct this later (as detailed in item 2).

Depending on your own goals of tracking and granularity, you can either use a shared expense account for all interest payments (of all your liabilities) or create a unique expense account for this particular liability. You would be able to track this over time either way.

### Mortgage payment is split partly interest and part principal
* Create two transactions, or a single split transaction.
  * Interest is treated as above, from an asset account to an expense account.
  * The principal amount (that will reduce your mortgage), from your asset account to your Mortgage Liability account.

### Mortgage payment is only principal(extra payment to reduce mortgage)
* Create a transaction that goes from your asset account to your liability account.

## Budgets and Categories

It is your choice whether to have separate budgets/categories for interest/principle, or combined, or a mix. 

Depending on your choice, you can leverage the reports for insights over time. Personally, I use one budget for all mortgage transactions, but different categories to show my interest vs principle over time. 

## See the result

Over time, you'll see your mortgage liability account balance decrease as you make principal payments. You can also generate reports to see how much you've paid in interest versus principal over any time period.

## Would you like to know more?

- [How to manage liabilities](../../how-to/firefly-iii/finances/liabilities.md)
- [How to manage budgets](../../how-to/firefly-iii/finances/budgets.md)
- [How to organize transactions](../../how-to/firefly-iii/finances/transactions.md)
