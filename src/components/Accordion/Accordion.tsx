/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

export interface AccordionProps {
    type: 'base' | 'single'
    data: AccordionItemProps[]
}

export interface AccordionItemProps {
    id: string
    title: string
    content: string
}

const Accordion: React.FC<AccordionProps> = ({
    type, 
    data
}): JSX.Element => {
    const accordionClass = type === 'single' ? 'accordion__input--single' : ''
    const accordionType = type === 'single' ? 'radio' : 'checkbox'
    const accordionId = type === 'single' ? 's' : ''
    const [ariaState, setAriaState] = useState(true)
    const [checkedState, setCheckedState] = useState(
        new Array(data.length).fill(false)
    );
    const [divState, setDivState] = useState(
        [false, false, false, false]
    );
    const toggleHandler=()=>{
        setAriaState(!ariaState)
    }
    const handleOnChange = (position:number) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
          );
          setCheckedState(updatedCheckedState);

        const updatedDivState = divState.map((item, index) => {
            if (index === position  && checkedState[index] === false) {
              return true;
            } 
              return false;
          });
          setDivState(updatedDivState);
    }

    return (
        <>
            {data.map((accordion, index) => 
                <div key={index} className="c-accordion">
                    <input 
                        className={`accordion__input ${accordionClass}`} 
                        id={`accordion-id-${index}${accordionId}`}  
                        name={`accordion-${accordionType}`} 
                        type="checkbox" 
                        aria-expanded={!ariaState} 
                        onClick={toggleHandler} 
                        checked={checkedState[index]} 
                        onChange={() => handleOnChange(index)}
                    />
                    <label 
                        htmlFor={`accordion-id-${index}${accordionId}`} 
                        aria-controls={`accordion-aria-control-${index}${accordionId}`} 
                        id={`accordion-labelledby-${index}${accordionId}`} 
                        role="heading" 
                        aria-level={1} 
                        aria-hidden={ariaState} 
                        dangerouslySetInnerHTML={{ __html: accordion.title }} 
                    />
                    {type === 'base' ?                     
                        <div id={`accordion-aria-control-${index}${accordionId}`} 
                            className="accordion__content" 
                            role="region" 
                            aria-labelledby={`accordion-labelledby-${index}${accordionId}`} 
                            aria-hidden={ariaState} 
                        >
                            <div className="accordion__spacing">
                                <p dangerouslySetInnerHTML={{ __html: accordion.content }} />
                            </div>
                        </div> 
                            :                     
                        <div id={`accordion-aria-control-${index}${accordionId}`} 
                            className="accordion__content" 
                            role="region" 
                            aria-labelledby={`accordion-labelledby-${index}${accordionId}`} 
                            aria-hidden={ariaState} 
                            style={{maxHeight: divState[index] === true ? '200px':'0px', transition: '500ms'}}
                        >
                            <div className="accordion__spacing" >
                                <p dangerouslySetInnerHTML={{ __html: accordion.content }} />
                            </div>
                        </div>}
                </div>
            )}
        </>
    )
}

export default Accordion
