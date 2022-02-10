import React from 'react'
import { Meta, Story } from '@storybook/react'
import getVariation from '@src/functions/getVariation'
import Panel from './Panel'
import data from './PanelData.json'

const { variations } = data

export default {
    title: `Blocks/Panel`,
    component: Panel,
} as Meta

const Template: Story = (args: any) => <Panel {...args} />

//  Base Panel
const base = getVariation('basePanel', variations)
export const baseSidebar = Template.bind({})

//  Base Panel with Note
export const basePanelWithNote = Template.bind({})
basePanelWithNote.args = {}

//  Base Heading vs Title Panel
export const basebaseHeadingTitlePanel = Template.bind({})
basebaseHeadingTitlePanel.args = {}

//  Panel with Image
export const panelWithImage = Template.bind({})
panelWithImage.args = {}

//  Panel with CTA Button
export const panelWithCTAButton = Template.bind({})
panelWithCTAButton.args = {}

//  Entire Panel Into CTA
export const entirePanelIntoCTA = Template.bind({})
entirePanelIntoCTA.args = {}

//  Panel with Icons
export const panelWithIcons = Template.bind({})
panelWithIcons.args = {}

