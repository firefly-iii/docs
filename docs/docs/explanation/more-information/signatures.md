# Signed release files

Both the Firefly III and Data Importer releases are digitally signed. 

- [Firefly III releases](https://github.com/firefly-iii/firefly-iii/releases)
- [Data importer releases](https://github.com/firefly-iii/data-importer/releases)

Each release is offered in two variants: A `zip` and a `tar.gz` file. These files are identical and contain the whole release and all meta files, dependencies, etc.

## Verify the hash

Available with each release is a file that ends with `.sha256`. There is one such file for both the `zip` and the `tar.gz` file. This file contains the SHA256 hash of the release file. This allows you to verify the releases integrity.

To do so, download both the release file and the `.sha256` file. Then, run the following command:

```bash
# Should return: "FireflyIII-v%FFVERSION.zip: OK"
sha256sum -c FireflyIII-v%FFVERSION.zip.sha256

# alternative command:
shasum -a 256 -c FireflyIII-v%FFVERSION.zip.sha256
```

Of course, this command is slightly different for the data importer, or for the `tar.gz` file. But I'm sure you get the idea.

### Why should I verify the integrity?

This allows you to verify that you have downloaded the file right. It's not much of a problem these days, but back in the old days of intermittent connections, this was a valuable step to ensure data integrity.

## Verify the signature

To make sure that the files aren't actually changed by a nefarious hacker, you can also verify the digital signature of the release.

```bash
gpg --verify FireflyIII-v%FFVERSION.zip.asc
```

It should say `Good signature`.

### Why should I verify the signature?

This allows you to verify that the file is actually from the Firefly III project. This is a more secure way of verifying the integrity of the release. It's already harder to change both the release and the hash file, but if an attacker has access to the GitHub CDN, it's not impossible. However, forging a fake signature is impossible. 

## Releases (public key)

Here is the public key with which the releases are signed. It is also available [on a key server](https://keys.openpgp.org/search?q=910CF2B5E8B6CC6E).

```plaintext
-----BEGIN PGP PUBLIC KEY BLOCK-----
Comment: A9D6 BE86 6CEE 3775 854B  1F96 910C F2B5 E8B6 CC6E

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
=SOcC
-----END PGP PUBLIC KEY BLOCK-----
```


