import Ublock from '@src/components/Ublock/Ublock'
import React from 'react'

interface TimelineProps {
    title?: string
    description?: string
    stepFirst: string
    stepLast: string
    allSteps: {
        name: string
        description: string
    }[]
}

const Timeline: React.FC<TimelineProps> = ({
    title,
    description,
    stepFirst,
    stepLast,
    allSteps,
}): JSX.Element => {
    const steps = allSteps.map((step, index) => (
        <li itemProp='item' key={index}>
            <p
                itemProp='name'
                dangerouslySetInnerHTML={{ __html: step.name }}
            />
            <p
                itemProp='description'
                dangerouslySetInnerHTML={{ __html: step.description }}
            />
        </li>
    ))
    return (
        <Ublock>
            <section className='b-timeline'>
                {title && (
                    <h2
                        className='c-heading c-heading--center'
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                )}
                {description && (
                    <p
                        id='timeline_description'
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                )}
                <div className='timeline__container'>
                    <div className='timeline__bookend'>
                        <p>{stepFirst}</p>
                    </div>
                    <ul
                        className='timeline__list'
                        itemScope
                        itemType='http://schema.org/ItemList'
                    >
                        {steps}
                    </ul>
                    <div className='timeline__bookend'>
                        <p>{stepLast}</p>
                    </div>
                </div>
            </section>
        </Ublock>
    )
}

export default Timeline
