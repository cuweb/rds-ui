import data from './CardData.json'
import getVariation from '../../functions/getVariation'
import PeopleVariantCard from './CardPeopleVariant'
import React from 'react';
import { Meta, Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: PeopleVariantCard,
    title: `Components/PeopleVariantCard`,
}

const Template: Story = (args: any) => <PeopleVariantCard {...args} />




export const PeopleVariant = Template.bind({})
const peopleVariant = getVariation('peopleVariant', variations)
PeopleVariant.args = {
    type: peopleVariant.cardType,
    link: peopleVariant.link,
    image: peopleVariant.image,
    header: peopleVariant.header,
    description: peopleVariant.description,
}


