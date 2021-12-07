import React from 'react'
import Logo from '../../../components/Logo/Logo'

const FooterBrand: React.FC = (): JSX.Element => {
    return (
        <div className='u-block u-block--black u-block--waves u-block--border-top'>
            <div className='b-footerbrand'>
                <a href='https://carleton.ca'>
                    <Logo />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href='https://carleton.ca/privacy/policies/'>Privacy</a>
                        </li>
                        <li>
                            <a href='https://carleton.ca/accessibility/'>Accessibility</a>
                        </li>
                        <li>
                            <a href='https://library.carleton.ca/content/copyright-carleton'>
                                ©&nbsp;Copyright
                            </a>
                        </li>
                        <li>
                            <a className='u-v' href='https://ravendesignsystem.github.io/rds/'>
                                RDSv
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
export default FooterBrand
