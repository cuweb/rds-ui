import React from 'react'
import Table from './Table'
import data from './TableData.json'
import getVariation from '../../functions/getVariation'
import { Story } from '@storybook/react'

const { title, variations } = data

export default {
    component: Table,
    title: `Components/${title}`,
}

const TemplateTable: Story = (args: any) => (
    <main>
        <Table {...args} />
    </main>
)

export const Tables = TemplateTable.bind({})
const tables = getVariation('base', variations)
Tables.args = {
    columns: tables.columns,
    rows: tables.rows,
}
