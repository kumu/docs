# How do I connect a connection to another connection? (split or branching connections)

We're gonna be upfront about this: Kumu doesn't have a direct way to have connections point at other connections. Connections can only point to elements. However, sometimes that's exactly what you need, whether you're playing around with a family tree in Kumu, or want to show a branching relationship where one element affects a connection between two others. So here's the workaround. It's not perfect, but it gets the job done!

<figure><img src="../.gitbook/assets/Screenshot 2026-04-30 at 11.45.58 AM.png" alt=""><figcaption></figcaption></figure>

**Steps**

To create the illusion of a connection pointing at another connection, we'll use hidden "connector" elements as invisible midpoints.&#x20;

1. Create all your elements, including a connector element wherever you need a connection to "split" or branch.
2. Give each connector element the element type "connector" (you can set this in the [element's profile](../guides/profiles.md)). This will allow you to change their appearance all with one decoration rule.
3. Paste the following code into your Advanced Editor to make connector elements invisible and keep connections straight:&#x20;

```
connection {
  curvature: 0;
  color: grey;
}

connector {
  color: transparent;
  size: 1;
  label-visibility: hidden;
}
```

If you want to keep the elements from floating and re-arranging themselves, you can also decide to [pin elements in place](../faq/how-do-keep-elements-from-moving.md).

Here's an example project to see what the above looks like in a Kumu project: [https://kumu.io/kumu/example-map-connect-a-connection-to-another-connection](https://kumu.io/kumu/example-map-connect-a-connection-to-another-connection)

If you have any questions, don't hesitate to reach out to support@kumu.io!&#x20;
