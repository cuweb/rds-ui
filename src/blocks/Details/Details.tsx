import React, { FC } from 'react'
import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import { UserInfoType } from 'types/UserInfo'
import DetailsMeta, { DetailsItemProps } from './DetailsMeta'
import DetailsAside from './DetailsAside'

export interface IDetails {
    className?: string
    block?: UblockProps
    title?: string
    details: DetailsItemProps[]
    user?: UserInfoType
}

const Details: FC<IDetails> = ({
    block,
    title,
    className = '',
    details,
    user,
}): JSX.Element => {
    const detailsFigureClassName = user ? `b-details--figure` : ''
    return (
        <Ublock {...block}>
            {title && <h2>{title}</h2>}
            <div className={`b-details ${detailsFigureClassName} ${className}`}>
                <DetailsMeta details={details} />
                {user && <DetailsAside user={user} />}
            </div>
        </Ublock>
    )
}

export default Details
