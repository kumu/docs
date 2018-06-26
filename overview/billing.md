# Billing

At Kumu, we use a credit card billing system to accept payments for [paid plans](/overview/accounts-and-plans.html). Plans can be billed on either a monthly or annual basis, and if you choose to be billed on an annual basis, you'll receive a 20% discount.

To upgrade or downgrade your personal account's plan, switch to annual billing, or change the credit card you use with Kumu, you can visit the [billing section of your account settings](https://kumu.io/settings#billing). For organization accounts, you can go to your [organization's dashboard](/overview/dashboard.html#organization-dashboard) and scroll down to the billing section.

We handle all payments with [full PCI-compliance](https://www.pcisecuritystandards.org/) through [Stripe](https://stripe.com/), the industry standard, and you can use any credit card that is [accepted by Stripe](https://stripe.com/payments/payment-methods-guide#cards). We do not store any sensitive billing information on our own servers.


## Prorated upgrades and downgrades

When you upgrade or downgrade your plan in Kumu, our billing system **prorates** the final charge based on the amount of time left in your billing cycle. Our system follows these steps:

1. You receive a credit for the unused time on your old plan
1. Your charge for the new plan is prorated based on the amount of time left on your billing cycle
1. The system subtracts the credit from the prorated charge to reach the final amount

If the final amount is a negative number, you'll receive a credit that will automatically be applied to all future charges until it runs out. If the final amount is a positive number, it will be added to your bill the next time your billing cycle restarts.

For example, lets say you sign up for the monthly Junior plan on February 14th, and you upgrade to the Apprentice plan halfway through the month. Here's what would happen:

1. You would receive a credit for `$4.50` for the unused time (half of the month) on your Junior plan ($9/month)
1. The system would create a charge for `$11.50` for half a month of the Apprentice plan ($23/month)
1. The system would calculate your total charge: `$11.50 + (-$4.50) = $7.00`
1. On March 14th (when the billing cycle restarts), you would be charged the `$7.00` calculated above, as well as `$23` for the upcoming month of your Apprentice plan: a total charge of `$30.00`

If you are on an annual billing cycle, and would prefer to be charged as soon as you upgrade (instead of when your billing cycle restarts), please [email support@kumu.io](mailto:support@kumu.io).


## Payment receipts

Our billing system automatically sends a receipt to the email on file each time a payment is made. From time to time, these receipts might get sent to your email's spam folder—if you don't see a receipt, be sure to check there first.

For a personal account, if you want to change the email that receipts are sent to, you can go to the [profile section of your account settings](https://kumu.io/settings#profile). To do this for an organization account, you can go to your [organization's dashboard](/overview/dashboard.html#organization-dashboard) and scroll down to profile section.


## Paying by invoice

In the event that you can't enter a credit card into Kumu's website for repeat billing (some organizations prohibit this), you can pay by invoice instead. An invoice will allow you make a one-time payment via credit card, ACH transfer, or aa check in the mail. At this time, we only create invoices for organization accounts that are billed annually.

To request an invoice, you can [email support@kumu.io](mailto:support@kumu.io).


## Seeing multiple charges?

If you see multiple charges from Kumu on your credit card in one month, you might be subscribed to both a personal and an organization plan. To see if this is case, go to your [personal billing settings](https://kumu.io/settings#billing) and the billing section of your [organization's dashboard](/overview/dashboard.html#organization-dashboard) to see all active plans.

<p class="alert alert-info">
  If you downgrade your personal account to a free plan, you can still view and edit an organization's private projects, as long as you have been <a class="alert-link" href="/guides/organizations.html#adding-users-to-an-organization">given access</a>.
</p>

You also might see multiple charges in the same month if a free trial ended before you had added a credit card to your billing settings.

If these reasons don't apply to you, but you're still seeing multiple charges, please [email support@kumu.io](mailto:support@kumu.io), and we'll help you find and fix the issue.


## Free trial

When you sign up for Kumu, you automatically receive a 14-day free trial of private projects. At any time during your free trial, you can add a credit card to your billing settings to start a subscription plan as soon as the free trial ends.

If you haven't added a credit card before the free trial ends, your private projects will be locked, and Kumu will prompt you to make your projects public or update your billing settings.


<p class="alert alert-success">
  Have any other questions about billing? Send an email to <a class="alert-link" href="mailto:support@kumu.io">support@kumu.io</a> and we'll get back to you!
</p>


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/overview/billing.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
