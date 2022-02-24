import React from 'react'
import AlertAside from './AlertAside'
import { Meta, Story } from '@storybook/react'
import Layout from '@src/layouts/Layout/Layout'
import Main from '@src/layouts/Layout/Main'
import Sidebar from '@src/layouts/Layout/Sidebar'

export default {
    component: AlertAside,
    title: 'Components/AlertAside',
} as Meta

const Template: Story = (args: any) => (
    <>
        <Layout type='ma'>
            <Main>
                <h2>Multicol MA (Main + Aside)</h2>
                <p>
                    This is another two column layout, but this time it consists
                    of a main content area, immediately followed by the aside.
                    The base class name l-multicol-ma reflects the order that
                    the elements appears in its used of ma.
                </p>
            </Main>
            <Sidebar>
                <AlertAside {...args} />
            </Sidebar>
        </Layout>
    </>
)

export const Error = Template.bind({})
Error.args = {
    type: 'error',
    title: 'Error Alert Aside block example ',
    content: `This is an example of an Alert Aside block. This block can use any variant of the Alert component.`,
    handleClose: (e: any) => alert('test'),
}

export const Information = Template.bind({})
Information.args = {
    type: 'info',
    title: 'Information Alert Aside block example',
    content:
        'This is an example of an Alert Aside block. This block can use any variant of the Alert component.',
}

export const Success = Template.bind({})
Success.args = {
    type: 'success',
    title: 'Upload success Alert Aside block example',
    content:
        'This is an example of an Alert Aside block. This block can use any variant of the Alert component.',
}

export const Warning = Template.bind({})
Warning.args = {
    type: 'warning',
    title: ' Warning Alert Aside block example. ',
    content:
        'This is an example of an Alert Aside block. This block can use any variant of the Alert component.',
}
