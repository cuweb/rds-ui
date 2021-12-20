import React from 'react'
import CardDefault from './components/CardDefault'
import CardFigureVariantWithLink from './components/CardFigureVariantWithLink'
import CardFigureVariantWithoutLink from './components/CardFigureVariantWithoutLink'

export interface CardProps {
    cardType: 'default' | 'figureVariantWithLink' | 'figureVariantWithoutLink'
    articleClassName: string
    articleItemType: string
    articleProp?: string
    figureItemType?: string
    image?: HTMLImageElement
    imageLoading?: 'eager' | 'lazy' | undefined
    header3ItemProp?: string
    header3Title?: string
    descriptionItemProp?: string
    descriptionTitle?: string
    dateTime?: string
    dateItemProp?: string
    dateContent?: string | undefined
    dateTitle?: string
    span?: boolean
    svg?: boolean
    figureCaptionTitle?: string
    figureVariant?: boolean
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
    const { cardType } = props

    if (cardType === 'default') return <CardDefault {...props} />
    if (cardType === 'figureVariantWithLink')
        return <CardFigureVariantWithLink {...props} />
    if (cardType === 'figureVariantWithoutLink')
        return <CardFigureVariantWithoutLink {...props} />
    return <>No Card</>
}

export default Card
