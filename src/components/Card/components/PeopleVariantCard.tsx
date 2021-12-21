import React from 'react'

export interface PeopleVariantCardProps {
    link: string
    src: string
    alt: string
    header: string
    description: string
}

const PeopleVariantCard: React.FC<PeopleVariantCardProps> = ({
    link,
    src,
    alt,
    header,
    description,
}): JSX.Element => (
    <article
        className='c-card c-card--people'
        itemScope
        itemType='http://schema.org/Person'
    >
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
export default PeopleVariantCard
