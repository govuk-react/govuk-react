#!/bin/bash
# requires https://hub.github.com
# fix for npm workspaces from here https://github.com/npm/cli/issues/2010#issuecomment-863288622
if [ "$1" != "major" ] && [ "$1" != "minor" ] && [ "$1" != "patch" ];
then
    echo "Could not release!"
    echo "Usage: 'yarn release -- (major|minor|patch)'"
    echo ""
    exit 1
fi

git remote get-url origin | grep -q 'govuk-react/govuk-react' || exit 1 # ensure origin doesn't point to a fork
git checkout -b release/next origin/main # make a new branch for next version from main
git fetch --tags # lerna uses tags to determine what has changed, we need to make sure we have all tags locally
yarn version --deferred $1
yarn workspaces foreach run version --deferred $1
yarn version apply
VERSION=$(node -e 'console.log(require("./packages/govuk-react/package.json").version)') # get new version number
echo "Bumped version to $VERSION"
git add package.json package-lock.json
git commit -m $VERSION
echo "Bumped version to $VERSION"

# TODO: release process for yarn 2 is a WIP

# git branch -m release/v$VERSION # rename branch
# git push -u origin release/v$VERSION # publish new branch
# hub pull-request -m v$VERSION # open a pull request
# hub release create -d v$VERSION -m v$VERSION # create a draft release
