import React from 'react'

export interface CardVideoProps {
    link: string
    image: ImageProps
    header: string
}

export interface ImageProps {
    src: string
    alt: string
}

const CardVideo: React.FC<CardVideoProps> = ({
    link,
    image,
    header,
}): JSX.Element => (
    <article
        className='c-card c-card--video'
        itemScope
        itemType='http://schema.org/VideoObject'
    >
        <a href={link} itemProp='url'>
            <figure itemScope itemType='http://schema.org/ImageObject'>
                <img src={image.src} alt={image.alt} loading='lazy' />
                <span className='u-icon u-icon--circle' aria-hidden='true'>
                    <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                    >
                        <path d='M5.61 22.994h.001c-1.178.752-2.611.08-2.611-1.4v-1.197h.013V4.66H3V1.729C3 .251 4.433-.447 5.611.306l14.964 9.867c1.18.752 1.154 1.975-.011 2.714L5.61 22.996z' />
                    </svg>
                </span>
            </figure>
            <header>
                <h3
                    itemProp='name'
                    dangerouslySetInnerHTML={{ __html: header }}
                />
            </header>
        </a>
    </article>
)
export default CardVideo
