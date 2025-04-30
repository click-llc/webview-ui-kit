module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss'],
  rules: {
    'custom-property-pattern': null,
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    // // Основная структура
    // indentation: 2,
    // 'no-empty-source': true,
    // 'max-nesting-depth': 3,
    // 'number-leading-zero': 'always',
    //
    // // Упорядоченность
    // 'order/order': [
    //   'custom-properties',
    //   'declarations',
    //   {
    //     type: 'at-rule',
    //     name: 'media',
    //   },
    //   'rules',
    // ],
    //
    // // Стиль написания
    // 'string-quotes': 'single',
    // 'color-hex-case': 'lower',
    // 'color-hex-length': 'short',
    // 'declaration-colon-space-after': 'always',
    // 'block-opening-brace-space-before': 'always',
    // 'block-closing-brace-empty-line-before': 'never',
    //
    // // Запреты
    // 'no-descending-specificity': null, // можно отключить, если часто переопределяешь компоненты
    // 'property-no-vendor-prefix': true,
    // 'value-no-vendor-prefix': true,
    // 'selector-no-vendor-prefix': true,
    //
    // SCSS-специфичные
    // 'scss/at-import-no-partial-leading-underscore': true,
    // 'scss/dollar-variable-pattern': '^[_a-z]+[a-zA-Z0-9-]*$', // переменные через camelCase/snake_case
    // 'scss/percent-placeholder-pattern': '^u-[a-z]+[a-z0-9-]*$',
  },
};
