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
interface ButtonProps {
    url: string
    text: string
}
interface ButtonIconProps {
    content: string
}
interface ContentLinkProps {
    content: string
}
export interface TypeProps {
    [index: string]: ReactElement
}

const Panel: React.FC<PanelProps> = (props): JSX.Element => {
    const { type } = props

    const panelTypes: TypeProps = {
        base: <BasePanel {...props} />,
        CTAPanel: <CTAPanel {...props} />,
        icon: <IconPanel {...props} />,
    }
    return panelTypes[type || 'base']
}

export default Panel
