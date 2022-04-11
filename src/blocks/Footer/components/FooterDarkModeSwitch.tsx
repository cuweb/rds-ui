import Icon from '@components/Icon/Icon'
import useDarkMode from '@hooks/useDarkMode'
import React, { FC } from 'react'

const FootterDarkModeSwitch: FC = (): JSX.Element => {
    const [enabled, setDarkMode] = useDarkMode()

    return (
        <button
            type='button'
            data-text='Dark Mode'
            className='btn-toggle btn-halo'
            // @ts-expect-error: TODO: Fix this not calling action
            onClick={() => setDarkMode(!enabled)}
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
