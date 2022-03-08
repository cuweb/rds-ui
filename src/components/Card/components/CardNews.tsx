import React from 'react'
import convertDate from '@functions/convertDate'

export interface CardNewsProps {
    link: string
    image: ImageProps
    header: string
    date: string
    description?: string
}

export interface ImageProps {
    src: string
    alt: string
}

const CardNews: React.FC<CardNewsProps> = ({
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
export default CardNews
