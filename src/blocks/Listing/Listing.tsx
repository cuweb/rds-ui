import React, { ReactElement } from 'react'
import ListingBase from './components/ListingBase'
import ListingEvent from './components/ListingEvent'
import ListingNews from './components/ListingNews'
import ListingPeople from './components/ListingPeople'
import ListingVideo from './components/ListingVideo'
import ListingTwoColumns from './components/ListingTwoColumns'
//import CardFigure from './components/CardFigure'
//import CardNews from './components/CardNews'
//import CardVideo from './components/CardVideo'

export interface ListingProps {
    type: 'base' | 'event' | 'news' | 'people' | 'twoColumn'
    header: string
    noborder: boolean
    data: ListProps[]
    columndata: ListTwoColumnProps
}

export interface ListProps {
    src: string
    title: string
    description?: string
    date: DateProps
    datetime: string
}

export interface DateProps {
    month: string
    day: string
    startTime: string
    endTime: string
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
        event: <ListingEvent {...props} />,
        news: <ListingNews {...props} />,
        people: <ListingPeople {...props} />,
        video: <ListingVideo {...props} />,
        twoColumn: <ListingTwoColumns {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Listing
