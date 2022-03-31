import React, { ReactElement } from 'react'
import CardBase, { CardBaseProps } from './components/CardBase'
import CardFigure, { CardFigureProps } from './components/CardFigure'
import CardNews, { CardNewsProps } from './components/CardNews'
import CardVideo, { CardVideoProps } from './components/CardVideo'

export interface CardProps {
    type: 'base' | 'news' | 'video' | 'figure'
}

export interface CardImageProps {
    src: string
    alt?: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Card: React.FC<
    CardProps & CardBaseProps & CardNewsProps & CardFigureProps & CardVideoProps
> = (props): JSX.Element => {
    const { type = 'base' } = props

    const cardTypes: TypeProps = {
        base: <CardBase {...props} />,
        news: <CardNews {...props} />,
        video: <CardVideo {...props} />,
        figure: <CardFigure {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Card
