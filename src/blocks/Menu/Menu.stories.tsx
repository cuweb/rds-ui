import React from 'react'
import { Meta } from '@storybook/react'
import Menu from './Menu'
import Aside from '@src/layouts/Layout/Aside'
import Main from '@src/layouts/Layout/Main'
import Layout from '@src/layouts/Layout/Layout'

export default {
    component: Menu,
    title: `Blocks/Sidebar Menu`,
} as Meta

const menu = [
    {
        title: 'Item 1',
        link: '#',
    },
    {
        title: 'Item 2',
        link: 'http://carleton.ca',
        target: '_blank',
    },
    {
        title: 'Item 3',
        subMenu: [
            {
                title: 'Item 3.1',
                link: '#3-1',
            },
            {
                title: 'Item 3.2',
                link: '#3-2',
            },
        ],
    },
    {
        title: 'Item 4',
        subMenu: [
            {
                title: 'Item 4.1',
                link: '#4-1',
            },
            {
                title: 'Item 4.2',
                link: '#4-2',
                subMenu: [
                    {
                        title: 'Item 4.1.1',
                        link: '#4-1-1',
                    },
                    {
                        title: 'Item 4.1.2',
                        link: '#4-1-2',
                    },
                ],
            },
        ],
    },
]

export const SideMenu = () => (
    <StoryLayout>
        <Menu type='side' menu={menu} />
    </StoryLayout>
)

// TODO: Review the top menu
// export const TopMenu = () => (
//     <StoryLayout>
//         <Menu type='top' menu={menu} />
//     </StoryLayout>
// )

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
