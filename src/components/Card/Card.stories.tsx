import Card from './Card'
import data from './CardData.json'
import getVariation from '../../functions/getVariation'

const { title, variations } = data

export default {
    component: Card,
    title: `Components/${title}`,
}

const Template: React.FC = (args: any) => <Card {...args} />

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
    date: newsVariantWithDate.date
}

export const NewsVariantWithDateAndDescription = Template.bind({})
const newsVariantWithDateAndDescription = getVariation('newsVariantWithDateAndDescription', variations)
NewsVariantWithDateAndDescription.args = {
    articleClassName: newsVariantWithDateAndDescription.articleClassName,
    articleItemType: newsVariantWithDateAndDescription.articleItemType,
    aProp: newsVariantWithDateAndDescription.aProp,
    figureItemType: newsVariantWithDateAndDescription.figureItemType,
    image: newsVariantWithDateAndDescription.image,
    h3Prop: newsVariantWithDateAndDescription.h3Prop,
    date: newsVariantWithDateAndDescription.date,
    description: newsVariantWithDateAndDescription.description
}


export const VideoVariant = Template.bind({})
const videoVariant = getVariation('videoVariant', variations)
VideoVariant.args = {
    articleClassName: videoVariant.articleClassName,
    articleItemType: videoVariant.articleItemType,
    aProp: videoVariant.aProp,
    figureItemType: videoVariant.figureItemType,
    image: videoVariant.image,
    h3Prop: videoVariant.h3Prop,
    span: videoVariant.span,
    svg: videoVariant.svg
}

export const PeopleVariant = Template.bind({})
const peopleVariant = getVariation('peopleVariant', variations)
PeopleVariant.args = {
    articleClassName: peopleVariant.articleClassName,
    articleItemType: peopleVariant.articleItemType,
    aProp: peopleVariant.aProp,
    figureItemType: peopleVariant.figureItemType,
    image: peopleVariant.image,
    h3Prop: peopleVariant.h3Prop,
    description: peopleVariant.description
}

export const FigureVariant = Template.bind({})
const figureVariant = getVariation('figureVariant', variations)
FigureVariant.args = {
    articleClassName: figureVariant.articleClassName,
    articleItemType: figureVariant.articleItemType,
    aProp: figureVariant.aProp,
    description: figureVariant.description,
    figureCaptionTitle: figureVariant.figureCaptionTitle,
    figureVariant: figureVariant.figureVariant
}
export const FigureVariantWithoutLink = Template.bind({})
const figureVariantWithoutLink = getVariation('figureVariantWithoutLink', variations)
FigureVariantWithoutLink.args = {
    articleClassName: figureVariantWithoutLink.articleClassName,
    articleItemType: figureVariantWithoutLink.articleItemType,
    description: figureVariantWithoutLink.description,
    figureCaptionTitle: figureVariantWithoutLink.figureCaptionTitle,
    figureVariant: figureVariant.figureVariant
}

export const MaxWidthVariant = Template.bind({})
const maxWidthVariant = getVariation('maxWidthVariant', variations)
MaxWidthVariant.args = {
    articleClassName: maxWidthVariant.articleClassName,
    articleItemType: maxWidthVariant.articleItemType,
    aProp: maxWidthVariant.aProp,
    figureItemType: maxWidthVariant.figureItemType,
    image: maxWidthVariant.image,
    h3Prop: maxWidthVariant.h3Prop,
    description: maxWidthVariant.description
}
