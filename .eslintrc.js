module.exports = {
  root: true,
  env: {
    node: true,
    "vue/setup-compiler-macros": true, // 解決無法直接使用 defineProps 的問題 Vue.js - ReferenceError: defineProps is not defined
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-unused-vars": "off",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
  },
};
