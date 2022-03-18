import React from 'react'

export interface BaseHeadingProps {
    header: string
    center?: boolean
    noborder?: boolean
}

const BaseHeading: React.FC<BaseHeadingProps> = ({
    header,
    center,
    noborder,
}): JSX.Element => {
    const isCenter = center ? 'c-heading--center' : ''
    const noBorder = noborder ? 'u-no-border' : ''
    return (
        <h2
            className={`c-heading ${isCenter} ${noBorder}`}
            dangerouslySetInnerHTML={{ __html: header }}
        />
    )
}
export default BaseHeading
