// import React from 'react'
// import { Meta, Story } from '@storybook/react'
// import getVariation from '@src/functions/getVariation'
// import Panel from './Panel'
// import data from './PanelData.json'

// const { variations } = data

// export default {
//     title: `Blocks/Panel`,
//     component: Panel,
// } as Meta

// const Template: Story = (args: any) => <Panel {...args} />

//  Base Sidebar
// const base = getVariation('baseSidebar', variations)
// export const baseSidebar = Template.bind({})
// baseSidebar.args = { ...baseSidebar }

//  Sidebar with Image
// export const WithImage = Template.bind({})
// WithImage.args = {}

//  Sidebar with CTA Button


import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@src/functions/getVariation'
import Banner from './Panel'
import data from './PanelData.json'
import ButtonCTA from '@src/components/ButtonCTA/ButtonCTA'

const { variations } = data

export default {
    component: Banner,
    title: `Blocks/Banner`,
} as Meta

const Template: Story = (args: any) => <Banner {...args} />

//  Base Banner
const base = getVariation('base', variations)
export const Base = Template.bind({})
Base.args = { ...base }

//  Banner with Breadcrumbs
const breadcrumbs = getVariation('breadcrumbs', variations)
export const WithBreadCrumbs = Template.bind({})
WithBreadCrumbs.args = { ...breadcrumbs }

//  Banner with Buttons
export const WithCTAButton = Template.bind({})
WithCTAButton.args = {
    ...breadcrumbs,
    children: (
        <ButtonCTA
            link='http://www.nooooooooooooooo.com/'
            target='blank'
            text='Join the Lightside'
        />
    ),
}

//  Banner with Multiple Buttons
export const WithMultipleButtons = Template.bind({})
WithMultipleButtons.args = {
    ...breadcrumbs,
    children: (
        <p>
            <ButtonCTA
                link='https://www.youtube.com/watch?v=lrYPm6DD44M'
                text='Learn about Ravens'
            />

            <ButtonCTA
                link='http://www.nooooooooooooooo.com/'
                target='blank'
                text='Join the Lightside'
            />
        </p>
    ),
}

//  Hero Image Banner
const heroimage = getVariation('heroimage', variations)
export const HeroImage = Template.bind({})
HeroImage.args = { ...heroimage }

//  Hero Image Dark
const heroimageDark = getVariation('heroimageDark', variations)
export const HeroImageDark = Template.bind({})
HeroImageDark.args = { ...heroimageDark }

//  Hero Image Light
const heroimageLight = getVariation('heroimageLight', variations)
export const HeroImageLight = Template.bind({})
HeroImageLight.args = { ...heroimageLight }

//  Hero Image Top
const heroimageTop = getVariation('heroimageTop', variations)
export const HeroImageTop = Template.bind({})
HeroImageTop.args = { ...heroimageTop }

//  Hero Image Bottom
const heroimageBottom = getVariation('heroimageBottom', variations)
export const HeroImageBottom = Template.bind({})
HeroImageBottom.args = { ...heroimageBottom }
