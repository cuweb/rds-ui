/* eslint-disable react/button-has-type */
import React, { ReactNode, useState, useEffect, useRef } from 'react'
import Ublock from '@components/Ublock/Ublock'
import Icon from '@components/Icon/Icon'
import {
    IDetectClick,
    handleDetectOutsideClick,
} from '../../utils/HandleDetectClick'

export interface PanelProps {
    title?: string | undefined
    titleWithHeading?: string | undefined
    children?: ReactNode
    submenu?: React.ReactNode
    icon?: string
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { title, children, titleWithHeading, icon, submenu } = props
    const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false)
    const [hasClickedOutsideTarget, setHasClickedOutsideTarget] =
        useState<boolean>(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const hasValidSubMenu = React.isValidElement(submenu)
    useEffect(() => {
        const args: IDetectClick = {
            ref: buttonRef,
            setDropdownIsActive,
            setHasClickedOutsideTarget,
        }
        handleDetectOutsideClick(args)
    }, [hasClickedOutsideTarget])
    return (
        <Ublock>
            <div className='b-sidebar'>
                {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                {titleWithHeading && (
                    <h2 className='sidebar__heading'>
                        {icon && <Icon icon={icon} />} {titleWithHeading}
                    </h2>
                )}
                <button
                    ref={buttonRef}
                    onClick={() => setDropdownIsActive(!dropdownIsActive)}
                >
                    <svg
                        aria-hidden='true'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M2.77 14.538A2.77 2.77 0 1 0 2.77 9a2.77 2.77 0 0 0 0 5.538zm9.23 0A2.77 2.77 0 1 0 12 9a2.77 2.77 0 0 0 0 5.538zm12-2.769a2.77 2.77 0 1 1-5.538 0 2.77 2.77 0 0 1 5.538 0z' />
                    </svg>
                    {hasValidSubMenu && dropdownIsActive && submenu}
                </button>
                {children}
            </div>
        </Ublock>
    )
}

export default Panel
