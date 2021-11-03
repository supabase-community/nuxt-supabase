module.exports = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
  },
  env: {
    es6: true,
  },
  extends: ["prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
