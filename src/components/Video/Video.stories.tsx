import React from 'react'
import Video from './Video'
import data from './VideoData.json'
import getVariation from '../../functions/getVariation'
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: Video,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <Video {...args} />

export const BaseVideo = Template.bind({})
const baseVideo = getVariation('base', variations)
BaseVideo.args = {
    title: baseVideo.title,
    video: baseVideo.video,
}
