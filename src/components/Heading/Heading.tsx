import React, { ReactElement } from 'react'
import BaseHeading from './components/BaseHeading'
import MultipleHeading from './components/MultipleHeading'

export interface HeadingProps {
    type: 'base' | 'multiple'
    header: string
    subheader?: string
    description?: string
    center?: boolean
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Heading: React.FC<HeadingProps> = (props): JSX.Element => {
    const { type } = props

    const headingTypes: TypeProps = {
        base: <BaseHeading {...props} />,
        multiple: <MultipleHeading {...props} />,
    }
    return headingTypes[type || 'base']
}

export default Heading
