import Ublock from '@components/Ublock/Ublock'
import React, { FC } from 'react'
import { Formik, Form as FormFormik, FormikValues } from 'formik'
import FormField, { FieldType } from './components/FormField'

export interface FormProps {
    title?: string
    description?: string
    centered?: boolean
    fields: FieldType[]
    initialValues?: FormikValues
}

const Form: FC<FormProps> = ({
    title,
    description,
    centered,
    initialValues = {},
    fields,
}): JSX.Element => {
    const titleClassName = centered ? 'c-heading--center' : ''
    return (
        <Ublock>
            {title && (
                <header>
                    <h2 className={`c-heading ${titleClassName}`}>{title}</h2>
                    {description && <p>{description}</p>}
                </header>
            )}
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
