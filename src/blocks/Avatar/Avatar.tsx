import React from 'react'

export interface IAvatar {
    children?: React.ReactNode
    imageUrl?: string
    alt?: string
    firstName?: string
    lastName?: string
    caption?: {
        topText: string
        bottomText?: string
    }
    isRound?: boolean
    sideDetails?: boolean
    handleClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    size?: string
    className?: string
}

const Avatar: React.FC<IAvatar> = ({
    children,
    imageUrl,
    alt,
    firstName,
    lastName,
    caption,
    isRound = true,
    sideDetails = false,
    size = '200px',
    className = '',
    handleClick,
}): JSX.Element => {
    const roundImage = isRound ? 'image__round' : ''
    const leftsideDetails = sideDetails ? 'details__leftside' : ''
    const imageAlt = alt || 'Picture'
    return (
        <div className={`b-avatar ${leftsideDetails}`}>
            <div className='details__aside'>
                <figure className={`${roundImage}`}>
                    {imageUrl && handleClick && (
                        <button
                            className='button__image'
                            type='button'
                            onClick={handleClick}
                        >
                            <img
                                src={imageUrl}
                                alt={imageAlt}
                                width={size}
                                height={size}
                                className={className}
                            />
                        </button>
                    )}
                    {imageUrl && !handleClick && (
                        <img
                            src={imageUrl}
                            alt={imageAlt}
                            width={size}
                            height={size}
                            className={className}
                        />
                    )}
                    {!imageUrl && firstName && lastName && (
                        <p>
                            {firstName?.charAt(0)} {lastName?.charAt(0)}
                        </p>
                    )}
                    {caption && (
                        <figcaption>
                            {caption && caption.topText}
                            <br />
                            {caption && caption.bottomText}
                        </figcaption>
                    )}
                </figure>
            </div>
            {children && (
                <div className='details__meta'>
                    <dl className='u-link'>{children}</dl>
                </div>
            )}
        </div>
    )
}

export default Avatar
