import React, { useEffect, useState } from 'react'
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
    const handleFilterItems = (items: []) => {
        //write your own filter function here
        console.log(items)
    }
    return <Filter {...args} handleFilterItems={handleFilterItems} />
}

export const Base = Template.bind({})

const baseFilter = getVariation('base', variations)

Base.args = {
    contentFilters: baseFilter.contentFilters,
}

const withDataFilter = getVariation('withData', variations)
// data
const dataToFilter: {
    category: string
    name: string
}[] = withDataFilter.dataToFilter

const TemplateWithData: Story = (args: any) => {
    const [items, setItems] = useState(dataToFilter)
    const handleFilterItems = (selectedItems: string[]) => {
        //write your own filter function here
        if (selectedItems.length == 0) {
            // handle reset
            setItems(dataToFilter)
        } else {
            const newItems = dataToFilter.filter((data) => {
                return selectedItems.some((selectedItem) => {
                    return data.category == selectedItem
                })
            })
            setItems(newItems)
        }
    }

    return (
        <>
            <Filter {...args} handleFilterItems={handleFilterItems} />
            <div>
                {!items || (items.length == 0 && <p>No Item</p>)}
                <ul>
                    {items &&
                        items.length > 0 &&
                        items.map((item) => (
                            <li>
                                name: <span>{item.name}</span> / category:{' '}
                                <span>{item.category}</span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export const WithData = TemplateWithData.bind({})

WithData.args = {
    contentFilters: withDataFilter.contentFilters,
}
