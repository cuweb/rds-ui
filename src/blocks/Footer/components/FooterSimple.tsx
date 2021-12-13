import React from 'react'
import Ublock from '@src/components/Ublock/Ublock'

interface FooterSimpleProps {
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
    return (
        <Ublock color='black'>
            <div className='b-footersimple'>
                <div itemScope itemType='http://schema.org/Organization'>
                    <address className='h-card'>
                        <p className='p-adr'>
                            <a
                                className='p-name u-url'
                                href='https://carleton.ca'
                            >
                                {name}
                            </a>
                            <br />
                            <a
                                className='p-name u-url'
                                itemProp='name'
                                href='https://carleton.ca'
                            >
                                Carleton University
                            </a>
                            <br />
                            <span
                                className='p-extended-address'
                                itemProp='name'
                            >
                                <a href='https://carleton.ca/campus/map/'>
                                    {address}
                                </a>
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
                                    <a href={map}>View Map</a>
                                </span>
                            )}
                        </p>
                        <p>
                            {email && (
                                <>
                                    <span className='u-email' itemProp='email'>
                                        <a href={`mailto:${email}`}>{email}</a>
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
                                        <a href={`tel:${phone}`}>{phone}</a>
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
                                    <a href={contact}>Contact page</a>
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
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--instagram u-icon u-icon--circle'
                                    href='https://www.instagram.com/carleton_u'
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <path d='M22.29 5.343a.922.922 0 0 1-.922.92h-2.762a.921.921 0 0 1-.921-.92V2.579a.92.92 0 0 1 .92-.92h2.763c.51 0 .922.412.922.92v2.764zm-.184 15.735c0 .568-.458 1.028-1.024 1.028h-18.4c-.566 0-1.024-.46-1.024-1.028V9.764h2.315a8.27 8.27 0 0 0-.269 2.057c0 4.545 3.662 8.229 8.178 8.229 4.517 0 8.178-3.684 8.178-8.229 0-.71-.1-1.399-.268-2.057h2.314v11.314zM12.066 5.527a6.539 6.539 0 1 1 0 13.079 6.54 6.54 0 0 1 0-13.08zM21.186 0H2.763A2.763 2.763 0 0 0 0 2.763v18.421a2.763 2.763 0 0 0 2.763 2.764h18.422a2.763 2.763 0 0 0 2.763-2.764V2.764A2.762 2.762 0 0 0 21.185 0z' />
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        Follow us on Instagram
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--facebook u-icon u-icon--circle'
                                    href='https://www.facebook.com/carletonuniversity'
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <path d='M17.8 4.8h-2.4s-1.2.216-1.2 1.2v2.4h3.6l-1.2 4.8h-2.4V24H9.4V13.2H7V8.4h2.4V4.8S8.5 0 13.156 0H17.8v4.8z' />
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        Like us on Facebook
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--twitter u-icon u-icon--circle'
                                    href='https://twitter.com/@Carleton_U'
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <path d='M2.66 14.347a4.64 4.64 0 0 0 2.21-.093c-2.237-.49-3.917-2.646-3.917-5.24v-.066a4.586 4.586 0 0 0 2.209.662C1.852 8.657.992 7.017.992 5.165c0-.979.239-1.892.662-2.686C4.061 5.707 7.66 7.837 11.722 8.063a6.042 6.042 0 0 1-.12-1.218c0-2.95 2.184-5.345 4.883-5.345 1.402 0 2.672.648 3.559 1.693a9.23 9.23 0 0 0 3.109-1.296c-.37 1.244-1.138 2.289-2.144 2.95A9.06 9.06 0 0 0 23.814 4a10.308 10.308 0 0 1-2.447 2.779l.013.688c0 7.065-4.908 15.201-13.892 15.201-2.765 0-5.332-.886-7.488-2.394.37.04.767.066 1.164.066 2.289 0 4.393-.847 6.06-2.29-2.13-.039-3.943-1.587-4.565-3.703z' />
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        Follow us on Twitter
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--youtube u-icon u-icon--circle'
                                    href='https://www.youtube.com/user/carletonuvideos'
                                >
                                    <svg
                                        height='24'
                                        width='24'
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <g fill='none'>
                                            <path
                                                d='M23.498 6.64a3.016 3.016 0 0 0-2.121-2.135C19.505 4 12 4 12 4s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.64C0 8.524 0 12.454 0 12.454s0 3.93.502 5.815a3.016 3.016 0 0 0 2.121 2.135c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.121-2.135C24 16.385 24 12.454 24 12.454s0-3.93-.502-5.814'
                                                fill='#222'
                                            />
                                            <path
                                                d='M9.546 16.023l6.272-3.568-6.272-3.569z'
                                                fill='#fffffe'
                                            />
                                        </g>
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        Subscribe to our Youtube channel
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--linkedin u-icon u-icon--circle'
                                    href='https://www.linkedin.com/school/carleton-university'
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <path d='M5.407 23.512H.302V8.154h5.105v15.358zM8.23 8.154h5.105v2.176c.678-1.046 1.89-2.537 4.6-2.537 3.36 0 5.878 2.196 5.878 6.913v8.807H18.71v-8.218c0-2.064-.739-3.472-2.586-3.472-1.41 0-2.25.95-2.62 1.867-.134.328-.167.786-.167 1.245v8.577H8.232s.067-13.917 0-15.358zM2.888.75c1.746 0 2.82 1.147 2.854 2.653 0 1.474-1.108 2.655-2.887 2.655H2.82C1.108 6.058 0 4.878 0 3.403 0 1.897 1.141.75 2.888.75z' />
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        View us on Linkedin
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    className='c-buttonsocial c-buttonsocial--pinterest u-icon u-icon--circle'
                                    href='https://www.pinterest.ca/carletonu'
                                >
                                    <svg
                                        viewBox='0 0 24 24'
                                        xmlns='http://www.w3.org/2000/svg'
                                        aria-hidden='true'
                                    >
                                        <path d='M11.085.08C7.123.523 3.173 3.724 3.01 8.296c-.103 2.793.692 4.888 3.352 5.477 1.154-2.034-.372-2.482-.61-3.956-.976-6.03 6.968-10.145 11.126-5.933 2.877 2.916.983 11.885-3.657 10.954-4.445-.892 2.176-8.032-1.372-9.433C8.964 4.265 7.433 8.89 8.8 11.186c-.802 3.951-2.529 7.673-1.83 12.628 2.267-1.642 3.032-4.785 3.658-8.063 1.14.69 1.749 1.408 3.201 1.521 5.358.414 8.351-5.339 7.62-10.65C20.8 1.916 16.098-.48 11.086.08' />
                                    </svg>
                                    <span className='u-visually-hidden'>
                                        Check us out on Pinterest
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </Ublock>
    )
}
export default FooterSimple
