import React from 'react'
import Icon from '@components/Icon/Icon'
import Link from '@components/Link/Link'
import { ListingHeaderProps } from './components/ListingHeader'
import ListingWrapper from './components/ListingWrapper'

export interface ListingVideoProps {
    data: VideoListProps[]
    noUblock?: boolean
    lineClamp?: number
    wrapLink?: any
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
    lineClamp = 1,
    wrapLink,
}): JSX.Element => {
    return (
        <ListingWrapper type='video' header={header} noUblock={noUblock}>
            <ul itemScope itemType='http://schema.org/ItemList'>
                {data.map((item, index) => (
                    <li itemProp='item' key={index}>
                        <Link wrapper={wrapLink} href={item.src}>
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
                                    className={`u-line-clamp u-line-clamp--${lineClamp}`}
                                    itemProp='headline'
                                    dangerouslySetInnerHTML={{
                                        __html: item.title,
                                    }}
                                />
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </ListingWrapper>
    )
}

export default ListingVideo
