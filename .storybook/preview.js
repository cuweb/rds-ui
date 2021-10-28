import '../styles/rds.css';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  // previewTabs: { 'storybook/docs/panel': { index: -1 } },
  // viewMode: 'docs',
  options: {
    storySort: {
      order: ['Getting started', 'Components'],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
