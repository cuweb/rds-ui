import React, { ReactElement } from 'react'
import ListingBase, { BaseListProps } from './components/ListingBase'
import ListingEvent, { EventListProps } from './components/ListingEvent'
import ListingNews, { NewsListProps } from './components/ListingNews'
import ListingPeople from './components/ListingPeople'
import ListingVideo, { VideoListProps } from './components/ListingVideo'

export interface ListingProps {
    type: 'base' | 'event' | 'news' | 'people' | 'icon'
    header?: string
    noborder?: boolean
    data: BaseListProps[] &
        EventListProps[] &
        NewsListProps[] &
        VideoListProps[]
    hasIcon?: boolean
}
export interface TypeProps {
    [index: string]: ReactElement
}

const Listing: React.FC<ListingProps> = (props): JSX.Element => {
    const { type } = props

    const listTypes: TypeProps = {
        base: <ListingBase {...props} />,
        icon: <ListingBase hasIcon {...props} />,
        event: <ListingEvent {...props} />,
        news: <ListingNews {...props} />,
        people: <ListingPeople {...props} />,
        video: <ListingVideo {...props} />,
    }
    return listTypes[type || 'base']
}

export default Listing
