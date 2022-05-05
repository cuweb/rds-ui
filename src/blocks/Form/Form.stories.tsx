import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import { FieldType } from './components/FormField'
import data from './FormData.json'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

export const KitchenSink = () => {
    const fields: FieldType[] = data
    return (
        <Form
            fields={fields}
            block={{
                heading: {
                    title: 'Kitchen Sink Form',
                    content: 'All the form inputs<br /><br />',
                },
            }}
            onSubmit={(values) => alert(JSON.stringify(values))}
        />
    )
}
export const InitialValues = () => {
    const fields: FieldType[] = [
        {
            heading: {
                label: 'Text Field',
                description:
                    'This example has the description above the input field',
            },
            attributes: {
                type: 'text',
                name: 'inputText',
                placeholder: 'This field has a placeholder',
                defaultValue: 'default value',
            },
        },
        {
            heading: {
                label: 'Checkboxes',
                description:
                    'This example has the description above the input field',
            },
            attributes: {
                type: 'checkbox',
                name: 'fieldCheckbox',
                defaultValue: ['red'],
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
        },
        {
            attributes: {
                type: 'submit',
                name: 'submit',
                value: 'Submit form',
            },
        },
    ]

    return (
        <Form
            fields={fields}
            block={{
                heading: {
                    title: 'Initial Values',
                    content: 'Populated by default',
                },
            }}
            onSubmit={(values) => alert(JSON.stringify(values))}
        />
    )
}
