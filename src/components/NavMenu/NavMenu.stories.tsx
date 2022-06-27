import React, { useState } from 'react'
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

const handleClickMenu = [
    {
        title: 'Item 1',
        link: '/',
        handleClick: () => {
            alert('its been click !')
        },
    },
    {
        title: 'Item 2',
        link: '/',
        subMenu: [
            {
                title: 'Item 2.1',
                link: '/',
                handleClick: () => {
                    alert('its been click from sub menu !')
                },
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
export const MobileMenu = () => {
    const [isHidden, setIshHidden] = useState(true)
    console.log(isHidden)

    return (
        <div style={{ maxWidth: '200px' }}>
            <button
                className='c-navicon'
                type='button'
                onClick={() => setIshHidden(!isHidden)}
            >
                <span className='c-navicon__box'>
                    <span className='c-navicon__inner'></span>
                </span>
            </button>
            <Overlay isHidden={isHidden} type='menu'>
                <NavMenu type='top' menu={menu} isMobile />
            </Overlay>
        </div>
    )
}

export const HandleClickMenu = () => (
    <div style={{ maxWidth: '200px' }}>
        <NavMenu type='side' menu={handleClickMenu} />
    </div>
)
