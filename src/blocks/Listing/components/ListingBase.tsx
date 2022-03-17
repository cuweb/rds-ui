import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import Icon from '../../../components/Icon/Icon'
import ListingHeader, { ListingHeaderProps } from './ListingHeader'

export interface ListingBaseProps {
    data: BaseListProps[]
    hasIcon?: boolean
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

const ListingBase: React.FC<ListingBaseProps & ListingHeaderProps> = ({
    header,
    noborder,
    data,
    hasIcon,
}): JSX.Element => {
    const isIcon = hasIcon ? 'b-listing--icon' : ''
    return (
        <Ublock>
            <div>
                <ListingHeader header={header} noborder={noborder} />
                <div className={`b-listing ${isIcon}`}>
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
                                    {hasIcon && item.icon && (
                                        <figure>
                                            <Icon icon={item.icon} />
                                        </figure>
                                    )}
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
                                    {item.badge && (
                                        <span className='c-badge'>
                                            {item.badge}
                                        </span>
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Ublock>
    )
}

export default ListingBase
