import React from 'react'
import { Meta } from '@storybook/react'
import NavMenu from './NavMenu'
import Overlay from '@layouts/Overlay/Overlay'

export default {
    component: NavMenu,
    title: `Components/NavMenu`,
} as Meta

const menu = [
    {
        title: 'Item 1',
        link: '/',
    },
    {
        title: 'Item 2',
        link: '/',
        subMenu: [
            {
                title: 'Item 2.1',
                link: '/',
            },
            {
                title: 'Item 2.2',
                link: '/',
            },
        ],
    },
    {
        title: 'Item 3',
        link: '/',
    },
    {
        title: 'Item 4',
        link: '/',
    },
]

export const SideMenu = () => <NavMenu type='side' menu={menu} />
export const TopMenu = () => (
    <div className='b-masthead'>
        <NavMenu type='top' menu={menu} />
    </div>
)
export const MobileMenu = () => (
    <Overlay type='menu'>
        <NavMenu type='top' menu={menu} isMobile />
    </Overlay>
)
