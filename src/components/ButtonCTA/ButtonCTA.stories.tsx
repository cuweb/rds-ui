import React from 'react'
import { Meta, Story } from '@storybook/react'
import ButtonCTA from './ButtonCTA'

export default {
    component: ButtonCTA,
    title: 'Components/Button CTA',
} as Meta

const Template: Story = (args: any) => <ButtonCTA {...args} />

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
