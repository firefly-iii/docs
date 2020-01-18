# Transaction and account types

Firefly III supports various transaction and account types. Here they are, listed in a table:

## Withdrawals

Withdrawals represent money that you spent that you can't get back easily unless the receiving party sends it to you.

To make cash withdrawals and use the cash account (displayed as "(cash)"), leave the destination account field *empty*.

| From          | To              | Example                                          |
|---------------|-----------------|--------------------------------------------------|
| Asset account | Expense account | A normal expense, like in a shop.                |
| Asset account | Loan            | Pay back the loan using your checking account.   |
| Asset account | Debt            | Pay back the debt using your checking account.   |
| Asset account | Mortgage        | Pay your mortgage using your checking account.   |
| Asset account | Cash account    | Do a cash withdrawal at an ATM                   |
| Loan          | Expense account | Interest payment to your loanshark.              |
| Debt          | Expense account | Interest payment to the debt collector.          |
| Mortgage      | Expense account | Interest payment or bank fees for your mortgage. |

## Deposits

Deposits represent money that you received from others.

You can make cash deposits and use the cash account (displayed as "(cash)"), leave the source account field *empty*.

| From            | To              | Example                                                       |
|-----------------|-----------------|---------------------------------------------------------------|
| Revenue account | Asset account   | Salary or income.                                             |
| Revenue account | Loan            | A payment into your loan (decreasing it) by a third party.    |
| Revenue account | Debt            | A payment into your debt (decreasing it) by a third party.    |
| Revenue account | Mortgage        | A correction by your bank or fees waived.                     |
| Cash account    | Asset account   | Cash deposit at an ATM.                                       |
| Loan            | Asset account   | Take money from a loan to spend on stuff.                     |
| Debt            | Asset account   | Increase your debt by transferring money to your own account. |
| Mortgage        | Asset account   | Enlarge your mortgage to remodel the kitchen.                 |

## Transfers

(todo)

## Opening balance

(todo)

## Reconciliation

(todo)