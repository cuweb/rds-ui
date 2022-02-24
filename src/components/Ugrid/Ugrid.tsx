import React from 'react'

export interface UgridProps {
    className?: string | undefined
    columns?: 1 | 2 | 3 | 4 | undefined
}

const Ugrid: React.FC<UgridProps> = ({
    className = '',
    columns = 3,
    children,
}): JSX.Element => {
    return (
        <div className={`${className} u-grid--s1 u-grid u-grid--${columns}`}>
            {children}
        </div>
    )
}

export default Ugrid
