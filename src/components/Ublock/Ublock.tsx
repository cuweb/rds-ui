import React from 'react'

interface UblockProps {
    children: React.ReactNode
    heading?: string
    color: 'grey' | 'white' | 'black'
    full?: boolean
}

const Ublock: React.FC<UblockProps> = ({
    heading,
    children,
    color = 'white',
    full = false,
}): JSX.Element => {
    const width = full ? `u-block--full` : ''

    return (
        <div className={`u-block u-block--${color} ${width}`}>
            {heading && <h2 className='c-heading' dangerouslySetInnerHTML={{ __html: heading }} />}
            {children}
        </div>
    )
}
export default Ublock
