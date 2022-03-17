import React from 'react'
import { ListingHeaderProps } from './ListingHeader'
import ListingWrapper, { ListingWrapperProps } from './ListingWrapper'

export interface ListingPeopleProps {
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingPeople: React.FC<
    ListingPeopleProps & ListingHeaderProps & ListingWrapperProps
> = ({ header, data, hasUblock }): JSX.Element => {
    return (
        <ListingWrapper type='people' header={header} hasUblock={hasUblock}>
            <ul itemScope itemType='http://schema.org/Person'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <a href={item.src} itemProp='url'>
                            {item.image && (
                                <figure>
                                    <img
                                        src={item.image.src}
                                        alt={item.image.alt}
                                        itemProp='image'
                                    />
                                </figure>
                            )}
                            <div>
                                <h3
                                    itemProp='headline'
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

export default ListingPeople
