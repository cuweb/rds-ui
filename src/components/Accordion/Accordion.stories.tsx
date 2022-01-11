import React from 'react'
import Accordion from './Accordion'
import getVariation from '../../functions/getVariation'
import data from './AccordionData.json'

const { title, variations } = data

export default {
    component: Accordion,
    title: `Components/${title}`,
}

const Template: React.FC = (args: any) => <Accordion {...args} />

export const BaseAccordion = Template.bind({})
const baseAccordion = getVariation('base', variations)
BaseAccordion.args = {
    type: baseAccordion.type,
    accordionData: baseAccordion.accordionData
}

export const SingleVarianAccordion = Template.bind({})
const singleVarianAccordion = getVariation('single', variations)
SingleVarianAccordion.args = {
    type: singleVarianAccordion.type,
    accordionData: singleVarianAccordion.accordionData
}