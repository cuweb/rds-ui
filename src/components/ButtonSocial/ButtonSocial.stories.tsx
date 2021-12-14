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

export const Twitter = Template.bind({})
Twitter.args = {
    type: 'twitter',
    link: 'https://twitter.com/@Carleton_U',
    text: 'Follow us on Twitter',
}

export const Youtube = Template.bind({})
Youtube.args = {
    type: 'twitter',
    link: 'https://www.youtube.com/user/carletonuvideos',
    text: 'Subscribe to our Youtube channel',
}

export const Linkedin = Template.bind({})
Linkedin.args = {
    type: 'linkedin',
    link: 'https://www.linkedin.com/school/carleton-university',
    text: 'View us on Linkedin',
}

export const Pinterest = Template.bind({})
Pinterest.args = {
    type: 'pinterest',
    link: 'https://www.pinterest.ca/carletonu',
    text: 'Check us out on Pinterest',
}
