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
    imageLoading: baseCard.imageLoading,
    h3ItemProp: baseCard.h3ItemProp,
    h3Title: baseCard.h3Title
}

export const CardWithTitleAndDescription = Template.bind({})
const cardWithTitleAndDescription = getVariation('cardWithTitleAndDescription', variations)
CardWithTitleAndDescription.args = {
    articleClassName: cardWithTitleAndDescription.articleClassName,
    articleItemType: cardWithTitleAndDescription.articleItemType,
    aProp: cardWithTitleAndDescription.aProp,
    figureItemType: cardWithTitleAndDescription.figureItemType,
    image: cardWithTitleAndDescription.image,
    imageLoading: cardWithTitleAndDescription.imageLoading,
    h3ItemProp: cardWithTitleAndDescription.h3ItemProp,
    h3Title: cardWithTitleAndDescription.h3Title,
    descriptionItemProp: cardWithTitleAndDescription.descriptionItemProp,
    descriptionTitle: cardWithTitleAndDescription.descriptionTitle
}

export const NewsVariantWithDate = Template.bind({})
const newsVariantWithDate = getVariation('newsVariantWithDate', variations)
NewsVariantWithDate.args = {
    articleClassName: newsVariantWithDate.articleClassName,
    articleItemType: newsVariantWithDate.articleItemType,
    aProp: newsVariantWithDate.aProp,
    figureItemType: newsVariantWithDate.figureItemType,
    image: newsVariantWithDate.image,
    imageLoading: newsVariantWithDate.imageLoading,
    h3ItemProp: newsVariantWithDate.h3ItemProp,
    h3Title: newsVariantWithDate.h3Title,
    dateTime: newsVariantWithDate.dateTime,
    dateItemProp: newsVariantWithDate.dateItemProp,
    dateTitle: newsVariantWithDate.dateTitle
}

export const NewsVariantWithDateAndDescription = Template.bind({})
const newsVariantWithDateAndDescription = getVariation('newsVariantWithDateAndDescription', variations)
NewsVariantWithDateAndDescription.args = {
    articleClassName: newsVariantWithDateAndDescription.articleClassName,
    articleItemType: newsVariantWithDateAndDescription.articleItemType,
    aProp: newsVariantWithDateAndDescription.aProp,
    figureItemType: newsVariantWithDateAndDescription.figureItemType,
    image: newsVariantWithDateAndDescription.image,
    imageLoading: newsVariantWithDateAndDescription.imageLoading,
    h3ItemProp: newsVariantWithDateAndDescription.h3ItemProp,
    h3Title: newsVariantWithDateAndDescription.h3Title,
    dateTime: newsVariantWithDateAndDescription.dateTime,
    dateItemProp: newsVariantWithDateAndDescription.dateItemProp,
    dateTitle: newsVariantWithDateAndDescription.dateTitle,
    descriptionItemProp: cardWithTitleAndDescription.descriptionItemProp,
    descriptionTitle: cardWithTitleAndDescription.descriptionTitle
}


export const VideoVariant = Template.bind({})
const videoVariant = getVariation('videoVariant', variations)
VideoVariant.args = {
    articleClassName: videoVariant.articleClassName,
    articleItemType: videoVariant.articleItemType,
    aProp: videoVariant.aProp,
    figureItemType: videoVariant.figureItemType,
    image: videoVariant.image,
    imageLoading: videoVariant.imageLoading,
    h3ItemProp: videoVariant.h3ItemProp,
    h3Title: videoVariant.h3Title,
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
    imageLoading: peopleVariant.imageLoading,
    h3ItemProp: peopleVariant.h3ItemProp,
    h3Title: peopleVariant.h3Title,
    descriptionItemProp: peopleVariant.descriptionItemProp,
    descriptionTitle: peopleVariant.descriptionTitle
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
    imageLoading: maxWidthVariant.imageLoading,
    h3ItemProp: maxWidthVariant.h3ItemProp,
    h3Title: maxWidthVariant.h3Title,
    descriptionItemProp: cardWithTitleAndDescription.descriptionItemProp,
    descriptionTitle: cardWithTitleAndDescription.descriptionTitle
}
