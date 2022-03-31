import React from 'react'
import { CardImageProps } from '../Card'

export interface PeopleVariantCardProps {
    link: string
    image: CardImageProps
    header: string
    description: string
}

const PeopleVariantCard: React.FC<PeopleVariantCardProps> = ({
    link,
    image,
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
                <img src={image.src} alt={image.alt} loading='lazy' />
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
