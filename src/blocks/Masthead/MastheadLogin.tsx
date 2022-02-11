import React, { FC, useState, useRef } from 'react'
import useOnClickOutside from '@src/hooks/useOnClickOutside'
import Icon from '@src/components/Icon/Icon'
import Ublock from '@src/components/Ublock/Ublock'
import Overlay from '@src/layouts/Overlay/Overlay'
import { Login } from './MastHeadTypes'

const MastheadLogin: FC<Login> = (props): JSX.Element => {
    const { title } = props
    const [isOpen, setIsOpen] = useState(false)
    const modalContainer = useRef(null)
    useOnClickOutside(modalContainer, () => setIsOpen(false))

    if (!isOpen) {
        return (
            <li className='masthead__login'>
                <button
                    type='button'
                    className='u-icon'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Icon icon='lock' />
                    {title && <span className='u-hide-s'>{title}</span>}
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
                <Ublock color='grey'>
                    <div className='b-search'>
                        <p>Login</p>
                    </div>
                </Ublock>
            </Overlay>
        </div>
    )
}
export default MastheadLogin
