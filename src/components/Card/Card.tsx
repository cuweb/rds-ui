import React from 'react'
import Link from '@components/Link/Link'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'
import CardDescription from './components/CardDescription'

export interface CardProps {
    link: string
    header: string
    description?: string
    image: CardImageProps
    wrapLink?: any
}

const Card: React.FC<CardProps & CardImageProps> = ({
    link,
    header,
    description,
    image,
    wrapLink,
}): JSX.Element => (
    <article className='c-card' itemScope itemType='http://schema.org/Article'>
        <Link wrapper={wrapLink} href={link}>
            <CardImage image={image} />
            <header>
                <CardTitle>{header}</CardTitle>
                {description && (
                    <CardDescription>{description}</CardDescription>
                )}
            </header>
        </Link>
    </article>
)
export default Card
