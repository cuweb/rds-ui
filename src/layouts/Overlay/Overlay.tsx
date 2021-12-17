import React from 'react'

export interface OverlayProps {
    type: string
    className?: string | undefined
    children: React.ReactNode
    isHidden?: boolean
}

const Overlay: React.FC<OverlayProps> = ({
    type,
    className,
    children,
    isHidden,
}): JSX.Element => {
    const typeClassName = type ? `modal__${type}` : ''
    const customClassName = className || ''
    const visuallyClass = isHidden ? 'u-visually-hidden' : ''

    if (isHidden) return <div />
    return (
        <dialog
            className='l-overlay-modal'
            aria-modal='true'
            aria-hidden={isHidden}
        >
            <div
                className={`${typeClassName} ${visuallyClass} ${customClassName}`}
            >
                {children}
            </div>
        </dialog>
    )
}
export default Overlay
