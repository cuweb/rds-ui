/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
    plugins: [
        [
            'autoprefixer',
            {
                flexbox: true,
                grid: false,
            },
        ],
        [
            'cssnano',
            {
                preset: [
                    'advanced',
                    {
                        cssDeclarationSorter: {
                            order: 'concentric-css',
                        },
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
                zindex: false,
            },
        ],
        [
            'postcss-pxtorem',
            {
                replace: true,
                propWhiteList: [],
                mediaQuery: false,
            },
        ],
    ],
}
