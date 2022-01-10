import React from 'react'
import { Meta, Story } from '@storybook/react'
import Card from '@src/components/Card/Card'
import Ugrid from './Ugrid'

export default {
    component: Ugrid,
    title: `Components/U-Grid`,
} as Meta

const allCards = new Array(12).fill({
    type: 'news',
    link: 'https://bit.ly/2E6yTwZ',
    image: {
        src: 'https://cu-raven.s3.amazonaws.com/assets/img/raven/img-3.jpg',
        alt: 'Read more about We knew ravens are smart. But not this smart',
    },
    date: '2018-03-11',
    header: 'We knew ravens are smart. But not this smart',
    description:
        'Aute consequat minim culpa do minim id nulla anim sint do proident culpa et consectetur.',
})

const Template: Story = (args: any) => {
    return (
        <Ugrid {...args}>
            {allCards.map((item, index) => (
                <Card key={index} {...item} />
            ))}
        </Ugrid>
    )
}

export const OneColumn = Template.bind({})
OneColumn.args = {
    columns: 1,
}

export const TwoColumns = Template.bind({})
TwoColumns.args = {
    columns: 2,
}

export const ThreeColumns = Template.bind({})
ThreeColumns.args = {
    columns: 3,
}

export const FourColumns = Template.bind({})
FourColumns.args = {
    columns: 4,
    className: 'b-custom',
}
