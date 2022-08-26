import React from 'react'

export interface TableProps {
    columns: string[]
    rows: string[][]
    center?: boolean
    maxwidth?: boolean
}

const Table: React.FC<TableProps> = ({
    columns,
    rows,
    center = false,
    maxwidth = false,
}): JSX.Element => {
    const isCenter = center ? 'table--center' : ''
    const isMaxWidth = maxwidth ? 'table--maxwidth' : ''
    const isCellCenter = center ? 'table--cellCenter' : ''
    const isCellMaxWidth = maxwidth ? 'table--cell' : ''

    const tableColumn = columns.map((column, index) => (
        <th key={index} className={` ${isCellCenter} ${isCellMaxWidth}`}>
            {column}
        </th>
    ))
    const tableRow = rows.map((row, index) => (
        <tr key={index}>
            {row.map((eachRow, indexRow) => (
                <td
                    key={indexRow}
                    className={` ${isCellCenter} ${isCellMaxWidth} `}
                >
                    {eachRow}
                </td>
            ))}
        </tr>
    ))

    return (
        <table className={`${isCenter} ${isMaxWidth}`}>
            <thead>
                <tr>{tableColumn}</tr>
            </thead>
            <tbody>{tableRow}</tbody>
        </table>
    )
}

export default Table
