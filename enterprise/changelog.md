# Changelog

## Version 3.3

**Updated ksb, released 2020-10-01**

Changes:
- Multiple XSS vulnerabilities patched in response to penetration testing by Cure53

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides within presentations do not work out of the box. Kumu uses
  Embedly to handle these and we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
- Geocoding does not work out of the box. Customers must supply their own
  ArcGIS developer credentials.

## Version 3.2

**Updated ksb, released 2020-06-16**

Changes:
- Redesigned template picker
- Added a new toolbar with support for direct decorations
- Added `:loop` pseudo-selector and friends
- Added string interpolation support to computed fields
- Added support for italic fonts
- Fixed a bug that prevented geocoding from working in Safari
- Numerous other minor bug fixes
- Dropped support for TLS 1.0 and 1.1

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides within presentations do not work out of the box. Kumu uses
  Embedly to handle these and we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
- Geocoding does not work out of the box. Customers must supply their own
  ArcGIS developer credentials.
  
## Version 3.1

**Updated ksb, released 2020-02-10**

Changes:
- Added single sign on via SAML 2.0
- Added password-protected embeds
- Changed database encoding to utf8

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides within presentations do not work out of the box. Kumu uses
  Embedly to handle these and we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
- Geocoding does not work out of the box. Customers must supply their own
  ArcGIS developer credentials.

## Version 3.0

**Machine upgrade required, released 2019-09-05**

Kumu Enterprise 3.0 received major updates and is the first version we
will be offering through Kumu Enterprise Cloud. Along with the ability to
launch managed enterprise instances in the cloud, this update includes a
number of application changes along with a handful of dependency upgrades
(including an upgrade to Ubuntu 18.04).

Changes:
- Enterprise cloud support
- Enterprise customers can now use SAML 2.0 / SSO
- Added PDF generator for unlimited, locally-generated PDFs
- Added new force atlas layout
- Added traversal selectors
- Added tools for automatically reducing label overlap
- Added radar / systems leverage template
- Added title slides for presentations
- Added bridging
- Fixed a bug with the :orphan selector when working with remote imports
- Fixed vensim bug fixes
- Settings are now preserved in the table editor
- Improved error handling for busted remote imports
- Dropped support for view variables
- Multiple security enhancements

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides within presentations do not work out of the box. Kumu uses
  Embedly to handle these and we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
- Geocoding does not work out of the box. Customers must supply their own
  ArcGIS developer credentials.
  
## Version 2.2

**Updated ksb, released 2018-12-12**

The latest release of Kumu Enterprise includes tools for collecting feedback on
maps in real-time, recent-activity feeds to help you stay on top of project
changes, view partials, bug fixes and more! Read on for the full list of changes.

Changes:
- Added real-time in-app commenting system
- Added recent-activity feed
- Added view partials and the new view-toggle control
- Added the wizard (with label overlap removal helper)
- Added SNA dashboard control
- Added bridging, allowing elements to connect over shared neighbors
- Added two new geo map styles, streets and satellite
- Added multiple selectors (:focus, :directed/:undirected/:mutual, :delayed, :from/:to)
- Added support for ignoring xlsx worksheets from imports using (ignore)
- Simplified org structure (users can now be added directly to org projects)
- Simplified the basic view editor
- Simplified image uploads (profile, markdown, presentations)
- Fixed view parser to handle pseudo-selectors and comments in @settings
- Fixed markdown parser to better handle email addresses
- Fixed zoom-fit behavior for embeds
- Fixed search within presentation slides
- Fixed search handling of non-latin characters

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides within presentations do not work out of the box. Kumu uses
  Embedly to handle these and we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
- Geocoding does not work out of the box. Kumu uses Maptiler to handle these
  and requests are restricted to known referrers. Please email the hostname
  you're using to enterprise@kumu.io to fix.

## Version 2.1

**Updated KSB, released 2018-02-15**

Minor update to the 2.0 release that fixes a bug which prevented admins from
being able to assign static ips.

If you are not experience networking issues you can ignore this update.

Changes:
- Fixed network config script to allow static ip assignments
- Admins now have permission to edit /etc/network/interfaces manually if necessary

Known issues:
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides do not work within presentations out of the box. Kumu uses
  Embedly to handle these we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
  
## Version 2.0

**Machine upgrade required, released 2018-01-22**

