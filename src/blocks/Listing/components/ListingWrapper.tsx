import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC, ReactElement } from 'react'
import ListingHeader, { ListingHeaderProps } from './ListingHeader'

export type ListingTypes = 'base' | 'event' | 'news' | 'people' | 'video'

export interface ListingWrapperProps {
    noUblock?: boolean
    type: ListingTypes
    uBlockProps?: UblockProps
    noArrow?: boolean
    children: React.ReactNode
}

const ListingWrapper: FC<ListingWrapperProps & ListingHeaderProps> = ({
    noUblock,
    children,
    type,
    header,
    noborder,
    uBlockProps,
    noArrow = false,
}): JSX.Element => {
    const typeClassName = `b-listing--${type}`
    const arrowClassName = noArrow ? 'b-listing--no-arrow' : ''
    const content: ReactElement = (
        <div className={`b-listing ${arrowClassName} ${typeClassName}`}>
            <ListingHeader header={header} noborder={noborder} />
            {children}
        </div>
    )
    if (noUblock) return content
    return <Ublock {...uBlockProps}>{content}</Ublock>
}

export default ListingWrapper
