import React from 'react'
import Toast from './Toast'
import { Meta, Story } from '@storybook/react'

export default {
    component: Toast,
    title: 'Components/Toast',
} as Meta

const Template: Story = (args: any) => <Toast {...args} />

export const InformationToastDefault = Template.bind({})
InformationToastDefault.args = {
    position: 'default',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastTopRight = Template.bind({})
InformationToastTopRight.args = {
    position: 'top-right',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastTopLeft = Template.bind({})
InformationToastTopLeft.args = {
    position: 'top-left',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastBottomRight = Template.bind({})
InformationToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastBottomLeft = Template.bind({})
InformationToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'info',
    title: 'Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const SuccessToastDefault = Template.bind({})
SuccessToastDefault.args = {
    position: 'default',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastTopRight = Template.bind({})
SuccessToastTopRight.args = {
    position: 'top-right',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastTopLeft = Template.bind({})
SuccessToastTopLeft.args = {
    position: 'top-left',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastBottomRight = Template.bind({})
SuccessToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastBottomLeft = Template.bind({})
SuccessToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'success',
    title: 'Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const WarningToastDefault = Template.bind({})
WarningToastDefault.args = {
    position: 'default',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastTopRight = Template.bind({})
WarningToastTopRight.args = {
    position: 'top-right',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastTopLeft = Template.bind({})
WarningToastTopLeft.args = {
    position: 'top-left',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastBottomRight = Template.bind({})
WarningToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastBottomLeft = Template.bind({})
WarningToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'warning',
    title: 'Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const ErrorToastDefault = Template.bind({})
ErrorToastDefault.args = {
    position: 'default',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastTopRight = Template.bind({})
ErrorToastTopRight.args = {
    position: 'top-right',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastTopLeft = Template.bind({})
ErrorToastTopLeft.args = {
    position: 'top-left',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastBottomRight = Template.bind({})
ErrorToastBottomRight.args = {
    position: 'bottom-right',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastBottomLeft = Template.bind({})
ErrorToastBottomLeft.args = {
    position: 'bottom-left',
    alertType: 'error',
    title: 'Error Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const InformationToastDefaultAutoClose = Template.bind({})
InformationToastDefaultAutoClose.args = {
    position: 'default',
    alertType: 'info',
    title: 'Information alert',
    autoCloseTimeInterval: 5000,
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastTopRightAutoClose = Template.bind({})
InformationToastTopRightAutoClose.args = {
    position: 'top-right',
    alertType: 'info',
    title: 'Information alert',
    autoCloseTimeInterval: 5000,
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastTopLeftAutoClose = Template.bind({})
InformationToastTopLeftAutoClose.args = {
    position: 'top-left',
    alertType: 'info',
    title: 'Information alert',
    autoCloseTimeInterval: 5000,
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastBottomRightAutoClose = Template.bind({})
InformationToastBottomRightAutoClose.args = {
    position: 'bottom-right',
    alertType: 'info',
    title: 'Information alert',
    autoCloseTimeInterval: 5000,
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const InformationToastBottomLeftAutoClose = Template.bind({})
InformationToastBottomLeftAutoClose.args = {
    position: 'bottom-left',
    alertType: 'info',
    title: 'Information alert',
    autoCloseTimeInterval: 5000,
    content: 'Used to highlight <a href="#">informational content</a>.',
    handleClose: () => alert('test'),
}

export const SuccessToastDefaultAutoClose = Template.bind({})
SuccessToastDefaultAutoClose.args = {
    position: 'default',
    alertType: 'success',
    title: 'Upload success',
    autoCloseTimeInterval: 5000,
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastTopRightAutoClose = Template.bind({})
SuccessToastTopRightAutoClose.args = {
    position: 'top-right',
    alertType: 'success',
    title: 'Upload success',
    autoCloseTimeInterval: 5000,
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastTopLeftAutoClose = Template.bind({})
SuccessToastTopLeftAutoClose.args = {
    position: 'top-left',
    alertType: 'success',
    title: 'Upload success',
    autoCloseTimeInterval: 5000,
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastBottomRightAutoClose = Template.bind({})
SuccessToastBottomRightAutoClose.args = {
    position: 'bottom-right',
    alertType: 'success',
    title: 'Upload success',
    autoCloseTimeInterval: 5000,
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const SuccessToastBottomLeftAutoClose = Template.bind({})
SuccessToastBottomLeftAutoClose.args = {
    position: 'bottom-left',
    alertType: 'success',
    title: 'Upload success',
    autoCloseTimeInterval: 5000,
    content: 'Your <a href="#">document</a> was uploaded successfully.',
    handleClose: () => alert('test'),
}

export const WarningToastDefaultAutoClose = Template.bind({})
WarningToastDefaultAutoClose.args = {
    position: 'default',
    alertType: 'warning',
    title: 'Outdoor event',
    autoCloseTimeInterval: 5000,
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastTopRightAutoClose = Template.bind({})
WarningToastTopRightAutoClose.args = {
    position: 'top-right',
    alertType: 'warning',
    title: 'Outdoor event',
    autoCloseTimeInterval: 5000,
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastTopLeftAutoClose = Template.bind({})
WarningToastTopLeftAutoClose.args = {
    position: 'top-left',
    alertType: 'warning',
    title: 'Outdoor event',
    autoCloseTimeInterval: 5000,
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastBottomRightAutoClose = Template.bind({})
WarningToastBottomRightAutoClose.args = {
    position: 'bottom-right',
    alertType: 'warning',
    title: 'Outdoor event',
    autoCloseTimeInterval: 5000,
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const WarningToastBottomLeftAutoClose = Template.bind({})
WarningToastBottomLeftAutoClose.args = {
    position: 'bottom-left',
    alertType: 'warning',
    title: 'Outdoor event',
    autoCloseTimeInterval: 5000,
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
    handleClose: () => alert('test'),
}

export const ErrorToastDefaultAutoClose = Template.bind({})
ErrorToastDefaultAutoClose.args = {
    position: 'default',
    alertType: 'error',
    title: 'Error Alert',
    autoCloseTimeInterval: 5000,
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastTopRightAutoClose = Template.bind({})
ErrorToastTopRightAutoClose.args = {
    position: 'top-right',
    alertType: 'error',
    title: 'Error Alert',
    autoCloseTimeInterval: 5000,
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastTopLeftAutoClose = Template.bind({})
ErrorToastTopLeftAutoClose.args = {
    position: 'top-left',
    alertType: 'error',
    title: 'Error Alert',
    autoCloseTimeInterval: 5000,
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastBottomRightAutoClose = Template.bind({})
ErrorToastBottomRightAutoClose.args = {
    position: 'bottom-right',
    alertType: 'error',
    title: 'Error Alert',
    autoCloseTimeInterval: 5000,
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}

export const ErrorToastBottomLeftAutoClose = Template.bind({})
ErrorToastBottomLeftAutoClose.args = {
    position: 'bottom-left',
    alertType: 'error',
    title: 'Error Alert',
    autoCloseTimeInterval: 5000,
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: () => alert('test'),
}
