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
    const headingCenteredClassname = heading?.centered
        ? `c-heading--center`
        : ''

    return (
        <div
            id={id}
            className={`u-block ${colorClassname}  ${wavesClassname} ${width} ${largeClassname} ${alertClassname}`}
        >
            {heading && (
                <header>
                    <h2
                        className={`c-heading ${headingCenteredClassname}`}
                        dangerouslySetInnerHTML={{ __html: heading.title }}
                    />
                    {heading.content && (
                        <p
                            dangerouslySetInnerHTML={{
                                __html: heading.content,
                            }}
                        />
                    )}
                </header>
            )}

            {children}
        </div>
    )
}
export default Ublock
