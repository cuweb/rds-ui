import React from 'react'
import Icon from '@src/components/Icon/Icon'

export interface AlertProps {
    type?: 'info' | 'error' | 'success' | 'warning'
    title: string
    content?: string
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Alert: React.FC<AlertProps> = ({ type, title, content, handleClose }): JSX.Element => {
    const renderType = type || 'error'

    const icon = {
        error: 'alert',
        info: 'info',
        success: 'verified',
        warning: 'warning',
    }

    return (
        <div className={`c-alert c-alert--${renderType}`} role={renderType}>
            <Icon
                icon={icon[type || 'error']}
                size={30}
                className={`c-alert__icon c-alert__icon--${renderType}`}
            />
            <h2>{title || 'Please add a title'}</h2>
            {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
            {handleClose && (
                <button aria-label='Close alert' type='button' data-close>
                    <span
                        className='u-icon'
                        aria-hidden='true'
                        onClick={(e: never) => handleClose(e)}
                    >
                        <Icon
                            icon='x'
                            size={12}
                            className={`c-alert__button c-alert__button--${renderType}`}
                        />
                    </span>
                </button>
            )}
        </div>
    )
}
export default Alert
