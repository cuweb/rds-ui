import React from 'react'
import Layout from './Layout'
import Aside from './Aside'
import Main from './Main'
import Sidebar from './Sidebar'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'

export default {
    component: Layout,
    title: 'Main Concepts/Layouts',
}

export const Single = () => (
    <Layout>
        <h2>Single column layout</h2>
        <p>
            The single column layout only requires a {`<main>`} tag in between
            your {`<header>`} and {`<footer>`} tags.
            <br />
            When using the single column <a href='#'>layout</a>, all Main
            section blocks can be used within the {`<main>`} section, including
            all fixed and full-width blocks.
        </p>
        <table>
            <thead>
                <tr>
                    <th colSpan={2}>The table header</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The table body</td>
                    <td>with two columns</td>
                </tr>
            </tbody>
        </table>
        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
        <img src='https://via.placeholder.com/640x480' alt='image' />
        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
        <ButtonCTA
            link='https://carleton.ca'
            icon='arrow-down'
            text='Download now'
        />

        <p>
            Lorem ipsum <a href='https://carleton.ca/'>dolor</a> sit amet,
            consectetur adipiscing elit. Cras convallis neque quis enim eleifend
            luctus. Aliquam erat volutpat. Praesent malesuada dapibus turpis, a
            aliquam lacus mollis vel.
        </p>
    </Layout>
)

export const MulticolAM = () => {
    return (
        <Layout type='am'>
            <Aside>
                <h3>Left Aside</h3>
                <p>
                    The left-side aside is intended for site navigation using
                    the Menu block. The column has a fixed width of 200px, and
                    disappears from view below 810px. While the main purposes of
                    this aside is to contain a site navigation, additional aside
                    blocks can be added below the menu.
                </p>
            </Aside>
            <Main>
                <h2>Multicol AM (Aside + Main)</h2>
                <p>
                    This is a two column layout consisting of an aside,
                    immediately followed by the main content area. The base
                    class name l-multicol-am reflects the order that the
                    elements appears in its used of am.'
                </p>
            </Main>
        </Layout>
    )
}
export const MulticolMA = () => (
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
        <Aside>
            <h3>Right aside</h3>
            <p>
                The right-side aside is intended for providing content related
                to what is dispplayed in the main area. The column has a fixed
                width of 270px, and drops below the main content area below
                810px.
            </p>
        </Aside>
    </Layout>
)

export const MulticolAMA = () => (
    <Layout type='ama'>
        <Aside>
            <h3>Left Aside</h3>
            <p>
                The left-side aside is intended for site navigation using the
                Menu block. The column has a fixed width of 200px, and
                disappears from view below 810px. While the main purposes of
                this aside is to contain a site navigation, additional aside
                blocks can be added below the menu.
            </p>
        </Aside>
        <Main>
            <h2>Multicol AMA (Aside + Main + Aside)</h2>
            <p>
                This is another two column layout, but this time it consists of
                a main content area, immediately followed by the aside. The base
                class name l-multicol-ma reflects the order that the elements
                appears in its used of ma.
            </p>
        </Main>
        <Sidebar>
            <h3>Right aside</h3>
            <p>
                The right-side aside is intended for providing content related
                to what is dispplayed in the main area. The column has a fixed
                width of 270px, and drops below the main content area below
                810px.
            </p>
        </Sidebar>
    </Layout>
)
