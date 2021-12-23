import React from 'react'

export interface BaseCardProps {
    link: string
    header: string
    description?: string
    image: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

const BaseCard: React.FC<BaseCardProps> = ({
    link,
    header,
    description,
    image,
}): JSX.Element => (
    <article className='c-card' itemScope itemType='http://schema.org/Article'>
        <a href={link} itemProp='url'>
            <figure itemScope itemType='http://schema.org/ImageObject'>
                <img src={image.src} alt={image.alt} loading='lazy' />
            </figure>
            <header>
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
export default BaseCard
