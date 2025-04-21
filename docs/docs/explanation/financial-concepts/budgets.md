# Budgets

## Introduction

First of all, if you want to do specific things with budgets, check out:

- [How-to manage budgets](../../how-to/firefly-iii/finances/budgets.md)
- [How-to configure cron jobs](../../how-to/firefly-iii/advanced/cron.md)

Budgets are an important part of Firefly III and an important way to keep track of your finances. In the core, a budget is just another identifier to link withdrawals (only withdrawals) together. Often used budgets are "Groceries" or "Bills". To make budgets more useful, you can assign a date range and an amount to a budget.

So, in Firefly III, you will get used to seeing budgets in the context of their name and the amount (left):

1. Groceries, 300 per month
2. Bills, 1200 per year

## Budget ranges

Firefly III supports the following budget ranges:

 - Daily
 - Weekly
 - Monthly
 - Quarterly
 - Every half year
 - Yearly

Firefly III does not support bi-weekly budgets. You will have to set weekly budget divided by two.

## Budget amounts

A budget can be set an amount. This amount needs to be set every period (see earlier). Firefly III can set these amounts automatically. You can also make these amounts overlap, setting BOTH a yearly amount and a monthly amount. This is tricky though because withdrawals will be subtracted from BOTH amounts when you do this.

A transaction with a budget influences the period's amount for a budget. In other words, when you set an amount of 100 for budget "Groceries" for the period 1-8 July, any transaction in that particular date range will lower that amount. At some point, your budget will be depleted.

You can still select the budget for transactions, and Firefly III will not complain, but you should keep track of these amounts and make sure you don't go over budget.

## Budgets and foreign currencies

Budgeting can get complex when you use multiple budgets, and multiple currencies. As a rule, budgets will only count the "native" currency of a transaction, and never the "foreign" amount of a transaction. That means a few things.

- A budget with the amount set to EUR 100 will not be influenced by transactions in USD, even when those transactions are linked to the budget. To do so, you must set a second amount for the same budget in USD, and those transactions will be counted towards that particular amount.
- A budget with the amount set to USD 100 will **not** be influenced by a transaction with a *foreign amount* in USD.

In short, only the native amount of a transaction will influence the budget. The foreign amount is not used for budgeting.

## Budgets and income

You cannot assign income to a budget to automatically increase the budgets amount. If you have more money available for the budget, you must increase the budget manually.

## The difference with categories

The difference with categories is that budgets are used to budget your expenses, and can be used to monitor your spending around a specific subject. Most people use categories to add more fine-grained details to a transaction, but categories cannot be "monetized".
