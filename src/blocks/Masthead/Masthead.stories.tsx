import React from 'react'
import Masthead from './Masthead'

export default {
    component: Masthead,
    title: `Blocks/Masthead`,
}

const Template: React.FC = (args: any) => <Masthead {...args} />

export const Base = Template.bind({})
Base.args = {
    title: 'Ravens Design System',
}
