import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Filter from './Filter'
import { removeCookie } from '@src/hooks/useCookies'

export default {
    component: Filter,
    title: `Blocks/Filter`,
} as Meta

const Template: Story = (args: any) => {
    return <Filter {...args} />
}

export const Base = Template.bind({})
Base.args = {
    contentFilters: [],
    filterItems: [],
    filterSelectedItems: [],
}
