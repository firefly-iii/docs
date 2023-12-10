# How to manage liabilities

( TODO write me)

It depends a bit how you want to "start" the liability, but the management


Firefly III has two types of liabilities.

1. Liabilities where you owe an amount
2. Liabilities where somebody owes you money

Credit cards are not considered a liability.


!!! info
Although you can set the interest rate for a liability, Firefly III will not automatically calculate the interest due.

Firefly III has three types of liabilities:

- Loan
- Debt
- Mortgage

Once created Firefly III keeps track of the amounts for you. Here are the two scenarios and how they work in Firefly III.

## You owe money

Use the "new liability"-form to create a new liability.

### Initial amount

If necessary, set an amount under "I owe amount". The amount you set here will be yours to pay back, but it will not be available in your checking account(s). It's a amount that needs to be paid back, but the money is already spent (for example on a house or a car).

You can also leave this field empty. In that case, save the account. You will see that the "amount due" is zero. The amount you owe must be created by creating a withdrawal from the new liability to an expense account. For example, "money for new car", from the liability to the car dealership.

### I need to borrow more money

Create new withdrawals from the liability to your checking account or directly to an expense account (like a shop).

### I am paying back money

Transfer money from your checking account into the liability.

### Interest payments are increasing the amount due.

Create a withdrawal from the liability to a new expense account that you (could) call "interest payments".

### Somebody is helping me pay off the loan

Create a deposit from your generous benefactor to the liability

## I am owed money

Use the "new liability"-form to create a new liability.

### Initial amount

If necessary, set an amount under "I am owed amount". The amount you set here will be the amount you are owed. There is no transaction history for this amount, the debt you're owed is just there.

You can also leave this amount empty, and then create a withdrawal from your checking account into the liability. This represents the amount you are owed. You can also create multiple transactions like this. Each transaction must be coming from one of your asset accounts and go into the liability.

### I will loan them more money

Create a withdrawal from your asset account into the liability.

### They are paying me back

Create a deposit from the liability into your asset account.

### I am charging interest, or amount I am owed increases for some other reason

Create a deposit from a (new) revenue account into the liability. For example, a newly created revenue account called "interest payments".

### I am forgiving part of the loan. I do not expect the money back.

Create a withdrawal from the liability into a (new) expense account. Call it (for example) "loan forgiveness".
