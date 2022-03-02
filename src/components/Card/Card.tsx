import React, { ReactElement } from 'react'
import CardBase from './components/CardBase'
import CardFigure from './components/CardFigure'
import CardNews from './components/CardNews'
import CardVideo from './components/CardVideo'

export interface CardProps {
    type: 'base' | 'news' | 'video' | 'figure'
    link: string
    header: string
    description: string
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
    const { type } = props

    const cardTypes: TypeProps = {
        base: <CardBase {...props} />,
        news: <CardNews {...props} />,
        video: <CardVideo {...props} />,
        figure: <CardFigure {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Card
