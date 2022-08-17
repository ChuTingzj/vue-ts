// .eslintrc.js

module.exports = {
  plugins: ['prettier'],
  // 不往父级查找
  root: true,
  // 环境配置
  env: {
    node: true,
    browser: true,
    es6: true
  },
  // 拓展规则
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  // 自定义规则，会覆盖一部分拓展规则
  // 具体这些参数代表什么规则，可以去eslint官网看
  rules: {
    semi: 'off',
    'eol-last': 'off',
    'no-new': 'off',
    'arrow-parens': 'off',
    'import/no-extraneous-dependencies': 'off',
    'comma-danger': 'off',
    'no-useless-escape': 'off',
    'prettier/prettier': 'error',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  // 语言风格
  parserOptions: {
    // 支持import
    sourceType: 'module',
    ecmaVersion: 'latest'
  }
}
