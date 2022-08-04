import React, { FC } from 'react'

export interface CardTitleProps {
    itemProp?: string
    children?: React.ReactNode
}

const CardTitle: FC<CardTitleProps> = ({
    itemProp = 'name',
    children,
}): JSX.Element => {
    return <h3 itemProp={itemProp}>{children}</h3>
}
export default CardTitle
