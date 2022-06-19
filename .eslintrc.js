module.exports = {
    root: true,
    env: {
        node: true,
        'vue/setup-compiler-macros': true
    },
    extends: ['plugin:vue/vue3-recommended'],
    rules: {
        'vue/html-quotes': 'off',
        'vue/html-indent': 'off',
        'vue/html-self-closing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/no-use-v-if-with-v-for': 'off'
    }
}
