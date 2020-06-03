# Project Architecture/Organization

Projects are the fundamental organizing structure within Kumu. Each project can have multiple maps and views. When you invite someone to collaborate, you are granting them access to your entire project.

Each project is stored as it's own database so that you don't need to worry about data leaking across projects.

## Projects vs. maps

When you import data to Kumu, it is stored at the project level. Think of all the data stored in a single project database with pointers added to elements, connections and loops to indicate which maps they are part of (which allows the same elements to be part of multiple maps so edits made to the profile of that element ripple across all maps).

When you duplicate a map, you're using the same elements, connections and loops so any edits to the profiles of those will show up in both maps. If you want to avoid this, try duplicating your project instead. Use the more menu (...) in the lower right corner and choose "export json" to create a json file that can be used to import into a new, blank project.

## Maps vs. views

Maps define which elements, connections and loops should be included from the overall project data. Maps also specify location (whether elements are pinned or not and if pinned, their location on the map) and defaults for new elements (fixed or floating) and connection arrows (directed, undirected, or mutual).

Views define the decorations, filters, clusters and other settings coded within the advanced editor. The same view can be applied across multiple maps (there is a many to many relationship between maps and views).

## Public vs. private Projects

Public projects are free and are visible to everyone. You still control who has edit access. Private maps start at [$9 per month](https://kumu.io/pricing) and allow you to control who can view and edit your maps.

## Personal vs. organization plans

Personal plans are meant for individuals working on their own projects and collaborating with others. For maps owned by a personal account, you can only add people to your map as collaborators (meaning they have edit access).

Organizations allow multiple users to manage a central account, along with additional branding opportunities, team management, and fine-grained access control to projects. For maps owned by an organization, you can add people to your map using a powerful team-based structure with either view, edit, or admin access.

Both personal and organizations have a free tier which include an unlimited number of public projects.

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/guides/project-architecture.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
