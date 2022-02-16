import React, { FC } from 'react'
import MastheadSubMenu from '@blocks/Masthead/components/MastheadSubMenu'

export interface MastheadCTAButtonProps {
    type?: 'white' | 'red' | undefined
    title: string
    link: string
    subMenu?: {
        title: string
        link: string
    }[]
}

const MastheadCTAButton: FC<MastheadCTAButtonProps> = ({
    type = 'white',
    title,
    link,
    subMenu,
}): JSX.Element => {
    if (!subMenu) {
        return (
            <li className={`masthead__cta masthead__cta--${type}`}>
                <a className='u-icon' href={link}>
                    {title}
                </a>
            </li>
        )
    }

    return <MastheadSubMenu title={title} subMenu={subMenu} direction='right' />
}
export default MastheadCTAButton
