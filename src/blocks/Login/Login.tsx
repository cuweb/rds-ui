import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'

interface LoginProps {
    title: string
    handleSubmit : React.FormEventHandler<HTMLFormElement>
}

const Login: React.FC<LoginProps> = ({ title, handleSubmit }): JSX.Element => {
    return (
        <Ublock color='grey'>
            <div className='b-login'>
                <h2>{title}</h2>
                <form
                    className='c-form'
                    name='loginform'
                    accept-charset='UTF-8'
                    onSubmit={handleSubmit}
                >
                    <label htmlFor='user_login'>Username</label>
                    <input
                        type='text'
                        id='user_login'
                        name='log'
                        className='login__field'
                        value=''
                        aria-required='true'
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
                        value=''
                        className='form-control form-control input-block'
                        aria-required='true'
                    />
                    <input type='submit' value='Login' />
                </form>
            </div>
        </Ublock>
    )
}

export default Login
