import React from 'react'
import Accordion from './Accordion'
import getVariation from '../../functions/getVariation'
import data from './AccordionData.json'
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: Accordion,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <Accordion {...args} />

export const Base = Template.bind({})
const baseAccordion = getVariation('base', variations)
Base.args = {
    type: baseAccordion.type,
    data: baseAccordion.data
}

export const Single = Template.bind({})
const singleVarianAccordion = getVariation('single', variations)
Single.args = {
    type: singleVarianAccordion.type,
    data: singleVarianAccordion.data
}