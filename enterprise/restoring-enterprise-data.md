# Restoring enterprise data

Kumu Enterprise includes [command line utilities](command-line-utilities.md) for restoring backups of your enterprise data.

Although it's tempting to re-use your existing installation, we strongly recommend that you restore your enterprise data on a fresh installation.

1. [Add your ssh key](ssh-access.md)
2. Run "kumu-import" to restore your data

```
ssh admin@hostname -- "kumu-import" < kumu-backup.tar.gz
```

{% hint style="info" %}
Have questions? [Contact Support](mailto:enterprise@kumu.io)
{% endhint %}
