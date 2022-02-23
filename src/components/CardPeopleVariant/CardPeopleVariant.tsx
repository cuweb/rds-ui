import React from 'react'
import checkImageUrl from '@functions/checkImageUrl'

export interface CardPeopleVariantProps {
    link: string
    image: ImageProps
    header: string
    description: string
}

export interface ImageProps {
    src: string
    alt: string
}

const CardPeopleVariant: React.FC<CardPeopleVariantProps> = ({
    link,
    image,
    header,
    description,
}): JSX.Element => {
    // console.log(checkImageUrl(image.src)) checking if its a valid image url

    const Initials = header
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase() // getting Initials

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
                    <div className='card-initials'>{Initials}</div>
                )}

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
}
export default CardPeopleVariant
