import Icon from '@components/Icon/Icon'
import React, { FC } from 'react'

export interface FootterDarkModeSwitchProps {
    onClick?: (e: unknown) => void
}

const FootterDarkModeSwitch: FC<FootterDarkModeSwitchProps> = ({
    onClick,
}): JSX.Element => {
    return (
        <button
            type='button'
            data-text='Dark Mode'
            className='btn-toggle btn-halo'
            onClick={onClick}
        >
            <Icon icon='mark-ravens' className='mark-ravens' />
            <div>
                <Icon
                    icon='mark-ravens-no-shield-white'
                    className='mark-ravens-dark'
                />
            </div>
            <div className='star' />
            <div className='star' />
        </button>
    )
}

export default FootterDarkModeSwitch
