import React from 'react'

interface UblockProps {
    id?: string
    children: React.ReactNode
    heading?: string
    color?: 'grey' | 'white' | 'black'
    full?: boolean
    waves?: boolean
}

const Ublock: React.FC<UblockProps> = ({
    id = undefined,
    heading,
    children,
    color = 'white',
    full = false,
    waves = false,
}): JSX.Element => {
    const width = full ? `u-block--full` : ''
    const wavesClassname = waves ? `u-block--waves u-block--border-top` : ''

    return (
        <div
            id={id}
            className={`u-block u-block--${color} ${wavesClassname} ${width}`}
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
