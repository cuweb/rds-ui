import React, { useState } from 'react'

export interface AccordionProps {
    type?: 'base' | 'single' | undefined
    data: AccordionItemProps[]
}

export interface AccordionItemProps {
    id: string
    title: string
    content: string
}

const Accordion: React.FC<AccordionProps> = ({
    type = 'base',
    data,
}): JSX.Element => {
    const accordionClass = type === 'single' ? 'accordion__input--single' : ''
    const accordionType = type === 'single' ? 'radio' : 'checkbox'
    const accordionId = type === 'single' ? 's' : ''
    const [ariaState, setAriaState] = useState(
        new Array(data.length).fill(true)
    )
    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill(false)
    )
    const [divState, setDivState] = useState(new Array(data.length).fill(false))
    const toggleHandler = (
        position: number,
        accordionTypes: 'base' | 'single'
    ) => {
        if (accordionTypes === 'base') {
            const updatedBaseAriaState = ariaState.map((item, index) =>
                index === position ? !item : item
            )
            setAriaState(updatedBaseAriaState)
        } else {
            const updatedSingleAriaState = ariaState.map((item, index) => {
                if (index === position && ariaState[index] === true) {
                    return false
                }
                return item
            })
            setAriaState(updatedSingleAriaState)
        }
    }
    const handleOnChange = (
        position: number,
        accordionTypes: 'base' | 'single'
    ) => {
        if (accordionTypes === 'base') {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
            )
            setCheckedState(updatedCheckedState)
        } else {
            const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : false
            )
            setCheckedState(updatedCheckedState)
            const updatedDivState = divState.map((item, index) => {
                if (index === position && checkedState[index] === false) {
                    return item
                }
                return false
            })
            setDivState(updatedDivState)
        }
    }
    return (
        <>
            {data.map((accordion, index) => (
                <div key={index} className='c-accordion'>
                    <input
                        className={`accordion__input ${accordionClass}`}
                        id={`accordion-id-${index}${accordionId}`}
                        name={`accordion-${accordionType}`}
                        type='checkbox'
                        aria-expanded={!ariaState[index]}
                        onClick={() => toggleHandler(index, type)}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index, type)}
                    />
                    <label
                        htmlFor={`accordion-id-${index}${accordionId}`}
                        aria-controls={`accordion-aria-control-${index}${accordionId}`}
                        id={`accordion-labelledby-${index}${accordionId}`}
                        role='heading'
                        aria-level={1}
                        aria-hidden={ariaState[index]}
                        dangerouslySetInnerHTML={{ __html: accordion.title }}
                    />
                    <div
                        id={`accordion-aria-control-${index}${accordionId}`}
                        className='accordion__content'
                        role='region'
                        aria-labelledby={`accordion-labelledby-${index}${accordionId}`}
                        aria-hidden={ariaState[index]}
                    >
                        <div className='accordion__spacing'>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: accordion.content,
                                }}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Accordion
