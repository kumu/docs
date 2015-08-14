# Getting Started with VMWare

The download locations for the Kumu Enterprise virtual appliance (.ova),
your Kumu Enterprise license (.kli), and the latest Kumu Enterprise software
bundle (.ksb) should have been provided to you by email. Please email
<a href="mailto:enterprise@kumu.io">enterprise@kumu.io</a> if you don't have them yet.

Before installing Kumu Enterprise in production, we recommend running through
the installation process
[on your local machine using VirtualBox](/enterprise/getting-started-with-virtualbox.html).

Please make sure you're running the
<a href="https://www.vmware.com/">latest version of VMWare</a>.

## Step 1. Import the appliance

Import the .ova into VMWare. By default the machine is configured with the
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

## Step 3. Install your license and software bundle

Follow the instructions given to you by the console to complete your installation.
Your enterprise license (.kli) and software bundle (.ksb) can be installed by
going to `<hostname>/enterprise/install`.

The installation is complete once you see the following screen (be patient as the process can take up to 10 minutes).
![Installation Complete](/images/enterprise-success.png)

<footer class="page-footer">
  <div class="next">Next: [Configuration](/enterprise/configuration.html)</div>
</footer>
