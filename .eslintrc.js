module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": ['react'],
    "rules": {
      "strict": 0,
      "jsx-a11y/label-has-associated-control": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }],
      "jsx-a11y/label-has-for": ["error", {
        "required": {
          "some": ["nesting", "id"]
        }
      }],
      "no-unused-vars": "warn",
      "import/prefer-default-export": "warn",
      "object-curly-newline": ["error", {
        "ObjectExpression": { "consistent": true },
        "ObjectPattern": { "consistent": true },
        "ImportDeclaration": { "consistent": true },
        "ExportDeclaration": { "consistent": true },
      }],
      "react/jsx-tag-spacing": ["error", {
        "beforeSelfClosing": "allow"
      }],
      /* airbnb rules we're simply turning off */
      "react/jsx-one-expression-per-line": "off",
    }
  };