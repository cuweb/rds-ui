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
