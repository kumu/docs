# Changelog

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
