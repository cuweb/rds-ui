import React from 'react'
import Alert from '@components/Alert/Alert'

export interface ToastProps {
    position?:
        | 'default'
        | 'top-right'
        | 'top-left'
        | 'bottom-right'
        | 'bottom-left'
    alertType?: 'info' | 'error' | 'success' | 'warning'
    title: string
    content?: string
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Toast: React.FC<ToastProps> = ({
    position = 'default',
    alertType = 'error',
    title,
    content,
    handleClose,
}): JSX.Element => {
    return (
        <div className={`notification-container ${position}`}>
            <Alert
                type={alertType}
                title={title}
                content={content}
                handleClose={handleClose}
            />
        </div>
    )
}
export default Toast
