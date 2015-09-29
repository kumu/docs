# Selector reference

Selectors provide a powerful, friendly way to slice through maps,
based on CSS selectors.

If you're familiar with css, you'll feel right at home.

## Universal Selector
The universal selector `*` matches all elements, connections, and loops.

## Type Selectors

```
General:  element, connection, loop
Specific: person, personal-connection
```

Type selectors come in two flavors: general and specific.

#### General

General type selectors match all items within the given collection. All projects
share the same three general type selectors: `element`, `connection`, and `loop`.

#### Specific

Specific type selectors are based on the assigned type. An element with
type "Person" would be selected using `person`. A connection with
type "Personal" would be selected using `personal-connection`
(just tack "-connection" onto the connection type).

## ID Selectors

```
Informal: #kumu, #honoluluhi
Assigned: #startup-29506
System:   #elem-123, #conn-123, #loop-123
```

ID selectors come in three flavors: informal, assigned, and system.

#### Informal

Informal ids are just the slugged version of the "label" attribute.
In most cases informal ids will be unique, permanent, and have the
added benefit of being naturally descriptive.

Because of their descriptive nature, we strongly recommend using informal ids whenever possible.

#### Assigned

If labels may change or simply aren't unique, you can assign your own
id to each object through the "id" attribute.  This gives you a unique
way to reference each object within your project however you please.

*Note: IDs must be strings and should be unique.*

#### System

System ids are automatically generated and assigned by Kumu.
They're guaranteed to be unique and permanent, making them an excellent
choice for permalink-style references.

All system ids are prefixed with the collection identifier, followed by
a unique random identifier.  For example: elem-123, conn-123, and loop-123.


## Tag Selectors

```
.influential
```

Tag selectors match all items tagged with the given value.
Make sure to keep your tags short and free from special characters to
avoid having to use a formal attribute selector (see below).

## Attribute Selectors

```
[tags~=influential]
```

Attribute selectors match all items with the given attribute condition.
Kumu supports a number of attribute operators to match against.

#### Presence

```
[description]
```

#### Absence

```
[!description]
```

#### Search

```
Starts with: [label ^= kumu]
Ends with: [label $= kumu]
Matches: [label *= kumu]
Includes: [skills ~= communication]
```

Note: the includes operator `~=` is only relevant for attributes with multiple values
(such as tags and skills).

#### Relative

```
[employees < 10]
[employees > 10]
[employees <= 10]
[employees >= 10]
```
