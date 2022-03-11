import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'

export interface ListingEventProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
    date: DateProps
}

export interface ImageProps {
    src: string
    alt: string
}

export interface DateProps {
    month: string
    day: string
    startTime: string
    endTime: string
}

const ListingEvent: React.FC<ListingEventProps> = ({
    header,
    noborder,
    data,
}): JSX.Element => {
    return (
        <Ublock>
        <Heading header={header} noborder={noborder} />
            <div className="b-listing b-listing--event">
                <ul itemScope itemType="http://schema.org/Event">
                    {data.map((list, index) => (
                        <li itemProp="item" key={index}>
                            <a href={list.src} itemProp="url">
                                <time itemProp="startDate" dateTime="">
                                    {list.date.month}<span>{list.date.day}</span>
                                </time>
                                <div>
                                    <h3>{list.date.startTime}</h3>
                                    <p>{list.date.endTime}</p>
                                </div>
                                <div itemProp="name">
                                    <h3 dangerouslySetInnerHTML={{ __html: list.title }} />
                                    {list.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: list.description }} />}
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </Ublock>

    )
}

export default ListingEvent
