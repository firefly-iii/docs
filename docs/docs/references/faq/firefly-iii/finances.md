# Firefly III personal finance questions

## What should I do when I close a real life asset account?

To close an account in Firefly III, do the following.

1. The balance must be zero by transferring out or withdrawing the final balance.
2. Edit the account (look for the pencil icon or use the ellipsis-menu) and remove the checkbox next to **Active**.

You can find the inactive asset account on a special page: `/inactive-accounts/asset`.

See [the tutorial on how process a refund](../../../tutorials/finances/refund.md).

## How do I set the balance of an account?

You **don't**. You can only influence the balance of an account by actually making or importing transactions that influence the balance. You can't just change the balance of the account.

### But then what's the opening balance for?

The opening balance is meant to set the balance of an account at the **start** of your Firefly III administration. That means that NO earlier transactions exist in your administration, and the opening balance reflects that. It summarizes all the transactions that happened before you started using Firefly III.

### The charts are annoying!

Yes, they are. Especially in two distinct cases:

1. You regularly use two currencies with huge value differences. For example, the Euro versus the Hungarian Forint. Right now, it's about 1 to 380. 
2. You use two or more currencies which are different in value, but maybe not that much. Perhaps the Euro versus the British Pound versus the US Dollar

In all cases, the Y-axis will always focus on your primary currency (i.e. the Euro) but will scale up to the largest amount (the Hungarian Forint). This may lead to a confusing chart where you believe you're a millionair but alas, you just own a lot of forints.

This is not yet fixed, but I hope to make the charts better in a new release. Thanks for your patience!