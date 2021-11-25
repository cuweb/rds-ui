import React from 'react'
import Layout from './Layout'

export default {
    component: Layout,
    title: 'Components/Layout',
}

const Template = (args) => <Layout {...args} />

export const Single = Template.bind({})
Single.args = {
    children: 'Single',
}
