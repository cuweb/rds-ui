import Heading from '@components/Heading/Heading'
import React, { FC } from 'react'

export interface ListingHeaderProps {
    header?: string
    noborder?: boolean
}

const ListingHeader: FC<ListingHeaderProps> = ({
    header,
    noborder,
}): JSX.Element | null => {
    if (!header) return null
    return (
        <header>
            <Heading header={header} noborder={noborder} />
        </header>
    )
}
export default ListingHeader
