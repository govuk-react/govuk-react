const { devDependencies } = require('./package.json');

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "sonar", "plugin:flowtype/recommended"],
  "plugins": [
    "flowtype",
    "emotion"
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
    }],
    "emotion/jsx-import": "error",
    "emotion/no-vanilla": "error",
    "emotion/import-from-emotion": "error",
    "emotion/styled-import": "error"
  },
  "settings": {
    "import/core-modules": ['prop-types']
  },
  "overrides": [
    {
      "files": [ "stories.js", "test.js", "fixtures.js", "**.test.js", "example.js", "scripts/**", "src/stories/**" ],
      "rules": {
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
      },
      "settings": {
        "import/core-modules": [
          'govuk-react',
          ...Object.keys(devDependencies)
        ]
      }
    },
    {
      "files": [ "test.js", "**.test.js" ],
      "env": {
        "jest": true,
        "enzyme": true,
        "browser": true
      }
    }
  ]
}