New enterprise versioning scheme! Major versions bumps (eg 2.0 to 3.0) require
a machine upgrade. Minor version bumps (eg 2.0 to 2.1) can be hotpatched using
the latest ksb.

Packages have been updated to the latest security versions.

Changes:
- Added geo renderer with built-in geocoding
- Added flag decoration
- Added popovers
- Added element image uploads
- Added real-time update notifications
- Added support for google sheets based presentations
- Added option to disable profiles
- Added relative date selectors
- Added SSL support (appliance now comes with SSL enabled by default)
- Tweaked behavior of `ignore-orphans` so it is applied after clustering
- Tweaked showcase behavior to zoom fit on entire showcase
- Tweaked cluster behavior to automatically refresh on field changes
- Fixed field privacy bug that prevented contributors from seeing private fields
- Fixed XSS security issues
- Fixed from/to sorting issues in Table
- Fixed overeager autocomplete bug when creating new elements
- Fixed advanced editor scrolling bug

Known issues:
- Static ip assignment busted (fixed in 2.1 release)
- IE11 and under are not supported.
- Importing private google sheets is not supported.
- Embed slides do not work within presentations out of the box. Kumu uses
  Embedly to handle these we restrict requests to known referrers.
  Please email the hostname you're using to enterprise@kumu.io to fix this.
  
## Version 1.8.0

**Updated ksb, released 2017-03-07**

The latest release of Kumu Enterprise includes a redesigned dashboard,
built-in spreadsheet editor, computed fields, and lots more!

Note: In this release we have dropped support for IE10 and under.
Do not upgrade if you still need to support these older browsers.

- Redesigned dashboard
- Added Table, our built-in spreadsheet editor
- Added z-index support for background elements / geo underlays
- Added :from and :to pseudo selectors
- Added disqus commenting integration
- Added simple systems template
- Added support for importing controls from other views
- Added import reviewer
- Added computed fields
- Added support for typeless clustering
- Added support for private google sheets
- Added support for hidden google sheets
- Added prompt for unsaved view changes
- Expanded list widget to support selectors and fields
- Expanded cluster control options
- Improved sketch mode workflow
- Fixed performance issues with map switching and trash emptying
- Fixed url param handling within embeds
- Fixed link handling within presentations
- Fixed issue with blank loop labels
- Fixed issue with stale filter forms after view change
- Fixed eigenvector calculation for DAGs
- Fixed settings sidebar issues in IE11 that caused reversed text
- Dropped support for IE10 and under

## Version 1.7.0

**Updated ksb, released 2016-07-13**

The latest release of Kumu Enterprise includes the completely redesigned UI,
along with custom controls, scatter plots, project forking, and more!

Only the .ksb is required for this release but please make sure to
back up your installation before upgrading.

- Completely redesigned the UI to be easier to use
- Added custom controls
- Added scatter plots
- Added sketch mode
- Added right-click menu with snap to line/circle
- Added full-text search within projects
- Added full-screen support
- Added `:not()` and `:filter()` selectors
- Added support for dashed connections within decoration builder
- Added `inherit` option for element `border-color` and `shadow-color`
- Cleaned up the transitions between map slides within presentations
- Simplified terminology (perspectives -> views, attributes -> fields)
- Improved onboarding for new users
- Added support for pipes within from/to column for spreadsheet imports
- Tweaked imports so they can replace and reset fields
- Simplified the process of importing json blueprint into new project
- Simplified force-directed layout settings with layout presets
- Fixed foreign character handling within project urls (Safari)

## Version 1.6.0

**Updated ksb, released 2015-11-19**

The latest release of Kumu Enterprise adds organizations, community detection,
and more. Only the .ksb is required for this release but please make sure to
back up your installation before upgrading.

