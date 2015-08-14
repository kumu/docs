# Command Line Utilities

Kumu Enterprise comes with a set of command line utilities to help administer
your appliance.

SSH access is required to use the utilities, so make sure to
<a href="/enterprise/ssh-access.html">enable ssh access</a> if you haven't
already done so.

# kumu-export

Export the appliance's data and settings.

```
ssh admin@<hostname> -- "kumu-export" > kumu-backup.tar.gz
```

# kumu-import

Import an existing backup into a fresh appliance. (Make sure your license and
the latest software bundle have been uploaded before running this command.)

```
ssh admin@<hostname> -- "kumu-import" < kumu-backup.tar.gz
```

<footer class="page-footer">
  <div class="next">Have questions? [Contact Support](mailto:enterprise@kumu.io)</div>
</footer>
