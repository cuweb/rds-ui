/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
    plugins: [
        require('autoprefixer')({
            flexbox: true,
            grid: false,
        }),
        require('cssnano')({
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
        }),
        require('postcss-pxtorem')({
            replace: true,
            propWhiteList: [],
            mediaQuery: false,
        }),
    ],
}
