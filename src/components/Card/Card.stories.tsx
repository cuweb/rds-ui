import Card from './Card'
import data from './CardData.json'
import getVariation from '../../../functions/getVariation'

const { title, variations } = data

export default {
    component: Card,
    title: `Components/${title}`,
}

const Template = (args) => <Card {...args} />

export const BaseCard = Template.bind({})
const baseCard = getVariation('base', variations)
BaseCard.args = {
    articleClassName: baseCard.articleClassName,
    articleItemType: baseCard.articleItemType,
    aProp: baseCard.aProp,
    figureItemType: baseCard.figureItemType,
    image: baseCard.image,
    h3Prop: baseCard.h3Prop
}

export const CardWithTitleAndDescription = Template.bind({})
const cardWithTitleAndDescription = getVariation('cardWithTitleAndDescription', variations)
CardWithTitleAndDescription.args = {
    articleClassName: cardWithTitleAndDescription.articleClassName,
    articleItemType: cardWithTitleAndDescription.articleItemType,
    aProp: cardWithTitleAndDescription.aProp,
    figureItemType: cardWithTitleAndDescription.figureItemType,
    image: cardWithTitleAndDescription.image,
    h3Prop: cardWithTitleAndDescription.h3Prop,
    description: cardWithTitleAndDescription.description
}

export const NewsVariantWithDate = Template.bind({})
const newsVariantWithDate = getVariation('newsVariantWithDate', variations)
NewsVariantWithDate.args = {
    articleClassName: newsVariantWithDate.articleClassName,
    articleItemType: newsVariantWithDate.articleItemType,
    aProp: newsVariantWithDate.aProp,
    figureItemType: newsVariantWithDate.figureItemType,
    image: newsVariantWithDate.image,
    h3Prop: newsVariantWithDate.h3Prop,

}
{/*



export const NewsVariantWithDateAndDescription = Template.bind({})

export const VideoVariant = Template.bind({})

export const PeopleVariant = Template.bind({})

export const FigureVariant = Template.bind({})

export const FigureVariantWithoutLink = Template.bind({})

export const MaxWidthVariant = Template.bind({})
*/}

