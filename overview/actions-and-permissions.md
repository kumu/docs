# Actions and permissions

When you're using Kumu, every action you take falls into one of the following categories:
- Changing account settings
- Creating a new project
- Viewing a project
- Editing a project (e.g. adding elements, adding fields, changing the view, changing settings, etc.)
- Exporting a project (to Excel, JSON, or as a screenshot or PDF)
- [Forking](/guides/forking.html) a project
- [Administrating a project](/guides/project-admin.html) (changing project privacy, renaming a project, transferring project ownership to another account, or deleting a project)
- [Granting project access](/overview/collaboration.html#add-a-contributor) to other Kumu users
- [Commenting on a project](/guides/issues.html) (only available for [organizations](/guides/organizations.html))
<!-- - Creating a new organization -->
- Adding members to an organization
- Creating teams in an organization

In order to take certain **actions**, you need to have certain **permissions**. In this guide, you'll find a breakdown of who is able to take each action.


## Personal account actions and permissions

For a personal account, the **account owner** (the person who logs into the account) is the only person who has permission to change account settings, such as profile info, username and password, or billing info. The account owner is also the only person who can create a new project owned by their account.

The table below breaks down all other actions, and who has permission to take those actions:

| Action | Who can take this action for a public project? | Who can take this action for a private project? |
| --- | --- | --- |
| Viewing a project | Anyone, even if they don't have a Kumu account | The project owner and project contributors |
| Editing a project | The project owner and project contributors | The project owner and project contributors |
| Exporting a project  | The project owner and project contributors | The project owner and project contributors |
| Forking a project | Anyone with a Kumu account | The project owner |
| Administrating a project | The project owner | The project owner |
| Granting project access to other Kumu users | The project owner | The project owner |
| Commenting on a project   | No one (organizations only)  | No one (organizations only)  |

For more info on how to add project contributors, check out our guide on [collaboration and sharing](/overview/collaboration.html).


## Organization actions and permissions

For an organization the **organization owners** are the only people who have permission to change account settings, such as profile info, username and password, or billing info. Organization owners are also the only people who have permission to invite new people to the organization or give them direct access to a project (without inviting them to the organization).

![organization add member](/images/organization-add-members.png)

When organization owners invite a new person to the organization, they can choose whether that person will be another **owner** or just a **member**. When owners give a new person direct access to a project, they can choose whether that person will be an **observer**, a **contributor**, or a **manager**.

![organization add to project](/images/organization-add-to-project.png)

Finally, organization owners and members are also allowed to create **teams** within their organization. Organization owners can add people to any team at any time, then give the entire team a specific kind of access to a project (e.g. one team might have view-only access to a project and edit access for different project). Within teams, certain people can be **maintainers**. Maintainers, like organization owners, have the ability to add and remove people from the team, and appoint other maintainers.

![organization team members](/images/organization-team-maintainers.png)

That's a lot of different roles! Here's a quick recap of the vocabulary:
- People in an organization can be **owners** or **members**
- People with access to an organization's project can be **observers**, **contributors**, or **managers**
- Some people on teams can be **maintainers**

Each of these roles has different **permissions** to take **actions** in the organization's projects. The table below summarizes all project actions, and who can take those actions:

| Action | Who can take this action for a public project? | Who can take this action for a private project? |
| --- | --- | --- |
| Creating a project | Organization owners and members | Organization owners and members |
| Viewing a project | Anyone, even if they don't have a Kumu account | <ul><li>Organization owners and members</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul>  |
| Editing a project | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with edit access to the project</li><li>Project contributors and managers</li></ul> | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with edit or admin access to the project</li><li>Project contributors and managers</li></ul> |
| Exporting a project | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with edit access to the project</li><li>Project contributors and managers</li></ul> | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with edit or admin access to the project</li><li>Project contributors and managers</li></ul> |
| Forking a project | Anyone with a Kumu account | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Administrating a project | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Granting project access to other Kumu users | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with admin access to the project</li><li>Project managers</li></ul> |
| Commenting on a project | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul> | <ul><li>Organization owners, and the organization member that created the project, if applicable</li><li>Teams with any kind of access to the project</li><li>Project observers, contributors, and managers</li></ul> |

For more info on how to add project contributors, check out [our full guide on organizations](/guides/organizations.html).


## Finding out which account owns a project

There are two different ways to find out which account is the owner of a project. First, if you have been [added as a contributor](/overview/collaboration.html#add-a-contributor) to the project, you can go to your [personal account dashboard](https://kumu.io/dashboard) and find the project in the list. Underneath the project's name, you'll see the owner's username.

![project owner username under project name](/images/project-owner-dashboard.png)

You can also figure out who owns any project by looking at the project's URL. Every Kumu project URL starts with `https://kumu.io/`, followed by the owner's username. For example, the project pictured below is owned by our organization, which has the username "Kumu":

![project owner in URL](/images/project-owner-url.png)


<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/overview/actions-and-permissions.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
