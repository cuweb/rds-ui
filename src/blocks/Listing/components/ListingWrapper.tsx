import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC, ReactElement } from 'react'
import ListingHeader, { ListingHeaderProps } from './ListingHeader'

export type ListingTypes =
    | 'base'
    | 'event'
    | 'news'
    | 'people'
    | 'video'
    | 'marketplace'

export interface ListingWrapperProps {
    noUblock?: boolean
    type: ListingTypes
    uBlockProps?: UblockProps
}

const ListingWrapper: FC<ListingWrapperProps & ListingHeaderProps> = ({
    noUblock,
    children,
    type,
    header,
    noborder,
    uBlockProps,
}): JSX.Element => {
    const typeClassName = `b-listing--${type}`
    const content: ReactElement = (
        <div className={`b-listing ${typeClassName}`}>
            <ListingHeader header={header} noborder={noborder} />
            {children}
        </div>
    )
    if (noUblock) return content
    return <Ublock {...uBlockProps}>{content}</Ublock>
}

export default ListingWrapper
