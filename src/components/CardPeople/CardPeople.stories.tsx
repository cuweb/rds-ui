import data from './CardPeopleData.json'
import getVariation from '../../functions/getVariation'
import CardPeople from './CardPeople'
import React from 'react'
import { Story } from '@storybook/react'

const { variations } = data

export default {
    component: CardPeople,
    title: `Components/Card/People Card`,
}

const Template: Story = (args: any) => <CardPeople {...args} />

export const BaseCard = Template.bind({})
const peopleCard = getVariation('peopleVariant', variations)
BaseCard.args = {
    type: peopleCard.cardType,
    link: peopleCard.link,
    image: peopleCard.image,
    firstName: peopleCard.firstName,
    lastName: peopleCard.lastName,
    description: peopleCard.description,
}

export const WithNoImage = Template.bind({})
const peopleCardNoImage = getVariation('peopleVariantWithoutImage', variations)
WithNoImage.args = {
    type: peopleCardNoImage.cardType,
    link: peopleCardNoImage.link,
    image: peopleCardNoImage.image,
    firstName: peopleCard.firstName,
    lastName: peopleCard.lastName,
    description: peopleCardNoImage.description,
}
