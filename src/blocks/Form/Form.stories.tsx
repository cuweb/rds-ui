import React from 'react'
import { Meta } from '@storybook/react'
import Form from './Form'
import { FieldType } from './components/FormField'

export default {
    component: Form,
    title: `Blocks/Form`,
} as Meta

export const KitchenSink = () => {
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
                id: 'input-text',
                type: 'text',
                name: 'text',
                placeholder: content.placeholder,
                maxLength: 10,
                minLength: 2,
            },
        },
        {
            heading: {
                label: 'Password',
                description: content.description,
            },
            attributes: {
                id: 'input-password',
                type: 'password',
                name: 'password',
                placeholder: '******',
            },
        },
        {
            heading: {
                label: 'Number',
                description: content.description,
            },
            attributes: {
                type: 'number',
                name: 'number',
                max: 10,
                min: 0,
                step: 2,
                placeholder: '123567890',
            },
        },
        {
            heading: {
                label: 'Email',
                description: content.description,
            },
            attributes: {
                type: 'email',
                name: 'email',
                placeholder: 'email@email.com',
            },
        },
        {
            heading: {
                label: 'Url',
                description: content.description,
            },
            attributes: {
                type: 'url',
                name: 'url',
                placeholder: 'http://',
            },
        },
        {
            heading: {
                label: 'Search',
                description: content.description,
            },
            attributes: {
                type: 'search',
                name: 'search',
                placeholder: 'Search',
            },
        },
        {
            heading: {
                label: 'Phone',
                description: content.description,
            },
            attributes: {
                type: 'tel',
                name: 'tel',
                placeholder: '9999999999',
            },
        },
        {
            heading: {
                label: 'Textarea',
                description: content.description,
            },
            attributes: {
                type: 'textarea',
                as: 'textarea',
                name: 'textarea',
                placeholder: content.placeholder,
                rows: 5,
            },
        },
        {
            heading: {
                label: 'Slider',
                description: content.description,
            },
            attributes: {
                type: 'range',
                name: 'range',
                min: 1000,
                max: 2000,
                step: 100,
            },
        },
        {
            heading: {
                label: 'Date/Time',
                description: content.description,
            },
            attributes: {
                type: 'datetime-local',
                name: 'datetime-local',
            },
        },
        {
            heading: {
                label: 'Date',
                description: content.description,
            },
            attributes: {
                type: 'date',
                name: 'date',
                min: '2022-06-01',
                max: '2022-08-31',
                step: '7',
            },
        },
        {
            heading: {
                label: 'Month',
                description: content.description,
            },
            attributes: {
                type: 'month',
                name: 'month',
            },
        },
        {
            heading: {
                label: 'Week',
                description: content.description,
            },
            attributes: {
                type: 'week',
                name: 'week',
            },
        },
        {
            heading: {
                label: 'Time',
                description: content.description,
            },
            attributes: {
                type: 'time',
                name: 'time',
            },
        },
        {
            heading: {
                label: 'Color',
                description: content.description,
            },
            attributes: {
                type: 'color',
                name: 'color',
            },
        },
        {
            heading: {
                label: 'Select Options',
                description: content.description,
            },
            attributes: {
                id: 'field-select',
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
        },
        {
            heading: {
                label: 'Radio',
                description: content.description,
            },
            attributes: {
                id: 'field-radio',
                type: 'radio',
                name: 'radio',
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
                name: 'Submit',
            },
        },
    ]

    return (
        <Form
            title='Kitchen Skink Form'
            description='All the fields in one'
            fields={fields}
        />
    )
}
