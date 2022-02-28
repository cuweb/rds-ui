import React from 'react'
import BaseHeading, { BaseHeadingProps } from './components/BaseHeading'
import MultipleHeading, {
    MultipleHeadingProps,
} from './components/MultipleHeading'

export interface HeadingProps {
    subheader?: string
    description?: string
}

const Heading: React.FC<
    HeadingProps & BaseHeadingProps & MultipleHeadingProps
> = (props): JSX.Element => {
    const { description, subheader } = props
    const hasContent = description || subheader

    if (hasContent) return <MultipleHeading {...props} />
    return <BaseHeading {...props} />
}

export default Heading
