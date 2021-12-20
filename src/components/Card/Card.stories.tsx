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
    cardType: baseCard.cardType,
    articleClassName: baseCard.articleClassName,
    articleItemType: baseCard.articleItemType,
    articleProp: baseCard.articleProp,
    figureItemType: baseCard.figureItemType,
    image: baseCard.image,
    imageLoading: baseCard.imageLoading,
    header3ItemProp: baseCard.header3ItemProp,
    header3Title: baseCard.header3Title
}

export const CardWithTitleAndDescription = Template.bind({})
const cardWithTitleAndDescription = getVariation('cardWithTitleAndDescription', variations)
CardWithTitleAndDescription.args = {
    cardType: cardWithTitleAndDescription.cardType,
    articleClassName: cardWithTitleAndDescription.articleClassName,
    articleItemType: cardWithTitleAndDescription.articleItemType,
    articleProp: cardWithTitleAndDescription.articleProp,
    figureItemType: cardWithTitleAndDescription.figureItemType,
    image: cardWithTitleAndDescription.image,
    imageLoading: cardWithTitleAndDescription.imageLoading,
    header3ItemProp: cardWithTitleAndDescription.header3ItemProp,
    header3Title: cardWithTitleAndDescription.header3Title,
    descriptionItemProp: cardWithTitleAndDescription.descriptionItemProp,
    descriptionTitle: cardWithTitleAndDescription.descriptionTitle
}

export const NewsVariantWithDate = Template.bind({})
const newsVariantWithDate = getVariation('newsVariantWithDate', variations)
NewsVariantWithDate.args = {
    cardType: newsVariantWithDate.cardType,
    articleClassName: newsVariantWithDate.articleClassName,
    articleItemType: newsVariantWithDate.articleItemType,
    articleProp: newsVariantWithDate.articleProp,
    figureItemType: newsVariantWithDate.figureItemType,
    image: newsVariantWithDate.image,
    imageLoading: newsVariantWithDate.imageLoading,
    header3ItemProp: newsVariantWithDate.header3ItemProp,
    header3Title: newsVariantWithDate.header3Title,
    dateTime: newsVariantWithDate.dateTime,
    dateItemProp: newsVariantWithDate.dateItemProp,
    dateTitle: newsVariantWithDate.dateTitle
}

export const NewsVariantWithDateAndDescription = Template.bind({})
const newsVariantWithDateAndDescription = getVariation('newsVariantWithDateAndDescription', variations)
NewsVariantWithDateAndDescription.args = {
    cardType: newsVariantWithDateAndDescription.cardType,
    articleClassName: newsVariantWithDateAndDescription.articleClassName,
    articleItemType: newsVariantWithDateAndDescription.articleItemType,
    articleProp: newsVariantWithDateAndDescription.articleProp,
    figureItemType: newsVariantWithDateAndDescription.figureItemType,
    image: newsVariantWithDateAndDescription.image,
    imageLoading: newsVariantWithDateAndDescription.imageLoading,
    header3ItemProp: newsVariantWithDateAndDescription.header3ItemProp,
    header3Title: newsVariantWithDateAndDescription.header3Title,
    dateTime: newsVariantWithDateAndDescription.dateTime,
    dateItemProp: newsVariantWithDateAndDescription.dateItemProp,
    dateTitle: newsVariantWithDateAndDescription.dateTitle,
    descriptionItemProp: cardWithTitleAndDescription.descriptionItemProp,
    descriptionTitle: cardWithTitleAndDescription.descriptionTitle
}


export const VideoVariant = Template.bind({})
const videoVariant = getVariation('videoVariant', variations)
VideoVariant.args = {
    cardType: videoVariant.cardType,
    articleClassName: videoVariant.articleClassName,
    articleItemType: videoVariant.articleItemType,
    articleProp: videoVariant.articleProp,
    figureItemType: videoVariant.figureItemType,
    image: videoVariant.image,
    imageLoading: videoVariant.imageLoading,
    header3ItemProp: videoVariant.header3ItemProp,
    header3Title: videoVariant.header3Title,
    span: videoVariant.span,
    svg: videoVariant.svg
}

export const PeopleVariant = Template.bind({})
const peopleVariant = getVariation('peopleVariant', variations)
PeopleVariant.args = {
    cardType: peopleVariant.cardType,
    articleClassName: peopleVariant.articleClassName,
    articleItemType: peopleVariant.articleItemType,
    articleProp: peopleVariant.articleProp,
    figureItemType: peopleVariant.figureItemType,
    image: peopleVariant.image,
    imageLoading: peopleVariant.imageLoading,
    header3ItemProp: peopleVariant.header3ItemProp,
    header3Title: peopleVariant.header3Title,
    descriptionItemProp: peopleVariant.descriptionItemProp,
    descriptionTitle: peopleVariant.descriptionTitle
}

export const FigureVariant = Template.bind({})
const figureVariant = getVariation('figureVariant', variations)
FigureVariant.args = {
    cardType: figureVariant.cardType,
    articleClassName: figureVariant.articleClassName,
    articleItemType: figureVariant.articleItemType,
    articleProp: figureVariant.articleProp,
    descriptionItemProp: figureVariant.descriptionItemProp,
    descriptionTitle: figureVariant.descriptionTitle,
    figureCaptionTitle: figureVariant.figureCaptionTitle,
    figureVariant: figureVariant.figureVariant
}
export const FigureVariantWithoutLink = Template.bind({})
const figureVariantWithoutLink = getVariation('figureVariantWithoutLink', variations)
FigureVariantWithoutLink.args = {
    cardType: figureVariantWithoutLink.cardType,
    articleClassName: figureVariantWithoutLink.articleClassName,
    articleItemType: figureVariantWithoutLink.articleItemType,
    descriptionItemProp: figureVariantWithoutLink.descriptionItemProp,
    descriptionTitle: figureVariantWithoutLink.descriptionTitle,
    figureCaptionTitle: figureVariantWithoutLink.figureCaptionTitle,
    figureVariant: figureVariantWithoutLink.figureVariant
}

export const MaxWidthVariant = Template.bind({})
const maxWidthVariant = getVariation('maxWidthVariant', variations)
MaxWidthVariant.args = {
    cardType: maxWidthVariant.cardType,
    articleClassName: maxWidthVariant.articleClassName,
    articleItemType: maxWidthVariant.articleItemType,
    articleProp: maxWidthVariant.articleProp,
    figureItemType: maxWidthVariant.figureItemType,
    image: maxWidthVariant.image,
    imageLoading: maxWidthVariant.imageLoading,
    header3ItemProp: maxWidthVariant.header3ItemProp,
    header3Title: maxWidthVariant.header3Title,
    descriptionItemProp: maxWidthVariant.descriptionItemProp,
    descriptionTitle: maxWidthVariant.descriptionTitle
}
