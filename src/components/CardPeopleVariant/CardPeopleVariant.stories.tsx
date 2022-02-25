import data from './CardData.json'
import getVariation from '../../functions/getVariation'
import CardPeopleVariant from './CardPeopleVariant'
import React from 'react';
import {  Story } from '@storybook/react'

const {  variations } = data

export default {
    component: CardPeopleVariant,
    title: `Components/Card People Variant`,
}

const Template: Story = (args: any) => <CardPeopleVariant {...args} />




export const PeopleCard = Template.bind({})
const peopleCard = getVariation('peopleVariant', variations)
PeopleCard.args = {
    type: peopleCard.cardType,
    link: peopleCard.link,
    image: peopleCard.image,
    firstName: peopleCard.firstName,
    lastName: peopleCard.lastName,
    description: peopleCard.description,
}


export const PeopleCardNoImage = Template.bind({})
const peopleCardNoImage = getVariation('peopleVariantWithoutImage', variations)
PeopleCardNoImage.args = {
    type: peopleCardNoImage.cardType,
    link: peopleCardNoImage.link,
    image: peopleCardNoImage.image,
    firstName: peopleCard.firstName,
    lastName: peopleCard.lastName,
    description: peopleCardNoImage.description,
}
