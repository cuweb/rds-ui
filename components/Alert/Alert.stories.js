import React from 'react';
import Alert from './Alert';

export default {
  component: Alert,
  title: 'Components/Alert',
};

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  title: 'Error Alert',
  content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
  handleClose: () => alert('test'),
};

export const Information = Template.bind({});
Information.args = {
  type: 'info',
  title: 'Information alert',
  content: 'Used to highlight <a href="#">informational content</a>.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Upload success',
  content: 'Your <a href="#">document<a/> was uploaded successfully.',
};
