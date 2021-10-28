import React from 'react';
import Icon from './Icon';

export default {
  component: Icon,
  title: 'Components/Icon',
};

const Template = (args) => <Icon {...args} />;

export const Alert = Template.bind({});
Alert.args = {
  icon: 'alert',
};

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  icon: 'arrowDown',
};

export const Github = Template.bind({});
Github.args = {
  icon: 'github',
};

export const Plus = Template.bind({});
Plus.args = {
  icon: 'plus',
};

export const X = Template.bind({});
X.args = {
  icon: 'x',
};
