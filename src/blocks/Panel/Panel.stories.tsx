import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@src/functions/getVariation'
import Panel from './Panel'
import data from './PanelData.json'

const { title, variations } = data

export default {
    component: Panel,
    title: `Blocks/${title}`,
} as Meta

const Template: Story = (args: any) => <Panel {...args} />

// Base Panel
export const Base= Template.bind({})
const basePanel = getVariation('basePanel', variations)
Base.args = {
    type: basePanel.panelType,
    title: basePanel.title,
    content: basePanel.content,
}

// Base Panel with Note
export const WithNote= Template.bind({})
const basePanelWithNote = getVariation('basePanelWithNote', variations)
WithNote.args = {
    type: basePanelWithNote.panelType,
    title: basePanelWithNote.title,
    contentLink: basePanelWithNote.contentLink,
}

// //  Base Heading vs Title Panel
export const HeadingAndTitle= Template.bind({})
const headingAndTitle = getVariation('basePanelWithNote', variations)
HeadingAndTitle.args = {
    type: headingAndTitle.panelType,
    heading: headingAndTitle.heading,
    content: headingAndTitle.content,
    button: headingAndTitle.button,
}

// //  Panel with Image
export const WithImage= Template.bind({})
const panelWithImage = getVariation('panelWithImage', variations)
WithImage.args = {
    type: panelWithImage.panelType,
    title: panelWithImage.title,
    content: panelWithImage.content,
    image: panelWithImage.image,
}

// //  Panel with CTA Button
export const WithCTAButton= Template.bind({})
const panelWithCTAButton = getVariation('panelWithCTAButton', variations)
WithCTAButton.args = {
    type: panelWithCTAButton.panelType,
    title: panelWithCTAButton.title,
    content: panelWithCTAButton.content,
    image: panelWithCTAButton.image,
    button: panelWithCTAButton.button,
}

// //  Entire Panel Into CTA
export const IntoCTA= Template.bind({})
const entirePanelIntoCTA = getVariation('entirePanelIntoCTA', variations)
IntoCTA.args = {
    type: entirePanelIntoCTA.panelType,
    title: entirePanelIntoCTA.title,
    content: entirePanelIntoCTA.content,
    image: entirePanelIntoCTA.image,
    fakeButton: entirePanelIntoCTA.fakeButton,
}

// //  Panel with Icons
// export const panelWithIcons = Template.bind({})
export const WithIcons= Template.bind({})
const panelWithIcons = getVariation('panelWithIcons', variations)
WithIcons.args = {
    type: panelWithIcons.panelType,
    titleIcon: panelWithIcons.titleIcon,
    content: panelWithIcons.content,
    heading: panelWithIcons.heading,
    buttonIcon: panelWithIcons.buttonIcon,
}
