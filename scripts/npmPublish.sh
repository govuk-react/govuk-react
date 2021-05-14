#!/bin/bash
# detect pre-release based on version including a '-' character
PRERELEASE=$(node -e 'console.log(require(`${process.env.LERNA_ROOT_PATH}/lerna.json`).version.split("-").length > 1)')
if [ "$PRERELEASE" = "true" ]; then
  can-npm-publish --verbose && npm publish --tag next
else
  can-npm-publish --verbose && npm publish
fi
