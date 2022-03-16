import React, { ReactElement } from 'react'
import ListingBase from './components/ListingBase'
import ListingEvent from './components/ListingEvent'
import ListingNews from './components/ListingNews'
import ListingPeople from './components/ListingPeople'
import ListingVideo from './components/ListingVideo'
import ListingTwoColumns from './components/ListingTwoColumns'

export interface ListingProps {
    type: 'base' | 'event' | 'news' | 'people' | 'twoColumn' | 'icon'
    header: string
    noborder: boolean
    data: ListProps[]
    columndata: ListTwoColumnProps
    hasIcon?: boolean
}

export interface ListProps {
    src: string
    title: string
    description?: string
    date: string
    datetime: string
}

export interface ListTwoColumnProps {
    firstColumn: ColumnProp[]
    secondColumn: ColumnProp[]
}

export interface ColumnProp {
    src: string
    title: string
}


export interface TypeProps {
    [index: string]: ReactElement
}

const Listing: React.FC<ListingProps> = (props): JSX.Element => {
    const { type } = props
    
    const cardTypes: TypeProps = {
        base: <ListingBase {...props} />,
        icon: <ListingBase hasIcon {...props} />,
        event: <ListingEvent {...props} />,
        news: <ListingNews {...props} />,
        people: <ListingPeople {...props} />,
        video: <ListingVideo {...props} />,
        twoColumn: <ListingTwoColumns {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Listing
