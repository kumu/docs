# Configuration

The settings for your enterprise installation can be managed at `<hostname>/enterprise/admin`.

**username:** admin\
**password:** the md5 checksum of your license

The commands below can be used to generate the checksum.

```
# mac
md5 kumu-enterprise.kli

# linux
md5sum kumu-enterprise.kli
```

{% hint style="danger" %}
Note that the above credentials are only for logging in to the Enterprise instance settings via `<hostname>/enterprise/admin`. Please see [Creating user accounts](creating-user-accounts.md) for information about creating admin and user accounts for the Enterprise application.
{% endhint %}

## Support

**Add a support email.** This address will be linked to any support links within the application. Set this to the email address you want to send your user's support requests to. Defaults to enterprise@kumu.io.

**Add a notifications email.** This address will be used for any notification emails sent by the application. Only used if outbound email is enabled.

## SMTP

In order to enable email notifications, you'll need to add an external SMTP server. No email will be sent if this is disabled. Settings include:

* Server
* Port
* Username
* Domain
* Password
* TLS
* Authentication

## Hostname

By default the app is accessible using the raw instance ip. If you would like to use a custom hostname you'll need to add the following DNS records:

```
A        kumu.example.  <instance ip>
CNAME  *.kumu.example.  kumu.example.
```

Once the DNS records are in place you can update the hostname within the `/enterprise/admin` app.

_Warning: Once the hostname is set the site can only be accessed via the custom hostname._

## SSH access

[Add an SSH key](ssh-access.md) to enable access to the enterprise command-line utilities.

## SSL

By default, SSL is **not** enabled on self-hosted Kumu Enterprise instances. To add an SSL certificate and allow users to connect through HTTPS, use the `kumu-ssl-install-cert` and `kumu-ssl-install-key` [command line utilities](command-line-utilities.md) to upload a custom certificate and key, then use the `kumu-ssl-enable` command to finish the process.

## Geocoding

The geocoding service used for the [geo template](../guides/templates/geo.md) is not configured by default. To enable geocoding, follow the instructions in the Geocoding section of `<hostname>/enterprise/admin/settings`.

![enterprise configure geocoding](../images/enterprise-configuration-geocoding.png)
