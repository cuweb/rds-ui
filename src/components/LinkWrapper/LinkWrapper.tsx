import React, { FC } from 'react'

export interface LinkProps {
    link?: string
}

const LinkWrapper: FC<LinkProps> = ({ link, children }): JSX.Element => {
    if (link)
        return (
            <a href={link} itemProp='url'>
                {children}
            </a>
        )
    return <div>{children}</div>
}
export default LinkWrapper
