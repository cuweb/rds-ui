import React from 'react'

// TODO: FIX TYPE
const Overlay = (props: never) => {
    const { type, className, children, isHidden = true } = props
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
