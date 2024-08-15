# Rule expressions

!!! warning Firefly III v6.1.20
    This feature is enabled in Firefly III v6.1.20 and later

Firefly III features a powerful [rule engine](../../how-to/firefly-iii/features/rules.md) that comes with an [expression language](../../how-to/firefly-iii/features/expressions.md) to execute actions on your transactions.

!!! info "Full syntax"
    The full syntax of the expression language is documented in the [Symfony documentation](https://symfony.com/doc/current/reference/formats/expression_language.html).

The expression language features something called "variables" that you can use in your expression. For example:

```plaintext
=description~notes
```

This will join the description and the notes together. A few examples can be found on the pages linked earlier in the text. But then the question becomes, which variables can I use? Well, here they are.

## Text fields

- `notes`
- `transaction_group_title`
- `description`
- `budget_name`
- `category_name`
- `tags`

Use these fields to refer to specific fields in the transaction

## Account and amount fields

Amount fields:

- `amount`
- `currency_code`
- `currency_name`
- `currency_symbol`
- `currency_decimal_places`
- `foreign_amount`
- `foreign_currency_code`
- `foreign_currency_name`
- `foreign_currency_symbol`
- `foreign_currency_decimal_places`

Account fields: 

- `source_account_id`
- `source_account_name`
- `source_account_iban`
- `source_account_type`
- `destination_account_id`
- `destination_account_name`
- `destination_account_iban`
- `destination_account_type`

## Dates

- `created_at`
- `updated_at`
- `group_created_at`
- `group_updated_at`
- `date`
- `interest_date`
- `payment_date`
- `invoice_date`
- `book_date`
- `due_date`
- `process_date`

These fields contain specific transaction dates, or "" when empty.
