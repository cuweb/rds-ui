import React from 'react'

export interface OverlayProps {
    type?: 'search' | 'menu' | 'login' | string
    className?: string | undefined
    children: React.ReactNode
    isHidden?: boolean
    trasparentBackground?: boolean
    overlayNav?: boolean
}

const Overlay: React.FC<OverlayProps> = ({
    type,
    className,
    children,
    isHidden,
    trasparentBackground,
    overlayNav,
}): JSX.Element | null => {
    const typeClassName = type ? `modal__${type}` : ''
    const customClassName = className || ''
    const visuallyClass = isHidden ? 'u-visually-hidden' : ''
    const overlayNavClass = overlayNav ? 'l-overlay-nav' : ''
    const dailogBackground = trasparentBackground
        ? 'l-overlay-modal-transparent'
        : 'l-overlay-modal'

    if (isHidden) return null

    return (
        <dialog
            className={`${dailogBackground} ${overlayNavClass}`}
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
