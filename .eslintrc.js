module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    'vue/multi-word-component-names': 0,
    'vue/first-attribute-linebreak': 0,
  },
  overrides: [
    {
      files: ['*.vue'],
      processor: 'vue/.vue',
    },
  ],
}
