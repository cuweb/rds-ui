import React from 'react'
import convertDate from '@functions/convertDate'
import Link from '@components/Link/Link'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'
import CardDescription from './components/CardDescription'

export interface CardNewsProps {
    link: string
    image: CardImageProps
    header: string
    date: string
    description?: string
    wrapLink?: any
}

const CardNews: React.FC<CardNewsProps & CardImageProps> = ({
    link,
    image,
    header,
    date,
    description,
    wrapLink,
}): JSX.Element => {
    const longDate = convertDate(date)
    return (
        <article
            className='c-card'
            itemScope
            itemType='http://schema.org/NewsArticle'
        >
            <Link wrapper={wrapLink} href={link}>
                <CardImage image={image} />
                <header>
                    <time dateTime={date} itemProp='datePublished'>
                        {longDate}
                    </time>
                    <CardTitle>{header}</CardTitle>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </header>
            </Link>
        </article>
    )
}
export default CardNews
