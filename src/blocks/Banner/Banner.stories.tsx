import React from 'react'
import getVariation from '@src/functions/getVariation'
import Banner from './Banner'
import data from './BannerData.json'
import ButtonCTA from '@src/components/ButtonCTA/ButtonCTA'

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

//  Banner with Buttons
export const WithCTAButton = Template.bind({})
WithCTAButton.args = {
    title: breadcrumbs.title,
    breadcrumbs: breadcrumbs.breadcrumbs,
    children: (
        <ButtonCTA
            link='http://www.nooooooooooooooo.com/'
            target='blank'
            text='Join the darkside'
        />
    ),
}

//  Banner with Multiple Buttons
export const WithMultipleButtons = Template.bind({})
WithMultipleButtons.args = {
    title: breadcrumbs.title,
    breadcrumbs: breadcrumbs.breadcrumbs,
    children: (
        <p>
            <ButtonCTA
                link='https://www.youtube.com/watch?v=lrYPm6DD44M'
                text='Learn about Ravens'
            />

            <ButtonCTA
                link='http://www.nooooooooooooooo.com/'
                target='blank'
                text='Join the darkside'
            />
        </p>
    ),
}

//  Hero Image Banner
const heroimage = getVariation('heroimage', variations)
export const HeroImageBanner = Template.bind({})
HeroImageBanner.args = {
    title: heroimage.title,
    imageUrl: heroimage.imageUrl,
    children: (
        <ButtonCTA
            link='https://www.youtube.com/watch?v=lrYPm6DD44M'
            text='Learn about Ravens'
        />
    ),
}
