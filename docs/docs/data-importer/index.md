# Firefly III Data Importer documentation

Welcome to the documentation of the Firefly III Data Importer, the nr. 1 tool to import data into Firefly III.


## Introduction

This data importer is a universal importer, which means it can import from any sources you can think of. And if it can't, well then drop me a line and make me add your favorite data source. 

The data import supports a variety of sources:

- You can import **CSV files** from *any* source: your bank, YNAB, Tiller or any other source of financial data.
- You can import from your bank directly using a secure connection.

Because it is very difficult for a poor open source developer like me to build custom-made secure connections to every single bank out there, I've called in the help from two companies that already solved that enigma. They cannot get enough credit:

- [Salt Edge](https://www.saltedge.com/) is a fintech solution whose Spectre API supports over [5000 banks](https://www.saltedge.com/products/spectre/countries).
- [Nordigen](https://nordigen.com/) is a fintech solution whose API supports over [2100 banks](https://nordigen.com/en/coverage/).

If those institutes do not support your financial institution, be sure you can still import CSV files. Other formats are still on the roadmap. That should cover your needs.

!!! info
    Read more about [Salt Edge / Spectre](install/nordigen-spectre.md) and [Nordigen](install/nordigen-spectre.md) before you use their services.

## Installation

The Firefly III Data Importer (or **FIDI** for short) is a tool you need to install next to Firefly III itself. Several options are available:

- There is [a Docker container](install/docker.md) you can run in your local network.
- You can [download the source](install/self_hosted.md) and install it yourself.
- You can use [the cloud instance](install/public.md) to have an install-less experience.

## Usage

To use **FIDI**, you need any of the following things:

- API keys from [Salt Edge](https://www.saltedge.com/) / Spectre, if you want to use their services. Check out the [guidelines](install/nordigen-spectre.md).
- API keys from [Nordigen](https://nordigen.com/), if you want to use their services instead. Check out the [guidelines](install/nordigen-spectre.md)

If you wish to use neither, you need a CSV file from your bank. How and where you download it depends on the bank entirely.

### JSON file

Optionally, FIDI accepts a JSON file with import configuration values.

## And then what?

Your transactions can be messy and confusing once imported. It can also be difficult to import a lot of data at once. Be sure to read the page 🐤 [My First Import](help/my_first_import.md).
