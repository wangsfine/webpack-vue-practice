module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    // parser : 'babel-eslint',
    ecmaFeatures : {
      jsx : true, // 支持jsx语法
    }
  },
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
    // 'airbnb-base/legacy',
  //   'plugin:vue/vue3-recommended',
    'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    // "no-process-env": 'off',
    // "no-unused-vars": 'off',
    // "no-undef": ['error', { "typeof": true }],
  }
}