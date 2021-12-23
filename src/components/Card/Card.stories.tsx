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
    type: baseCard.cardType,
    link: baseCard.link,
    image: baseCard.image,
    header: baseCard.header,
}

export const CardWithTitleAndDescription = Template.bind({})
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

export const NewsVariantWithDate = Template.bind({})
const newsVariantWithDate = getVariation('newsVariantWithDate', variations)
NewsVariantWithDate.args = {
    type: newsVariantWithDate.cardType,
    link: newsVariantWithDate.link,
    image: newsVariantWithDate.image,
    time: newsVariantWithDate.time,
    header: newsVariantWithDate.header,
}

export const NewsVariantWithDateAndDescription = Template.bind({})
const newsVariantWithDateAndDescription = getVariation(
    'newsVariantWithDateAndDescription',
    variations
)
NewsVariantWithDateAndDescription.args = {
    type: newsVariantWithDateAndDescription.cardType,
    link: newsVariantWithDateAndDescription.link,
    image: newsVariantWithDateAndDescription.image,
    time: newsVariantWithDateAndDescription.time,
    header: newsVariantWithDateAndDescription.header,
    description: newsVariantWithDateAndDescription.description,
}

export const VideoVariant = Template.bind({})
const videoVariant = getVariation('videoVariant', variations)
VideoVariant.args = {
    type: videoVariant.cardType,
    link: videoVariant.link,
    image: videoVariant.image,
    header: videoVariant.header,
}

export const PeopleVariant = Template.bind({})
const peopleVariant = getVariation('peopleVariant', variations)
PeopleVariant.args = {
    type: peopleVariant.cardType,
    link: peopleVariant.link,
    image: peopleVariant.image,
    header: peopleVariant.header,
    description: peopleVariant.description,
}

export const FigureVariant = Template.bind({})
const figureVariant = getVariation('figureVariant', variations)
FigureVariant.args = {
    type: figureVariant.cardType,
    link: figureVariant.link,
    description: figureVariant.description,
    caption: figureVariant.caption,
}
export const FigureVariantWithoutLink = Template.bind({})
const figureVariantWithoutLink = getVariation(
    'figureVariantWithoutLink',
    variations
)
FigureVariantWithoutLink.args = {
    type: figureVariantWithoutLink.cardType,
    description: figureVariantWithoutLink.description,
    caption: figureVariantWithoutLink.caption,
}

export const MaxWidthVariant = Template.bind({})
const maxWidthVariant = getVariation('maxWidthVariant', variations)
MaxWidthVariant.args = {
    type: maxWidthVariant.cardType,
    link: maxWidthVariant.link,
    image: maxWidthVariant.image,
    header: maxWidthVariant.header,
    description: maxWidthVariant.description,
}
