import React, { ReactElement } from 'react'
import BaseCard, { BaseCardProps } from './components/BaseCard'
import FigureVariantCard, {
    FigureVariantCardProps,
} from './components/FigureVariantCard'
import NewsVariantCard, {
    NewsVariantCardProps,
} from './components/NewsVariantCard'
import PeopleVariantCard, {
    PeopleVariantCardProps,
} from './components/PeopleVariantCard'
import VideoVariantCard from './components/VideoVariantCard'

export interface CardProps {
    type?: 'base' | 'news' | 'video' | 'people' | 'figure' | undefined
}

export interface CardImageProps {
    src: string
    alt?: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Card: React.FC<
    CardProps &
        NewsVariantCardProps &
        PeopleVariantCardProps &
        FigureVariantCardProps &
        BaseCardProps
> = (props): JSX.Element => {
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
