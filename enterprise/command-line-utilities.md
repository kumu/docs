# Command line utilities

Kumu Enterprise comes with a set of command line utilities to help administer your appliance.

SSH access is required to use the utilities, so make sure to [enable ssh access](ssh-access.md) if you haven't already done so.

## kumu-logs-dump

Use this command to export the system logs so our enterprise team can diagnose the errors:

```
ssh admin@<hostname> -- "kumu-logs-dump" > kumu-logs.tar.gz
```

## kumu-export

Export the appliance's data and settings.

```
ssh admin@<hostname> -- "kumu-export" > kumu-backup.tar.gz
```

## kumu-import

Import an existing backup into a fresh appliance.

Make sure you have uploaded your license before running this command.

```
ssh admin@<hostname> -- "kumu-import" < kumu-backup.tar.gz
```

## kumu-ssl-enable

Use `kumu-ssl-enable` to re-enable SSL after disabling, or apply changes after uploading a new certificate and key.

```
ssh admin@<hostname> -- kumu-ssl-enable
```

## kumu-ssl-disable

NOTE: Kumu Enterprise sends HSTS headers when SSL is enabled. Users will have to clear these headers from their browsers' cache to access the site via HTTP if SSL is disabled.

```
ssh admin@<hostname> -- kumu-ssl-disable
```

## kumu-ssl-install-cert

Use `kumu-ssl-install-cert` to upload a custom certificate.

* certificate must include subdomains (eg `*.kumuenterprise.example.com`)
* certificate must not include a passphrase
* certificate must be encoded in PEM format
* certificate must include the full chain if signed by a CA

```
ssh admin@<hostname> -- "kumu-ssl-install-cert" < fullchain.pem
```

NOTE: After you have uploaded your certificate and key, you must run `kumu-ssl-enable` to apply the changes.

## kumu-ssl-install-key

Use `kumu-ssl-install-key` to upload a custom private key.

* key must be encoded in PEM format

```
ssh admin@<hostname> -- "kumu-ssl-install-key" < privkey.pem
```

NOTE: After you have uploaded your certificate and key, you must run `kumu-ssl-enable` to apply the changes.

{% hint style="info" %}
Have questions? [Contact Support](mailto:enterprise@kumu.io)
{% endhint %}

## kumu-ssl-enable-selfsigned

The `kumu-ssl-enable-selfsigned` allows your instance to use a self-signed SSL certificate that is generated for you automatically when the instance first boots.

Note: we consider this a legacy feature. While we still support `kumu-ssl-enable-selfsigned`, we only recommend using it for debugging purposes, or temporary Enterprise trials. We no longer recommended using the self-signed certificate in production with end users, since modern browsers will show persistent, strong security warnings that end users will have to repeatedly bypass.
