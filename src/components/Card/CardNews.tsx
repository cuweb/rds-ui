import React from 'react'
import convertDate from '@functions/convertDate'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle from './components/CardTitle'
import CardDescription from './components/CardDescription'

export interface CardNewsProps {
    link: string
    image: CardImageProps
    header: string
    date: string
    description?: string
}

const CardNews: React.FC<CardNewsProps & CardImageProps> = ({
    link,
    image,
    header,
    date,
    description,
}): JSX.Element => {
    const longDate = convertDate(date)
    return (
        <article
            className='c-card'
            itemScope
            itemType='http://schema.org/NewsArticle'
        >
            <a href={link} itemProp='url'>
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
            </a>
        </article>
    )
}
export default CardNews
