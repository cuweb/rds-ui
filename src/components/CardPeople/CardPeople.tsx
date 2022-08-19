import Link from '@components/Link/Link'
import React from 'react'

export interface CardPeopleProps {
    link: string
    image: ImageProps
    description: string
    firstName: string
    lastName: string
    wrapLink?: any
}

export interface ImageProps {
    src: string
    alt: string
}

const CardPeople: React.FC<CardPeopleProps> = ({
    link,
    image,
    firstName,
    lastName,
    description,
    wrapLink,
}): JSX.Element => {
    return (
        <article
            className='c-card c-card--people'
            itemScope
            itemType='http://schema.org/Person'
        >
            <Link wrapper={wrapLink} href={link}>
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
            </Link>
        </article>
    )
}
export default CardPeople
