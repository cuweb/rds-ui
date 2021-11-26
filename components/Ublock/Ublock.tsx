import React from 'react'

interface UblockProps {
    children: React.ReactNode;
    heading?: string;
    color?: string;
    full?: string;
};

const Ublock: React.FC<UblockProps> = ({
    heading, 
    children, 
    color, 
    full,
}): JSX.Element => {
    
    const backgroundColor = color && color || 'white'
    const width = full ? `u-block--full` : ''

    return (
        <div className={`u-block u-block--${backgroundColor} ${width}`}>
            {heading && (
                <h2
                    className="c-heading"
                    dangerouslySetInnerHTML={{ __html: heading }}
                />
            )}
            {children}
        </div>
    )
}
export default Ublock
