import React from 'react'
import Icon from '@components/Icon/Icon'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'

export interface CardVideoProps {
    link: string
    image: CardImageProps
    header: string
}

const CardVideo: React.FC<CardVideoProps & CardImageProps> = ({
    link,
    image,
    header,
}): JSX.Element => (
    <article
        className='c-card c-card--video'
        itemScope
        itemType='http://schema.org/VideoObject'
    >
        <a href={link} itemProp='url'>
            <CardImage image={image}>
                <span className='u-icon u-icon--circle' aria-hidden='true'>
                    <Icon icon='video-card' />
                </span>
            </CardImage>
            <header>
                <CardTitle>{header}</CardTitle>
            </header>
        </a>
    </article>
)
export default CardVideo
