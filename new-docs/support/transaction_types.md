# Transaction types

Firefly III supports various transaction and account types. Here they are, listed in a table:

## Withdrawals

Withdrawals represent money that you spent that you can't get back easily unless the receiving party sends it to you.

To make cash withdrawals and use the cash account (displayed as "(cash)"), leave the destination account field _empty_.

| From | To | Example |
| :--- | :--- | :--- |
| Asset account | Expense account | A normal expense, like in a shop. |
| Asset account | Loan | Pay back the loan using your checking account. |
| Asset account | Debt | Pay back the debt using your checking account. |
| Asset account | Mortgage | Pay your mortgage using your checking account. |
| Asset account | Cash account | Do a cash withdrawal at an ATM |
| Loan | Expense account | Interest payment to your loanshark. |
| Debt | Expense account | Interest payment to the debt collector. |
| Mortgage | Expense account | Interest payment or bank fees for your mortgage. |

## Deposits

Deposits represent money that you received from others.

You can make cash deposits and use the cash account (displayed as "(cash)"), leave the source account field _empty_.

| From | To | Example |
| :--- | :--- | :--- |
| Revenue account | Asset account | Salary or income. |
| Revenue account | Loan | A payment into your loan (decreasing it) by a third party. |
| Revenue account | Debt | A payment into your debt (decreasing it) by a third party. |
| Revenue account | Mortgage | A correction by your bank or fees waived. |
| Cash account | Asset account | Cash deposit at an ATM. |
| Loan | Asset account | Take money from a loan to spend on stuff. |
| Debt | Asset account | Increase your debt by transferring money to your own account. |
| Mortgage | Asset account | Enlarge your mortgage to remodel the kitchen. |

## Transfers

Transfers are internal transactions that don't influence your bottom line.

| From | To | Example |
| :--- | :--- | :--- |
| Asset account | Asset account | A transfer from checking to saving or vice versa. |
| Loan | Debt | A transfer between your liabilities. |
| Loan | Mortgage | A transfer between your liabilities. |
| Loan | Loan | A transfer between your liabilities. |
| Debt | Debt | A transfer between your liabilities. |
| Debt | Mortgage | A transfer between your liabilities. |
| Debt | Loan | A transfer between your liabilities. |
| Mortgage | Debt | A transfer between your liabilities. |
| Mortgage | Mortgage | A transfer between your liabilities. |
| Mortgage | Loan | A transfer between your liabilities. |

## Opening balance

Opening balance transactions are special transactions that occur when a new account has an initial balance. The money is drawn from a magic account that you can't see. Edit the account itself to change the opening balance.

| From | To | Example |
| :--- | :--- | :--- |
| Asset account | Hidden opening balance account | Initial negative balance of an account. |
| Loan | Hidden opening balance account | Initial negative balance of an account. |
| Debt | Hidden opening balance account | Initial negative balance of an account. |
| Mortgage | Hidden opening balance account | Initial negative balance of an account. |
| Hidden opening balance account | Asset account | Initial positive balance of an account. |
| Hidden opening balance account | Loan | Initial positive balance of an account. |
| Hidden opening balance account | Debt | Initial positive balance of an account. |
| Hidden opening balance account | Mortgage | Initial positive balance of an account. |

## Reconciliation

These transactions are also magical, and get created when you reconcile an asset account. It only works on those too.

| From |  |  |
| :--- | :--- | :--- |
| Asset account | Hidden reconciliation account | Reconciling an asset account by removing money from it. |
| Hidden reconciliation account | Asset account | Reconciling an asset account by adding money to it. |

