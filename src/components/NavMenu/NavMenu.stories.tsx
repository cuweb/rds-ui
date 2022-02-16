import React from 'react'
import { Meta } from '@storybook/react'
import NavMenu from './NavMenu'

export default {
    component: NavMenu,
    title: `Blocks/NavMenu`,
} as Meta

const menu = [
    {
        title: 'Item 1',
        link: 'Link 1',
        subMenu: [
            {
                title: 'Item 1.1',
                link: 'Link 1.2',
            },
        ],
    },
    {
        title: 'Item 2',
        link: 'Link 2',
    },
    {
        title: 'Item 3',
        link: 'Link 3',
    },
]

export const SideMenu = () => <NavMenu type='side' menu={menu} />
export const TopMenu = () => (
    <div className='b-masthead'>
        <NavMenu type='top' menu={menu} />
    </div>
)
