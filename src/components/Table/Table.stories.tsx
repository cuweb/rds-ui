import React from 'react'
import Table from './Table'
import data from './TableData.json'
import getVariation from '../../functions/getVariation'
import { Story } from '@storybook/react'
import Panel from '@blocks/Panel/Panel'
import PanelHeader from '@blocks/Panel/components/PanelHeader'
import PanelBody from '@blocks/Panel/components/PanelBody'

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

const TemplateTableInCenter: Story = (args: any) => (
    <main>
        <Panel>
            <PanelHeader>Table</PanelHeader>
            <PanelBody>
                <Table {...args} center />
            </PanelBody>
        </Panel>
    </main>
)

export const Tables = TemplateTable.bind({})
const tables = getVariation('base', variations)
Tables.args = {
    columns: tables.columns,
    rows: tables.rows,
}

export const TablesInCenter = TemplateTableInCenter.bind({})
const tablesincenter = getVariation('base', variations)
TablesInCenter.args = {
    columns: tablesincenter.columns,
    rows: tablesincenter.rows,
}
