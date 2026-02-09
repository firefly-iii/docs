# Firefly III personal finance questions

## The "running balance" column isn't correct

Sorry, this may happen sometimes. While I try to find the bug, you can correct it by running the following command:

```bash
# bash and shell:
php artisan firefly-iii:refresh-running-balance --force

# Docker
docker exec -it <firefly container name> php artisan firefly-iii:refresh-running-balance --force
```

Note: For the Docker command replace `<firefly container name>` with the correct container name.

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

### My bank automatically rounds transactions up, is that supported?

Some banks will help you save money by rounding amounts up, i.e. from 3.95 to 4.00. The difference is deposited in your savings account. 

Whether this is supported depends on how you import and manage transactions.

1. If you create transactions yourself, it's easy to add a split for each transaction. You can also use [this autosave script](https://github.com/JC5/autosave) to help you.
2. If you import transactions using CSV, GoCardless or another solution, it depends on your bank. Do they create these transactions for you? If so, you're in luck! If not, use [this autosave script](https://github.com/JC5/autosave) to help you.

### The charts are annoying!

Yes, they are. Especially in two distinct cases:

1. You regularly use two currencies with huge value differences. For example, the Euro versus the Hungarian Forint. Right now, it's about 1 to 380. 
2. You use two or more currencies which are different in value, but maybe not that much. Perhaps the Euro versus the British Pound versus the US Dollar

In all cases, the Y-axis will always focus on your primary currency (i.e. the Euro) but will scale up to the largest amount (the Hungarian Forint). This may lead to a confusing chart where you believe you're a millionaire but alas, you just own a lot of Forints.

This is not yet fixed, but I hope to make the charts better in a new release. Thanks for your patience!
