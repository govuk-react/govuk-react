const { devDependencies } = require('./package.json');

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "sonar", "plugin:flowtype/recommended"],
  "plugins": [
    "flowtype"
  ],
  "env": {
    "es6": true
  },
  "rules": {
    "react/jsx-filename-extension": 0,
    "jsx-a11y/label-has-for": 0,
    "filenames/match-exported": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }]
  },
  "overrides": [
    {
      "files": [ "stories.js", "test.js", "example.js", "scripts/**", "src/stories/**" ],
      "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
      },
      "settings": {
        "import/core-modules": Object.keys(devDependencies)
      }
    },
    {
      "files": [ "test.js" ],
      "env": {
        "jest": true,
        "enzyme": true,
        "browser": true
      }
    }
  ]
}
