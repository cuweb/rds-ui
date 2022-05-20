import React, { FC } from 'react'

export interface CardDescriptionProps {
    itemProp?: string
}

const CardDescription: FC<CardDescriptionProps> = ({
    itemProp = 'description',
    children,
}): JSX.Element => {
    return <p itemProp={itemProp}>{children}</p>
}
export default CardDescription
