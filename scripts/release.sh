#!/bin/bash
# requires https://hub.github.com
git checkout -b release/next origin/master # make a new branch for next version from master
git fetch --tags # lerna uses tags to determine what has changed, we need to make sure we have all tags locally
lerna publish --skip-npm # update version numbers
VERSION=$(node -e 'console.log(require("./lerna.json").version)') # get new version number
git tag -d v$VERSION # delete local tag
git branch -m release/v$VERSION # rename branch
git push -u origin release/v$VERSION # publish new branch
hub pull-request -m v$VERSION # open a pull request
hub release create -d v$VERSION # create a draft release
