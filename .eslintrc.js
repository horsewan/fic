// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'no-unused-vars': [2, {
      // 允许声明未使用变量
      'vars': 'local',
      // 参数不检查
      'args': 'none'
    }],
    // 关闭语句强制分号结尾
    'semi': [0],
    //空行最多不能超过100行
    'no-multiple-empty-lines': [0, {'max': 100}],
    //关闭禁止混用tab和空格
    'no-mixed-spaces-and-tabs': [0],
    'space-before-function-paren': [0, 'always'],
    "space-before-blocks": [0, "always"],
    'comma-dangle': [0, 'never'],
    'comma-spacing': 0,
    'comma-style': [0, 'last'],
    "arrow-parens": 0,//箭头函数用小括号括起来
    "arrow-spacing": 0,
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "keyword-spacing":0,
    "eqeqeq":0,
    "brace-style":0,
    "spaced-comment": 0,
    "no-unused-vars":0,
    "vue/no-unused-vars":0,
    "quotes":0,
  },
}
