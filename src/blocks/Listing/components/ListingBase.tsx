import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'
import Icon from '../../../components/Icon/Icon'

export interface ListingBaseProps {
    header: string
    noborder?: boolean
    data: ListProps[]
    hasIcon?: boolean
    columndata: ListTwoColumnProps
}

export interface ListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
    badge?: string
    fileIcon?: string
    icon: string
}

export interface ImageProps {
    src: string
    alt: string
}

export interface ListTwoColumnProps {
    firstColumn: ColumnProp[]
    secondColumn: ColumnProp[]
}

export interface ColumnProp {
    src: string
    title: string
}

const ListingBase: React.FC<ListingBaseProps> = ({
    header,
    noborder,
    data,
    hasIcon,
    columndata,
}): JSX.Element => {
    const isIcon = hasIcon ? 'b-listing--icon' : ''
    return (
        <Ublock>
            {!columndata ? (
                <div>
                    <header>
                        <Heading header={header} noborder={noborder} />
                    </header>
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
                                        {hasIcon && (
                                            <figure>
                                                <Icon
                                                    icon={item.icon}
                                                    size={128}
                                                    viewBox='0 0 128 128'
                                                />
                                            </figure>
                                        )}
                                        {item.fileIcon && (
                                            <figure>
                                                <Icon icon={item.fileIcon} />
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
            ) : (
                <div className='u-grid u-grid--2 u-grid--s1'>
                    <section>
                        <h3>{data[0].title}</h3>
                        <div className='b-listing'>
                            <ul itemScope itemType='http://schema.org/ItemList'>
                                {columndata.firstColumn.map((item, index) => (
                                    <li itemProp='item' key={index}>
                                        <a href={item.src} itemProp='url'>
                                            <header
                                                className='listing__body'
                                                itemProp='name'
                                            >
                                                <h4
                                                    className='listing__title'
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.title,
                                                    }}
                                                />
                                            </header>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section>
                        <h3>{data[1].title}</h3>
                        <div className='b-listing'>
                            <ul itemScope itemType='http://schema.org/ItemList'>
                                {columndata.secondColumn.map((item, index) => (
                                    <li itemProp='item' key={index}>
                                        <a href={item.src} itemProp='url'>
                                            <header
                                                className='listing__body'
                                                itemProp='name'
                                            >
                                                <h4
                                                    className='listing__title'
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.title,
                                                    }}
                                                />
                                            </header>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </div>
            )}
        </Ublock>
    )
}

export default ListingBase
