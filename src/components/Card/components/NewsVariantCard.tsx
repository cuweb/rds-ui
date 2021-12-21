import React from 'react'

export interface NewsVariantCardProps {
    link: string
    src: string
    alt: string
    header: string
    dateTime: string
    date: string
    description?: string
}

const NewsVariantCard: React.FC<NewsVariantCardProps> = ({
    link,
    src,
    alt,
    header,
    dateTime,
    date,
    description,
}): JSX.Element => (
    <article
        className='c-card'
        itemScope
        itemType='http://schema.org/NewsArticle'
    >
        <a href={link} itemProp='url'>
            <figure itemScope itemType='http://schema.org/ImageObject'>
                <img src={src} alt={alt} loading='lazy' />
            </figure>
            <header>
                <time dateTime={dateTime} itemProp='datePublished'>
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
export default NewsVariantCard
