# Single sign-on

Single sign-on allows users to sign into Kumu with an existing set of login credentials—in other words, they won't have to create and remember a new username and password specifically for Kumu.

To configure SSO for your Enterprise instance, follow the instructions in this guide.


1. Create a personal account in your Kumu Enterprise instance.

2. [Create an organization](/guides/organizations.html) in Kumu using your personal account.

3. Follow the instructions to set up your Kumu application with any SAML-2.0-based single sign-on provider. Here are a few links to the documentation for common providers:
  - [Microsoft Azure](https://docs.microsoft.com/en-us/azure/active-directory/manage-apps/configure-single-sign-on-non-gallery-applications)
  - [Google Suite](https://support.google.com/a/answer/6087519?hl=en)

  When setting up your app, you can use `Kumu` as the app name, and for the Entity ID, you should enter the following, replacing `organization-username` with the username of your Kumu organization account:

  ```
  https://example.kumuenterprise.com/organization-username
  ```

  For the Reply URL (Azure) or ACS URL (Google Suite), use the following, once again replacing `organization-username` with the username of your Kumu org:

  ```
  https://example.kumuenterprise.com/organization-username/sso/saml/consume
  ```

4. From your SSO provider, you can get a service URL, an entity ID, and a public certificate. Enable SSO for your enterprise and copy/paste those items into your Kumu organization accounts' settings:

   ```
   https://example.kumuenterprise.com/organizations/organization-username/settings#sso
   ```

  ![Kumu Enterprise SSO settings](/images/enterprise-sso.png)

5. With Kumu and your SSO provider configured, you can use your SSO provider to give users access to Kumu.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/enterprise/single-sign-on.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
