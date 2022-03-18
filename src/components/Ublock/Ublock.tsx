import React from 'react'

export interface UblockProps {
    id?: string
    children: React.ReactNode
    heading?: string
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
    color = 'white',
    full = false,
    alert = false,
    large = false,
    waves = false,
}): JSX.Element => {
    const width = full ? `u-block--full` : ''
    const wavesClassname = waves ? `u-block--waves u-block--border-top` : ''
    const largeClassname = large ? `u-block--l` : ''
    const alertClassname = alert ? `u-block--alert` : ''

    return (
        <div
            id={id}
            className={`u-block u-block--${color} ${wavesClassname} ${width} ${largeClassname} ${alertClassname}`}
        >
            {heading && (
                <h2
                    className='c-heading'
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            )}
            {children}
        </div>
    )
}
export default Ublock
