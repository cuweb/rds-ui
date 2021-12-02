const path = require('path')

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@src': path.resolve(__dirname, '../src/'),
        }
        return config
    },
    core: {
        builder: 'webpack5',
    },
}
