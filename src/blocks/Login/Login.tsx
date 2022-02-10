import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'

interface LoginProps {
    title?: string
    onSubmit?: React.FormEventHandler
}

const Login: React.FC<LoginProps> = ({ title, onSubmit }): JSX.Element => {
    const loginForm = (
        <div className='b-login'>
            {title && <h2 id="login_title">{title}</h2>}
            <form
                className='c-form'
                name='loginform'
                acceptCharset='UTF-8'
                onSubmit={onSubmit}
            >
                <label htmlFor='user_login'>Username</label>
                <input
                    type='text'
                    id='user_login'
                    name='log'
                    className='login__field'
                    aria-required='true'
                    autoComplete='off'
                />
                <label htmlFor='user_pass'>
                    Password
                    <a
                        className='login__link'
                        href='https://myone.carleton.ca/'
                    >
                        Forgot password?
                    </a>
                </label>
                <input
                    type='password'
                    name='pwd'
                    id='user_pass'
                    className='form-control form-control input-block'
                    aria-required='true'
                    autoComplete='off'
                />
                <input type='submit' id='login_submit' value='Login' />
            </form>
        </div>
    )
    return <Ublock color='grey'>{loginForm}</Ublock>
}

export default Login
