import data from './IconData.json'
import getVariation from '@src/functions/getVariation'
import Icon from './Icon'

export default {
    component: Icon,
    title: 'Components/Icon',
}

const Template = (args) => <Icon {...args} size={42} />

export const Alert = Template.bind({})
Alert.args = getVariation('alert', data.variations)

export const ArrowDown = Template.bind({})
ArrowDown.args = getVariation('arrow-down', data.variations)

export const Facebook = Template.bind({})
Facebook.args = getVariation('facebook', data.variations)

export const Github = Template.bind({})
Github.args = getVariation('github', data.variations)

export const Info = Template.bind({})
Info.args = getVariation('info', data.variations)

export const Instagram = Template.bind({})
Instagram.args = getVariation('instagram', data.variations)

export const Linkedin = Template.bind({})
Linkedin.args = getVariation('linkedin', data.variations)

export const Pinterest = Template.bind({})
Pinterest.args = getVariation('pinterest', data.variations)

export const Plus = Template.bind({})
Plus.args = getVariation('plus', data.variations)

export const Twitter = Template.bind({})
Twitter.args = getVariation('twitter', data.variations)

export const Warning = Template.bind({})
Warning.args = getVariation('warning', data.variations)

export const X = Template.bind({})
X.args = getVariation('x', data.variations)

export const Youtube = Template.bind({})
Youtube.args = getVariation('youtube', data.variations)
