import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import { FieldType } from './components/FormField'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

const content = {
    description: 'This example has the description above the input field',
    placeholder: 'This field has a placeholder',
}

const fields: FieldType[] = [
    {
        heading: {
            label: 'Text',
            description: content.description,
        },
        attributes: {
            type: 'text',
            name: 'text',
            placeholder: content.placeholder,
        },
    },
    {
        heading: {
            label: 'Password',
            description: content.description,
        },
        attributes: {
            type: 'password',
            name: 'password',
        },
    },
    {
        attributes: {
            type: 'number',
            name: 'number',
        },
        heading: {
            label: 'Number',
            description: content.description,
        },
        placeholder: content.placeholder,
    },
    {
        attributes: {
            type: 'select',
            as: 'select',
            name: 'select',
        },
        options: [
            {
                text: 'Red',
                value: 'red',
            },
            {
                text: 'Blue',
                value: 'blue',
            },
        ],
        heading: {
            label: 'Select Options',
            description: content.description,
        },
    },
    {
        attributes: {
            type: 'textarea',
            as: 'textarea',
            name: 'textarea',
            placeholder: content.placeholder,
            rows: 5,
        },
        heading: {
            label: 'Textarea',
            description: content.description,
        },
    },
    {
        attributes: {
            type: 'submit',
            name: 'Submit',
        },
    },
]

export const KitchenSink = () => (
    <Form
        title='Kitchen Skink Form'
        description='All the fields in one'
        fields={fields}
    />
)
