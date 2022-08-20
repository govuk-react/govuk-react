#!/bin/bash
# detect pre-release based on version including a '-' character
PRERELEASE=$(node -e 'console.log(require("./package.json").version.split("-").length > 1)')
if [ "$PRERELEASE" = "true" ]; then
  npm exec can-npm-publish --verbose && npm publish --tag next || true
else
  npm exec can-npm-publish --verbose && npm publish || true
fi
