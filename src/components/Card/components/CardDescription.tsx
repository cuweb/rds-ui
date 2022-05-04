import React, { FC } from 'react'

export interface CardDescriptionProps {
    description: string
}

const CardDescription: FC<CardDescriptionProps> = ({
    description,
}): JSX.Element => {
    return (
        <p
            itemProp='description'
            dangerouslySetInnerHTML={{ __html: description }}
        />
    )
}
export default CardDescription
