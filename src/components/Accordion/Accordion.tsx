import React, { useState } from 'react'

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
    const [ariaState, setAriaState] = useState(true)
    const toggleHandler=()=>{
        setAriaState(!ariaState)
    }
    return (
        <>
            {accordionData.map((accordion, index) => 
                <div key={index} className="c-accordion">
                    <input className={`accordion__input ${accordionClass}`} id={`accordion-id-${index}${accordionId}`}  name={`accordion-${accordionType}`} type="checkbox" onClick={toggleHandler}/>
                    <label htmlFor={`accordion-id-${index}${accordionId}`} aria-controls={`accordion-aria-control-${index}${accordionId}`} aria-expanded={!ariaState} id={`accordion-labelledby-${index}${accordionId}`} role="heading" dangerouslySetInnerHTML={{ __html: accordion.title }} />
                    <div id={`accordion-aria-control-${index}${accordionId}`} className="accordion__content" role="region" aria-labelledby={`accordion-labelledby-${index}${accordionId}`} aria-hidden={ariaState} >
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
