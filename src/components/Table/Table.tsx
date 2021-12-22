import React from 'react'

export interface TableProps {
    columns: string[]
    rows: string[][]
}

const Table: React.FC<TableProps> = ({ columns, rows }): JSX.Element => {
    const tableColumn = columns.map((column) => <th>{column}</th>)
    const tableRow = rows.map((row) => (
        <tr>
            {row.map((r) => (
                <td>{r}</td>
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
