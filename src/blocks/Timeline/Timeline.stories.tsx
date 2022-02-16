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
    stepFirst: baseTimeline.stepFirst,
    stepLast: baseTimeline.stepLast,
    allSteps: baseTimeline.allSteps,
}

export const WithTitle = Template.bind({})

const withTitleTimeline = getVariation('withTitle', variations)

WithTitle.args = {
    title: withTitleTimeline.title,
    stepFirst: withTitleTimeline.stepFirst,
    stepLast: withTitleTimeline.stepLast,
    allSteps: withTitleTimeline.allSteps,
}

export const WithTitleAndDescription = Template.bind({})

const withTitleAndDescription = getVariation(
    'withTitleAndDescription',
    variations
)

WithTitleAndDescription.args = {
    title: withTitleAndDescription.title,
    description: withTitleAndDescription.description,
    stepFirst: withTitleAndDescription.stepFirst,
    stepLast: withTitleAndDescription.stepLast,
    allSteps: withTitleAndDescription.allSteps,
}
