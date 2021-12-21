import React from 'react'
import BaseCard from './components/BaseCard'
import FigureVariantCard from './components/FigureVariantCard'
import MaxWidthVariantCard from './components/MaxWidthVariantCard'
import NewsVariantCard from './components/NewsVariantCard'
import PeopleVariantCard from './components/PeopleVariantCard'
import VideoVariantCard from './components/VideoVariantCard'

export interface CardProps {
    cardType:
        | 'base'
        | 'newsVariant'
        | 'videoVariant'
        | 'peopleVariant'
        | 'figureVariant'
        | 'maxWidthVariant'
    link: string
    src: string
    alt: string
    header: string
    description: string
    dateTime: string
    date: string
    caption: string
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
    const { cardType } = props

    if (cardType === 'base') return <BaseCard {...props} />
    if (cardType === 'newsVariant') return <NewsVariantCard {...props} />
    if (cardType === 'videoVariant') return <VideoVariantCard {...props} />
    if (cardType === 'peopleVariant') return <PeopleVariantCard {...props} />
    if (cardType === 'figureVariant') return <FigureVariantCard {...props} />
    if (cardType === 'maxWidthVariant') return <MaxWidthVariantCard {...props} />
    return <>No Card</>
}

export default Card
