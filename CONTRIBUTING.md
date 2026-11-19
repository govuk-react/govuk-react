# Contributing

## Running the project locally

[govuk-react](https://github.com/govuk-react/govuk-react) is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) using [pnpm workspaces](https://pnpm.io/workspaces).

This is so that components can be published independently and applications can require different versions of a component if a breaking change is introduced in a version of a specific component. We are loosely following the [structure that Jest uses](https://github.com/facebook/jest).

As such, the build process for development is slightly more involved than an `npm install`:

1. Install npm 7.7 or later for workspaces support.

2. Install dependencies, link packages, compile and start storybook:

```sh
pnpm install
pnpm build
pnpm start
```

## Creating a new component

Add a folder in `packages/govuk-react/src/components` with the component (`index.tsx`), a test (`test.tsx`) and stories (`stories.tsx`). Export it from `packages/govuk-react/src/index.ts`.

## Unit testing

To run unit & eslint tests:

```sh
pnpm test
```

To run & watch unit tests:

```sh
pnpm test:unit
```

## Generating docs

Markdown docs, in `README.md` files, are automatically generated based on the React component APIs. When making changes to component APIs, you should regenerate the docs to keep them in sync with the components.

To generate docs:

```sh
pnpm run docs
```

## Opening a pull request

- when adding a new component, include a screenshot of the component in the PR
- when adding new components, try to keep 1 component per PR, unless there are unavoidable interdependencies
- when fixing a visual issue, include a unit test or snapshot test that proves the issue, and include a screenshot of the component before and after in the PR
- when fixing a functional issue, include a unit test that proves the issue (fails before PR is merged and succeeds after)

## Releasing

Versions and changelogs are managed with [Changesets](https://github.com/changesets/changesets). We are in prerelease mode, so versions are `1.0.0-alpha.x`.

- in each PR that changes the published package, run `pnpm changeset` and commit the generated file
- on `main`, the Release workflow keeps a "Version packages" PR open that bumps the version and updates `CHANGELOG.md`
- merge that PR, then run the [Publish workflow](https://github.com/govuk-react/govuk-react/actions/workflows/publish.yml) from `main` with the `alpha` dist-tag
- the workflow stages the package on npm; a maintainer approves it on npm to publish it

Write changeset summaries for users of the package. Changes with no user-facing effect, such as workflow changes, don't need a changeset.

## Conventions

The following conventions are planned but not fully implemented. We should be consistent on these before releasing version 1. At the point where the library is consistent, the conventions should be moved to README.md rather than CONTRIBUTING.md.

### Fields vs. Inputs

For the purpose of this project:

- A field is the combination of a label, input(s) and validation/error messages. The Field components used by this project should follow the prop structure of Final Form and Redux Form fields, in that they accept an `input` prop and a `meta` prop.
- An input is just the form control that the user enters data in to, without a label or error/validation message. Inputs are normally associated with a Field and should be used on their own by importing the Field then using `<FieldName.Input />`. Inputs follow the prop structure of Final Form and Redux Form inputs.

More details in [issues/164](https://github.com/govuk-react/govuk-react/issues/164.)

### Anchors

We want to be router agnostic. We want to support parent projects using React Router or Reach Router, without introducing either as a dependency of this project. As such we provide an `as` prop on components that we expect can be used as React Router Links or NavLinks.

### White Space

Historically components were build to have no white space around them. They were then wrapped with the `withWhiteSpace` HOC to set the default spacing below the component and also provide support for an `mb` prop to allow the parent application to override this spacing.

We have found that the use of the `withWhiteSpace` HOC can be problematic when it comes to applying complex styling rules involving descendent selectors, and thus it's use is now deprecated. Instead equivalent and enhanced facilities have been added to the `spacing` library in `govuk-react/lib`.

At the time of writing we are at the beginning of the process of transitioning to this new spacing method.

Components are built to have white space around them to match their equivalents in [govuk-frontend](https://github.com/alphagov/govuk-frontend). To assist with this, styling utility function are provided in the `spacing` library in `govuk-react/lib`. Typically a component will use the `withWhiteSpace` function within a component to generate a styling function to apply to a styled component.

The `withWhiteSpace` function accepts default values for both `padding` and `margin`, and also provides support for overriding those defaults with equivalently named props. Spacing styles created are responsive and adjust for mobile/tablet sizes. For backward compatibility with the `withWhiteSpace` HOC it also supports a `marginBottom` config and `mb` prop.

More details in [issues/173](https://github.com/govuk-react/govuk-react/issues/173)
and [pull/523](https://github.com/govuk-react/govuk-react/pull/523)
