import ContentTable from './ContentTable'

export default {
    component: ContentTable,
    title: `Components/ContentTable`,
}

const Template: React.FC = (args: any) => <ContentTable {...args} />

export const TableComponent = Template.bind({})