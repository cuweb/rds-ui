import React from 'react'
import { Meta } from '@storybook/react'
import MenuPopup from './MenuPopup'

export default {
    component: MenuPopup,
    title: `Blocks/MenuPopup`,
} as Meta

export const Base = () => (
    <MenuPopup
        title='Open Menu'
        isButton
        buttonClassName='c-buttoncta'
        menu={[
            {
                title: 'Item 1',
                link: '#',
            },
        ]}
    />
)
