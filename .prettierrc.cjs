module.exports = {
    arrowParens: 'always',
    bracketSpacing: true,
    bracketSameLine: false,
    semi: false,
    jsxSingleQuote: true,
    singleQuote: true,
    singleAttributePerLine: true,
    trailingComma: 'none',
    tabWidth: 4,
    printWidth: 100,
    plugins: ['@trivago/prettier-plugin-sort-imports'],
    importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^../(.*)$', '^[./]'],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true
}