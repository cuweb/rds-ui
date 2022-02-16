import Icon from '@components/Icon/Icon'
import React, { FC } from 'react'

interface MastheadMobileButtonProps {
    isOpen?: boolean
    setIsOpen: (isOpen: boolean) => void
}

const MastheadMobileButton: FC<MastheadMobileButtonProps> = ({
    isOpen,
    setIsOpen,
}): JSX.Element => {
    return (
        <ul className='masthead__actions'>
            {!isOpen ? (
                <li className='masthead__navicon'>
                    <button
                        className='c-navicon'
                        aria-label='Open Menu'
                        title='Open site-wide menu'
                        type='button'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className='c-navicon__box'>
                            <span className='c-navicon__inner' />
                        </span>
                    </button>
                </li>
            ) : (
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
            )}
        </ul>
    )
}
export default MastheadMobileButton
