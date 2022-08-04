import Heading from '@components/Heading/Heading'
import React, { FC } from 'react'

export interface ListingHeaderProps {
    header?: string
    noborder?: boolean
    children?: React.ReactNode
}

const ListingHeader: FC<ListingHeaderProps> = ({
    header,
    noborder = true,
}): JSX.Element | null => {
    if (!header) return null
    return (
        <header>
            <Heading header={header} noborder={noborder} />
        </header>
    )
}
export default ListingHeader
