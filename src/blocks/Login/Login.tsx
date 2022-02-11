import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'

interface LoginProps {
    title?: string
    forgetLink?: string
    onSubmit?: React.FormEventHandler
}

const Login: React.FC<LoginProps> = ({
    title,
    forgetLink,
    onSubmit,
}): JSX.Element => {
    const loginForm = (
        <div className='b-login'>
            {title && <h2 id='login_title'>{title}</h2>}
            <form
                className='b-form'
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
        </div>
    )
    return <Ublock color='grey'>{loginForm}</Ublock>
}

export default Login
