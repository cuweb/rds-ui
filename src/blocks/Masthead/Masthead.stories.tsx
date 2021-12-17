import React from 'react'
import { Meta, Story } from '@storybook/react'
import Masthead from './Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
} as Meta

const Template: Story = (args: any) => <Masthead {...args} />

export const Base = Template.bind({})
Base.args = {
    title: 'Ravens Design System',
}
