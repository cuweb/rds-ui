/* eslint-disable jsx-a11y/click-events-have-key-events */
import Icon from '@components/Icon/Icon'
import React from 'react'

interface IActionsComponent {
    // eslint-disable-next-line @typescript-eslint/ban-types
    handleInputClick?: Function
}

export const ActionsComponent: React.FC<IActionsComponent> = ({
    handleInputClick,
}): JSX.Element => {
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span onClick={() => handleInputClick}>
            <Icon icon='X' className='u-margin-left-10 ' />
        </span>
    )
}
