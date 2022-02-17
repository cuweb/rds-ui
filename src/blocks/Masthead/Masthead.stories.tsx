import React from 'react'
import { Meta } from '@storybook/react'
import Masthead from '@blocks/Masthead/Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
} as Meta

const args = {
    title: 'Ravens Design System',
    url: 'https://github.com/cuweb/rds-beta',
    actions: {
        search: {
            title: 'Search',
            placeholder: 'Search',
            onSubmit: (e: any) => {
                e.preventDefault()
                alert('Search')
            },
        },
        login: {
            title: 'Login to Your App',
            forgetLink: 'http://carleton.ca',
            registerLink: 'http://carleton.ca',
            onSubmit: (e: any) => {
                e.preventDefault()
                alert('Login')
            },
        },
        buttons: [
            {
                title: 'Button 1',
                link: '/',
                subMenu: [
                    {
                        title: 'Button 1.1',
                        link: '/',
                    },
                    {
                        title: 'Button 1.2',
                        link: '/',
                    },
                ],
            },
            {
                title: 'Button 2',
                link: '/',
                color: 'red',
            },
        ],
    },
    menu: [
        {
            title: 'Item 1',
            link: '/',
            subMenu: [
                {
                    title: 'Item 1.1',
                    link: '/',
                },
                {
                    title: 'Item 1.2',
                    link: '/',
                },
            ],
        },
        {
            title: 'Item 2',
            link: '/',
        },
        {
            title: 'Item 3',
            link: '/',
        },
        {
            title: 'Item 4',
            link: '/',
            subMenu: [
                {
                    title: 'Item 4.1',
                    link: '/',
                },
                {
                    title: 'Item 4.2',
                    link: '/',
                },
            ],
        },
    ],
}

export const Base = () => <Masthead title={args.title} url={args.url} />
export const BrandLogo = () => (
    <Masthead
        title={args.title}
        url={args.url}
        brand={
            'https://sprott.carleton.ca/wp-content/uploads/CU_Sprott_Logo_Primary_RBG_Red_Black_on_lightBG_300-1024x343.jpg'
        }
    />
)
export const WithMenu = () => (
    <Masthead title={args.title} url={args.url} menu={args.menu} />
)
export const WithActions = () => (
    <Masthead title={args.title} url={args.url} actions={args.actions} />
)

export const KitchenSink = () => <Masthead {...args} />
