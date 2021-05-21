const { devDependencies } = require('./package.json');
const { dependencies: gukd } = require('./packages/govuk-react/package.json');

module.exports = {
  "parser": "babel-eslint",
  "extends": ["airbnb", "sonar", "prettier", "react-app", "plugin:prettier/recommended", "plugin:cypress/recommended"
],
  "env": {
    "es6": true
  },
  "rules": {
    "prettier/prettier": ["error"],
    "react/jsx-filename-extension": 0,
    "react/destructuring-assignment": 0,// disabled to enable upgrade to eslint-config-airbnb@17
    "react/jsx-props-no-spreading": 0,// disabled to enable upgrade to eslint-config-airbnb@18
    "max-len": 0,// disabled to enable upgrade to eslint-config-airbnb@17
    "jsx-a11y/label-has-associated-control": 0,// disabled to enable upgrade to eslint-config-airbnb@17
    "jsx-a11y/label-has-for": 0,
    "filenames/match-exported": 0,
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],
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
          '@govuk-react/storybook-components',
          ...Object.keys(devDependencies),
          ...Object.keys(gukd).filter(dep => dep.startsWith('@govuk-react/'))
        ]
      }
    },
    {
      "files": [ "test.js", "**.test.js" ],
      "env": {
        "jest": true,
        "browser": true
      }
    }
  ]
}
