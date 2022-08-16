import React from 'react'
import { Meta, Story } from '@storybook/react'
import ButtonCTA, { ButtonProps } from './ButtonCTA'

export default {
    component: ButtonCTA,
    title: 'Components/Button CTA',
} as Meta

const Template: Story<ButtonProps> = (args: any) => <ButtonCTA {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Join the darkside',
    link: 'http://www.nooooooooooooooo.com/',
    target: 'blank',
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Stay Puft',
    link: 'https://en.wikipedia.org/wiki/Stay_Puft_Marshmallow_Man',
    ghost: true,
}

export const Grey = Template.bind({})
Grey.args = {
    text: 'Meet Qui-Gon Jinn',
    link: 'https://starwars.fandom.com/wiki/Gray_Jedi',
    grey: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    text: 'Download our free ebook',
    link: '#',
    icon: 'arrow-down',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    text: 'Add to Calendar',
    link: '#',
    icon: 'plus',
    full: true,
}

export const Centered = Template.bind({})
Centered.args = {
    text: 'Centered Button',
    link: '#',
    center: true,
}

export const NoShadow = Template.bind({})
NoShadow.args = {
    text: 'No Shadow Button',
    link: '#',
    shadow: false,
}

export const handleClick = Template.bind({})
handleClick.args = {
    text: 'Handle Click ',
    wrapLink: 'div',
    shadow: false,
    handleClick: () => {
        alert('handle click with Button CTA  has been clicked')
    },
    grey: true,
}