- Added organizations
- Added community detection
- Added `categorize` function
- Added named color scales to `scale` and `categorize`
- Added grids and guides through @settings
- Added date format with date picker
- Added date support for xlsx imports
- Added currency format
- Added autoplay support for presentations
- Added zoom fit option to map slides
- Added continuous zoom fit for floating maps
- Added separate `ignore-orphans` option to @settings to fix orphan ignore behavior
- Added selector support to focus prompt
- Added option to disable auto-refresh when editing view
- Added cluster menu customization
- Added clustering through @settings
- Added attribute values reordering / automatic sorting
- Simplified personal projects to only allow contributors
- Fixed bug that wiped out attribute values when changing case of attribute name
- Fixed attribute relevance when renaming attributes
- Fixed memory leak issue that hurt performance
- Fixed element autocomplete sort order to sort alphabetically
- Fixed initial zoom fit behavior for embeds
- Fixed degree calculations when working with undirected connections
- Fixed clustering issue when clustering by number
- Fixed invalid selector handling within filters
- Fixed drag connect alignment / virtual issues
- Fixed sidebar toggle issue when collapsed
- Fixed connection type handling in imports
- Fixed connection type handling in advanced clustering
- Fixed numeric tag handling
- Fixed @settings handling of element-, connection-, loop- defaults
- Fixed scale handling of undefined values
- Fixed a number of minor firefox bugs


## Version 1.5.0

**Updated ksb, released 2015-03-31**

Presentations and templates are now available in enterprise! See the full list below for all the goodies. Only the .ksb is required for this release. Please make sure to back up your installation before upgrading.

- Added presentations
- Added systems mapping and network analysis templates
- Added settings form for simple access to defaults and layout settings
- Added attribute relevance for generic elements, connections, and loop
- Added bulk attribute editing for multiple selections
- Added label templates
- Added currency format
- Added support for renaming discussions
- Added support for rectangular elements
- Added support for auto-sizing elements to their labels
- Added support for latex in markdown
- Added support for running all metrics at once
- Added support for weighted metrics
- Fixed the way less than / greater than comparisons are handled within selectors
- Optimized focus behavior to prevent accidental focus activation

## Version 1.4.0

**Updated ksb, released 2015-01-07**

This is a major performance update that also fixes a number of less-common bugs.
OVA upgrade is not required for this one but do make sure to backup your
installation before upgrading.

- Significant stability and performance improvements for large maps
- Significant overhaul of mobile UI and performance
- Added social network analysis metrics
- Added prompted mode
- Added currency format
- Added quick link widget
- Added soundcloud widget
- Added permalinks for all elements, connections, and loops
- Added drag select for easier selection of multiple items
- Added group connect for multiple selections
- Added partial exports for multiple selections
- Optimized image handling within maps
- Optimized large imports
- Fixed profile image overlap issue
- Fixed clustering issues with duplicate elements
- Fixed XLSX import bugs
- Fixed couchdb proxy issues
- Fixed attribute renaming bug
- Fixed issues with include/ignore filter

## Version 1.3.0

**Updated ova and ksb, released 2014-07-07**

This is a significant update that fixes a number of bugs, adds discussions,
and adds an admin portal for managing users. OVA upgrade required.

- Added admin portal at /admin
- Added discussions
- Added map defaults for element position and connection direction
- Added friendlier permalink urls
- Added background job services (redis / resque)
- Simplified clustering ui
- Allow clustering while focused
- Allow clusters to be saved to new maps
- Allow loop labels to be pinned / unpinned just like elements
- Track focus and showcase changes through url
- Fixed username case issue that prevented maps from loading
- Fixed connection type filter issue
- Fixed email notification issue causing site slowdowns
- Fixed selector issues within @settings blocks
- Fixed stale-locks issue
- Fixed selection issues when shifting focus and changing maps
- Fixed gravity issues while focused
- Fixed enterprise import issues related to database migrations
- Consolidated enterprise and production development environments

## Version 1.2.3

**Updated ova and ksb, released 2014-05-06**

This is a minor update that updates the default machine settings within the ova.
No need for existing installations to upgrade.

- Consolidated VirtualBox and VMWare images into single ova
- Changed default memory to 4096
- Changed default cpus to 2
- Changed default network adapter to bridged

## Version 1.2.2

**Updated ova and ksb, released 2014-04-17**

This update includes a small set of command line utilities to make it
easier to backup, restore, and administer the appliance.

This update also patches the openssl heartbleed vulnerability.
At this point it is not possible to enable ssl for Kumu Enterprise so there are
no major security concerns.

- Added import utilities
- Upgraded openssl to patch heartbleed

## Version 1.2.1

**Updated ksb, released 2014-04-10**

This is a minor ksb-only update that allows full json blueprints (project dumps)
to be imported.

- Added support for blueprint imports

## Version 1.2.0

**Initial ova and ksb, released 2014-04-07**

- Kumu Enterprise officially released!
