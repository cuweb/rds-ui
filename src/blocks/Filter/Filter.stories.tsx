import React from 'react'
import { Meta, Story } from '@storybook/react'
import Filter from './Filter'

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
Base.args = {
    contentFilters: [
        {
            title: 'category',
            items: [
                {
                    id: '1',
                    name: 'aaaa',
                },
                {
                    id: '2',
                    name: 'bbb',
                },
            ],
        },
        {
            title: 'tag',
            items: [
                {
                    id: '1',
                    name: 'ghgg',
                },
                {
                    id: '2',
                    name: 'jjj',
                },
            ],
        },
    ],
    handleFilterItems: handleFilterItems,
}
