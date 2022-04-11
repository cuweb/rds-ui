import React from 'react'

export interface IUserImage {
    imageUrl?: string
    alt?: string
    firstName?: string
    lastName?: string
    isProfile?: boolean
    isNav?: boolean
    handleClick?: React.MouseEventHandler<HTMLDivElement>
}

const UserImage: React.FC<IUserImage> = ({
    imageUrl,
    alt,
    firstName,
    lastName,
    isProfile,
    isNav,
    handleClick,
}): JSX.Element => {
    const className = isProfile ? 'isProfile' : isNav ? 'isNav' : ''
    return (
        <div className={`userImage ${className}`} onClick={handleClick}>
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt={
                        alt
                            ? alt
                            : firstName && lastName
                            ? `Photo of ${firstName} ${lastName}`
                            : 'Photo'
                    }
                />
            ) : (
                <p>
                    {firstName?.charAt(0)} {lastName?.charAt(0)}
                </p>
            )}
        </div>
    )
}

export default UserImage
