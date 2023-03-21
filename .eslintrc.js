module.exports = {
  env: {
    browser: true,
    node: true
  },
  plugins: [
    "react", "react-hooks", 'prettier',
    "@typescript-eslint"
  ],
  rules: {
    // enable additional rules
    quotes: ["error", "double"],
    semi: ["error", "always"]
  },
  extends: ["eslint:recommended", 'plugin:react/recomended', 'plugin:@typescript-eslint/recomended', 'plugin:prettier/recommended'],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
  settings: {
    react: {
      pragma: "React",
      version: "detect"
    }
  }
};