import React from 'react'
import { Meta } from '@storybook/react'
import SidebarMenu from './SidebarMenu'
import Aside from '@layouts/Layout/Aside'
import Main from '@layouts/Layout/Main'
import Layout from '@layouts/Layout/Layout'
import data from './SidebarMenuData.json'

export default {
    component: SidebarMenu,
    title: `Blocks/Sidebar Menu`,
} as Meta

const menu = data.menu

export const SideMenu = () => (
    <StoryLayout>
        <SidebarMenu menu={menu} />
    </StoryLayout>
)

export const Sticky = () => (
    <StoryLayout>
        <SidebarMenu menu={menu} sticky />
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
