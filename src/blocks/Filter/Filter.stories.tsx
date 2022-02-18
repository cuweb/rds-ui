import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import Filter from './Filter'

export default {
    component: Filter,
    title: `Blocks/Filter`,
} as Meta

const Template: Story = (args: any) => {
    return <Filter {...args} />
}

export const Base = Template.bind({})
Base.args = {
    // contentFilters: ['a', 'b'],
    filterItems: [
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
    ],
    contentFilterSave: (item:any)=>{
        console.log(item)
    }
}

