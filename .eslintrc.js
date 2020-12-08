// RULES LIST: https://eslint.vuejs.org/rules/
// CONFIGURING: http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: { parser: "babel-eslint" },
  extends: ["plugin:vue/recommended"],
  // add your custom rules here
  rules: {
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "no-console": "off",
    "vue/no-v-html": "off",
    "vue/require-default-prop": "off",
    "vue/max-attributes-per-line": "off"
  }
};
