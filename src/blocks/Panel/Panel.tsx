import React, { ReactElement } from 'react'
import BasePanel from './components/BasePanel'
import CTAPanel from './components/CTAPanel'
import IconPanel from './components/IconPanel'

export interface PanelProps {
    type: 'base' | 'CTAPanel' | 'icon'
    title?: string
    titleIcon?: string
    heading?: string
    image: HTMLImageElement
    content: string
    button?: ButtonProps
    fakeButton: string
    contentLink?: ContentLinkProps
    buttonIcon?: ButtonIconProps
}
export interface ButtonProps {
    url: string
    text: string
}
export interface ButtonIconProps {
    content: string
}
export interface ContentLinkProps {
    content: string
}
export interface TypeOfProps {
    [index: string]: ReactElement
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { type } = props

    const panelTypes: TypeOfProps = {
        base: <BasePanel {...props} />,
        CTAPanel: <CTAPanel {...props} />,
        icon: <IconPanel {...props} />,
    }
    return panelTypes[type || 'base']
}

export default Panel
