import React from 'react'
import ImageCaption from './ImageCaption'
import data from './ImageCaptionData.json'
import getVariation from '../../functions/getVariation'
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: ImageCaption,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <ImageCaption {...args} />

export const BaseImageCaption = Template.bind({})
const baseImageCaption = getVariation('base', variations)
BaseImageCaption.args = {
    caption: baseImageCaption.caption
}