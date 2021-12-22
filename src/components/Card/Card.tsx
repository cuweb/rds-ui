import React, { ReactElement } from 'react'
import BaseCard from './components/BaseCard'
import FigureVariantCard from './components/FigureVariantCard'
import NewsVariantCard from './components/NewsVariantCard'
import PeopleVariantCard from './components/PeopleVariantCard'
import VideoVariantCard from './components/VideoVariantCard'

export interface CardProps {
    cardType: 'base' | 'news' | 'video' | 'people' | 'figure'
    link: string
    header: string
    description: string
    time: string
    date: string
    caption: string
    image: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
    const { cardType } = props

    const cardTypes: TypeProps = {
        base: <BaseCard {...props} />,
        news: <NewsVariantCard {...props} />,
        video: <VideoVariantCard {...props} />,
        people: <PeopleVariantCard {...props} />,
        figure: <FigureVariantCard {...props} />,
    }
    return cardTypes[cardType || 'base']
}

export default Card
