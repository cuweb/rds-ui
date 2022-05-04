import React from 'react'
import convertDate from '@functions/convertDate'
import CardImage, { CardImageProps } from './components/CardImage'
import CardTitle, { CardTitleProps } from './components/CardTitle'
import CardDescription, {
    CardDescriptionProps,
} from './components/CardDescription'

export interface CardNewsProps {
    link: string
    image: CardImageProps
    header: CardTitleProps
    date: string
    description?: CardDescriptionProps
}

const CardNews: React.FC<
    CardNewsProps & CardImageProps & CardTitleProps & CardDescriptionProps
> = ({ link, image, header, date, description }): JSX.Element => {
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
