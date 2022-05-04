import React from 'react'

export interface UgridProps {
    className?: string | undefined
    columns?: 1 | 2 | 3 | 4
    gap?: 1 | 2 | 3 | 4
    isLayout?: boolean
}

const Ugrid: React.FC<UgridProps> = ({
    className = '',
    columns = 3,
    children,
    gap = 2,
    isLayout,
}): JSX.Element => {
    const layoutClassName = isLayout ? 'u-grid--layout' : ''
    const columnsClassName = isLayout ? '' : `u-grid--${columns}`

    return (
        <div
            className={`${className} u-grid--s1 u-grid u-grid--gap-${gap} ${columnsClassName} ${layoutClassName}`}
        >
            {children}
        </div>
    )
}

export default Ugrid
