# Configuration

The settings for your enterprise installation can be managed at
`<hostname>/enterprise/admin`.

<p>
  <strong>username:</strong> admin<br>
  <strong>password:</strong> the md5 checksum of your license
</p>

The commands below can be used to generate the checksum.

```
# mac
md5 kumu-enterprise.kli

# linux
md5sum kumu-enterprise.kli
```

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

This is the hostname that will be used for any absolute links within the application (such as those included in notification emails).

## SSH access

[Add an SSH key][ssh] to enable access to the enterprise command-line utilities.

## SSL

To protect your instance, a self-signed SSL certificate is generated for you automatically when the instance first boots.

Since the certificate is self-signed, you will have to click through warning prompts the first time you access the site. If you don't want users to see these warnings, you can use the `kumu-ssl-install-cert` and `kumu-ssl-install-key` [command line utilities](command-line-utilities.md) to upload a custom certificate.

<footer class="page-footer">
  <div class="next">Next: <a href="ssh-access.md">SSH Access</a></div>
</footer>


[ssh]: ssh-access.md
