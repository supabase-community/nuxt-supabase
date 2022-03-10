module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["prettier"],
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": ["error"],
  },
};
