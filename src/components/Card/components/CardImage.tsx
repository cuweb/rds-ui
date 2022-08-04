import React, { FC } from 'react'

export interface CardImageProps {
    image: ImageProps
    children?: React.ReactNode
}

export interface ImageProps {
    src: string
    alt?: string
    children?: React.ReactNode
}

const CardImage: FC<CardImageProps> = ({ image, children }): JSX.Element => {
    return (
        <figure itemScope itemType='http://schema.org/ImageObject'>
            <img src={image.src} alt={image.alt} loading='lazy' />
            {children}
        </figure>
    )
}
export default CardImage
