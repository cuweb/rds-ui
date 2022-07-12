import React from 'react'
import { Meta } from '@storybook/react'
import MenuPopup from './MenuPopup'
import data from './MenuPopupData.json'

export default {
    component: MenuPopup,
    title: `Components/Menu Popup`,
} as Meta

const menuAction = [
    {
        title: 'Item 1',
        link: '#',
        handleAction: () => alert('Clicked Item 1'),
        preventDefault: true,
    },
    {
        title: 'Item 2',
        link: '#',
        separator: true,
        handleAction: () => alert('Clicked Item 2'),
        preventDefault: false,
    },
]

export const Base = () => (
    <div style={data.divStyles}>
        <MenuPopup
            title='Menu Popup'
            className='custom-classname'
            buttonClassName='button-classname'
            isButton
            menu={data.menu}
        />
    </div>
)

export const BaseWithAction = () => (
    <div style={data.divStyles}>
        <MenuPopup
            title='Menu Popup'
            className='custom-classname'
            buttonClassName='button-classname'
            isButton
            menu={menuAction}
        />
    </div>
)

export const RightSideMenu = () => (
    <div style={data.stylesRight}>
        <MenuPopup
            title='Right Menu'
            direction='right'
            isButton
            menu={data.menu}
        />
    </div>
)

export const WithIcons = () => (
    <div style={data.divStyles}>
        <MenuPopup title='With Icons' isButton menu={data.menuIcons} />
    </div>
)

export const WithoutTitle = () => (
    <div className='b-sidebar__actions' style={data.divStyles}>
        <MenuPopup
            icon='kebab-hor'
            className='custom-classname'
            buttonClassName='button-classname'
            isButton
            direction='right'
            menu={data.menu}
        />
    </div>
)
