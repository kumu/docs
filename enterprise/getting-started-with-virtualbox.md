# Getting Started with VirtualBox

The download locations for the Kumu Enterprise virtual appliance (.ova) and your
Kumu Enterprise license (.kli) should have been provided to you by email. Please email
<a href="mailto:enterprise@kumu.io">enterprise@kumu.io</a> if you don't have them yet.

Also, please make sure you're running the
<a href="https://www.virtualbox.org/">latest version of VirtualBox</a>.

## Step 1. Import the appliance

Import the .ova into VirtualBox. By default the machine is configured with the
following settings:

- Bridged Network
- 4096mb memory
- 2 CPUs

Make sure to adjust the network settings as needed if bridged networking is
not desired.

## Step 2. Boot the appliance

Boot the appliance and you'll be taken to the Kumu Enterprise console where you
can further configure the network settings.

If you see an ip listed here, you're all set.  If not, you'll need to adjust
your network settings.

## Step 3. Install your license

Follow the instructions given to you by the console to complete your installation.
Your enterprise license (.kli) can be installed by going to `<hostname>/enterprise/install`.

<footer class="page-footer">
  <div class="next">Next: <a href="configuration.md">Configuration</a></div>
</footer>
