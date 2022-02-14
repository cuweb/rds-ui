import React, { FC } from 'react'
import MastheadSubMenu from '@src/blocks/Masthead/components/MastheadSubMenu'

export interface MastheadCTAButtonProps {
    type?: 'white' | 'red' | undefined
    text: string
    link: string
    subMenu?: {
        text: string
        link: string
    }[]
}

const MastheadCTAButton: FC<MastheadCTAButtonProps> = ({
    type = 'white',
    text,
    link,
    subMenu,
}): JSX.Element => {
    if (!subMenu) {
        return (
            <li className={`masthead__cta masthead__cta--${type}`}>
                <a className='u-icon' href={link}>
                    {text}
                </a>
            </li>
        )
    }

    return <MastheadSubMenu text={text} subMenu={subMenu} direction='right' />
}
export default MastheadCTAButton
