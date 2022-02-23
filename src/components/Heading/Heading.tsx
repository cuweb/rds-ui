import React, { ReactElement } from 'react'
import BaseHeading, { BaseHeadingProps } from './components/BaseHeading'
import MultipleHeading, {
    MultipleHeadingProps,
} from './components/MultipleHeading'

export interface HeadingProps {
    type: 'base' | 'multiple'
}
export interface TypeProps {
    [index: string]: ReactElement
}

const Heading: React.FC<
    HeadingProps & BaseHeadingProps & MultipleHeadingProps
> = (props): JSX.Element => {
    const { type } = props

    const headingTypes: TypeProps = {
        base: <BaseHeading {...props} />,
        multiple: <MultipleHeading {...props} />,
    }
    return headingTypes[type || 'base']
}

export default Heading
