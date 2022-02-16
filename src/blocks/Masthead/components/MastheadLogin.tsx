import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@hooks/useOnClickOutside'
import useEscToClose from '@hooks/useEscKey'
import Icon from '@components/Icon/Icon'
import Overlay from '@layouts/Overlay/Overlay'
import Login, { LoginProps } from '@blocks/Login/Login'

const MastheadLogin: FC<LoginProps> = (props): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false)
    const modalContainer = useRef(null)
    useOnClickOutside(modalContainer, () => setIsOpen(false))
    useEscToClose(modalContainer, () => setIsOpen(false))

    if (!isOpen) {
        return (
            <li className='masthead__login'>
                <button
                    type='button'
                    className='u-icon'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon='lock' />
                    <span className='u-hide-s'>Login</span>
                </button>
            </li>
        )
    }

    return (
        <div ref={modalContainer}>
            <li className='masthead__close-modals'>
                <button
                    type='button'
                    aria-label='Close Modals'
                    className='masthead__closebtn u-icon u-icon--notext'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon='X' />
                </button>
            </li>
            <Overlay isHidden={!isOpen}>
                <Login {...props} />
            </Overlay>
        </div>
    )
}
export default MastheadLogin
