import React from 'react'

export interface MaxWidthVariantCardProps {
    link: string
    src: string
    alt: string
    header: string
    description: string
}

const MaxWidthVariantCard: React.FC<MaxWidthVariantCardProps> = ({
    link,
    src,
    alt,
    header,
    description,
}): JSX.Element => (
    <article className='c-card' itemScope itemType='http://schema.org/Article'>
        <a href={link} itemProp='url'>
            <figure itemScope itemType='http://schema.org/ImageObject'>
                <img src={src} alt={alt} loading='lazy' />
            </figure>
            <header>
                <h3
                    itemProp='name'
                    dangerouslySetInnerHTML={{ __html: header }}
                />
                <p
                    itemProp='description'
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </header>
        </a>
    </article>
)
export default MaxWidthVariantCard
