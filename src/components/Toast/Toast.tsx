import React, { useState, useEffect } from 'react'
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
    autoCloseTimeInterval?: number
    handleClose?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const Toast: React.FC<ToastProps> = ({
    position = 'default',
    alertType = 'error',
    title,
    content,
    autoCloseTimeInterval = 0,
    handleClose,
}): JSX.Element => {
    const [fadeProp, setFadeProp] = useState('')
    const [closeProp, setCloseProp] = useState('')
    useEffect(() => {
        const timeout = setInterval(() => {
            if (autoCloseTimeInterval > 0) {
                setFadeProp('fade-out')
            }
        }, autoCloseTimeInterval)
        return () => clearInterval(timeout)
    }, [autoCloseTimeInterval, fadeProp])
    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp === 'fade-out') {
                setCloseProp('close')
            }
        }, 1000)
        return () => clearInterval(timeout)
    }, [autoCloseTimeInterval, closeProp, fadeProp])
    return (
        <div
            className={`notification-container ${position} ${fadeProp} ${closeProp}`}
        >
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
