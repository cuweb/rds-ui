import React from 'react'
import { Meta, Story } from '@storybook/react'
import ButtonSocial from './ButtonSocial'
import data from './ButtonSocialData.json'
import getVariation from '@src/functions/getVariation'

export default {
    component: ButtonSocial,
    title: 'Components/Button Social',
} as Meta

const Template: Story = (args: any) => <ButtonSocial {...args} />

export const Facebook = Template.bind({})
Facebook.args = getVariation('facebook', data.variations)

export const Instagram = Template.bind({})
Instagram.args = getVariation('instagram', data.variations)

export const Twitter = Template.bind({})
Twitter.args = getVariation('twitter', data.variations)

export const Youtube = Template.bind({})
Youtube.args = getVariation('youtube', data.variations)

export const Linkedin = Template.bind({})
Linkedin.args = getVariation('linkedin', data.variations)

export const Pinterest = Template.bind({})
Pinterest.args = getVariation('pinterest', data.variations)
