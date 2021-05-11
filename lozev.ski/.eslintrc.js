module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: ["plugin:vue/recommended", "eslint:recommended", "plugin:prettier/recommended", "prettier/vue"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: [2, "never"],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        printWidth: 120,
        arrayExpand: true,
        embeddedLanguageFormatting: "auto",
        spaceBeforeFunctionParen: "always",
      },
    ],
    "lines-between-class-members": ["error", "always"],
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never",
        named: "never",
        asyncArrow: "always",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],
  },
}
