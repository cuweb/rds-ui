import React from 'react'
import { Meta } from '@storybook/react'
import Menu from './Menu'

export default {
    component: Menu,
    title: `Blocks/Menu`,
} as Meta

const menu = [
    {
        title: 'Item 1',
        link: '#',
    },
    {
        title: 'Carleton Univertisy',
        link: 'http://carleton.ca',
        target: '_blank',
    },
    {
        title: 'About',
        subMenu: [
            {
                title: 'Dean`s Message',
                link: '#',
            },
            {
                title: 'FASS Leadership',
                link: '#',
            },
        ],
    },
    {
        title: 'Future Students',
        subMenu: [
            {
                title: 'Undesgraduate Programs',
                link: '#',
            },
            {
                title: 'Graduate Programs',
                link: '#',
            },
        ],
    },
]

export const SideMenu = () => <Menu type='side' menu={menu} />
export const TopMenu = () => <Menu type='top' menu={menu} />
export const Sticky = () => <Menu type='side' menu={menu} sticky />
