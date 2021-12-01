import React from 'react'
import Layout from './Layout'

export default {
    component: Layout,
    title: 'Components/Layout',
}

const Template = (args) => <Layout {...args} />

export const Single = Template.bind({})
Single.args = {
    children: [
        <h2>Single column layout</h2>,
        <p>{`The single column layout only requires a <main> tag in between your <header> and <footer> tags.`}</p>,
        <p>{`When using the single column layout, all Main section blocks can be used within the <main> section, including all fixed and full-width blocks.`}</p>,
    ],
}

export const MulticolAM = Template.bind({})
MulticolAM.args = {
    children: [
        <h2>Multicol AM (Aside + Main)</h2>,
        <p>
            This is a two column layout consisting of an aside, immediately
            followed by the main content area. The base class name l-multicol-am
            reflects the order that the elements appears in its used of am.'
        </p>,
    ],
    aside: [
        <h3>Left Aside</h3>,
        <p>{`The left-side <aside> is intended for site navigation using the Menu block. The column has a fixed width of 200px, and disappears from view below 810px. While the main purposes of this aside is to contain a site navigation, additional aside blocks can be added below the menu.`}</p>,
    ],
    type: 'am',
}

export const MulticolMA = Template.bind({})
MulticolMA.args = {
    children: [
        <h2>Multicol MA (Main + Aside)</h2>,
        <p>
            This is another two column layout, but this time it consists of a
            main content area, immediately followed by the aside. The base class
            name l-multicol-ma reflects the order that the elements appears in
            its used of ma.
        </p>,
    ],
    aside: [
        <h3>Right aside</h3>,
        <p>{`The right-side <aside> is intended for providing content related to what is dispplayed in the main area. The column has a fixed width of 270px, and drops below the main content area below 810px.`}</p>,
    ],
    type: 'ma',
}

export const MulticolAMA = Template.bind({})
MulticolAMA.args = {
    children: [
        <h2>Multicol AMA (Aside + Main + Aside)</h2>,
        <p>
            This is another two column layout, but this time it consists of a
            main content area, immediately followed by the aside. The base class
            name l-multicol-ma reflects the order that the elements appears in
            its used of ma.
        </p>,
    ],
    aside: [
        <h3>Left Aside</h3>,
        <p>{`The left-side <aside> is intended for site navigation using the Menu block. The column has a fixed width of 200px, and disappears from view below 810px. While the main purposes of this aside is to contain a site navigation, additional aside blocks can be added below the menu.`}</p>,
    ],
    sidebar: [
        <h3>Right aside</h3>,
        <p>{`The right-side <aside> is intended for providing content related to what is dispplayed in the main area. The column has a fixed width of 270px, and drops below the main content area below 810px.`}</p>,
    ],
    type: 'ama',
}
