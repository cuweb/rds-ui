import React from 'react'

export interface BaseHeadingProps {
    header: string
    center?: boolean
}

const BaseHeading: React.FC<BaseHeadingProps> = ({
    header,
    center,
}): JSX.Element => (
    const isCenter = center ? 'c-heading--center' : ''
    return (
        <h2
            className={`c-heading' ${isCenter}`}
            dangerouslySetInnerHTML={{ __html: header }}
        />
    )

)
export default BaseHeading
