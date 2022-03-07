import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC } from 'react'
import { Formik, Form as FormFormik, FormikValues } from 'formik'
import FormField, { FieldType } from './components/FormField'

export interface FormProps {
    fields: FieldType[]
    initialValues?: FormikValues
    block?: UblockProps
}

const Form: FC<FormProps> = ({
    initialValues = {},
    fields,
    block,
}): JSX.Element => {
    return (
        <Ublock {...block}>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions })
                    alert(JSON.stringify(values, null, 2))
                    actions.setSubmitting(false)
                }}
            >
                <FormFormik className='b-form'>
                    {fields.map((field, index: number) => (
                        <FormField key={index} {...field} />
                    ))}
                </FormFormik>
            </Formik>
        </Ublock>
    )
}
export default Form
