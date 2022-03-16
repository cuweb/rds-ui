import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import convertDateAndTime from '../../../functions/convertDateAndTime.js'

export interface ListingEventProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
    date: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingEvent: React.FC<ListingEventProps> = ({
    header,
    noborder,
    data,
}): JSX.Element => {

    console.log(data[0].date);
    console.log(convertDateAndTime(data[0].date).startTime);
    return (
        <Ublock>
            <header>
                <Heading header={header} noborder={noborder} />
            </header>
            <div className="b-listing b-listing--event">
                <ul itemScope itemType="http://schema.org/Event">
                    {data.map((item, index) => (
                        <li itemProp="item" key={index}>
                            <a href={item.src} itemProp="url">
                                <time itemProp="startDate" dateTime="">
                                    {convertDateAndTime(item.date).month}<span>{convertDateAndTime(item.date).day}</span>
                                </time>
                                <div>
                                    <h3>{convertDateAndTime(item.date).startTime}</h3>
                                    <p>{convertDateAndTime(item.date).endTime}</p>
                                </div>
                                <div itemProp="name">
                                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    {item.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: item.description }} />}
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
