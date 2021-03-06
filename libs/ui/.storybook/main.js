module.exports = {
  core: { builder: 'webpack5' },
  stories: ['../src/**/*.stories.mdx'],
  addons: ['@storybook/addon-essentials', '@nrwl/react/plugins/storybook', 'storybook-addon-styled-component-theme/dist/preset'],
};
