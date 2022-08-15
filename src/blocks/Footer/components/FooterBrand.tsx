import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import Logo from '@components/Logo/Logo'
import Link from '@components/Link/Link'
import FooterDarkModeSwitch from './FooterDarkModeSwitch'

export interface FooterBrandProps {
    wrapLink?: any
}

const FooterBrand: React.FC<FooterBrandProps> = ({ wrapLink }): JSX.Element => {
    return (
        <Ublock color='black' waves>
            <div className='b-footerbrand'>
                <Link wrapper={wrapLink} href='https://carleton.ca'>
                    <Logo />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link
                                wrapper={wrapLink}
                                href='https://carleton.ca/privacy/policies/'
                            >
                                Privacy
                            </Link>
                        </li>
                        <li>
                            <Link
                                wrapper={wrapLink}
                                href='https://carleton.ca/accessibility/'
                            >
                                Accessibility
                            </Link>
                        </li>
                        <li>
                            <Link
                                wrapper={wrapLink}
                                href='https://library.carleton.ca/content/copyright-carleton'
                            >
                                ©&nbsp;Copyright
                            </Link>
                        </li>
                        <li>
                            <Link
                                className='u-v'
                                href='https://ravendesignsystem.github.io/rds/'
                            >
                                RDSv
                            </Link>
                        </li>
                    </ul>
                </nav>
                <FooterDarkModeSwitch />
            </div>
        </Ublock>
    )
}
export default FooterBrand
