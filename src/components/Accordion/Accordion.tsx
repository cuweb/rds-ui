import React, { ReactElement } from 'react'
import BaseAccordion from './components/BaseAccordion'
import SingleVariantAccordion from './components/SingleVariantAccordion'

export interface AccordionProps {
    type: 'base' | 'single'
    accordionData: AccordionItemProps[]
}

export interface AccordionItemProps {
    id: string
    title: string
    content: string
}

export interface TypeProps {
    [index: string]: ReactElement
}

const Accordion: React.FC<AccordionProps> = (props): JSX.Element => {
    const { type } = props

    const AccordionTypes: TypeProps = {
        base: <BaseAccordion {...props} />,
        single: <SingleVariantAccordion {...props} />,
    }
    return AccordionTypes[type || 'base']
}

export default Accordion
