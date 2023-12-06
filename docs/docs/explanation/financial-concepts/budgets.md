# Budgets

If you want to do specific things with budgets, check out:

- [How-to manage budgets](../../how-to/firefly-iii/finances/budgets.md)
- [How-to configure cron jobs](../../how-to/firefly-iii/advanced/cron.md)

Budgets are an important part of Firefly III and an important way to keep track of your finances. Budgets are also complex. In the core, a budget is just another identifier to link withdrawals (only withdrawals) together. Often used budgets are "Groceries" or "Bills". To make budgets more useful, you can assign a date range and an amount to a budget.

1. Groceries, 300 per month
2. Bills, 1200 per year

Firefly III can set these amounts automatically. You can also make these amounts overlap, setting BOTH a yearly amount and a monthly amount. This is tricky though because withrawals will be subtracted from BOTH amounts when you do this.

A transaction with a budget influences the period's amount for a budget. In other words, when you set an amount of 100 for budget "Groceries" for the period 1-8 July,
any transaction in that particular date range will lower that amount. At some point, your budget will be depleted.

You can still select the budget for transactions, and Firefly III will not complain, but you should keep track of these amounts and make sure you don't go over budget.
