import React from 'react'
import Icon from '@src/components/Icon/Icon'

export interface AlertProps {
    type?: 'info' | 'error' | 'success' | 'warning'
    title: string
    content?: string
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Alert: React.FC<AlertProps> = ({
    type = 'error',
    title,
    content,
    handleClose,
}): JSX.Element => {
    const icon = {
        error: 'alert',
        info: 'info',
        success: 'verified',
        warning: 'warning',
    }

    return (
        <div className={`c-alert c-alert--${type}`} role={type}>
            <Icon
                icon={icon[type || 'error']}
                size={30}
                className={`c-alert__icon c-alert__icon--${type}`}
            />
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            {content && <p dangerouslySetInnerHTML={{ __html: content }} />}
            {handleClose && (
                <button
                    className={`c-alert__button c-alert__button--${type}`}
                    aria-label='Close alert'
                    type='button'
                    data-close
                >
                    <span
                        className='u-icon'
                        aria-hidden='true'
                        onClick={(e: never) => handleClose(e)}
                    >
                        <Icon icon='x' size={12} />
                    </span>
                </button>
            )}
        </div>
    )
}
export default Alert
