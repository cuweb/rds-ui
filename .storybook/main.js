const path = require('path')

module.exports = {
    stories: [
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
        '../pages/**/*.mdx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                cssLoaderOptions: {
                    importLoaders: 1,
                },
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../components/'),
        }
        return config
    },
}
