import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '../../functions/getVariation'
import Ublock from './Ublock'
import data from './UblockData.json'

const { title, variations } = data

export default {
    component: Ublock,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => (
    <Ublock {...args}>
        <p>
            This is Simple block, an example of a basic block for learning
            purposes.
        </p>
    </Ublock>
)

//  Base Ublock
export const Base = Template.bind({})
const base = getVariation('base', variations)
Base.args = {
    heading: base.heading,
    color: base.color,
}

//  Grey Ublock
export const GreyBackground = Template.bind({})
const grey = getVariation('grey', variations)
GreyBackground.args = {
    heading: grey.heading,
    color: grey.color,
}

//  Black Ublock
export const BlackBackground = Template.bind({})
const black = getVariation('black', variations)
BlackBackground.args = {
    heading: black.heading,
    color: black.color,
}

//  No Heading Ublock
export const NoHeading = Template.bind({})
NoHeading.args = {
    color: grey.color,
}
