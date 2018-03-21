# Contributing

## Running the project locally

[govuk-react](https://github.com/penx/govuk-react) is a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) using [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) and [lerna](https://github.com/lerna/lerna).

This is so that components can be published independently and applications can require different versions of a component if a breaking change is introduced in a version of a specific component. We are loosely following the [structure that Jest uses](https://github.com/facebook/jest).

As such, the build process for development is slightly more involved than an `npm install`:

1. Install yarn

2. Install dependencies, link packages, compile and start storybook:

```sh
yarn
yarn bootstrap
yarn build
yarn start
```

## Creating a new component
To create a new component:
- `npm run create-component -- MyNewComponent` where _MyNewComponent_ is the name of your new component.

This creates a folder named _MyNewComponent_ in `src/components` with the component file (index.js), a basic render test (test.js), and a default story (stories.js). You will need to add this to `src/stories/index.js` to view it in storybook.


## Unit testing
Unit testing follows similar patterns as [Glamorous with Jest](https://github.com/paypal/glamorous/tree/master/examples/with-jest), utilising [Jest _snapshots_](https://facebook.github.io/jest/docs/en/snapshot-testing.html), and [Enzyme](https://github.com/airbnb/enzyme).

To run unit & eslint tests:
```sh
npm run test
```

To run & watch unit tests:
```sh
npm run test:unit
```

## Releasing

In order to prepare a release:

- ensure you have [hub](https://hub.github.com) installed (e.g. `brew install hub`)
- run `./scripts/release.sh`, you will be asked to choose a semver increment and, if this is the first time running hub, you will be asked for your GitHub credentials
- this will open a PR on GitHub and draft a release
- once the PR is merged [publish the draft release corresponding to the new version number in GitHub](https://github.com/penx/govuk-react/releases).

When the tag is created, the CI server will automatically release to npm using lerna exec, see:

- https://github.com/lerna/lerna/issues/1056#issuecomment-374192818
- https://github.com/lerna/lerna/issues/961
