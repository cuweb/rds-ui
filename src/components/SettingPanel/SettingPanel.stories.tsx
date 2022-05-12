import React from 'react'
import { Meta, Story } from '@storybook/react'
import SettingPanel from './SettingPanel'

export default {
    component: SettingPanel,
    title: `Components/SettingPanel`,
} as Meta

const Template: Story = (args: any) => <SettingPanel {...args} />

export const SPanel = Template.bind({})

// export const OneColumn = Template.bind({})
// OneColumn.args = {
//     columns: 1,
// }
