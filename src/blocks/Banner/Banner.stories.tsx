import React from 'react'
import getVariation from '@src/functions/getVariation'
import Banner from './Banner'
import data from './BannerData.json'

const { title, variations } = data

export default {
    component: title,
    title: `Blocks/${title}`,
}

const Template: React.FC = (args: any) => <Banner {...args} />

//  Base Banner
export const Base = Template.bind({})
Base.args = {
    title: getVariation('base', variations).title,
}

//  Banner with Breadcrumbs
const breadcrumbs = getVariation('breadcrumbs', variations)
export const BaseWithBreadCrumbs = Template.bind({})
BaseWithBreadCrumbs.args = {
    title: breadcrumbs.title,
    breadcrumbs: breadcrumbs.breadcrumbs,
}
