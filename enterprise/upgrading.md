# Upgrading

Upgrades come in two flavors: software upgrades and appliance upgrades.
Software upgrades can be performed on the current installation. Appliance upgrades
require firing up a new instance and migrating your existing enterprise data
over to the new one.

We strongly recommend [backing up your existing data][backup] immediately prior to any upgrade.

# Software Upgrade

1. [Back up your existing data][backup]
1. Download the latest .ksb
1. Install the ksb at `<hostname>/enterprise/install`

Note: There's no need to upload your license again if you've already done so.

# Appliance Upgrade

Occasionally the underlying appliance will need to be upgraded as well. Although
not as simple as the basic upgrade, the process only requires a few steps.

1. [Back up your existing data][backup]
1. Download the latest .ksb and .ova
1. [Fire up a new instance][launch]
1. Install the ksb on the new instance
1. [Add your ssh key][ssh] to the new instance
1. [Restore your existing data][restore] onto the new instance

<footer class="page-footer">
  <div class="next">Have questions? <a href="mailto:enterprise@kumu.io">Contact Support</a></div>
</footer>

[cmd]: /command-line-utilities.md
[backup]: /backing-up-enterprise-data.md
[restore]: /restoring-enterprise-data.md
[launch]: /getting-started-with-vmware.md
[ssh]: /ssh-access.md
