# Project Architecture/Organization

Projects are the fundamental organizing structure within Kumu. Each project can have multiple maps and perspectives. When you invite someone to collaborate, you are granting them access to your entire project.

Each project is stored as it's own database so that you don't need to worry about data leaking across projects.

## Projects vs. maps

When you import data to Kumu, it is stored at the project level. Essentially, that data is all stored in a project database and pointers are added to specific elements, connections and loops to indicate which maps they are part of.

## Maps vs. perspectives

<span class="edit-link"><a href="https://github.com/kumu/docs/blob/master/advanced-guides/project-architecture.md" target="_blank"><i class="fa fa-github"></i> edit this page</a></span>
