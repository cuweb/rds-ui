import Ublock from '@components/Ublock/Ublock'
import React, { FC } from 'react'

export interface FormWrapperProps {
    action?: string
    onSubmit?: () => void
    className?: string
}

const FormWrapper: FC<FormWrapperProps> = ({
    children,
    action = '',
    className = '',
    onSubmit,
}): JSX.Element => {
    return (
        <Ublock>
            <form
                className={`b-form ${className}`}
                action={action}
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </Ublock>
    )
}
export default FormWrapper
