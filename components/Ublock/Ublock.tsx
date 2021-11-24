import React from 'react';

interface UblockProps {
    heading: boolean,
    children: React.ReactNode,
    color: string,
    full: string,
};

const Ublock: React.FC<UblockProps> = (props: any): JSX.Element => {
    const { heading, children, color, full } = props
    const backgroundColor = color || 'white'
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
