import Link from '@components/Link/Link'
import React from 'react'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingPeopleProps {
    data: ListProps[]
    noUblock?: boolean
    lineClamp?: number
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

const ListingPeople: React.FC<ListingPeopleProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
    lineClamp = 1,
}): JSX.Element => {
    return (
        <ListingWrapper type='people' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/Person'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <Link href={item.src}>
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
                                    className={`u-line-clamp u-line-clamp--${lineClamp}`}
                                    itemProp='name'
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
                        </Link>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingPeople
