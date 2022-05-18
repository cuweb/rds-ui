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
    noBlock?: boolean
    wide?: boolean
    noPadding?: boolean
    className?: string
}

const Ublock: React.FC<UblockProps> = ({
    id = undefined,
    heading,
    children,
    color,
    full,
    alert,
    large,
    waves,
    noBlock,
    wide,
    noPadding = false,
    className,
}): JSX.Element => {
    const width = full ? `u-block--full` : ''
    const wideClassName = wide ? `u-block--wide` : ''
    const blockClassName = noBlock ? `` : `u-block`
    const colorClassname = color ? `u-block--${color}` : ''
    const wavesClassname = waves ? `u-block--waves u-block--border-top` : ''
    const largeClassname = large ? `u-block--l` : ''
    const alertClassname = alert ? `u-block--alert` : ''
    const noPaddingClassname = noPadding ? `u-block--nopadding` : ''

    return (
        <div
            id={id}
            className={`${blockClassName} ${className} ${colorClassname}  ${wavesClassname} ${width} ${largeClassname} ${alertClassname} ${wideClassName} ${noPaddingClassname}`}
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
