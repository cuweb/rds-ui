import React from 'react'
import { Meta, Story } from '@storybook/react'
import Heading from './Heading'
import data from './HeadingData.json'
import getVariation from '../../functions/getVariation'

const { title, variations } = data

export default {
    component: Heading,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <Heading {...args} />

// Base Heading
export const BaseHeading = Template.bind({})
const baseHeading = getVariation('baseHeading', variations)
BaseHeading.args = {
    header: baseHeading.header,
}

// Base Centered Heading
export const CenteredHeading = Template.bind({})
const centeredHeading = getVariation('centeredHeading', variations)
CenteredHeading.args = {
    header: centeredHeading.header,
    center: centeredHeading.center,
}

// Heading with Paragraph
export const HeadingWithParagraph = Template.bind({})
const headingWithParagraph = getVariation('headingWithParagraph', variations)
HeadingWithParagraph.args = {
    header: headingWithParagraph.header,
    description: headingWithParagraph.description,
}

// Centered Heading with Paragraph
export const CenteredHeadingWithParagraph = Template.bind({})
const centeredHeadingWithParagraph = getVariation(
    'centeredHeadingWithParagraph',
    variations
)
CenteredHeadingWithParagraph.args = {
    header: centeredHeadingWithParagraph.header,
    description: centeredHeadingWithParagraph.description,
    center: centeredHeadingWithParagraph.center,
}

//Heading with Paragraph and Subhead
export const HeadingWithParagraphAndSubhead = Template.bind({})
const headingWithParagraphSubhead = getVariation(
    'headingWithParagraphSubhead',
    variations
)
HeadingWithParagraphAndSubhead.args = {
    header: headingWithParagraphSubhead.header,
    description: headingWithParagraphSubhead.description,
    subheader: headingWithParagraphSubhead.subheader,
}
