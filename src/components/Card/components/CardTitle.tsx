import React, { FC } from 'react'

export interface CardTitleProps {
    header: string
}

const CardTitle: FC<CardTitleProps> = ({ header }): JSX.Element => {
    return <h3 itemProp='name' dangerouslySetInnerHTML={{ __html: header }} />
}
export default CardTitle
