import React from 'react'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingMarketplaceProps {
    data: MarketplaceListProps[]
    noUblock?: boolean
}
export interface MarketplaceListProps {
    src: string
    title: string
    image?: ImageProps
    price?: string
    condition?: string
    availability?: string
}
export interface ImageProps {
    src: string
    alt: string
}

const ListingMarketplace: React.FC<
    ListingMarketplaceProps & ListingHeaderProps
> = ({ header, data, noUblock }): JSX.Element => {
    return (
        <ListingWrapper type='marketplace' header={header} noUblock={noUblock}>
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
                            <div itemProp='name'>
                                <h3
                                    itemProp='name'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                                {item.price && (
                                    <span
                                        itemProp='price'
                                        dangerouslySetInnerHTML={{
                                            __html: item.price,
                                        }}
                                    />
                                )}
                                {item.condition && (
                                    <>
                                        <span> | </span>
                                        <span
                                            itemProp='condition'
                                            dangerouslySetInnerHTML={{
                                                __html: item.condition,
                                            }}
                                        />
                                    </>
                                )}
                                {item.availability && (
                                    <>
                                        <span> | </span>
                                        <span
                                            itemProp='availability'
                                            dangerouslySetInnerHTML={{
                                                __html: item.availability,
                                            }}
                                        />
                                    </>
                                )}
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingMarketplace
