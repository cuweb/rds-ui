import Icon from './Icon'
import icons from '@src/lib/icons'

export default {
    component: Icon,
    title: 'Components/Icon',
}

const Template = (args) => <Icon {...args} size={42} />

export const Accessibility = Template.bind({})
Accessibility.args = { icon: 'accessibility' }

export const Alert = Template.bind({})
Alert.args = { icon: 'alert' }

export const Apple = Template.bind({})
Apple.args = { icon: 'apple' }

export const Archive = Template.bind({})
Archive.args = { icon: 'archive' }

export const ArrowDown = Template.bind({})
ArrowDown.args = { icon: 'arrow-down' }

export const ArrowLeft = Template.bind({})
ArrowLeft.args = { icon: 'arrow-left' }

export const ArrowRight = Template.bind({})
ArrowRight.args = { icon: 'arrow-right' }

export const ArrowUp = Template.bind({})
ArrowUp.args = { icon: 'arrow-up' }

export const Facebook = Template.bind({})
Facebook.args = { icon: 'facebook' }

export const Github = Template.bind({})
Github.args = { icon: 'github' }

export const Info = Template.bind({})
Info.args = { icon: 'info' }

export const Instagram = Template.bind({})
Instagram.args = { icon: 'instagram' }

export const Linkedin = Template.bind({})
Linkedin.args = { icon: 'linkedin' }

export const Pinterest = Template.bind({})
Pinterest.args = { icon: 'pinterest' }

export const Plus = Template.bind({})
Plus.args = { icon: 'plus' }

export const Twitter = Template.bind({})
Twitter.args = { icon: 'twitter' }

export const Warning = Template.bind({})
Warning.args = { icon: 'warning' }

export const X = Template.bind({})
X.args = { icon: 'x' }

export const Youtube = Template.bind({})
Youtube.args = { icon: 'youtube' }
