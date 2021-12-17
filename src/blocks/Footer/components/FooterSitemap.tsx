import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'
import Icon from '@src/components/Icon/Icon'
import ButtonSocial from '@src/components/ButtonSocial/ButtonSocial'

const FooterSitemap: React.FC = (): JSX.Element => {
    const socialButtons = [
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
                                    <a href='https://admissions.carleton.ca/programs/'>
                                        Programs
                                    </a>
                                </li>
                                <li>
                                    <a href='https://admissions.carleton.ca/'>
                                        Undergraduate
                                    </a>
                                </li>
                                <li>
                                    <a href='https://graduate.carleton.ca/'>
                                        Graduate
                                    </a>
                                </li>
                                <li>
                                    <a href='https://admissions.carleton.ca/applicant-type/international-applicants/'>
                                        International
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/prospective/#anchor3'>
                                        Professional Development
                                    </a>
                                </li>
                                <li>
                                    <a href='https://admissions.carleton.ca/campustours/'>
                                        Campus Tours
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/awards/'>
                                        Financial Aid
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/cie/'>
                                        Initiatives In Education
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Students / Academics</h2>
                            <ul className='footersitemap__list--two'>
                                <li>
                                    <a href='https://students.carleton.ca/'>
                                        Undergrad Homepage
                                    </a>
                                </li>
                                <li>
                                    <a href='https://gradstudents.carleton.ca/'>
                                        Grad Homepage
                                    </a>
                                </li>
                                <li>
                                    <a href='https://calendar.carleton.ca/'>
                                        Calendars
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/cuol/'>
                                        Carleton Online
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/cc/'>
                                        CO-OP &amp; Career Services
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/culearn/'>
                                        cuLearn
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/academics/'>
                                        Departments &amp; Faculties
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/discoverycentre/'>
                                        Discovery Centre
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/ccs/all-services/email/carleton-student-email/'>
                                        Email
                                    </a>
                                </li>
                                <li>
                                    <a href='https://library.carleton.ca/'>
                                        Library
                                    </a>
                                </li>
                                <li>
                                    <a href='https://housing.carleton.ca/'>
                                        Housing
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/provost/'>
                                        Provost`s Office
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/registrar/'>
                                        Registrar`s Office
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/registrar/registration/'>
                                        Registration
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/academics/schedules-dates/'>
                                        Schedules &amp; Dates
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/academics/support/'>
                                        Support Services
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Campus</h2>
                            <ul className='footersitemap__list'>
                                <li>
                                    <a href='https://carleton.ca/campus/'>
                                        Campus Map
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/campus/directions/'>
                                        Directions
                                    </a>
                                </li>
                                <li>
                                    <a href='https://events.carleton.ca/'>
                                        Events
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/parking/'>
                                        Parking
                                    </a>
                                </li>
                                <li>
                                    <a href='https://carleton.ca/safety/'>
                                        Safety
                                    </a>
                                </li>
                                <li>
                                    <a href='https://dining.carleton.ca/'>
                                        Dining Services
                                    </a>
                                </li>
                                <li>
                                    <a href='https://cusaonline.ca/clubs/'>
                                        Clubs &amp; Societies
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='footersitemap__column'>
                            <h2>Ravens for life</h2>
                            <ul className='footersitemap__list'>
                                <li>
                                    <a href='https://futurefunder.carleton.ca'>
                                        Giving to Carleton
                                    </a>
                                </li>
                                <li>
                                    <a href='https://athletics.carleton.ca/'>
                                        Athletics &amp; Recreation
                                    </a>
                                </li>
                                <li>
                                    <a href='https://goravens.ca/'>
                                        Go Ravens - Varsity
                                    </a>
                                </li>
                                <li>
                                    <a href='https://goravens.ca/'>
                                        <Icon
                                            icon='mark-ravens-white'
                                            size={76}
                                        />
                                        <span className='u-visually-hidden'>
                                            Visit GoRavens.ca
                                        </span>
                                    </a>
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
                            <a href='tel:+1-613-520-2600'>1-613-520-2600</a>
                        </span>
                        <div>
                            <a href='https://carleton.ca/about/contact/'>
                                Contact Info
                            </a>
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
