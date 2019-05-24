# Command Line Utilities

Kumu Enterprise comes with a set of command line utilities to help administer
your appliance.

SSH access is required to use the utilities, so make sure to
<a href="ssh-access.md">enable ssh access</a> if you haven't
already done so.

# kumu-logs-dump

Use this command to export the system logs so our enterprise team can
diagnose the errors:

```
ssh admin@<hostname> -- "kumu-logs-dump" > kumu-logs.tar.gz
```

# kumu-export

Export the appliance's data and settings.

```
ssh admin@<hostname> -- "kumu-export" > kumu-backup.tar.gz
```

# kumu-import

Import an existing backup into a fresh appliance.

Make sure you have uploaded your license before running this command.

```
ssh admin@<hostname> -- "kumu-import" < kumu-backup.tar.gz
```

# kumu-ssl-enable

Kumu Enterprise comes with SSL enabled by default. A self-signed SSL certificate is
generated for you automatically when the instance first boots.

Use this command to re-enable SSL after disabling, or apply changes after uploading
a new certificate and key.

```
ssh admin@<hostname> -- kumu-ssl-enable
```

# kumu-ssl-disable

NOTE: Kumu Enterprise sends HSTS headers when SSL is enabled. Users will have to clear
these headers from their browsers' cache to access the site via HTTP if SSL is disabled.

```
ssh admin@<hostname> -- kumu-ssl-disable
```

# kumu-ssl-install-cert

Use `kumu-ssl-install-cert` to upload a custom certificate.

- certificate must include subdomains (eg `*.kumuenterprise.example.com`)
- certificate must not include a passphrase
- certificate must be encoded in PEM format
- certificate must include the full chain if signed by a CA

```
ssh admin@<hostname> -- "kumu-ssl-install-cert" < fullchain.pem
```

NOTE: After you have uploaded your certificate and key, you must run
`kumu-ssl-enable` to apply the changes.

# kumu-ssl-install-key

Use `kumu-ssl-install-key` to upload a custom private key.

- key must be encoded in PEM format

```
ssh admin@<hostname> -- "kumu-ssl-install-key" < privkey.pem
```

NOTE: After you have uploaded your certificate and key, you must run
`kumu-ssl-enable` to apply the changes.

<footer class="page-footer">
  <div class="next">Have questions? <a href="mailto:enterprise@kumu.io">Contact Support</a></div>
</footer>
