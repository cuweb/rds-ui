import React from 'react'
import convertDate from '@functions/convertDate'
import { CardImageProps } from '../Card'

export interface NewsVariantCardProps {
    link: string
    image: CardImageProps
    header: string
    date: string
    description?: string
}

const NewsVariantCard: React.FC<NewsVariantCardProps> = ({
    link,
    image,
    header,
    date, // TODO: check TS content error
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
                <figure itemScope itemType='http://schema.org/ImageObject'>
                    <img src={image.src} alt={image.alt} loading='lazy' />
                </figure>
                <header>
                    <time dateTime={date} itemProp='datePublished'>
                        {longDate}
                    </time>
                    <h3
                        itemProp='name'
                        dangerouslySetInnerHTML={{ __html: header }}
                    />
                    {description && (
                        <p
                            itemProp='description'
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    )}
                </header>
            </a>
        </article>
    )
}
export default NewsVariantCard
