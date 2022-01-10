import React, { useState } from 'react'
import { Meta, Story } from '@storybook/react'
import CardGrid from './CardGrid'
import Card from '@src/components/Card/Card'
import data from './CardGridData.json'

export default {
    component: CardGrid,
    title: `Blocks/Card Grid`,
} as Meta

const allCards = new Array(12).fill(data)

const Template: Story = (args: any) => {
    return (
        <CardGrid {...args}>
            {allCards.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </CardGrid>
    )
}

export const OneColumn = Template.bind({})
OneColumn.args = {
    title: 'One Column',
    columns: 1,
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
    title: 'Two Columns',
    columns: 2,
}

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
    title: 'Three Columns (default)',
    columns: 3,
}

export const FourColumns = Template.bind({})
FourColumns.args = {
    title: 'Four Columns',
    columns: 4,
}

export const WithButton = Template.bind({})
WithButton.args = {
    title: 'With Load More',
    columns: 3,
    button: {
        url: 'https://carleton.ca',
        text: 'Visit Carleton',
    },
}

export const WithLoadMore = Template.bind({})
WithLoadMore.args = {
    title: 'With Load More',
    columns: 3,
    handleLoad: () => alert('add a custom load more handler'),
}
