import React, { ReactElement } from 'react'
import ListingBase from './components/ListingBase'
//import CardFigure from './components/CardFigure'
//import CardNews from './components/CardNews'
//import CardVideo from './components/CardVideo'

export interface ListingProps {
    type: 'base' | 'news' | 'video' | 'figure'
    header: string
    noborder: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Listing: React.FC<ListingProps> = (props): JSX.Element => {
    const { type } = props
    
    const cardTypes: TypeProps = {
        base: <ListingBase {...props} />,
        //news: <CardNews {...props} />,
        //video: <CardVideo {...props} />,
        //figure: <CardFigure {...props} />,
    }
    return cardTypes[type || 'base']
}

export default Listing
