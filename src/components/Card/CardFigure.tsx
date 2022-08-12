import React from 'react'
import Link from '@components/Link/Link'
import CardDescription from './components/CardDescription'

export interface CardFigureProps {
    link: string
    description: string
    caption: string
    wrapLink?: any
}

const CardFigure: React.FC<CardFigureProps> = ({
    link,
    description,
    caption,
    wrapLink,
}): JSX.Element => (
    <article
        className='c-card c-card--figure'
        itemScope
        itemType='http://schema.org/QuantitativeValue'
    >
        <Link wrapper={wrapLink} href={link}>
            <figure>
                <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
                <CardDescription>{description}</CardDescription>
            </figure>
        </Link>
    </article>
)
export default CardFigure
