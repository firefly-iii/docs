# Development

If you want to contribute to the development of Firefly III, first of all: thank you!

Please read the [contribution rules](../../explanation/support.md) and please also read about [Firefly III's architecture](../../explanation/more-information/architecture.md).

## Languages

### Firefly III

- Firefly III is written in PHP %PHPVERSION.
- The current, v1-layout uses Twig templates (HTML + PHP dialect), Vue2 and plain Javascript
- The new, v2-layout uses Blade (PHP) and AlpineJS.

### Data Importer

- The Data Importer is written in PHP %PHPVERSION
- The layout uses Blade templates and AlpineJS.

## Development environment

For PHP, you're on your own. Use [Laravel Homestead](https://laravel.com/docs/11.x/homestead) or [Vagrant](https://www.vagrantup.com/) to set up a VM, or use a custom setup with Apache or nginx. Personally, I use a custom-built Vagrant vm.

## Code structure

This chapter details the code structure, so you know where to start.

### Frontend

Firefly III features two workspaces, detailed in `package.json`. Here you also find references to where the sources are, and the `package.json` details the commands you can run.

The data importer does not feature multiple layouts, but it does have a workspace reference in the `package.json`-file. There is only one workspace (only the `v2`-layout is used) and the sources are listed there. 

### Backend

The code structure for the backend is explained on the [architecture](../../explanation/more-information/architecture.md) page. The data importer has a similar structure. 

### API

Firefly III has an API. The code is in the `/app/API`-directory. The routes and structure of the API are listed in `routes/api.php`. 

## Building Firefly III

To build the frontend of Firefly III, run the following commands.

```text
npm install
npm run prod  --workspace=v1
npm run build --workspace=v2
```

To install the dependencies, run:

```text
composer update --no-dev --no-scripts --no-plugins
```
