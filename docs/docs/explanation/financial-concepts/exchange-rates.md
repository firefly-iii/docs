# Exchange rates

!!! warning
    This feature is available in Firefly III v6.2.0 and later

Firefly III can dynamically convert amounts from one currency into another using exchange rates. You can set the exchange rates yourself or allow Firefly III to download them for you. 

This is useful for some of the charts that Firefly III shows you. All monetary amounts will be calculated back to your base currency.

## Initialization

If you run a new Firefly III installation after version 6.2.0, native amounts will automatically be calculated whenever necessary. If you were already running Firefly III before version 6.2.0 came out, you will need to run the following command to calculate all native amounts. This ensures that your database is complete.

```bash
# self managed
php artisan firefly-iii:recalculate-native-amounts

# docker
docker exec -it [container-id] php artisan firefly-iii:recalculate-native-amounts
```

## Changing your base (default) currency

Firefly III only converts amounts back to your base (default) currency. You can set this currency on the `/currencies` page. Other conversions are not supported. For example, if your base currency is the Euro, you cannot see your British Pounds in US Dollars. The conversion will go back to the Euro only.

If you change your default currency, all amounts will have to be recalculated. Firefly III will **not do this** by default. To make sure all foreign currency amounts are calculated back to your new default currency, you must run the following command:

```bash
# self managed
php artisan firefly-iii:recalculate-native-amounts

# docker
docker exec -it [container-id] php artisan firefly-iii:recalculate-native-amounts
```

## Default exchange rate

If Firefly III has no exchange rate data for either currency or when the conversion hasn't been calculated yet, the exchange rate is 1.

## Conversion versus "foreign amount"

Firefly III also supports the "foreign amount" field.. If you set amount here it will overrule the converted amount. Assumes you know what the converted amount is.

## Downloading exchange rates

!!! info
    This only works for some of the default system provided currencies because free exchange rate data is hard to come by.

Set environment variable. Run cron job. See data.

## Setting your own rates

Set your own rate for each currency. Use a date. Firefly III converts.
