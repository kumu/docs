# Single sign-on

Single sign-on allows users to sign into your Kumu Enterprise instance using your existing SAML 2.0 identity provider.

Here are a few links to the documentation for common providers:
  - [Microsoft Azure](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-single-sign-on-non-gallery-applications)
  - [Google Suite](https://support.google.com/a/answer/6087519?hl=en)

SSL must be enabled to use SSO to log into your instance.

When setting up your app, you can use `Kumu` as the app name, and for the Entity ID, you should enter the following, replacing `example` with the subdomain of your instance:

  ```
  https://example.kumuenterprise.com
  ```

For the Reply URL (Azure) or ACS URL (Google Suite), use the following, once again replacing `example` with the subdomain of your instance:

  ```
  https://example.kumuenterprise.com/sso/saml/consume
  ```

Set the name identifier to `urn:oasis:names:tc:SAML:2.0:nameid-format:persistent` and provide attribute assertions for `email`, `firstName`, `lastName`, and `username`. If you do not provide a username one will be generated automatically from the email address.

If you are using Enterprise Cloud, please provide Kumu with the following so we can configure your instance for you:

- entity ID
- service URL
- base-64 encoded public certificate

If you are self-hosting, please visit https://example.com/enterprise/admin/settings and sign in with your admin account. From your SSO provider, you can get an entity ID, service URL, and a base-64 encoded public certificate. Check the box to enable SSO for your enterprise instance and copy/paste those items into your instance's settings:

![Kumu Enterprise SSO settings](/images/enterprise-sso.png)

With Kumu and your SSO provider configured, you can use your SSO provider to give users access to Kumu. Users can begin the sign-in flow by visiting the url below and clicking the "Sign in via single sign-on (SSO)" button:

   ```
   https://example.kumuenterprise.com/login
   ```

## Single sign-on with Azure

If Microsoft Azure is your single sign-on provider, you can follow the instructions below to set up.

1. Click the "Azure Active Directory" button in the sidebar

    ![Azure SSO step 01](/images/azure-sso/01.png)

1. Click "Enterprise Applications"

    ![Azure SSO step 02](/images/azure-sso/02.png)

1. Click "+ New Application"

    ![Azure SSO step 03](/images/azure-sso/03.png)

1. Click "Non-gallery application"

    ![Azure SSO step 04](/images/azure-sso/04.png)

1. Enter "Kumu" for the name of the application

    ![Azure SSO step 05](/images/azure-sso/05.png)

1. Click "Configure single sign-on"

    ![Azure SSO step 06](/images/azure-sso/06.png)

1. Select "SAML-based Sign-on"

    ![Azure SSO step 07](/images/azure-sso/07.png)

1. Enter the "Kumu Domain and URLs" for your organization (provided by Kumu)

    ![Azure SSO step 08](/images/azure-sso/08.png)

1. Select "user.mail" for the user identifier

    ![Azure SSO step 09](/images/azure-sso/09.png)

1. Download the SAML signing certificate (Base 64)

    ![Azure SSO step 10](/images/azure-sso/10.png)

1. Click "Configure Kumu"

    ![Azure SSO step 11](/images/azure-sso/11.png)

1. Copy the service url, entity id, and public certificate over to your organization's SSO settings in Kumu:

    ![Azure SSO step 12](/images/azure-sso/12.png)

    ![Azure SSO step 12.5](/images/azure-sso/13.png)

1. Within Azure AD, assign users to the Kumu app you just created to enable SSO

    ![Azure SSO step 13](/images/azure-sso/14.png)


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/enterprise/single-sign-on.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
