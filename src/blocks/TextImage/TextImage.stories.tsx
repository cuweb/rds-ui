import React from 'react'
import { Meta, Story } from '@storybook/react'
import TextImage from './TextImage'
import getVariation from '../../functions/getVariation'
import data from './TextImageData.json'

const { title, variations } = data

export default {
    component: TextImage,
    title: `Blocks/${title}`,
} as Meta

const Template: Story = (args: any) => <TextImage {...args} />
const GroupTemplate: Story = (args: any) => {
    return (
        <>
            <TextImage {...args.primary} />
            <TextImage {...args.secondary} />
            <TextImage {...args.secondary} />
        </>
    )
}

export const ImageToTheRight = Template.bind({})
const imageToTheRight = getVariation('imageToTheRight', variations)
ImageToTheRight.args = {
    direction: imageToTheRight.direction,
    title: imageToTheRight.title,
    image: imageToTheRight.image,
    content: imageToTheRight.content,
}

export const ImageToTheLeft = Template.bind({})
const imageToTheLeft = getVariation('imageToTheLeft', variations)
ImageToTheLeft.args = {
    direction: imageToTheLeft.direction,
    title: imageToTheLeft.title,
    image: imageToTheLeft.image,
    content: imageToTheLeft.content,
}

export const GreyBackground = Template.bind({})
const greyBackground = getVariation('greyBackground', variations)
GreyBackground.args = {
    direction: greyBackground.direction,
    title: greyBackground.title,
    image: greyBackground.image,
    content: greyBackground.content,
    color: greyBackground.color,
}

export const DefaultHeadings = Template.bind({})
const defaultHeadings = getVariation('defaultHeadings', variations)
DefaultHeadings.args = {
    direction: defaultHeadings.direction,
    title: defaultHeadings.title,
    image: defaultHeadings.image,
    content: defaultHeadings.content,
    heading: defaultHeadings.heading,
    subheading: defaultHeadings.subheading,
}

export const CenteredHeadings = Template.bind({})
const centeredHeadings = getVariation('centeredHeadings', variations)
CenteredHeadings.args = {
    direction: centeredHeadings.direction,
    title: centeredHeadings.title,
    image: centeredHeadings.image,
    content: centeredHeadings.content,
    heading: centeredHeadings.heading,
    subheading: centeredHeadings.subheading,
    color: centeredHeadings.color,
    centered: centeredHeadings.centered,
}

export const LargeWidthBlocks = Template.bind({})
const largeWidthBlocks = getVariation('largeWidthBlocks', variations)
LargeWidthBlocks.args = {
    direction: largeWidthBlocks.direction,
    title: largeWidthBlocks.title,
    image: largeWidthBlocks.image,
    content: largeWidthBlocks.content,
    color: largeWidthBlocks.color,
    subcontent: largeWidthBlocks.subcontent,
}

export const GroupingBlocks = GroupTemplate.bind({})
GroupingBlocks.args = {
    primary: {
        direction: centeredHeadings.direction,
        title: centeredHeadings.title,
        image: centeredHeadings.image,
        content: centeredHeadings.content,
        heading: centeredHeadings.heading,
        subheading: centeredHeadings.subheading,
        color: centeredHeadings.color,
        centered: centeredHeadings.centered,
    },
    secondary: {
        direction: greyBackground.direction,
        title: greyBackground.title,
        image: greyBackground.image,
        content: greyBackground.content,
        color: greyBackground.color,
    },
}
