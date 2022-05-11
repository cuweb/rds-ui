import React, { FC, ReactNode } from 'react'
import { ImageType } from 'types/Image'

export interface DetailsAsideProps {
    className?: string
    image?: ImageType
    caption?: ReactNode
}

const DetailsAside: FC<DetailsAsideProps> = ({
    className = '',
    image,
    caption,
}): JSX.Element => {
    return (
        <div className={`details__aside ${className}`}>
            <figure>
                {image && (
                    <img
                        className='u-image u-image--full u-image--radius u-image--border'
                        src={image.src}
                        alt={image?.alt || ''}
                    />
                )}
                {caption && (
                    <figcaption className='u-spacing-y u-center u-text--xs'>
                        {caption}
                    </figcaption>
                )}
            </figure>
        </div>
    )
}

export default DetailsAside
