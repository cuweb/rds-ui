import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'
import ButtonSocial from '@components/ButtonSocial/ButtonSocial'
import Link from '@components/Link/Link'

export interface FooterSitemapProps {
    wrapLink?: any
}
export interface SocialButtonsProps {
    url: string
    text: string
    type: string
}

const FooterSitemap: React.FC<FooterSitemapProps> = ({
    wrapLink,
}): JSX.Element => {
    const socialButtons: SocialButtonsProps[] = [
        {
            type: 'facebook',
            url: 'https://www.facebook.com/carletonuniversity',
            text: 'Like us on Facebook',
        },
        {
            type: 'instagram',
            url: 'https://www.instagram.com/carleton_u',
            text: 'Follow us on Instagram',
        },
        {
            type: 'twitter',
            url: 'https://twitter.com/@Carleton_U',
            text: 'Follow us on Twitter',
        },
        {
            type: 'youtube',
            url: 'https://www.youtube.com/user/carletonuvideos',
            text: 'Subscribe to our Youtube channel',
        },
        {
            type: 'linkedin',
            url: 'https://www.linkedin.com/school/carleton-university',
            text: 'View us on Linkedin',
        },
        {
            type: 'pinterest',
            url: 'https://www.pinterest.ca/carletonu',
            text: 'Check us out on Pinterest',
        },
    ]
    return (
        <Ublock color='black' large>
            <div className='b-footersitemap'>
                <div className='footersitemap__links'>
                    <div className='footersitemap__columns'>
                        <div className='footersitemap__column'>
                            <h2>Admissions</h2>
                            <ul>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://admissions.carleton.ca/programs/'
                                    >
                                        Programs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://admissions.carleton.ca/'
                                    >
                                        Undergraduate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://graduate.carleton.ca/'
                                    >
                                        Graduate
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://admissions.carleton.ca/applicant-type/international-applicants/'
                                    >
                                        International
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/prospective/#anchor3'
                                    >
                                        Professional Development
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://admissions.carleton.ca/campustours/'
                                    >
                                        Campus Tours
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/awards/'
                                    >
                                        Financial Aid
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/cie/'
                                    >
                                        Initiatives In Education
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Students / Academics</h2>
                            <ul className='footersitemap__list--two'>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://students.carleton.ca/'
                                    >
                                        Undergrad Homepage
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://gradstudents.carleton.ca/'
                                    >
                                        Grad Homepage
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://calendar.carleton.ca/'
                                    >
                                        Calendars
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/cuol/'
                                    >
                                        Carleton Online
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/cc/'
                                    >
                                        CO-OP &amp; Career Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/culearn/'
                                    >
                                        cuLearn
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/academics/'
                                    >
                                        Departments &amp; Faculties
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/discoverycentre/'
                                    >
                                        Discovery Centre
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/ccs/all-services/email/carleton-student-email/'
                                    >
                                        Email
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://library.carleton.ca/'
                                    >
                                        Library
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://housing.carleton.ca/'
                                    >
                                        Housing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/provost/'
                                    >
                                        Provost`s Office
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/registrar/'
                                    >
                                        Registrar`s Office
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/registrar/registration/'
                                    >
                                        Registration
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/academics/schedules-dates/'
                                    >
                                        Schedules &amp; Dates
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/academics/support/'
                                    >
                                        Support Services
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Campus</h2>
                            <ul className='footersitemap__list'>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/campus/'
                                    >
                                        Campus Map
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/campus/directions/'
                                    >
                                        Directions
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://events.carleton.ca/'
                                    >
                                        Events
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/parking/'
                                    >
                                        Parking
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://carleton.ca/safety/'
                                    >
                                        Safety
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://dining.carleton.ca/'
                                    >
                                        Dining Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://cusaonline.ca/clubs/'
                                    >
                                        Clubs &amp; Societies
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Ravens for life</h2>
                            <ul className='footersitemap__list'>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://futurefunder.carleton.ca'
                                    >
                                        Giving to Carleton
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://athletics.carleton.ca/'
                                    >
                                        Athletics &amp; Recreation
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://goravens.ca/'
                                    >
                                        Go Ravens - Varsity
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        wrapper={wrapLink}
                                        href='https://goravens.ca/'
                                    >
                                        <Icon
                                            icon='mark-ravens-white'
                                            size={76}
                                        />
                                        <span className='u-visually-hidden'>
                                            Visit GoRavens.ca
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='footer__contact'>
                    <address>
                        <div>
                            1125 Colonel By Drive, Ottawa, ON, K1S 5B6, Canada
                        </div>
                        <span className='p-tel'>
                            Phone:{' '}
                            <Link wrapper={wrapLink} href='tel:+1-613-520-2600'>
                                1-613-520-2600
                            </Link>
                        </span>
                        <div>
                            <Link
                                wrapper={wrapLink}
                                href='https://carleton.ca/about/contact/'
                            >
                                Contact Info
                            </Link>
                        </div>
                        <ul>
                            {socialButtons.map((item, index) => (
                                <li key={index}>
                                    <ButtonSocial {...item} />
                                </li>
                            ))}
                        </ul>
                    </address>
                </div>
            </div>
        </Ublock>
    )
}
export default FooterSitemap
