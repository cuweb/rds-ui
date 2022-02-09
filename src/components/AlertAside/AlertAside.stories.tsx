import React from 'react'
import AlertAside from './AlertAside'
import { Meta, Story } from '@storybook/react'
import Layout from '@src/layouts/Layout/Layout'
import  Main  from '@src/layouts/Layout/Main'



export default {
    component: AlertAside,
    title: 'Components/AlertAside',
} as Meta

const Template: Story = (args: any) => <>
<Layout type='ma'>
        <Main>
            <h2>Multicol MA (Main + Aside)</h2>
            <p>
                This is another two column layout, but this time it consists of
                a main content area, immediately followed by the aside. The base
                class name l-multicol-ma reflects the order that the elements
                appears in its used of ma.
            </p>
        </Main>
        <AlertAside {...args} /> 
    </Layout>


</>

export const Error = Template.bind({})
Error.args = {
    type: 'error',
    title: 'Error Aside Alert',
    content: `An error alert is reserved <a href="#">for errors, malfunctions</a>, as well as critical issues campus safety issues.`,
    handleClose: (e: any) => alert('test'),
}

export const Information = Template.bind({})
Information.args = {
    type: 'info',
    title: 'Aside Information alert',
    content: 'Used to highlight <a href="#">informational content</a>.',
}

export const Success = Template.bind({})
Success.args = {
    type: 'success',
    title: 'Aside Upload success',
    content: 'Your <a href="#">document</a> was uploaded successfully.',
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning',
    title: ' Outdoor event',
    content:
        'Regardless of <a href="#">weather</a>, this event will be held outdoors. Please dress appropriately.',
}
