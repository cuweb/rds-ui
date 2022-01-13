import React from 'react'
import Badge from './Badge'
import data from './BadgeData.json'
import getVariation from '../../functions/getVariation'
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: Badge,
    title: `Components/${title}`,
} as Meta

const Template: Story = (args: any) => <Badge {...args} />

export const NumberBadge = Template.bind({})
const numberBadge = getVariation('number', variations)
NumberBadge.args = {
    content: numberBadge.content
}

export const LabelBadge = Template.bind({})
const labelBadge = getVariation('label', variations)
LabelBadge.args = {
    content: labelBadge.content
}

export const NotCoolBadge = Template.bind({})
const notCoolBadge = getVariation('notCool', variations)
NotCoolBadge.args = {
    content: notCoolBadge.content
}

export const CoolBadge = Template.bind({})
const coolBadge = getVariation('cool', variations)
CoolBadge.args = {
    content: coolBadge.content
}