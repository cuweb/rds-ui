import React from 'react'

export interface IUserImage {
    imageUrl?: string
    alt?: string
    firstName?: string
    lastName?: string
    isProfile?: boolean
    isNav?: boolean
    isRound?: boolean
    handleClick?: React.MouseEventHandler<HTMLDivElement>
}

const UserImage: React.FC<IUserImage> = ({
    imageUrl,
    alt,
    firstName,
    lastName,
    isProfile,
    isNav,
    isRound,
    handleClick,
}): JSX.Element => {
    return (
        <div
            className={`userImage ${isProfile ? 'isProfile' : ''} ${
                isNav ? 'isNav' : ''
            } ${isRound ? 'isRound' : ''}`}
            onClick={handleClick}
        >
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
