import Ublock, { UblockProps } from '@components/Ublock/Ublock'
import React from 'react'

export interface LoginProps {
    title?: string
    forgetLink?: string
    registerLink?: string
    onSubmit?: React.FormEventHandler
    block?: UblockProps
}

const Login: React.FC<LoginProps> = ({
    title,
    forgetLink,
    registerLink,
    onSubmit,
    block = {
        color: 'grey',
    },
}): JSX.Element => {
    const loginForm = (
        <div className='b-login'>
            {title && <h2 id='login_title'>{title}</h2>}
            <form
                className='b-form b-form--login'
                name='loginform'
                acceptCharset='UTF-8'
                onSubmit={onSubmit}
            >
                <div className='form__field form__field--text'>
                    <label htmlFor='user_login'>Username</label>
                    <input
                        type='text'
                        id='user_login'
                        name='log'
                        className='login__field'
                        aria-required='true'
                        autoComplete='off'
                    />
                </div>
                <div className='form__field form__field--text'>
                    <label htmlFor='user_pass' className='user_pass'>
                        Password
                        {forgetLink && (
                            <a className='login__link' href={forgetLink}>
                                Forgot password?
                            </a>
                        )}
                    </label>
                    <input
                        type='password'
                        name='pwd'
                        id='user_pass'
                        className='form-control form-control input-block'
                        aria-required='true'
                        autoComplete='off'
                    />
                </div>
                <div className='form__field form__field--button'>
                    <input
                        type='submit'
                        id='login_submit'
                        className='form__submit'
                        value='Login'
                    />
                </div>
            </form>
            {registerLink && (
                <p className='login__account'>
                    Not registered?
                    <a className='u-link' href='/register/'>
                        Create an account
                    </a>
                </p>
            )}
        </div>
    )
    return <Ublock {...block}>{loginForm}</Ublock>
}

export default Login
