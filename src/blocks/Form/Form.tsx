import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React, { FC } from 'react'
import { Formik, Form as FormFormik, FormikValues } from 'formik'
import FormField, { FieldType } from './components/FormField'

export interface FormProps {
    fields: FieldType[]
    block?: UblockProps
    onSubmit: (value: FormikValues) => void
    validationSchema?: FormikValues
    enableReinitialize?: boolean
}

const Form: FC<FormProps> = ({
    fields,
    block,
    onSubmit,
    validationSchema,
    enableReinitialize = true,
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
                initialValues={initialFieldsValues}
                validationSchema={validationSchema}
                onSubmit={(values) => onSubmit(values)}
                enableReinitialize={enableReinitialize}
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
