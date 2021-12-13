import ButtonSocial from './ButtonSocial'

export default {
    component: ButtonSocial,
    title: 'Components/Button Social',
}

const Template = (args) => {
    return <ButtonSocial {...args} />
}

export const Facebook = Template.bind({})
Facebook.args = {
    type: 'facebook',
    link: 'https://www.facebook.com/carletonuniversity',
    text: 'Like us on Facebook',
}

export const Instagram = Template.bind({})
Instagram.args = {
    type: 'instagram',
    link: 'https://www.instagram.com/carleton_u',
    text: 'Follow us on Instagram',
}
