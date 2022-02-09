import React from 'react'
import { Meta } from '@storybook/react'
import Masthead from './Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
} as Meta

const args = {
    title: 'Ravens Design System',
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

export const Base = () => <Masthead title={args.title} />
export const WithMenu = () => (
    <Masthead title={args.title} actions={args.actions} />
)
