import convertDate from '@functions/convertDate'
import convertTime from '@functions/convertTime'
import React from 'react'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingEventProps {
    data: EventListProps[]
    noUblock?: boolean
}

export interface EventListProps {
    src: string
    title: string
    description?: string
    date: string
    startTime?: string
    endTime?: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingEvent: React.FC<ListingEventProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
}): JSX.Element => {
    return (
        <ListingWrapper type='event' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/Event'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <a href={item.src} itemProp='url'>
                            <time itemProp='startDate' dateTime=''>
                                {convertDate(item.date, 'month')}
                                <span>{convertDate(item.date, 'day')}</span>
                            </time>
                            {(item.startTime || item.endTime) && (
                                <div>
                                    {item.startTime && (
                                        <h3>{convertTime(item.startTime)}</h3>
                                    )}
                                    {item.endTime && (
                                        <p>{convertTime(item.endTime)}</p>
                                    )}
                                </div>
                            )}
                            <div itemProp='name'>
                                <h3
                                    itemProp='name'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                                {item.description && (
                                    <p
                                        itemProp='location'
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
