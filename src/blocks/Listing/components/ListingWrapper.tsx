import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC, ReactElement } from 'react'
import ListingHeader, { ListingHeaderProps } from './ListingHeader'

export type ListingTypes = 'base' | 'event' | 'news' | 'people' | 'video'

export interface ListingWrapperProps {
    hasUblock?: boolean
    type: ListingTypes
    uBlockProps?: UblockProps
}

const ListingWrapper: FC<ListingWrapperProps & ListingHeaderProps> = ({
    hasUblock = true,
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
    if (hasUblock) return <Ublock {...uBlockProps}>{content}</Ublock>
    return content
}

export default ListingWrapper
