import React from 'react'
import { Meta } from '@storybook/react'
import Masthead from './Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
} as Meta

const args = {
    title: 'Ravens Design System',
    url: 'https://github.com/cuweb/rds-beta',
    brand: 'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg',
    actions: [
        {
            text: 'Item 1',
            link: '/',
        },
        {
            text: 'Item 2',
            link: '/',
        },
    ],
}

export const Base = () => <Masthead title={args.title} url={args.url} />
export const CustomLogo = () => (
    <Masthead title={args.title} url={args.url} brand={args.brand} />
)
export const WithMenu = () => (
    <Masthead title={args.title} url={args.url} actions={args.actions} />
)
