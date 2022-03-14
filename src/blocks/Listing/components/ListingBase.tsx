import React from 'react'
import Ublock from '../../../components/Ublock/Ublock'
import Heading from '../../../components/Heading/Heading'

export interface ListingBaseProps {
    header: string
    noborder?: boolean
    data: ListProps[]
}

export interface ListProps {
    src: string
    title: string
    description?: string
    image?: ImageProps
    badge?: string
    icon?: string
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
}): JSX.Element => {
    const isIcon = data[0].icon ? 'b-listing--icon' : '';
    const isFileIcon = data[0].fileIcon ? 'b-listing--icon' : '';
    return (
        <Ublock>
            <header>
                <Heading header={header} noborder={noborder} />
            </header>
            <div className={`b-listing ${isIcon} ${isFileIcon}`}>
                <ul itemScope itemType="http://schema.org/ItemList">
                    {data.map((list, index) => (
                        <li itemProp="item" key={index}>
                            <a href={list.src} itemProp="url">
                                {list.image && (
                                    <figure>
                                        <img src={list.image.src} alt={list.image.alt} itemProp="image" />
                                    </figure>
                                )}
                                {list.icon && (
                                    <figure>
                                        <svg width="128" height="128" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d={list.icon}/></svg>
                                    </figure>
                                )}
                                {list.fileIcon && (
                                    <figure>
                                        {list.fileIcon === 'pdf'? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"/><g fill="#bf112b"><path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z"/><path d="M14 7V1h.195L20 6.805V7z" fill-opacity=".215"/><path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z"/></g></g><path d="M16 15.34c0-1.98-8-.117-8 2.263 0 .192.135.397.353.397 1.675 0 4.779-11 3.26-11s.859 9.023 3.66 9.023c.408 0 .727-.167.727-.683z" stroke="#bf112b" stroke-width=".5"/></g></svg> : ''}
                                        {list.fileIcon === 'xls'? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none"><path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"/><path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z" fill="#388e3c"/><path d="M14 7V1h.195L20 6.805V7z" fill="#e8f5e9"/><path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6zM11.497 11.327L12.78 9h2.16l-2.193 3.471L15 16h-2.183l-1.32-2.37-1.32 2.37H8l2.247-3.529L8.06 9h2.156z" fill="#388e3c"/></g></svg> : ''}
                                        {list.fileIcon === 'doc'? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none"><path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"/><path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z" fill="#1976d2"/><path d="M14 7V1h.195L20 6.805V7z" fill="#e3f2fd"/><path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6zM13.324 13.39L14.19 9H16l-1.606 7h-1.891l-1.013-3.99-.993 3.99H8.611L7 9h1.813l.868 4.39L10.721 9h1.548z" fill="#1976d2"/></g></svg> : ''}
                                        {list.fileIcon === 'ppt'? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"/><path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z" fill="#ff6d00"/><path d="M14 7V1h.195L20 6.805V7z" fill="#fff3e0"/><path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z" fill="#ff6d00"/></g><path d="M10 12.5v-3" stroke="#ff6d00" stroke-linecap="square"/><path d="M11.656 9H9v7h1.65v-2.412h.854c.91 0 1.637-.217 2.18-.651.544-.435.817-1.004.816-1.706C14.5 9.744 13.552 9 11.656 9zm-.622 3.45H10V10.2h1.034c1.31 0 1.966.371 1.966 1.113 0 .759-.655 1.137-1.966 1.137z" fill="#ff6d00" fill-rule="nonzero"/></g></svg> : ''}
                                        {list.fileIcon === 'zip'? <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><g fill="none" fill-rule="evenodd"><g fill-rule="nonzero"><path d="M4 23V1h10.84L20 6.473V23z" fill="#fff"/><path d="M14.62 1.611l4.809 5.142v15.636H4.57V1.61zM14.858 1H4v22h16V6.5z" fill="#ffa000"/><path d="M14 7V1h.195L20 6.805V7z" fill="#ffca28" fill-opacity=".38"/><path d="M14.6 1.848L19.152 6.4H14.6zm0-.848H14v6h6v-.6z" fill="#ffa000"/></g><g fill="#ffa000"><path d="M8 11v.889h1.836v.052L8 14.381V15h3v-.889H9.164v-.052L11 11.619V11zM12 11v4h1v-4zM14 11v4h.855l.002-1.333h.807c.793 0 1.336-.555 1.336-1.344 0-.8-.52-1.323-1.288-1.323z"/></g><path d="M15 12h.525c.29 0 .475.173.475.501 0 .327-.187.499-.479.499H15z" fill="#f9f9f9"/><g fill="#ffa000"><path d="M6.5 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 8a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 14a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 17a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1zM6.5 20a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1z"/></g></g></svg> : ''}                                 
                                    </figure>
                                )}
                                <div itemProp="name">
                                    <h3 dangerouslySetInnerHTML={{ __html: list.title }} />
                                    {list.description && <p itemProp="description" dangerouslySetInnerHTML={{ __html: list.description }} />}
                                </div>
                                {list.badge && (<span className="c-badge">{list.badge}</span>)}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
    </Ublock>

    )
}

export default ListingBase
