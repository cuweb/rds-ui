import React from 'react'

export interface AccordionProps {
    accordionData: AccordionItemProps[]
}

export interface AccordionItemProps {
    id: string,
    title: string
    content: string
}

const BaseAccordion: React.FC<AccordionProps> = ({ accordionData }): JSX.Element => {
    return (
        <div>
            {accordionData.map((accordion) => 
                <div key={accordion.id} className="c-accordion">
                    <input className="accordion__input" id="accordion-id-1"  name="accordion-checkbox" type="checkbox" />
                    <label htmlFor="accordion-id-1" aria-controls="accordion-aria-control-1" aria-expanded="false" id="accordion-labelledby-1" role="heading">{accordion.title}</label>
                    <div id="accordion-aria-control-1" className="accordion__content" role="region" aria-labelledby="accordion-labelledby-1" aria-hidden="true">
                        <div className="accordion__spacing">
                            <p>{accordion.content}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BaseAccordion