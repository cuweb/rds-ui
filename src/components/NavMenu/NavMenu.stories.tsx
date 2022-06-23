import React from 'react'
import { Meta } from '@storybook/react'
import NavMenu from './NavMenu'
import Overlay from '@layouts/Overlay/Overlay'

import SettingModal from '@components/Modal/SettingModal'

export default {
    component: NavMenu,
    title: `Components/NavMenu`,
} as Meta

function sayHello() {
    alert('Hello!')
}
const menu = [
    {
        title: 'Item 1',
        link: '/',
        handleClick: sayHello,
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
export const MobileMenu = () => (
    <Overlay type='menu'>
        <NavMenu type='top' menu={menu} isMobile />
    </Overlay>
)

export const ModalMenu = () => {
    const args = [
        {
            title: 'User Settings',

            handleClick: <p> user setting details </p>,
        },
        {
            title: 'Applications',

            handleClick: (
                <p className='u-margin-auto'> Hello from Applications</p>
            ),
            subMenu: [
                {
                    title: 'Resource',
                    handleClick: <p>hello resource </p>,
                },
                {
                    title: 'Application1',
                    handleClick: <p> Application 1 </p>,
                },
            ],
        },
        {
            title: 'Links',

            handleClick: (
                <p className='u-margin-auto'> Hello from Link Applications</p>
            ),
            subMenu: [
                {
                    title: 'Resource',
                    handleClick: <p>hello resource </p>,
                },
                {
                    title: 'Application1',
                    handleClick: <p> Application 1 </p>,
                },
            ],
        },
    ]

    return (
        <>
            <SettingModal title='Setting' args={args} />
        </>
    )
}
