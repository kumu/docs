# Upgrading

Upgrades come in two flavors: software upgrades and appliance upgrades.

Software upgrades are released as minor version bumps (eg 2.0 to 2.1) and can
be performed directly on the current installation.

Appliance upgrades are released as major version bumps (eg 2.0 to 3.0) and
require you to fire up a new instance and migrate your existing enterprise data
over from the old one.

We strongly recommend [backing up your existing data][backup] immediately prior to any upgrade.

# Software Upgrade

1. [Back up your existing data][backup]
1. Download the latest .ksb
1. Install the ksb at `<hostname>/enterprise/install`.

The installation is complete once you see the following screen:

![Installation Complete](/images/enterprise-success.png)

Note: You do not need to upload your license again if your license is still valid.

# Appliance Upgrade

Occasionally the underlying appliance will need to be upgraded as well. Although
not as simple as the basic upgrade, the process only requires a few steps.

1. [Back up your existing data][backup]
1. Download the latest .ova
1. Install your license on the new instance
1. [Add your ssh key][ssh] to the new instance
1. [Restore your existing data][restore] onto the new instance

<footer class="page-footer">
  <div class="next">Have questions? <a href="mailto:enterprise@kumu.io">Contact Support</a></div>
</footer>

[cmd]: command-line-utilities.md
[backup]: backing-up-enterprise-data.md
[restore]: restoring-enterprise-data.md
[launch]: getting-started-with-vmware.md
[ssh]: ssh-access.md
