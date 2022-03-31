import React, { ReactElement } from 'react'
import BaseCard from './components/BaseCard'
import FigureVariantCard from './components/FigureVariantCard'
import NewsVariantCard from './components/NewsVariantCard'
import PeopleVariantCard from './components/PeopleVariantCard'
import VideoVariantCard from './components/VideoVariantCard'

export interface CardProps {
    type?: 'base' | 'news' | 'video' | 'people' | 'figure' | undefined
    link: string
    header: string
    description: string
    date: string
    caption: string
    image: CardImageProps
}

export interface CardImageProps {
    src: string
    alt?: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Card: React.FC<CardProps> = (props): JSX.Element => {
    const { type = 'base' } = props

    const cardTypes: TypeProps = {
        base: <BaseCard {...props} />,
        news: <NewsVariantCard {...props} />,
        video: <VideoVariantCard {...props} />,
        people: <PeopleVariantCard {...props} />,
        figure: <FigureVariantCard {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Card
