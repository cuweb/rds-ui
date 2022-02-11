import React from 'react'
import { Meta } from '@storybook/react'
import Menu from './Menu'
import Aside from '@src/layouts/Layout/Aside'
import Main from '@src/layouts/Layout/Main'
import Layout from '@src/layouts/Layout/Layout'
import data from './MenuData.json'

export default {
    component: Menu,
    title: `Blocks/Sidebar Menu`,
} as Meta

const menu = data.menu

export const SideMenu = () => (
    <StoryLayout>
        <Menu type='side' menu={menu} />
    </StoryLayout>
)

export const Sticky = () => (
    <StoryLayout>
        <Menu type='side' menu={menu} sticky />
    </StoryLayout>
)

// Only for stories matters
const StoryLayout: React.FC = ({ children }) => {
    return (
        <Layout type='am'>
            <Aside>{children}</Aside>
            <Main>
                <h2>Sidebar Menu</h2>
                {[...Array(10)].map((x, i) => (
                    <p key={i}>
                        Dolor cupidatat et id magna. Deserunt dolor non sint
                        laboris mollit minim aliqua velit aliqua occaecat
                        pariatur sunt laboris. Ut ullamco dolor ut excepteur
                        aliqua exercitation veniam excepteur proident consequat
                        commodo. Consequat nulla tempor proident velit aliquip
                        ullamco officia adipisicing. Aliqua excepteur consequat
                        tempor cupidatat consectetur do irure aliqua id culpa.
                        Anim pariatur pariatur sint sit sunt labore quis.
                    </p>
                ))}
            </Main>
        </Layout>
    )
}
