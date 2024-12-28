# Exchange rates

!!! warning
    This feature is available in Firefly III v6.2.0 and later

Firefly III can dynamically convert amounts from one currency into another using exchange rates. You can set the exchange rates yourself or allow Firefly III to download them for you. 

This is useful for some of the charts that Firefly III shows you. All monetary amounts will be calculated back to your base currency.

## Configuration

Firefly III supports two options that allow you to use native amounts and exchange rates in the application. The following variables are `false` by default.

1. `ENABLE_EXCHANGE_RATES=true`. This environment variable enables the feature in the first place. It will not be available otherwise. Because this feature is fairly new, it is disabled by default.
2. `ENABLE_EXTERNAL_RATES=true`. Firefly III will not download exchange rates from the internet unless you allow it to. Exchange rates can only be downloaded for the default currencies in Firefly III. They will be downloaded from a Firefly III Azure bucket.

## Initialization

If you turn this on, native amounts will automatically be calculated whenever necessary. This happens when Firefly III boots. However, you may want to initialize this yourself if you want to. 

## Recalculate native amounts

Use the following command to recalculate all native amounts. This may take some time if you have a lot of transactions in other currencies than your default currency.

```bash
# self managed
php artisan correction:recalculate-native-amounts

# docker
docker exec -it [container-id] php artisan correction:recalculate-native-amounts
```

## Changing your base (default) currency

Firefly III only converts amounts back to your base (default) currency. You can set this currency on the `/currencies` page. Other conversions are not supported. For example, if your base currency is the Euro, you cannot see your British Pounds in US Dollars. The conversion will go back to the Euro only.

If you change your default currency, all amounts will have to be recalculated. This may take some time if you have a lot of transactions in other currencies than your default currencies. 

You can do this manually too using the command mentioned earlier.

## Default exchange rate

If Firefly III has no exchange rate data for either currency or when the conversion hasn't been calculated yet, the exchange rate is 1.

## Changing the exchange rates

If you (significantly) change the exchange rates, you may want to recalculate the native amounts using the command mentioned earlier. This is not necessary, but it may be useful.

## Conversion versus "foreign amount"

Firefly III transactions also have a "foreign amount"-field. If you set a foreign amount in your default currency, that amount will be used instead of any calculated amount. Firefly III assumes that you know better what the converted amount is. This is especially useful when you have a bank that has steep exchange rates.

## Downloading exchange rates

!!! info
    This only works for the default system provided currencies because free exchange rate data is hard to come by.

Make sure that `ENABLE_EXTERNAL_RATES=true` and run the [cron job](../../how-to/firefly-iii/advanced/cron.md) daily.

## Setting your own rates

Go to the `/exchange-rates` and find your currency. You can set any rate you want to, in both directions.
