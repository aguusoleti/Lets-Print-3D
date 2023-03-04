module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    esc6: true,
  },
  extends:[
    'eslint: recommended',
    'plugin: jsx-a11y/recommended',
    'plugin: prettier/recommended',
    'next',
    'next/core-web-vitals',
  ],
  rules:{
    'semi': ['error', 'always'], // aca le digo que el uso de ; es obligatorio y va a ser error en todos los casos que falte 
  }
}