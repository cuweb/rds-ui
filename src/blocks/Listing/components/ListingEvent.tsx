import React from 'react'
import convertDateAndTime from '../../../functions/convertDateAndTime.js'
import { ListingHeaderProps } from './ListingHeader'
import ListingWrapper, { ListingWrapperProps } from './ListingWrapper'

export interface ListingEventProps {
    data: EventListProps[]
}

export interface EventListProps {
    src: string
    title: string
    description?: string
    date: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingEvent: React.FC<
    ListingEventProps & ListingHeaderProps & ListingWrapperProps
> = ({ header, data, hasUblock }): JSX.Element => {
    return (
        <ListingWrapper type='event' header={header} hasUblock={hasUblock}>
            <ul itemScope itemType='http://schema.org/Event'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <a href={item.src} itemProp='url'>
                            <time itemProp='startDate' dateTime=''>
                                {convertDateAndTime(item.date).month}
                                <span>{convertDateAndTime(item.date).day}</span>
                            </time>
                            <div>
                                <h3>
                                    {convertDateAndTime(item.date).startTime}
                                </h3>
                                <p>{convertDateAndTime(item.date).endTime}</p>
                            </div>
                            <div itemProp='name'>
                                <h3
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                                {item.description && (
                                    <p
                                        itemProp='description'
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                )}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingEvent
