import React from 'react'
import Link from '@components/Link/Link'
import ButtonCTA from '@components/ButtonCTA/ButtonCTA'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'
import CardDescription from './components/CardDescription'

export interface CardProps {
    link: string
    header: string
    description?: string
    image: CardImageProps
    wrapLink?: any
    button?: 'register' | 'join' | undefined
}

const Card: React.FC<CardProps & CardImageProps> = ({
    link,
    header,
    description,
    image,
    wrapLink,
    button,
}): JSX.Element => (
    <article className='c-card' itemScope itemType='http://schema.org/Article'>
        <Link wrapper={wrapLink} href={link}>
            <CardImage image={image} />
            <header>
                <CardTitle>{header}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
                {button && (
                    <div className='CardButton'>
                        {button === 'register' && (
                            <ButtonCTA link='#' text='Register' grey />
                        )}
                        {button === 'join' && (
                            <ButtonCTA link='#' text='Join' />
                        )}
                        <ButtonCTA link='#' icon='three-dots' grey />
                    </div>
                )}
            </header>
        </Link>
    </article>
)
export default Card
