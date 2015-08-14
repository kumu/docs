# Changelog

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
