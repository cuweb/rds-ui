import React from 'react'

export interface CardPeopleVariantProps {
    link: string
    image: ImageProps
    header: string
    description: string
    firstName: string
    lastName: string
}

export interface ImageProps {
    src: string
    alt: string
}

const CardPeopleVariant: React.FC<CardPeopleVariantProps> = ({
    link,
    image,
    firstName,
    lastName,
    description,
}): JSX.Element => {
    return (
        <article
            className='c-card c-card--people'
            itemScope
            itemType='http://schema.org/Person'
        >
            <a href={link} itemProp='url'>
                {image.src.length > 0 ? (
                    <figure itemScope itemType='http://schema.org/ImageObject'>
                        <img src={image.src} alt={image.alt} loading='lazy' />
                    </figure>
                ) : (
                    <div className='card-initials'>
                        {firstName?.charAt(0)} {lastName?.charAt(0)}
                    </div>
                )}

                <header>
                    <h3 itemProp='name'>
                        {firstName} {lastName}
                    </h3>
                    <p
                        itemProp='description'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </header>
            </a>
        </article>
    )
}
export default CardPeopleVariant
