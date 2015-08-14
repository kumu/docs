# Restoring Enterprise Data

Kumu Enterprise includes [command-line utilities][cmd] for restoring backups of
your enterprise data.

Although it's tempting to re-use your existing installation, we strongly
recommend that you restore your enterprise data on a fresh installation.

1. [Add your ssh key][ssh]
1. Run "kumu-import" to restore your data
```
ssh admin@hostname -- "kumu-import" < kumu-backup.tar.gz
```

<footer class="page-footer">
  <div class="next">Have questions? [Contact Support](mailto:enterprise@kumu.io)</div>
</footer>

[cmd]: /enterprise/command-line-utilities.html
[ssh]: /enterprise/ssh-access.html
[upgrade]: /enterprise/upgrading.html
