# SSH Access

Enabling ssh access gives you access to the Kumu Enterprise <a href="/enterprise/command-line-utilities.html">command line utilities</a>.

You can enable ssh access by adding your public key to the list of authorized
ssh keys at `<hostname>/enterprise/admin`. Once your key is in place, you can
ssh into the appliance via `ssh admin@<hostname>`.

Mac users can use the command below to copy your key to the clipboard:

```
cat ~/.ssh/id_rsa.pub | pbcopy
```

<footer class="page-footer">
  <div class="next">Next: [Backing up Enterprise Data](/enterprise/backing-up-enterprise-data.html)</div>
</footer>
