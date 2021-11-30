# Firefly III Data Importer documentation

Welcome to the documentation of the Firefly III Data Importer, the nr. 1 tool to import from your bank into Firefly III.

This data importer is a universal importer, which means it can import from any sources you can think of. And if it can't, well then drop me a line and make me add your favorite data source!

## Introduction

Because it is very difficult for a poor open source developer like me to build custom-made secure connections to every single bank out there, I've called in the help from two companies that already solved that enigma. They cannot get enough credit:

- [Salt Edge](https://www.saltedge.com/) is a fintech solution whose Spectre API supports over [5000 banks](https://www.saltedge.com/products/spectre/countries)
- [Nordigen](https://nordigen.com/) is a fintech solution who's API supports over [2100 banks](https://nordigen.com/en/coverage/)

If those institutes do not support your financial institution, be sure you can still import CSV files. Other formats are still on the roadmap. That should cover your needs.

Should you be wondering: YNAB and bunq are [discontinued](https://github.com/firefly-iii/firefly-iii/issues/5161). Sorry about that.

## Installation

The Firefly III Data Importer (or **FIDI** for short) is a tool you need to install next to Firefly III itself. Several options are available:

- There is [a Docker container](install/docker.md) you can run in your local network.
- You can [download the source](install/self_hosted.md) and install it yourself.
- You can use [the cloud instance](install/public.md) to have an install-less experience.

## Usage

To use the **FIDI**, you need any of the following things:

- API keys from [Salt Edge](https://www.saltedge.com/) / Spectre, if you want to use their services. Register at [Spectre](https://www.saltedge.com/client_users/sign_up).
- API keys from [Nordigen](https://nordigen.com/), if you want to use their services instead. Register with [Nordigen](https://ob.nordigen.com/).

If you wish to use neither, you need a CSV file from your bank. How and where you download it depends on the bank entirely.

### JSON file

Optionally, FIDI accepts a JSON file with import configuration values. If you're just starting out, ignore this bit.

## And then what?

Your transactions can be messy and confusing once imported. It can also be difficult to import to import a lot of data at once. Be sure to read the page 🐤 [My First Import](help/my_first_import.md).
