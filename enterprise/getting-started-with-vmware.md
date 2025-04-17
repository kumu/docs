# Getting started with VMWare

The download locations for the Kumu Enterprise virtual appliance (.ova) and your Kumu Enterprise license (.kli) should have been provided to you by email. Please email [enterprise@kumu.io](mailto:enterprise@kumu.io) if you don't have them yet.

Before installing Kumu Enterprise in production, we recommend running through the installation process [on your local machine using VirtualBox](getting-started-with-virtualbox.md).

Please make sure you're running the [latest version of VMWare](https://www.vmware.com/).

## Step 1. Import the appliance

Import the .ova into VMWare. By default the machine is configured with the following settings:

* Bridged Network
* 4096mb memory
* 2 CPUs

Make sure to adjust the network settings as needed if bridged networking is not desired.

## Step 2. Boot the appliance

Boot the appliance and you'll be taken to the Kumu Enterprise console where you can further configure the network settings.

If you see an IP listed here, you're all set. If not, you'll need to adjust your network settings.

{% hint style="warning" %}
**Note:** We're investigating an issue that prevents you from assigning a static IP to the instance. If a static IP is necessary for your setup, contact us at [enterprise@kumu.io](mailto:enterprise@kumu.io) to discuss a temporary workaround.
{% endhint %}

## Step 3. Install your license

Follow the instructions given to you by the console to complete your installation. Your enterprise license (.kli) can be installed by going to `<hostname>/enterprise/install`.
