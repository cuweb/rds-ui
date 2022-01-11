import React from 'react'

export interface AccordionProps {
    type: 'base' | 'single'
    accordionData: AccordionItemProps[]
}

export interface AccordionItemProps {
    id: string
    title: string
    content: string
}

const Accordion: React.FC<AccordionProps> = ({
    type, 
    accordionData
}): JSX.Element => {
    const accordionClass = type === 'single' ? 'accordion__input--single' : ''
    const accordionType = type === 'single' ? 'radio' : 'checkbox'
    const accordionId = type === 'single' ? 's' : ''
    return (
        <>
            {accordionData.map((accordion) => 
                <div key={accordion.id} className="c-accordion">
                    <input className={`accordion__input ${accordionClass}`} id={`accordion-id-${accordion.id}${accordionId}`}  name={`accordion-${accordionType}`} type="checkbox" />
                    <label htmlFor={`accordion-id-${accordion.id}${accordionId}`} aria-controls={`accordion-aria-control-${accordion.id}${accordionId}`} aria-expanded="false" id={`accordion-labelledby-${accordion.id}${accordionId}`} role="heading" dangerouslySetInnerHTML={{ __html: accordion.title }} />
                    <div id={`accordion-aria-control-${accordion.id}${accordionId}`} className="accordion__content" role="region" aria-labelledby={`accordion-labelledby-${accordion.id}${accordionId}`} aria-hidden="true">
                        <div className="accordion__spacing">
                            <p dangerouslySetInnerHTML={{ __html: accordion.content }} />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Accordion
