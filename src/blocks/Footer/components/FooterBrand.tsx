import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import Logo from '@components/Logo/Logo'

const FooterBrand: React.FC = (): JSX.Element => {
    return (
        <Ublock color='black' waves>
            <div className='b-footerbrand'>
                <a href='https://carleton.ca'>
                    <Logo />
                </a>
                <nav>
                    <ul>
                        <li>
                            <a href='https://carleton.ca/privacy/policies/'>
                                Privacy
                            </a>
                        </li>
                        <li>
                            <a href='https://carleton.ca/accessibility/'>
                                Accessibility
                            </a>
                        </li>
                        <li>
                            <a href='https://library.carleton.ca/content/copyright-carleton'>
                                ©&nbsp;Copyright
                            </a>
                        </li>
                        <li>
                            <a
                                className='u-v'
                                href='https://ravendesignsystem.github.io/rds/'
                            >
                                RDSv
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </Ublock>
    )
}
export default FooterBrand
