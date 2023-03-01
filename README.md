# Abtion Design System

1. [Abtion Design System](#abtion-design-system)
2. [Using the components](#using-the-components)
   1. [Bash (zsh) function](#bash-zsh-function)
   2. [Why not an NPM package?](#why-not-an-npm-package)
3. [Developing](#developing)
   1. [Requirements](#requirements)
   2. [First time setup](#first-time-setup)
   3. [Day-to-day](#day-to-day)
   4. [Adding components](#adding-components)
4. [Deployments](#deployments)
5. [How to contribute](#how-to-contribute)

The Abtion way of reusing UI across projects.

The Abtion Design System - also known as **_Muffibook_** - is a repository for well-tested reusable react components, with a publicly available storybook frontend.

It also serves as an example of our shared javascript standards between projects on different tech stacks.

- App: [muffibook.abtion.com](https://muffibook.abtion.com)
- CI: Github actions

![muffibook](muffi-book.gif)

# Using the components

If you decide to use one of the components on your projects, you simply download the component, and any of its dependencies to your project.

Ironically the easiest way\* to download a single component folder is by using subversion (available with homebrew / apt / etc.):

`svn export https://github.com/abtion/design-system/trunk/components/[NAME_OF_COMPONENT] [OUTPUT_FOLDER]`

For instance to grab the `Button` use:

- For rails: `svn export https://github.com/abtion/design-system/trunk/components/Button app/javascript/components/Button`
- For dotnet: `svn export https://github.com/abtion/design-system/trunk/components/Button src/[PROJECT_NAME].FrontendReact/ClientApp/src/components/Button`

## Bash (zsh) function

The below function can be added to a `.bashrc` or `.zshrc` file to make grabbing components easier:

```sh
mbgrab() {
  printf '%s\n' ${@:2} | xargs -I % svn export https://github.com/abtion/design-system/trunk/components/% $1/% --force
}
```

One or multiple components can then be fetched with `mbgrab destination components...` eg:

```sh
mbgrab app/javascript/components Button Input Alert
```

\*PR if you know a better way

## Why not an NPM package?

We would have to do versioning on that package, and we would risk breaking projects if we'd accidentally add a breaking change in a non-major version. Also, by not having a package, we can simply drop the components we need into the projects where we need them, and if necessary we can easily make changes to them.

In short we work this way because it allows us to move fast without breaking too much stuff.

Should the design system stabilize and expand to a point where this workflow becomes tedious, we might reconsider it.

# Developing

## Requirements

You must have the following installed and available on your machine:

- **Node JS 14.x**

## First time setup

`yarn install`

## Day-to-day

- Run the server: `yarn start` and [http://localhost:6006](http://localhost:6006)
- Run tests: `yarn test`
- Run frontend linters: `yarn lint`
- Run tests with coverage: `yarn test --coverage`

## Adding components

1. Add your component to the `components` folder (follow the file naming conventions of the existing components)
2. Add a story for the component (use the existing `stories` as a reference), prefix the story with 🔎.

# Deployments

When CI passes main is deployed to [muffibook.abtion.com](https://muffibook.abtion.com).

# How to contribute

All abtioneers have write access to the repo.

To contribute get the project running locally and add your component (see [developing](#developing)).

When your component is ready:

1. Run linters and ensure coverage is still 100%: `yarn lint`, `yarn test --coverage`
2. Push to main
3. The component will show up on muffibook.abtion.com after a couple of minutes.
