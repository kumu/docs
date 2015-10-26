# Backing up Enterprise Data

Kumu Enterprise includes [command line utilities][1] to help back up your
enterprise data.

We recommend using this process to regularly back up your data. You should also
back up your data immediately prior to any database migrations or upgrades.

1. [Add your ssh key][3]
1. Run "kumu-export" to back up your data
```
ssh admin@hostname -- "kumu-export" > kumu-backup.tar.gz
```

<footer class="page-footer">
  <div class="next">Next: <a href="/restoring-enterprise-data.md">Restoring enterprise data</a></div>
</footer>


[1]: /command-line-utilities.md
[2]: /restoring-enterprise-data.md
[3]: /ssh-access.md
