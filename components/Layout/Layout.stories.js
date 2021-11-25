import React from 'react'
import Layout from './Layout'
import Banner from '../Banner/Banner'

export default {
    component: Layout,
    title: 'Components/Layout',
}

const Template = (args) => <Layout {...args} />

export const Single = Template.bind({})
Single.args = {
    children: [
        <Banner title='Single column layout' />,
        <p>{`The single column layout only requires a <main> tag in between your <header> and <footer> tags.`}</p>,
    ],
}

export const MulticolAM = Template.bind({})
MulticolAM.args = {
    children: [
        <Banner title='Multicol AM (Aside + Main)' />,
        <p>
            This is a two column layout consisting of an aside, immediately
            followed by the main content area. The base class name l-multicol-am
            reflects the order that the elements appears in its used of am.'
        </p>,
    ],
    aside: 'Left Aside',
    type: 'am',
}

export const MulticolMA = Template.bind({})
MulticolMA.args = {
    children: [
        <Banner title='Multicol MA (Main + Aside)' />,
        <p>
            This is another two column layout, but this time it consists of a
            main content area, immediately followed by the aside. The base class
            name l-multicol-ma reflects the order that the elements appears in
            its used of ma.
        </p>,
    ],
    aside: `Right aside`,
    type: 'ma',
}

export const MulticolAMA = Template.bind({})
MulticolAMA.args = {
    children: [
        <Banner title='Multicol MA (Main + Aside)' />,
        <p>
            This is another two column layout, but this time it consists of a
            main content area, immediately followed by the aside. The base class
            name l-multicol-ma reflects the order that the elements appears in
            its used of ma.
        </p>,
    ],
    aside: `Right aside`,
    sidebar: `Sidebar`,
    type: 'ama',
}
