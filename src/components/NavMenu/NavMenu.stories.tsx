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

const buttons= [
        {
            title: 'Login',
            link: '#',
            icon: 'lock',
            handleAction: () => alert('Clicked Item 1'),
            preventDefault: true
        },
    ]

export const SideMenu = () => (
    <div style={{ maxWidth: '200px' }}>
        <NavMenu type='side' menu={menu} />
    </div>
)
export const TopMenu = () => (
    <div className='b-masthead'>
        <NavMenu type='top' menu={menu} />
    </div>
)

export const TopMenuWithActions = () => (
    <div className='b-masthead'>
        <NavMenu type='top' menu={buttons} />
    </div>
)

export const MobileMenu = () => (
    <Overlay type='menu'>
        <NavMenu type='top' menu={menu} isMobile />
    </Overlay>
)
