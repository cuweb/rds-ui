import React from 'react'
import Icon from '@components/Icon/Icon'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingProps {
    data: BaseListProps[]
    noUblock?: boolean
}
export interface BaseListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
    badge?: string
    icon?: string
}
export interface ImageProps {
    src: string
    alt: string
}

const Listing: React.FC<ListingProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
}): JSX.Element => {
    return (
        <ListingWrapper type='base' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/ItemList'>
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
                            {item.icon && item.icon && (
                                <figure>
                                    <Icon icon={item.icon} size={45} />
                                </figure>
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
                                        itemProp='description'
                                        dangerouslySetInnerHTML={{
                                            __html: item.description,
                                        }}
                                    />
                                )}
                            </div>
                            {item.badge && (
                                <span className='c-badge'>{item.badge}</span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default Listing
