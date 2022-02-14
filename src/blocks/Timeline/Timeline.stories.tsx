import React from 'react'
import { Meta, Story } from '@storybook/react'
import Timeline from './Timeline'
import data from './TimelineData.json'
import getVariation from '@src/functions/getVariation'

const { variations } = data

export default {
    component: Timeline,
    title: `Blocks/Timeline`,
} as Meta

const Template: Story = (args: any) => {
    return <Timeline {...args} />
}

export const Base = Template.bind({})

const baseTimeline = getVariation('base', variations)

Base.args = {
    stepFirst: '2009',
    stepLast: '2020',
    allSteps: baseTimeline.data,
}

export const WithTitle = Template.bind({})

WithTitle.args = {
    title: 'This is Timeline block Title',
    stepFirst: '2009',
    stepLast: '2020',
    allSteps: baseTimeline.data,
}

export const WithTitleAndDescription = Template.bind({})

WithTitleAndDescription.args = {
    title: 'This is Timeline block Title',
    description: 'This is Timeline block description',
    stepFirst: '2009',
    stepLast: '2020',
    allSteps: baseTimeline.data,
}
