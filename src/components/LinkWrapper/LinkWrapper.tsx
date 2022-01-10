import React, { ReactElement } from 'react'

export interface LinkProps {
    link?: string
    children: ReactElement
}

const LinkWrapper: React.FC<LinkProps> = ({ link, children }) => {
    if (link)
        return (
            <a href={link} itemProp='url'>
                {children}
            </a>
        )
    return children
}
export default LinkWrapper
