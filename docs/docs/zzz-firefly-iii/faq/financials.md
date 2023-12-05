# Managing your finances

## What do I do with people who pay me back?

Let's say you have a budget for "Going out", worth € 100. You go out with some friends, and you offer to pay the bill, expecting your friends to pay you back later. The total bill is € 120 with your three friends owing you € 90 in total. So although you spent € 120 (overspending your budget with € 20), your actual costs are a mere € 30. What to do?

It's important that Firefly III won't do anything. You can't correct your budget with income, so your budget will appear to have been overspent with € 20. But you can correct this yourself. How exactly is entirely up to you.

1. You increase the budget with € 90 to a total of € 190. This means you still have € 70 to spend (€ 190 - € 120) but your budget is changed.
2. You edit the expense, so it lists € 30 instead of € 120. This means you don't have to change the budget, but also means you ignore the deposits from your friends.

It's up to you what you do. _Personally_, I do nr. 2. It means that Firefly III shows me what I actually spent, and my own income isn't skewed by what people pay me back.

## How do I handle (partial) refunds?

You may get a partial refund from a vendor. If you add this money as a deposit, the original transaction will not change. Your budgets will also still be affected. It's up to you to manage this, according to your preference. The expense account and revenue account cannot be merged. You cannot create a split transaction of different types (one withdrawal, one deposit).

1. Update the original transaction to be the amount minus the refund. That way, it's like you never spent the money.
2. Add a deposit for the refund, and increase your budget to match the new room for expenses you just created. It will still show up in reports as if you spent more than you did.

Generally, the first method is recommended when the vendor makes a mistake. The second one is recommended when you overspent.

## How do I handle a double booking?

If you get a double booking, it's easiest to simply remove the second transaction from Firefly III, or never create it in the first place. If you delete an imported transaction, Firefly III will not recreate it during the next round of imports.

## What should I do when I close a real life asset account?

To close an account in Firefly III, do the following.

1. The balance must be zero by transferring out or withdrawing the final balance.
2. Edit the account (look for the pencil icon or use the ellipsis-menu) and remove the checkbox next to **Active**.

You can find the inactive asset account on a special page: `/inactive-accounts/asset`.

## What do I do with cashback actions?

When you buy a new 500 TV, and they give you a 50 cashback. What do you do?

1. Register an 500 withdrawal for the TV and a 50 deposit for the cashback.
2. Register just the withdrawal at 450.

Both options are valid. You can't merge these in one transaction. But less is more, and I suggest the second option. That way you have less transactions to manage and the price you actually paid for the television is reflected in the transaction. 

When you use the cashback to buy something else at a discount, apply the difference in the second transaction. So if you were able to buy a 90 blender for 40 with the cashback from the TV, make a withdrawal for 40.

## How do I set the balance of an account?

You **don't**. You can only influence the balance of an account by actually making or importing transactions that influence the balance. You can't just change the balance of the account.

### But then what's the opening balance for?

The opening balance is meant to set the balance of an account at the **start** of your Firefly III administration. That means that NO earlier transactions exist in your administration, and the opening balance reflects that. It summarizes all the transactions that happened before you started using Firefly III.
