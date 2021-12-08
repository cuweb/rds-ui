const path = require('path')

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@whitespace/storybook-addon-html',
    ],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@src': path.resolve(__dirname, '../src/'),
        }
        return config
    },
}
