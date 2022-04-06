import { themes } from '@storybook/theming'

import '../dist/rds.css'
export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    darkMode: {
        dark: { ...themes.dark, appBg: '#333333' },
        darkClass: 'raven-mode',
        stylePreview: true,
    },
    options: {
        storySort: {
            order: ['Main Concepts', 'Components', 'Blocks'],
        },
    },
}
