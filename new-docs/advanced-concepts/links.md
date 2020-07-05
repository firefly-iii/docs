# Links

More often than not a transaction isn't just "a transaction" but a connected to some other transactions. Maybe you've been reimbursed money by your boss. Maybe an expense is paid back to you by an friend. Or perhaps a friend paid you back for something or other.

![Inward link](../.gitbook/assets/links1.png)

In Firefly III you can store these links between transactions. By default, four link types are available. You can see these under Administration &gt; Transaction links configuration.

* Is paid for by
* Is refunded by
* Is reimbursed by
* Relates to

These links work both ways. When transaction A has been refunded by transaction B, B is noted to refund A.

![Outward link](../.gitbook/assets/links2.png)

You can also add your own link types if you want to.

To make a link with another transaction, go to the overview of a transaction and use the "Link transaction" button under the transaction. If the transaction has been split, select the correct split to link. Select the correct type of link from the dropdown and select the transaction to be linked. Optionally you can add some comments.

You can remove or reverse a link once it has been created.

## Use of links

It is important to realise that links don't _do_ anything. They won't change your transactions, or subtract amounts or anything like that.

## Screenshots

![The &quot;Lunch with client&quot; expense is reimbursed by your boss in transaction &quot;Lunch reimbursement&quot;.](../.gitbook/assets/links-inward.png)

![Vice versa, &quot;Lunch reimbursement&quot; reimburses you for &quot;Lunch with client&quot;.](../.gitbook/assets/links-outward.png)

![Use this modal to create a new link](../.gitbook/assets/links-modal.png)

![You can delete the link or make the transactions switch positions.](../.gitbook/assets/links-change.png)

