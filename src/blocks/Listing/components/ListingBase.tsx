import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import Icon from '../../../components/Icon/Icon'

export interface ListingBaseProps {
    header: string
    noborder?: boolean
    data: ListProps[]
    hasIcon?: boolean
}

export interface ListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
    badge?: string
    fileIcon?: string
}

export interface ImageProps {
    src: string
    alt: string
}

const ListingBase: React.FC<ListingBaseProps> = ({
    header,
    noborder,
    data,
    hasIcon
}): JSX.Element => {
    const isIcon = hasIcon ? 'b-listing--icon' : '';
    return (
        <Ublock>
            <header>
                <Heading header={header} noborder={noborder} />
            </header>
            <div className={`b-listing ${isIcon}`}>
                <ul itemScope itemType="http://schema.org/ItemList">
                    {data.map((item, index) => (
                        <li itemProp="item" key={index}>
                            <a href={item.src} itemProp="url">
                                {item.image && (
                                    <figure>
                                        <img src={item.image.src} alt={item.image.alt} itemProp="image" />
                                    </figure>
                                )}
                                {hasIcon && (
                                    <figure>
                                        <Icon icon= 'raven' size= {128} viewBox= "0 0 128 128"/>
                                    </figure>
                                )}
                                {item.fileIcon && (
                                    <figure>
                                        <Icon icon = {item.fileIcon} />
                                    </figure>
                                )}
                                <div itemProp="name">
                                    <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                                    {item.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: item.description }} />}
                                </div>
                                {item.badge && (<span className="c-badge">{item.badge}</span>)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </Ublock>

    )
}

export default ListingBase
