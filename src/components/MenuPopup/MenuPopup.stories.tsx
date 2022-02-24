import React from 'react'
import { Meta } from '@storybook/react'
import MenuPopup from './MenuPopup'
import data from './MenuPopupData.json'

export default {
    component: MenuPopup,
    title: `Blocks/Menu Popup`,
} as Meta

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
