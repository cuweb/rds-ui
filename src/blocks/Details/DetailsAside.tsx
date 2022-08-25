import Avatar from '@components/Avatar/Avatar'
import React, { FC, ReactNode } from 'react'
import { ImageType } from 'types/Image'

export interface DetailsAsideProps {
    className?: string
    image?: ImageType
    caption?: ReactNode
    variant?: 'default' | 'figure' | 'event' | 'eventpast'
    firstName?: string
    lastName?: string
}

const DetailsAside: FC<DetailsAsideProps> = ({
    className = '',
    image,
    caption,
    variant = 'default',
    firstName,
    lastName,
}): JSX.Element => {
    const isVariantfigure = variant === 'figure'

    const user = image
        ? {
              image: {
                  src: image.src,
                  alt: image.alt,
              },
              firstName: firstName || '',
              lastName: lastName || '',
          }
        : {
              firstName: firstName || '',
              lastName: lastName || '',
          }

    return (
        <div className={`details__aside ${className}`}>
            {isVariantfigure && (
                <Avatar user={user} size='4xl' caption={caption} />
            )}

            {!isVariantfigure && (
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
            )}
        </div>
    )
}

export default DetailsAside
