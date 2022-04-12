import Heading from '@components/Heading/Heading'
import React from 'react'

export interface UblockProps {
    id?: string
    heading?: {
        title: string
        centered?: boolean
        content?: string
    }
    color?: 'grey' | 'white' | 'black'
    full?: boolean
    large?: boolean
    alert?: boolean
    waves?: boolean
}

const Ublock: React.FC<UblockProps> = ({
    id = undefined,
    heading,
    children,
    color,
    full = false,
    alert = false,
    large = false,
    waves = false,
}): JSX.Element => {
    const width = full ? `u-block--full` : ''
    const colorClassname = color ? `u-block--${color}` : ''
    const wavesClassname = waves ? `u-block--waves u-block--border-top` : ''
    const largeClassname = large ? `u-block--l` : ''
    const alertClassname = alert ? `u-block--alert` : ''

    return (
        <div
            id={id}
            className={`u-block ${colorClassname}  ${wavesClassname} ${width} ${largeClassname} ${alertClassname}`}
        >
            {heading && (
                <Heading
                    header={heading.title}
                    center={heading.centered}
                    subheader={heading.content}
                />
            )}

            {children}
        </div>
    )
}
export default Ublock
