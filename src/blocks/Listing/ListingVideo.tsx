import React from 'react'
import Icon from '@components/Icon/Icon'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingVideoProps {
    data: VideoListProps[]
    noUblock?: boolean
}

export interface VideoListProps {
    src: string
    title: string
    image?: ImageProps
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingVideo: React.FC<ListingVideoProps & ListingHeaderProps> = ({
    header,
    data,
    noUblock,
}): JSX.Element => {
    return (
        <ListingWrapper type='video' header={header} noUblock={noUblock}>
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
                                    <Icon icon='video' size={32} />
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
