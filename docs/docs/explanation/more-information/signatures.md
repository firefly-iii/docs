# Signed release files

Both the Firefly III and Data Importer releases are digitally signed. 

- [Firefly III releases](https://github.com/firefly-iii/firefly-iii/releases)
- [Data importer releases](https://github.com/firefly-iii/data-importer/releases)

Each release is offered in two variants: A `zip` and a `tar.gz` file. These files are identical and contain the whole release and all meta files, dependencies, etc.

## Verify the hash

Available with each release is a file that ends with `.sha256`. There is one such file for both the `zip` and the `tar.gz` file. This file contains the SHA256 hash of the release file. This allows you to verify the release's integrity.

To do so, download both the release file and the `.sha256` file. Then, run the following command:

```bash
# Should return: "FireflyIII-v%FFVERSION.zip: OK"
sha256sum -c FireflyIII-v%FFVERSION.zip.sha256

# Should return: "DataImporter-v%IMPORTERVERSION.zip: OK"
sha256sum -c DataImporter-v%IMPORTERVERSION.zip.sha256

# alternative commands:
shasum -a 256 -c FireflyIII-v%FFVERSION.zip.sha256
shasum -a 256 -c DataImporter-v%IMPORTERVERSION.zip.sha256
```

### Why should I verify the integrity?

This allows you to verify that you have downloaded the file right. It's not much of a problem these days, but back in the old days of intermittent connections, this was a valuable step to ensure data integrity.

## Verify the signature

To make sure that the files aren't actually changed by a nefarious hacker, you can also verify the digital signature of the release. To do so, first download the relevant `.asc`-file, like `FireflyIII-v%FFVERSION.zip.asc`.

```bash
gpg --verify FireflyIII-v%FFVERSION.zip.asc FireflyIII-v%FFVERSION.zip
gpg --verify DataImporter-v%IMPORTERVERSION.zip.asc DataImporter-v%IMPORTERVERSION.zip
```

It should say `Good signature`.

### Why should I verify the signature?

This allows you to verify that the file is actually from the Firefly III project. This is a more secure way of verifying the integrity of the release. It's already harder to change both the release and the hash file, but if an attacker has access to the GitHub CDN, it's not impossible. However, forging a signature is impossible. 

## Releases (public key)

Here is the public key with which the releases are signed. It is also available [on a key server](https://keys.openpgp.org/search?q=A9D6BE866CEE3775854B1F96910CF2B5E8B6CC6E).

```plaintext
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
hjpKFilMeZp2wOQS
=Hget
-----END PGP PUBLIC KEY BLOCK-----

```


