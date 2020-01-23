module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: false,
    node: true
  },
  extends: ["airbnb-base", "prettier"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 5,
    sourceType: "module"
  },
  rules: {
    "linebreak-style": 0
  }
};
