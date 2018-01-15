module.exports = {
    "parserOptions": {
        "ecmaVersion": 8,
    },
    "extends": ["eslint:recommended","plugin:react/recommended"],
    "rules": {
      "semi": [1,"never"],
      "no-undef": 0,
      "no-console": 0,
      "react/display-name": 0,
    },
    "parser": "babel-eslint"
  }