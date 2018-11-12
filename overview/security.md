# Security

Have questions about security? Be sure to check out [Kumu's official security policy](https://kumu.io/security). If you're looking for more specific information, see our security FAQ below, and if you don't see what you're looking for, feel free to [contact support](mailto:support@kumu.io).

#### How are passwords securely stored within the system (e.g. encrypted using a salted hash)?

Passwords are stored securely using the bcrypt hashing algorithm.

#### Does Kumu automatically log off, lock or terminate a session after a predetermined time of inactivity?

We do not terminate sessions automatically based on inactivity.

#### What logs or audit trails are produced by Kumu?

All requests are logged by IP and logs are kept for two weeks.

#### Is the data embedded in the logs?

Project data is not included in the logs.

#### Are successful/unsuccessful accesses logged? With client network addresses?

Login attempts are logged but not closely monitored. Users are encouraged to use 2FA to further secure their accounts.

#### How long are the logs retained?

The audit trails we maintain internally only cover major events (such as account creation/deletion and project updates). These logs are retained indefinitely.


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/overview/security.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
