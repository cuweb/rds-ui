import React from 'react'
import { Meta, Story } from '@storybook/react'
import Heading from './Heading'
import data from './HeadingData.json'
import getVariation from '../../functions/getVariation'

const { title, variations } = data

export default {
    component: Heading,
    title: `Components/${title}`,
}

const Template: React.FC = (args: any) => <Heading {...args} />

// Base Heading
export const BaseHeading = Template.bind({})
const baseHeading = getVariation('baseHeading', variations)
BaseHeading.args = {
    type: baseHeading.headingType,
    header: baseHeading.header,
}

// Base Centered Heading
export const CenteredHeading = Template.bind({})
const centeredHeading = getVariation('centeredHeading', variations)
CenteredHeading.args = {
    type: centeredHeading.headingType,
    header: centeredHeading.header,
    center: centeredHeading.center,
}

// Heading with Paragraph
export const HeadingWithParagraph = Template.bind({})
const headingWithParagraph = getVariation('headingWithParagraph', variations)
HeadingWithParagraph.args = {
    type: headingWithParagraph.headingType,
    header: headingWithParagraph.header,
    description: headingWithParagraph.description,
}

// Heading with Paragraph
export const CenteredHeadingWithParagraph = Template.bind({})
const centeredHeadingWithParagraph = getVariation(
    'centeredHeadingWithParagraph',
    variations
)
CenteredHeadingWithParagraph.args = {
    type: centeredHeadingWithParagraph.headingType,
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
    type: headingWithParagraphSubhead.headingType,
    header: headingWithParagraphSubhead.header,
    description: headingWithParagraphSubhead.description,
    subheader: headingWithParagraphSubhead.subheader,
}
