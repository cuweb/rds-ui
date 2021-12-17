import React from 'react'
import { Meta, Story } from '@storybook/react'
import AlertHeader from './AlertHeader'
import { removeCookie } from '@src/functions/useCookies'

export default {
    component: AlertHeader,
    title: `Blocks/Alert Header`,
} as Meta

const Template: Story = (args: any) => {
    const removeCookies = () => {
        removeCookie('calerton-cookies-banner')
        return window.location.reload()
    }

    return (
        <>
            <AlertHeader {...args} />
            <br />
            <br />
            <br />
            <button onClick={() => removeCookies()} className='c-buttoncta'>
                clear cookies and show alert
            </button>
        </>
    )
}

export const Base = Template.bind({})
Base.args = {
    title: 'University closure, January 28, 2021!',
    description:
        'Due to inclement weather the university will be closed January 28, 2019. Please see the <a href="https://carleton.ca/ses/exam-schedule/">updated exam schedule</a>.',
}
