import Ublock from '@components/Ublock/Ublock'
import React, { FC } from 'react'
import FormWrapper, { FormWrapperProps } from './components/FormWrapper'

const Form: FC<FormWrapperProps> = ({ children }): JSX.Element => {
    return (
        <Ublock>
            <FormWrapper>{children}</FormWrapper>
        </Ublock>
    )
}
export default Form
