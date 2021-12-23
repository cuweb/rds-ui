import React from 'react'
import convertData from '@src/functions/convertDate'

export interface NewsVariantCardProps {
    link: string
    image: ImageProps
    header: string
    time: string
    description?: string
}

export interface ImageProps {
    src: string
    alt: string
}

const NewsVariantCard: React.FC<NewsVariantCardProps> = ({
    link,
    image,
    header,
    time,
    description,
}): JSX.Element => {
    const date = convertData(time)
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
                    <time dateTime={time} itemProp='datePublished'>
                        {date}
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
