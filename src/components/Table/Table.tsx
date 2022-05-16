import React from 'react'

export interface TableProps {
    columns: string[]
    rows: string[][]
}

const Table: React.FC<TableProps> = ({ columns, rows }): JSX.Element => {
    const tableColumn = columns.map((column, index) => (
        <th key={index}>{column}</th>
    ))
    const tableRow = rows.map((row, index) => (
        <tr key={index}>
            {row.map((eachRow, indexRow) => (
                <td key={indexRow}>{eachRow}</td>
            ))}
        </tr>
    ))
    return (
        <table>
            <thead>
                <tr>{tableColumn}</tr>
            </thead>
            <tbody>{tableRow}</tbody>
        </table>
    )
}

export default Table
