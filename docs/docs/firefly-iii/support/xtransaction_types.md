# Transaction types

Firefly III supports various transaction and account types. Here they are, listed in a table:

## Withdrawals

Withdrawals represent money that you spent that you can't get back easily unless the receiving party sends it to you.

To make cash withdrawals and use the cash account (displayed as "(cash)"), leave the destination account field _empty_.

| From | To | Example |
| :--- | :--- | :--- |
| Asset account | Expense account | A normal expense, like in a shop. |
| Asset account | Loan (you are [debtor](../concepts/accounts.md#liabilities)) | Pay back the loan using your checking account. |
| Asset account | Debt (you are [debtor](../concepts/accounts.md#liabilities)) | Pay back the debt using your checking account. |
| Asset account | Mortgage (you are [debtor](../concepts/accounts.md#liabilities)) | Pay your mortgage using your checking account. |
| Asset account | Loan (you are [creditor](../concepts/accounts.md#liabilities)) | You loan somebody extra money. |
| Asset account | Debt (you are [creditor](../concepts/accounts.md#liabilities)) | You loan somebody extra money. |
| Asset account | Mortgage (you are [creditor](../concepts/accounts.md#liabilities)) | You loan somebody extra money. |
| Asset account | Cash account | Do a cash withdrawal at an ATM |

## Deposits

Deposits represent money that you received from others.

You can make cash deposits and use the cash account (displayed as "(cash)"), leave the source account field _empty_.

| From | To | Example |
| :--- | :--- | :--- |
| Revenue account | Asset account | Salary or income. |
| Revenue account | Loan (you are [debtor](../concepts/accounts.md#liabilities)) | A payment into your loan (decreasing it) by a third party. |
| Revenue account | Debt (you are [debtor](../concepts/accounts.md#liabilities)) | A payment into your debt (decreasing it) by a third party. |
| Revenue account | Mortgage (you are [debtor](../concepts/accounts.md#liabilities)) | A correction by your bank or fees waived. |
| Revenue account | Loan (you are [creditor](../concepts/accounts.md#liabilities)) | You're being paid back your loan. |
| Revenue account | Debt (you are [creditor](../concepts/accounts.md#liabilities)) | You're being paid back your loan. |
| Revenue account | Mortgage (you are [creditor](../concepts/accounts.md#liabilities)) | You're being paid back your loan. |
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

| From | To |  |
| :--- | :--- | :--- |
| Asset account | Hidden reconciliation account | Reconciling an asset account by removing money from it. |
| Hidden reconciliation account | Asset account | Reconciling an asset account by adding money to it. |



