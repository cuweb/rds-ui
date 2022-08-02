import React from 'react'
import Ublock from '@components/Ublock/Ublock'
import ButtonSocial from '@components/ButtonSocial/ButtonSocial'
import Link from '@components/Link/Link'

export interface FooterSimpleProps {
    name: string
    address: string
    email?: string
    map?: string
    contact?: string
    days?: string
    start?: string
    end?: string
    phone?: string
    fax?: string
}

export interface SocialButtonsProps {
    url: string
    text: string
    type: string
}

const FooterSimple: React.FC<FooterSimpleProps> = ({
    name,
    address,
    email,
    map,
    contact,
    days,
    start,
    end,
    phone,
    fax,
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
        <Ublock color='black'>
            <div className='b-footersimple'>
                <div itemScope itemType='http://schema.org/Organization'>
                    <address className='h-card'>
                        <p className='p-adr'>
                            <Link
                                className='p-name u-url'
                                href='https://carleton.ca'
                            >
                                {name}
                            </Link>
                            <br />
                            <Link
                                className='p-name u-url'
                                href='https://carleton.ca'
                            >
                                Carleton University
                            </Link>
                            <br />
                            <span
                                className='p-extended-address'
                                itemProp='name'
                            >
                                <Link href='https://carleton.ca/campus/map/'>
                                    {address}
                                </Link>
                            </span>
                            <br />
                            <span
                                className='p-street-address'
                                itemProp='streetAddress'
                            >
                                1125 Colonel By Drive
                            </span>
                            <br />
                            <span
                                className='p-locality'
                                itemProp='addressLocality'
                            >
                                Ottawa,
                            </span>
                            <span className='p-region' itemProp='addressRegion'>
                                ON,
                            </span>
                            <span
                                className='p-postal-code'
                                itemProp='postalCode'
                            >
                                K1S 5B6
                            </span>
                            <br />
                            <span className='p-country-name'>Canada</span>
                            <br />
                            {map && (
                                <span className='u-map'>
                                    <Link href={map}>View Map</Link>
                                </span>
                            )}
                        </p>
                        <p>
                            {email && (
                                <>
                                    <span className='u-email' itemProp='email'>
                                        <Link href={`mailto:${email}`}>
                                            {email}
                                        </Link>
                                    </span>
                                    <br />
                                </>
                            )}
                            {phone && (
                                <>
                                    <span
                                        className='p-tel'
                                        itemProp='telephone'
                                    >
                                        Phone:{' '}
                                        <Link href={`tel:${phone}`}>
                                            {phone}
                                        </Link>
                                    </span>
                                    <br />
                                </>
                            )}
                            {fax && (
                                <>
                                    <span
                                        className='p-tel-fax'
                                        itemProp='faxNumber'
                                    >
                                        Fax: {fax}
                                    </span>
                                    <br />
                                </>
                            )}
                            {contact && (
                                <span className='p-contact' itemProp='url'>
                                    <Link href={contact}>Contact page</Link>
                                </span>
                            )}
                            <br />
                        </p>
                        <p className='p-hours' itemProp='hoursAvailable'>
                            <strong>Hours</strong>
                            <br />
                            {days && <span>{days}</span>}
                            {start && (
                                <time dateTime={start}>, {start}</time>
                            )}{' '}
                            {end && (
                                <>
                                    - <time dateTime={end}>{end}</time>
                                </>
                            )}
                        </p>
                        <ul className='footersimple__social'>
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
export default FooterSimple
