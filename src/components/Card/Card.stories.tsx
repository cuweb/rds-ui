import Card from './Card'
import CardFigure from './CardFigure'
import CardNews from './CardNews'
import CardVideo from './CardVideo'
import data from './CardData.json'
import getVariation from '../../functions/getVariation'
import { Meta, Story } from '@storybook/react'
import React from 'react'

const { title, variations } = data

export default {
    component: Card,
    title: `Components/${title}`,
} as Meta

const TemplateCard: Story = (args: any) => <Card {...args} />
const TemplateCardFigure: Story = (args: any) => <CardFigure {...args} />
const TemplateCardNews: Story = (args: any) => <CardNews {...args} />
const TemplateCardVideo: Story = (args: any) => <CardVideo {...args} />

export const BaseCard = TemplateCard.bind({})
const baseCard = getVariation('base', variations)
BaseCard.args = {
    type: baseCard.cardType,
    link: baseCard.link,
    image: baseCard.image,
    header: baseCard.header,
}

export const CardWithTitleAndDescription = TemplateCard.bind({})
const cardWithTitleAndDescription = getVariation(
    'cardWithTitleAndDescription',
    variations
)
CardWithTitleAndDescription.args = {
    type: cardWithTitleAndDescription.cardType,
    link: cardWithTitleAndDescription.link,
    image: cardWithTitleAndDescription.image,
    header: cardWithTitleAndDescription.header,
    description: cardWithTitleAndDescription.description,
}

export const NewsVariantWithDate = TemplateCardNews.bind({})
const newsVariantWithDate = getVariation('newsVariantWithDate', variations)
NewsVariantWithDate.args = {
    type: newsVariantWithDate.cardType,
    link: newsVariantWithDate.link,
    image: newsVariantWithDate.image,
    date: newsVariantWithDate.date,
    header: newsVariantWithDate.header,
}

export const NewsVariantWithDateAndDescription = TemplateCardNews.bind({})
const newsVariantWithDateAndDescription = getVariation(
    'newsVariantWithDateAndDescription',
    variations
)
NewsVariantWithDateAndDescription.args = {
    type: newsVariantWithDateAndDescription.cardType,
    link: newsVariantWithDateAndDescription.link,
    image: newsVariantWithDateAndDescription.image,
    date: newsVariantWithDateAndDescription.date,
    header: newsVariantWithDateAndDescription.header,
    description: newsVariantWithDateAndDescription.description,
}

export const VideoVariant = TemplateCardVideo.bind({})
const videoVariant = getVariation('videoVariant', variations)
VideoVariant.args = {
    type: videoVariant.cardType,
    link: videoVariant.link,
    image: videoVariant.image,
    header: videoVariant.header,
}

export const FigureVariant = TemplateCardFigure.bind({})
const figureVariant = getVariation('figureVariant', variations)
FigureVariant.args = {
    type: figureVariant.cardType,
    link: figureVariant.link,
    description: figureVariant.description,
    caption: figureVariant.caption,
}
export const FigureVariantWithoutLink = TemplateCardFigure.bind({})
const figureVariantWithoutLink = getVariation(
    'figureVariantWithoutLink',
    variations
)
FigureVariantWithoutLink.args = {
    type: figureVariantWithoutLink.cardType,
    description: figureVariantWithoutLink.description,
    caption: figureVariantWithoutLink.caption,
}

export const MaxWidthVariant = TemplateCard.bind({})
const maxWidthVariant = getVariation('maxWidthVariant', variations)
MaxWidthVariant.args = {
    type: maxWidthVariant.cardType,
    link: maxWidthVariant.link,
    image: maxWidthVariant.image,
    header: maxWidthVariant.header,
    description: maxWidthVariant.description,
}
