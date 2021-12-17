import React, { useState } from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'

export interface AlertHeaderProps {
    title: string
    description?: string | undefined
}

const AlertHeader: React.FC<AlertHeaderProps> = ({
    title,
    description,
}): JSX.Element => {
    const [isClose, setIsClose] = useState(false)

    if (isClose) return <div />
    return (
        <Ublock alert>
            <div className='b-alertheader'>
                <div className='c-alert c-alert--error' role='alert'>
                    <Icon icon='alert' size={50} />
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    {description && (
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                    )}
                </div>
            </div>
            <button
                aria-label='Close alert'
                type='button'
                onClick={() => setIsClose(true)}
                data-close
            >
                <Icon icon='X' />
            </button>
        </Ublock>
    )
}

export default AlertHeader
