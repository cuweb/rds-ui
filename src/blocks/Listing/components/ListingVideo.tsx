import React from 'react'
import Icon from '../../../components/Icon/Icon'
import { ListingHeaderProps } from './ListingHeader'
import ListingWrapper, { ListingWrapperProps } from './ListingWrapper'

export interface ListingVideoProps {
    data: VideoListProps[]
}

export interface VideoListProps {
    src: string
    title: string
    image?: ImageProps
    icon: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingVideo: React.FC<
    ListingVideoProps & ListingHeaderProps & ListingWrapperProps
> = ({ header, data, hasUblock }): JSX.Element => {
    return (
        <ListingWrapper type='video' header={header} hasUblock={hasUblock}>
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
                                    <Icon icon={item.icon} />
                                </figure>
                            )}
                            <div itemProp='name'>
                                <h3
                                    itemProp='headline'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingVideo
