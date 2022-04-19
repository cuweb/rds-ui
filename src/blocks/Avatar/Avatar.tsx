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
    handleClick?: React.MouseEventHandler<HTMLImageElement> | undefined
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
    handleClick,
}): JSX.Element => {
    const roundImage = isRound ? 'image__round' : ''
    const leftsideDetails = sideDetails ? 'details__leftside' : ''
    const clickableImage = handleClick ? 'image__clickable' : ''
    return (
        <div className={`b-avatar ${leftsideDetails}`}>
            <div className='details__aside'>
                <figure className={`${roundImage}`}>
                    {imageUrl && (
                        <img
                            className={clickableImage}
                            onClick={handleClick}
                            src={imageUrl}
                            alt={alt || 'Picture'}
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
