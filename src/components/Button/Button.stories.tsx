import Button from './Button'

export default {
    component: Button,
    title: 'Components/Button',
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    text: 'Join the darkside',
    link: 'http://www.nooooooooooooooo.com/',
    target: 'blank',
}

export const Ghost = Template.bind({})
Ghost.args = {
    text: 'Stay Puft',
    link: 'https://en.wikipedia.org/wiki/Stay_Puft_Marshmallow_Man',
    ghost: true,
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    text: 'Download our free ebook',
    link: '#',
    icon: 'arrowDown',
}

export const FullWidth = Template.bind({})
FullWidth.args = {
    text: 'Add to Calendar',
    link: '#',
    icon: 'plus',
    full: true,
}
