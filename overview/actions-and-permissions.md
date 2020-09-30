# Actions and permissions

When you're using Kumu, every action you take falls into one of the following categories:
- Changing account or workspace settings
- Creating a new project
- Viewing a project
- Editing a project (e.g. adding elements, adding fields, changing the view, changing settings, etc.)
- Exporting a project (to Excel, JSON, or as a screenshot or PDF)
- [Forking](/guides/forking.html) a project
- [Administrating a project](/guides/project-admin.html) (changing project privacy, renaming a project, transferring project ownership to another workspace, or deleting a project)
- [Granting project access](/overview/collaboration.html#add-a-contributor) to other Kumu users
- [Commenting on a project](/guides/issues.html) (only available for [Pro workspaces](/guides/pro-workspaces.html))
- Adding members to a Pro workspace
- Creating teams in a Pro workspace

In order to take certain **actions**, you need to have certain **permissions**. In this guide, you'll find a breakdown of who is able to take each action.


## Basic workspace actions and permissions

For a Basic workspace, the **workspace owner** (the person who created the workspace) is the only person who has permission to change workspace settings, such as profile info, username and password, or billing info. The workspace owner is also the only person who can create a new project in the workspace.

The table below breaks down all other actions, and who has permission to take those actions:

| Action | Who can take this action for a public project? | Who can take this action for a private project? |
| --- | --- | --- |
| Viewing a project | Anyone, even if they don't have a Kumu account | The workspace owner and project contributors |
| Editing a project | The Basic workspace owner and project contributors | The Basic workspace owner and project contributors |
| Exporting a project  | The Basic workspace owner and project contributors | The Basic workspace owner and project contributors |
| Forking a project | Anyone with a Kumu account | The Basic workspace owner |
| Administrating a project | The Basic workspace owner | The Basic workspace owner |
| Granting project access to other Kumu users | The Basic workspace owner | The Basic workspace owner |
| Commenting on a project | No one (Pro workspaces only)  | No one (Pro workspaces only) |

For more info on how to add project contributors, check out our guide on [collaboration and sharing](/overview/collaboration.html).


## Pro workspace actions and permissions

For a Pro workspace the **workspace owners** are the only people who have permission to change account settings, such as profile info, username and password, or billing info. Pro workspace owners are also the only people who have permission to invite new people to the workspace or give them direct access to a project (without inviting them to the workspace).

![member settings](/images/workspace-add-members.png)

When Pro workspace owners invite a new person to the workspace, they can choose whether that person will be another **owner** or just a **member**. When owners give a new person direct access to a project, they can choose whether that person will be an **observer**, a **contributor**, or a **manager**.

![member settings](/images/settings-members.png)

Finally, Pro workspace owners and members are also allowed to create **teams** within their workspace. Pro workspace owners can add people to any team at any time, then give the entire team a specific kind of access to a project (e.g. one team might have view-only access to a project and edit access for different project). Within teams, certain people can be **maintainers**. Maintainers, like workspace owners, have the ability to add and remove people from the team, and appoint other maintainers.

![pro workspace team members](/images/pro-workspace-team-maintainers.png)

That's a lot of different roles! Here's a quick recap of the vocabulary:
- People in a Pro workspace can be **owners** or **members**
- People with access to a Pro workspace's project can be **observers**, **contributors**, or **managers**
- Some people on teams can be **maintainers**

Each of these roles has different **permissions** to take **actions** in the Pro workspace's projects. The table below summarizes all project actions, and who can take those actions:

| Action | Who can take this action for a public project? | Who can take this action for a private project? |
| --- | --- | --- |
| Creating a project | Pro workspace owners and members | Pro workspace owners and members |
| Viewing a project | Anyone, even if they don't have a Kumu account | <ul><li>Pro workspace owners and members</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul>  |
| Editing a project | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with edit access to the project</li><li>Project contributors and managers</li></ul> | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with edit or admin access to the project</li><li>Project contributors and managers</li></ul> |
| Exporting a project | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with edit access to the project</li><li>Project contributors and managers</li></ul> | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with edit or admin access to the project</li><li>Project contributors and managers</li></ul> |
| Forking a project | Anyone with a Kumu account | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Administrating a project | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Granting project access to other Kumu users | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Commenting on a project | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul> | <ul><li>Pro workspace owners, and the workspace member that created the project, if applicable</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul> |

For more info on how to add project contributors, check out [our full guide on Pro workspaces](/guides/pro-workspaces.html).


## Finding out which workspace a project is in

There are two different ways to find out which workspace a project is in. First, if you have been [added as a contributor](/overview/collaboration.html#add-a-contributor) to the project, you can go to your [account dashboard](https://kumu.io/dashboard) and find the project in the list. Underneath the project's name, you'll see the workspace's name.

![project owner username under project name](/images/project-owner-dashboard.png)

You can also figure out who owns any project by looking at the project's URL. Every Kumu project URL starts with `https://kumu.io/`, followed by a [slug](/guides/slugs.html) or the workspace's name. For example, the project pictured below is owned by our Pro workspace, which is named "Kumu":

![project owner in URL](/images/project-owner-url.png)


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/overview/actions-and-permissions.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
