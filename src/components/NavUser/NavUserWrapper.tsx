import React, { FC } from 'react'

export interface NavUserWrapper {
    className?: string
    href?: string
}

const NavUserWrapper: FC<NavUserWrapper> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`c-navuser ${className}`}>{children}</div>
}
export default NavUserWrapper
