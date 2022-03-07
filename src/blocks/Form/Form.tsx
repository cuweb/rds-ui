import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC } from 'react'
import { Formik, Form as FormFormik, FormikValues } from 'formik'
import FormField, { FieldType } from './components/FormField'

export interface FormProps {
    fields: FieldType[]
    initialValues?: FormikValues
    block?: UblockProps
    onSubmit: (value: FormikValues) => void
    validationSchema?: FormikValues
}

const Form: FC<FormProps> = ({
    initialValues,
    fields,
    block,
    onSubmit,
    validationSchema,
}): JSX.Element => {
    const initialFieldsValues = fields.reduce((acc, cur) => {
        const { id, name = '', type = '', defaultValue, value } = cur.attributes
        const denyList = ['select']
        if (denyList.includes(type)) return { ...acc }
        const fieldKey: string = name || id || ''
        return { ...acc, [fieldKey]: defaultValue || value || '' }
    }, {})

    return (
        <Ublock {...block}>
            <Formik
                initialValues={initialValues || initialFieldsValues}
                validationSchema={validationSchema}
                onSubmit={(values) => onSubmit(values)}
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
