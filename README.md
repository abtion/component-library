# Abtion Component Library

1. [Abtion Component Library](#abtion-component-library)
2. [Using the components](#using-the-components)
   1. [Why not an NPM package?](#why-not-an-npm-package)
3. [Developing](#developing)
   1. [Requirements](#requirements)
   2. [First time setup](#first-time-setup)
   3. [Day-to-day](#day-to-day)
   4. [Adding components](#adding-components)
4. [Deployments](#deployments)
5. [How to contribute](#how-to-contribute)

A collection of well-tested reusable react components, with a publicly available storybook frontend - known as **_Muffibook_**.

It also serves as an example of our shared javascript standards between projects on different tech stacks.

- App: [muffibook.abtion.com](https://muffibook.abtion.com)
- CI: Github actions

![muffibook](muffi-book.gif)

# Using the components

Zip-files and download commands are available for each component on [muffibook.abtion.com](https://muffibook.abtion.com).

## Why not an NPM package?

We would have to do versioning on that package, and we would risk breaking projects if we'd accidentally add a breaking change in a non-major version. Also, by not having a package, we can simply drop the components we need into the projects where we need them, and if necessary we can easily make changes to them.

In short we work this way because it allows us to move fast without breaking too much stuff.

Should the component library stabilize and expand to a point where this workflow becomes tedious, we might reconsider it.

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
