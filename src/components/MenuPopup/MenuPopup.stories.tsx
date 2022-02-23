import React from 'react'
import { Meta } from '@storybook/react'
import MenuPopup from './MenuPopup'

export default {
    component: MenuPopup,
    title: `Blocks/Menu Popup`,
} as Meta

const divStyles = {
    maxWidth: 120,
    marginLeft: 100,
}

const menu = [
    {
        title: 'Item 1',
        link: '#',
    },
    {
        title: 'Item 2',
        link: '#',
        separator: true,
    },
]

export const Base = () => (
    <div style={divStyles}>
        <MenuPopup title='Menu Popup' isButton menu={menu} />
    </div>
)

export const RightSideMenu = () => (
    <div style={divStyles}>
        <MenuPopup title='Right Menu' direction='right' isButton menu={menu} />
    </div>
)
