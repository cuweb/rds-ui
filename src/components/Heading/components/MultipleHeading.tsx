import React from 'react'

export interface MultipleHeadingProps {
    header: string
    subheader?: string
    description?: string
    center?: boolean
}

const MultipleHeading: React.FC<MultipleHeadingProps> = ({
    header,
    subheader,
    description,
    center,
}): JSX.Element => {
    const isCenter = center ? 'c-heading--center' : ''
    return (
        <header>
            <h2
                className={`c-heading ${isCenter}`}
                dangerouslySetInnerHTML={{ __html: header }}
            />
            {description && (
                <p dangerouslySetInnerHTML={{ __html: description }} />
            )}
            {subheader && (
                <h3 dangerouslySetInnerHTML={{ __html: subheader }} />
            )}
        </header>
    )
}
export default MultipleHeading
