import React from 'react'
import { Meta, Story } from '@storybook/react'
import Filter from './Filter'
import data from './FData.json'
import getVariation from '@src/functions/getVariation'

const { variations } = data

export default {
    component: Filter,
    title: `Blocks/Filter`,
} as Meta

const Template: Story = (args: any) => {
    return <Filter {...args} />
}

const handleFilterItems = (items: []) => {
    //write your own filter function here
    console.log(items)
}
export const Base = Template.bind({})

const baseFilter = getVariation('base', variations)

Base.args = {
    contentFilters: baseFilter.contentFilters,
    handleFilterItems: handleFilterItems,
}
